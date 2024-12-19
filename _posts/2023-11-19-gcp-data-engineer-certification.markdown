---
layout: post
title:  "Preparation Guide for Google Cloud Professional Data Engineer Certification"
date:   2023-11-19
category: articles
tags: ["Cloud Computing"]
author: Firas Esbai
description: "Preparation guide full of mind maps, notes and resources to help you prepare for google cloud professional data engineer certification."
comments: true
---

*This article contains a collection of notes, mind maps and resources to support you while preparing for the google cloud professional data engineer certification.*

***Disclaimer***: The new Professional Data Engineer exam will be live starting November 13. The new version reflects updates to Google Cloud’s data storing, data sharing, and data governance and has less emphasis on operationalizing machine learning models. 
That being said, I believe most of the content is still relevant and can serve as a guide to assist you as you begin your preparation. 

So brace yourselves, this is gonna be a rather long post filled with too many images extracted from different parts of the mind maps I used for my preparation in order to make them easy to read and follow. 

*So let’s get started!*

{% include table-of-content.html %}

## Google Cloud ##

Before we dive into the characteristics of Google Cloud services that will enable professional data engineers to design, build and operationalize data processing systems, let’s start with a 10,000-foot view on different topics that may be included in the exam. 

### Infrastructure ###

Google Cloud services are available in different locations divided into **Regions**.
Regions contain multiple **Zones** where the resources are deployed and are isolated from one another so that failures in one zone do not affect other zones in a region. 
Most regions have at least three zones and can have more. All regions have at least two zones.

![Google Cloud Regions](/assets/images/articles/18_gcp_regions.png)<br>
*Figure 1: Google Cloud Regions - [Image Source](https://cloud.google.com/about/locations#lightbox-regions-map)*

Google data centers are connected with Google’s own high-speed network. Google is the only cloud provider that owns all the fiber connecting its data center together. A huge amount of the world’s internet traffic goes through Google’s network.

In addition to the data centers, there are points of presence all over the world. They allow access to Google’s network where all messages are encrypted, secure and very fast. 

In addition to the POPs, Google runs a global caching system or CDN that consists of hundreds of more nodes. You can easily take advantage of this CDN to cache your content, thus increasing your application performance and decreasing your networking cost.

### VPC Networks ###

![Google Cloud Platform VPC Networks](/assets/images/articles/18_gcp_vpc_networks.png)<br>
*Figure 2: Google Cloud Platform VPC Networks*

### Data Transfer Services ###

![Google Cloud Platform Data Transfer Services](/assets/images/articles/18_gcp_data_transfer_services.png)<br>
*Figure 3: Google Cloud Platform Data Transfer Services*

### Resource Manager ###

![Google Cloud Platform Resource Manager](/assets/images/articles/18_gcp_resource_manager.png)<br>
*Figure 4: Google Cloud Platform Resource Manager*

### Security ###

![Security in Google Cloud Platform](/assets/images/articles/18_gcp_security.png)<br>
*Figure 5: Security in Google Cloud Platform*

### Compute ###

![Google Cloud Platform Compute](/assets/images/articles/18_gcp_compute.png)<br>
*Figure 6: Google Cloud Platform Compute*

### Storage ### 

![Google Cloud Platform Storage](/assets/images/articles/18_gcp_storage.png)<br>
*Figure 7: Google Cloud Platform Storage*

### Ingestion and Processing ###

![Ingestion and Processing in Google Cloud Platform](/assets/images/articles/18_gcp_ingestion_and_processing.png)<br>
*Figure 8: Ingestion and Processing in Google Cloud Platform*

### Data Pipelines Management ###

![Data Pipelines Management in Google Cloud Platform Data](/assets/images/articles/18_gcp_data_pipelines_management.png)<br>
*Figure 9: Data Pipelines Management in Google Cloud Platform Data*

### Data Governance ###

![Data Governance in Google Cloud Platform](/assets/images/articles/18_gcp_data_governance.png)<br>
*Figure 10: Data Governance in Google Cloud Platform*

### Analytics ###

![Analytics in Google Cloud Platform](/assets/images/articles/18_gcp_analytics.png)<br>
*Figure 11: Analytics in Google Cloud Platform*

### Machine Learning ###

![Machine Learning in Google Cloud Platform](/assets/images/articles/18_gcp_machine_learning.png)<br>
*Figure 12: Machine Learning in Google Cloud Platform*

## Ingestion and Pocessing ##

As a professional data engineer, designing data processing systems requires building and operationalizing data pipelines by choosing the appropriate services to integrate new data sources and processing the data in batch or streaming fashion. In this section, we deep dive into services that will allow you to ingest data in real time and build data processing systems whether you are migrating on premises workloads or starting from scratch. 

### Pub/Sub ###

![Pub/Sub](/assets/images/articles/18_gcp_pub_sub.png)<br>
*Figure 13: Pub/Sub*

### Dataproc ###

![Dataproc 1/2](/assets/images/articles/18_gcp_dataproc.png)<br>
*Figure 14: Dataproc 1/2*

![Dataproc 2/2](/assets/images/articles/18_gcp_dataproc_2.png)<br>
*Figure 15: Dataproc 2/2*


### Dataflow ###

It allows you to execute your Apache Beans pipelines on Google Cloud. 
- A managed service that provides the resources necessary to create pipelines
   - Defines *HOW* to run the pipeline:
      - Optimizes the graph by fusing transforms for example for best execution path 
      - Breaks jobs into units of work 
      - Schedules them to various workers
      - Optimization is always ongoing
         - Units of work are continually rebalanced mid job which provides fault tolerance
         - autoscaling mid job 
      - Resources --both compute and storage-- are deployed on demand and on a per job basis
- The Apache Beam SDK, which provides the programming environment to make the creation of streaming and batch pipelines easier 
   - Defines *WHAT* has to be done

![Dataflow 1/3](/assets/images/articles/18_gcp_dataflow.png)<br>
*Figure 16: Dataflow 1/3*

![Dataflow 2/3](/assets/images/articles/18_gcp_dataflow_2.png)<br>
*Figure 17: Dataflow 2/3*

![Dataflow 3/3](/assets/images/articles/18_gcp_dataflow_3.png)<br>
*Figure 18: Dataflow 3/3*

## Storage ##

One of a data engineer's most important skills is choosing the right storage technology, which involves knowing how to use managed services and having a solid grasp of storage performance and pricing. To further optimize your data processing and cut expenses, consider data modeling, schema design, and data life cycle management. In this section we will delve into the many storage options provided by Google Cloud. 

### Cloud Storage ### 

![Cloud Storage 1/2](/assets/images/articles/18_gcp_cloud_storage.png)<br>
*Figure 19: Cloud Storage 1/2*

![Cloud Storage 2/2](/assets/images/articles/18_gcp_cloud_storage_2.png)<br>
*Figure 20: Cloud Storage 2/2*

Google Cloud provides 3 ways to manage the KEK encryption key:
- Google Managed Encryption Keys - GMEK: automatic encryption using Cloud KMS (Key Management Service)
- Customer Managed Encryption Keys - CMEK: you control the creation and existance of the KEK key in KMS 
- Customer Supplied Encryption Keys - CSEK: you provide the KEK key 

### Cloud SQL ### 

Cloud SQL is a fully managed relational database service for:
- MySQL
- PostgreSQL
- Microsoft SQL

![Cloud SQL](/assets/images/articles/18_gcp_cloud_sql.png)<br>
*Figure 21: Cloud SQL*

### Query Insights ### 

![Query Insights](/assets/images/articles/18_gcp_insights.png)<br>
*Figure 22: Query Insights*

### Cloud Spanner ### 

![Cloud Spanner](/assets/images/articles/18_gcp_cloud_spanner.png)<br>
*Figure 23: Cloud Spanner*

### Firestore ### 

![Firestore](/assets/images/articles/18_gcp_firestore.png)<br>
*Figure 24: Firestore*

### Datastore ### 

![Datastore](/assets/images/articles/18_gcp_datastore.png)<br>
*Figure 25: Datastore*

### Memorystore ### 

![Memorystore](/assets/images/articles/18_gcp_memorystore.png)<br>
*Figure 26: Memorystore*

### Bigtable ### 

Bigtable is a fully managed NoSQL database service. It is suitable for:
- Storing > 1TB
- High Throughput 
- Low latency random data access 

![Bigtable](/assets/images/articles/18_gcp_bigtable.png)<br>
*Figure 27: Bigtable*

## BigQuery ##

The last section is solely dedicated to BigQuery. BigQuery is a serverless and cost-effective data warehouse. It is deeply integrated with the GCP’s analytical and data processing offering, allowing customers to build an enterprise ready cloud native data warehouse. BigQuery is part of Google Cloud’s comprehensive data analytics platform that covers the analytics value chain from Ingest, process and store to advanced analytics and collaboration.

![BigQuery 1/12](/assets/images/articles/18_gcp_bigquery.png)<br>
*Figure 28: BigQuery 1/12*

![BigQuery 2/12](/assets/images/articles/18_gcp_bigquery_2.png)<br>
*Figure 29: BigQuery 2/12*

![BigQuery 3/12](/assets/images/articles/18_gcp_bigquery_3.png)<br>
*Figure 30: BigQuery 3/12*

![BigQuery 4/12](/assets/images/articles/18_gcp_bigquery_4.png)<br>
*Figure 31: BigQuery 4/12*

![BigQuery 5/12](/assets/images/articles/18_gcp_bigquery_5.png)<br>
*Figure 32: BigQuery 5/12*

![BigQuery 6/12](/assets/images/articles/18_gcp_bigquery_6.png)<br>
*Figure 33: BigQuery 6/12*

![BigQuery 7/12](/assets/images/articles/18_gcp_bigquery_7.png)<br>
*Figure 34: BigQuery 7/12*

![BigQuery 8/12](/assets/images/articles/18_gcp_bigquery_8.png)<br>
*Figure 35: BigQuery 8/12*

![BigQuery 9/12](/assets/images/articles/18_gcp_bigquery_9.png)<br>
*Figure 36: BigQuery 9/12*

![BigQuery 10/12](/assets/images/articles/18_gcp_bigquery_10.png)<br>
*Figure 37: BigQuery 10/12*

![BigQuery 11/12](/assets/images/articles/18_gcp_bigquery_11.png)<br>
*Figure 38: BigQuery 11/12*

![BigQuery 12/12](/assets/images/articles/18_gcp_bigquery_12.png)<br>
*Figure 39: BigQuery 12/12*


## Resources ##

Developer Cheat Sheet:

- [https://googlecloudcheatsheet.withgoogle.com/](https://googlecloudcheatsheet.withgoogle.com/)

The Cloud Girl:

- [https://github.com/priyankavergadia/GCPSketchnote](https://github.com/priyankavergadia/GCPSketchnote) 

Google Cloud Product list:

- [https://cloud.google.com/terms/services](https://cloud.google.com/terms/services) 

21 products explained under 2 minutes:

- [https://cloud.google.com/blog/topics/inside-google-cloud/21-google-cloud-tools-each-explained-under-2-minutes](https://cloud.google.com/blog/topics/inside-google-cloud/21-google-cloud-tools-each-explained-under-2-minutes) 

GCP Data Engineer Study Guide: 

- [https://github.com/xg1990/GCP-Data-Engineer-Study-Guide/blob/master/GCP%20Data%20Engineer.pdf](https://github.com/xg1990/GCP-Data-Engineer-Study-Guide/blob/master/GCP%20Data%20Engineer.pdf) 

Data Engineering Cheat Sheet on GCP:

- [https://github.com/ml874/Data-Engineering-on-GCP-Cheatsheet/blob/master/data_engineering_on_GCP.pdf](https://github.com/ml874/Data-Engineering-on-GCP-Cheatsheet/blob/master/data_engineering_on_GCP.pdf) 

Schema design best practices for Bigtable: 

- [https://cloud.google.com/bigtable/docs/schema-design](https://cloud.google.com/bigtable/docs/schema-design) 

Optimize query computation for BigQuery: 

- [https://cloud.google.com/bigquery/docs/best-practices-performance-compute](https://cloud.google.com/bigquery/docs/best-practices-performance-compute) 


With this we have reached the end of this post, I hope you enjoyed it!

If you have any remarks or questions, please don’t hesitate and do drop a comment below.
