---
layout: post
title:  "Data Engineering Design Patterns"
date:   2025-11-13
category: articles
tags: ["Data Engineering", "Data Architecture"]
author: Firas Esbai
description: "Explore essential data engineering design patterns including WAP, CDC, DLQ and cumulative aggregate tables."
comments: true
image: "/assets/images/articles/28_wap_iceberg_audit_branch.png"
pinned:
---

*In this article, we will look at common data engineering design patterns.*

Design patterns are standard solutions to common problems. They represent best practices and templates that can be reused in multiple situations. In this article, we will explore four common patterns that can be leveraged to ensure reliability, performance and observability in data pipelines. 

*So let’s get started!*

{% include table-of-content.html %}

## Write-Audit-Publish (WAP) ##

Weather it is a schema evolution in the upstream data or third party APIs or incorrect join clause in your pipeline, preventing the resulting bad data and ensuring data integrity when writing to production systems requires rigorous validation. 

The WAP (Write-Audit-Publish) pattern is a critical data strategy that prevents such data quality issues. This method involves writing data to a staging table, auditing it for quality, and only publishing it to production if it passes checks. This ensures that the end users or consumers of this data can trust it. 

{% mermaid %}
graph TD
    A[New Data Arrives] --> B[Write to Staging Table];
    
    B --> C[Perform Data Quality Checks];
    
    C -->|Pass| D[Write Data to Production Table];
    
    C -->|Fail| F[Fire Alert];
    F --> G[Manually Troubleshoot DQ Issue];


    style A fill:#e0f7fa,stroke:#00bcd4
    style D fill:#c8e6c9,stroke:#4caf50
    style F fill:#ffe0b2,stroke:#ff9800
{% endmermaid %}
<p style="text-align:center;">Figure 1: Write Audit Publish Workflow</p>


In order to understand how the WAP pattern can be implemented we will use a key feature of the open table format Apache Iceberg: [Branches](https://iceberg.apache.org/docs/1.6.1/branching/).  
For more information on Apache Iceberg and how it compares to the other well known formats, you can check [this article](https://www.firasesbai.com/articles/2024/11/17/evolution-analytical-data-architectures.html).  

The metadata of an Iceberg table stores a history of snapshots. These snapshots are changes applied to the table and are the basis for reader isolation and time travel. Iceberg branches are another named reference to a snapshot of a table. They can be used for handling GDPR requirements and retaining important historical snapshots for auditing or be part of an ETL pipeline enabling validation of new incoming data. 

Implementing the 3 steps WAP pattern using Iceberg branches would result in the following: 
1. **Write**: switch branch from ***main*** to an ***audit*** branch and commits updates there. Data is not yet accessible to downstream users who can only access main branch. 
2. **Audit**: Run data quality checks on the audit branch. 
3. **Publish**: The ***main*** branch can be `fastForward` to the head of the audit ***branch*** to update the main table state. 

{% include image.html 
   src="/assets/images/articles/28_wap_iceberg_audit_branch.png" 
   alt="example diagram of audit branch" 
   caption='Figure 2: Example Diagram of Audit Branch - <a href="https://iceberg.apache.org/docs/1.6.1/branching/#audit-branch">Image Source</a>' 
%}

Using the WAP pattern, downstream pipelines or dashboards can intuitively depend on the production table directly. However, the main challenges is the introduced delays and increased latency by the multistep process which might not be idea for near real time use cases.

## Change Data Capture (CDC) ##

Change Data Capture (CDC) is a data integration pattern that captures all changes in a source database; creates, updates and deletes and makes them available for downstream systems. 

Organizations typically have a variety of operational data spread across different systems and applications needed for running the business. The purpose of CDC is to keep this data synchronized by capturing changes from source databases and moving it to your target data warehouse or data lake. 

In contrast to batch processing, where a pipeline is scheduled periodically to replicate data from one system to another, CDC is considered more efficient. It eliminates the bulk load during specified windows and enables an incremental loading making the data available in near real time. In addition, it reduces the impact on the source database 

CDC is typically implemented using two main approaches: **push** and **pull**. 
In the push approach, the source database pushes the updates to the downstream systems. This has the advantage that the target systems have the latest data in near real time. In the pull approach on the other hand, the source database only logs the changes and it is the responsibility of the target systems to continuously poll it. This results in a delay of the data availability. In both approaches, if the source or target systems are not available for some reason, the data is lost. To overcome this, a messaging system can be used in between to buffer these changes. 

There are 3 common methods for how changes in data are detected using CDC: 
- Log-based
- Timestamp-based
- Trigger-based 

### Log-based CDC ###

Transactional databases have internal log files where they record all changes committed against the database. These log files are primarily used for backup and disaster recovery purposes. By reading from these transaction logs we can propagate the changes to target systems without adding computational overhead. However, since each vendor's logs have a different format, this method can't be easily reusable.  

### Trigger-based CDC ###

Another feature that is widely supported by databases is trigger functions. These are stored procedures that are automatically executed once a specific event occurs on a table. We need to create per table one trigger for each operation and store the data changes in a separate table. This adds additional write operations and might impact the performance of the database. Also managing a large number of triggers can become challenging. 

### Timestamp-based CDC ###

This method requires changes to the database schema to include a timestamp column to record when was an entry last updated. Changes are captured by selecting items with a timestamp newer than the previous check timestamp. Being probably the easiest to implement, it fails at capturing delete operations and could add an additional overhead to the database. 

## Dead-Letter Queue (DLQ) ##

In streaming environments, a dead-letter queue is a special message queue used to store messages that were not successfully processed by the primary system. These include corrupted messages due to network or system failure or ones that failed the data quality checks.  

By having a DLQ in place, we provide a mechanism for analyzing and identifying common patterns of errors enabling better observability in order to improve the reliability of the system. In addition, we can reduce the data loss by reprocessing messages that couldn't be delivered from the DLQ.  

## Cumulative Aggregate Table ##

The cumulative aggregate table design pattern is very useful when we want to solve the performance issue that comes with calculating aggregates over a large rolling time window. 

For example, if we want to calculate the number of active users for the last 30-days window, the straightforward solution would be to write a query that scans *30 days of raw event data for **all users** every single day*. This query is slow and expensive especially if run regularly. 

This design pattern proposes a solution to overcome this. The idea is to create a new table that stores the pre-computed state often using arrays or structs. 
Following the active users example, our table called `user_activity_cumulative` will have an array column that is updated daily by performing a `FULL OUTER JOIN` between today's active users and yesterday's cumulative table. 

| **user_id** | **date**       | **activity_array_last_30_days** |
| ----------- | -------------- | ------------------------------- |
| 123         | 2025-11-12     | `[1, 0, 1, 0, ..., 0]`          |
| 456         | 2025-11-12     | `[0, 1, 1, 0, ..., 0]`          |
| **123**     | **2025-11-13** | **`[1, 1, 0, 1, ..., 0]`**      |
| **456**     | **2025-11-13** | **`[0, 0, 1, 1, ..., 0]`**      |
| **789**     | **2025-11-13** | **`[1, 0, 0, 0, ..., 0]`**      |

<p style="text-align:center;">Table 1: Example of user_activity_cumulative Table</p>

Using this new table like shown above, finding out the 30-day active users for November 30th can be done by running the following query:

   {% highlight ruby %}
   {% raw %}   
   SELECT
     COUNT(user_id)
   FROM user_activity_cumulative
   WHERE
     date = '2025-11-13'
     -- Sum the 30 elements in the array.
     -- If the sum is > 0, they were active at least once.
    AND array_sum(activity_array_last_30_days) > 0
   {% endraw %}
   {% endhighlight %}

For more details and concrete hands on example, you can check [this repository](https://github.com/DataExpert-io/cumulative-table-design).

With this we have reached the end of this post, I hope you enjoyed it!

If you have any remarks or questions, please don’t hesitate and do drop a comment below.

*Stay tuned!* 

## Recap ##

*Happy learning!*

## Resources ##

[https://www.confluent.io/learn/change-data-capture/#why-change-data-capture](https://www.confluent.io/learn/change-data-capture/#why-change-data-capture)

[https://aws.amazon.com/blogs/big-data/build-write-audit-publish-pattern-with-apache-iceberg-branching-and-aws-glue-data-quality/](https://aws.amazon.com/blogs/big-data/build-write-audit-publish-pattern-with-apache-iceberg-branching-and-aws-glue-data-quality/)

[https://lakefs.io/blog/data-engineering-patterns-write-audit-publish/](https://lakefs.io/blog/data-engineering-patterns-write-audit-publish/)
