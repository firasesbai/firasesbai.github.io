---
layout: post
title:  "Evolution of Analytical Data Architectures: From Data Warehouses to Lakehouses"
date:   2024-11-17
category: articles
tags: ["Data Engineering", "Data Architecture"]
author: Firas Esbai
description: "Overview of the evolution of analytical data architectures from data warehouses to the data lakes and data lakehouses"
comments: true
---

*In this article, we will go through a brief overview of the journey from the foundational data warehouses to the data lakes and up to the emerging concept of the data lakehouse.*

The evolution of data management has been driven by the growing complexity and scale of modern data needs. Organizations have sought different solutions over the years for handling diverse data types while optimizing for cost efficiency. 

This article explores the key transitions from one analytical architecture to the other and the challenges that shaped each phase.

*So let’s get started!*

{% include table-of-content.html %}

## Data Warehouses ##

The concept of data warehousing emerged in the late 1980s as a response to the growing need for businesses to make data-driven decisions. In fact, the proliferation of applications and the resulting disparate data across the organization resulted in a tedious manual process of querying and finding the right data with the correct version in order to avoid incorrect decisions.

As a result, the *Data Warehouse* was born. 

A data warehouse is a centralized repository for storing and managing large amounts of data from various sources.

Data Warehouse is not the same as a database but rather typically built on top of data copied from other databases and addresses several limitations of traditional operational databases:
- **Centralization**: They provided a single source of truth for enterprise-wide data.
- **Historical analysis**: Unlike operational systems focused on current data, warehouses allowed for trend analysis over time.
- **Complex querying**: Designed for analytical processing, they could handle complex queries more efficiently than transaction-oriented databases.
- **Data quality**: The ETL (Extract, Transform, Load) process helped in cleaning and standardizing data before loading it into the warehouse.

However, as data types evolved and volumes grew exponentially, data warehouses faced mainly the following challenges:
- **Scalability**: The increasing volume and velocity of data required expensive hardware and software to store and process data. The cost of these solutions made it difficult for organizations to store all their data.
- **Flexibility**: The rigid schema-on-write approach made it difficult to accommodate rapidly changing data requirements and the growth of semi-structured and unstructured data types.

These limitations set the stage for the next evolution in analytical data architecture: the **Data Lake**.

## Data Lakes ##

As mentioned, the concept of a data lake emerged as a response to the limitations of traditional data warehouses, which were costly, proprietary, and unable to handle the diverse and voluminous data generated by modern businesses.

Initially data lakes were almost exclusively implemented on ***Hadoop***.

Hadoop is an open-source platform that enables the storage and processing of large datasets across distributed computing environments. The original development of Hadoop goes back to 2003 when Google released two papers:
- ***Google File System (GFS)***: a way to store data across distributed machines
- ***Google MapReduce***: a programming model for distributed data processing on top of GFS

This research paved the way for Yahoo to bootstrap the Hadoop project. Later on, a shift towards modern data lakes appeared that leverages cloud platforms.

Cloud platforms offer elasticity and cost efficiency especially with the need for data lakes to support a wider range of users and use cases including machine learning.

While data lakes offer a lot of improvements over data warehouses including enabling organizations to scale their data storage in a more cost-effective way and flexibility with their schema on-read approach, it is also important to note that they also come with challenges.

Following are some of the key challenges associated with data lakes:
- **Data Reliability**: Data lakes can suffer from reliability issues due to broken data pipelines and the need for continuous reprocessing of missing or corrupted data. This often occurs when write operations fail partially, requiring data engineers to clean up and reprocess the data, which can be time-consuming and resource-intensive.
- **Data Quality**: Ensuring high data quality is a significant challenge in data lakes, as they store raw, unprocessed data that may be inconsistent or incomplete. Poor data quality can negatively impact downstream analytics and decision-making processes.
- **Data Governance**: Implementing effective data governance in data lakes is complex due to the variety and volume of data. Ensuring data integrity, security, and compliance with regulations such as GDPR and CCPA is challenging, especially when it comes to deleting or updating data.
- **Data Silos**: Without proper management, data lakes can become data swamps, where data is isolated and inaccessible, leading to the creation of data silos. This hinders collaboration and limits the organization's ability to extract valuable insights from the data.

In an attempt to address these challenges, a common approach organizations ended up deploying was the **Two-Tier Architecture**.

## Two-Tier Architecture: Data Warehouse + Data Lake ##

This architecture involves using a data lake as the first tier for data ingestion and storage, followed by a data warehouse as the second tier for structured analytics and reporting.

This leverages the cost effective storage and flexibility of the data lake to store the large volumes of raw data. In addition, through ETL processes, data will be moved from the lake to the data warehouse where security, compliance, and optimized performance for analytical queries are ensured.

This sounds like the perfect combination and the answer to all the previously mentioned challenges. In practice however this has several drawbacks. It results in higher costs because of the redundant data stored across both systems and the maintenance costs of both infrastructures. Also managing two separate systems can be quite complex for users.

Luckily the evolution did not stop here and the data lakehouse architecture emerged to the rescue which aims to combine the best features of both data warehouses and data lakes but into a single, unified architecture.

## Data Lakehouses ##

Data Lakehouses combine the best elements of both data lakes and data warehouses.

They are enabled by a new system design: implementing similar data structures, data management features and ACID transactions to those in a data warehouse directly on top of low cost cloud storage in open file formats of the data lake for flexibility and scale.

One of the key technology advancements that have enabled the data lakehouse architecture is a **table format**.

### What is a Table Format? ###

Table format is a metadata layer that allows tools to interact with data lake storage like a traditional database. Since data in a data lake is usually stretched across several files, the metadata layer contains information about which files are part of different table versions to offer rich management features like ACID-compliant transactions.

In addition, the metadata layers enable other features common in data lakehouses such as:
- **Schema evolution**: accommodate data that is changing over time by easily changing a table current’s schema
- **Partition evolution**: allows us to update the partition scheme of a table without having to rewrite all the previous data
- **Time Travel**: query a table at previous states

### Open Table Formats ###

Multiple projects have emerged as open source table format technologies to allow community development, drive standardization efforts and avoid vendor lock in. The term open table format gained prominence with the rise of the data lakehouse concept and become a way to collectively refer to these technologies.

Among these are Apache Iceberg, Apache Hudi, and Databricks Delta Lake.

The following table summarizes differences between these open table formats and how each has a different approach to supporting common features of data lakehouses.

|                         | Apache Iceberg | Apache Hudi | Delta Lake |
| ------------------------|:---------------|:------------|:-----------|
| **Origin**              | Originated at Netflix and then become part of the Apache Software Foundation | Originated at Uber and then become part of the Apache Software Foundation | Developed by Databricks and is now an independent open-source sub-project of the Linux Foundation Projects |
| **Metadata Layer**    | **Catalogue**: maintain a list of existing Iceberg tables and keeps a reference to a table's current metadata file known as `metadata.json` | **Timeline**: event log recording all table actions in an ordered manner, with events kept for a specified period. | **Transaction Log**: Log files similar to Git commits to capture files added and removed from the table since the last commit and Log checkpoints that summarize a group of log files so each individual log file doesn’t have to be read to construct the list of files in the dataset. |
| **Schema Evolution**    | In-place table evolution: schema updates are metadata changes and no data files need to be rewritten to perform the update. Iceberg supports the following schema evolution changes: {::nomarkdown}<ul><li><i>Add</i> -- add a new column to the table or to a nested struct</li><li><i>Drop</i> -- remove an existing column from the table or a nested struct</li><li><i>Rename</i> -- rename an existing column or field in a nested struct</li><li><i>Update</i> -- widen the type of a column, struct field, map key, map value, or list element</li><li><i>Reorder</i> -- change the order of columns or fields in a nested struct</li></ul>{:/}| Supports schema evolution on write out of the box and an experimental schema evolution on read feature. Schema evolution on write supports backward compatible scenarios such as adding a nullable field, promoting data types or handling missing columns. | Schema evolution is disabled by default. This is referred to as schema enforcement. You can enable it by:{::nomarkdown}<ul><li><i>mergeSchema</i>: applies for a single write to a single table </li><li><i>autoMerge</i>: activates schema evolution for writes to any table</li></ul> Delta lake supports the following types of schema changes: <ul><li>Adding new columns (at arbitrary positions)</li><li>Reordering existing columns</li><li>Renaming existing columns</li></ul> When attempting to write data with a new schema, Delta Lake compares the new schema with the existing schema stored in the transaction log. It checks if the schema change is compatible and allowed based on the current settings (e.g., if mergeSchema is enabled). If the change is allowed, Delta Lake creates a new transaction that includes:<ul><li>An "update metadata" action to modify the table's schema</li><li>"Add file" actions for the new data files</li></ul> If the transaction is successful, these changes are committed to the transaction log as a new entry. After the commit, the latest table state, including the new schema, is reflected in the next checkpoint file {:/}|
| **Partition Evolution** | Partition evolution is a metadata operation and does not eagerly rewrite files. When you evolve a partition spec, the old data written with an earlier spec remains unchanged. New data is written using the new spec in a new layout. Metadata for each of the partition versions is kept separately. | Hudi considers partition evolution as anti-pattern and avoids such scheme | Delta lake does not natively support partition evolution without rewriting the entire table |
| **Time Travel**         | Every change to an Iceberg table creates a new snapshot. Queries can access the table’s list of snapshots to return results from older versions. Queries can be executed using: {::nomarkdown}<ul><li>specific snapshot id</li><li>timestamp when a snapshot was the current at that time</li></ul>{:/} | The internal timeline log used by Hudi enables time travel queries support using a point in time syntax with timestamps | Delta lake will inspect the transaction log and figure out which files should be read for each given version. It also supports time travel by timestamp without having to figure out the exact version. |

<p style="text-align:center;">Table 1: Open Table Formats Comparison</p>

With this we have reached the end of this post, I hope you enjoyed it!

If you have any remarks or questions, please don’t hesitate and do drop a comment below.

*Stay tuned!* 

## Recap ##

In this article, we covered the advantages and challenges of different data analytics architecture and how these led to the current development of the data lakehouse concept. In addition, we compared internal structures of open table formats to better understand their importance in enabling the data lakehouse architecture.  

*Happy learning!*

## Resources ##

[https://www.databricks.com/blog/2021/05/19/evolution-to-the-data-lakehouse.html](https://www.databricks.com/blog/2021/05/19/evolution-to-the-data-lakehouse.html)

[https://www.dremio.com/blog/exploring-the-architecture-of-apache-iceberg-delta-lake-and-apache-hudi/](https://www.dremio.com/blog/exploring-the-architecture-of-apache-iceberg-delta-lake-and-apache-hudi/)

[https://www.dremio.com/blog/comparison-of-data-lake-table-formats-apache-iceberg-apache-hudi-and-delta-lake/](https://www.dremio.com/blog/comparison-of-data-lake-table-formats-apache-iceberg-apache-hudi-and-delta-lake/)

[https://www.databricks.com/glossary/data-lakehouse](https://www.databricks.com/glossary/data-lakehouse) 

[https://hudi.apache.org/docs/hudi_stack](https://hudi.apache.org/docs/hudi_stack) 

[https://iceberg.apache.org/concepts/catalog/](https://iceberg.apache.org/concepts/catalog/) 

[https://docs.delta.io/latest/delta-intro.html](https://docs.delta.io/latest/delta-intro.html) 

[https://delta.io/blog/2023-02-08-delta-lake-schema-evolution/](https://delta.io/blog/2023-02-08-delta-lake-schema-evolution/)