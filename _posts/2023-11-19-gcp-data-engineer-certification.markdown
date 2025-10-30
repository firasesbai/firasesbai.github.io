---
layout: post
title:  "Preparation Guide for Google Cloud Professional Data Engineer Certification"
date:   2023-11-19
category: articles
tags: ["Cloud Computing"]
author: Firas Esbai
description: "Preparation guide full of mind maps, notes and resources to help you prepare for google cloud professional data engineer certification"
comments: true
image: "/assets/images/articles/18_gcp_regions.png"
---

*This article contains a collection of notes, mind maps and resources to support you while preparing for the google cloud professional data engineer certification.*

***Disclaimer***: The new Professional Data Engineer exam will be live starting November 13. The new version reflects updates to Google Cloud’s data storing, data sharing, and data governance and has less emphasis on operationalizing machine learning models. 
That being said, I believe most of the content is still relevant and can serve as a guide to assist you as you begin your preparation. 

So brace yourselves, this is gonna be a rather long post filled with too many images extracted from different parts of the mind maps I used for my preparation in order to make them easy to read and follow. 

*So let’s get started!*

{% include table-of-content.html %}

<script src="/js/visualizations/mind-map.js"></script>
<script src="/js/visualizations/create-chart.js"></script>

## Google Cloud ##

Before we dive into the characteristics of Google Cloud services that will enable professional data engineers to design, build and operationalize data processing systems, let’s start with a 10,000-foot view on different topics that may be included in the exam presented in the below interactive mindmap:

<div id="mindmap-container"></div>
<script>
    createChart("mindmap-container", "/assets/data/2023-11-19-gcp-data-engineer-certification/google-cloud.json", "mindmap", {
      width: 800,
      height: 600,
      nodeColor: "#fefae0",
      nodeBorderColor: "#333",
      linkColor: "#aaa",
      linkWidth: 2,
      textFontSize: "14px",
      textColor: "#444"
    });
</script>
<figure>
   <figcaption>Figure 1: 10,000 View on Google Cloud Professional Data Engineer Exam Topics</figcaption>
</figure>

In the coming sections, we will cover each topic from the mindmap separately.  

### Infrastructure ###

Google Cloud services are available in different locations divided into **Regions**.
Regions contain multiple **Zones** where the resources are deployed and are isolated from one another so that failures in one zone do not affect other zones in a region. 
Most regions have at least three zones and can have more. All regions have at least two zones.

<figure>
  <img src="/assets/images/articles/18_gcp_regions.png" alt="world map of google cloud region locations">
  <figcaption>Figure 2: Google Cloud Regions - <a href="https://cloud.google.com/about/locations#lightbox-regions-map">Image Source</a></figcaption>
</figure>

Google data centers are connected with Google’s own high-speed network. Google is the only cloud provider that owns all the fiber connecting its data center together. A huge amount of the world’s internet traffic goes through Google’s network.

In addition to the data centers, there are points of presence all over the world. They allow access to Google’s network where all messages are encrypted, secure and very fast. 

In addition to the POPs, Google runs a global caching system or CDN that consists of hundreds of more nodes. You can easily take advantage of this CDN to cache your content, thus increasing your application performance and decreasing your networking cost.

### VPC Networks ###

<figure>
  <img src="/assets/images/articles/18_gcp_vpc_networks.png" alt="mindmap of topics related to VPC networks">
  <figcaption>Figure 3: Google Cloud Platform VPC Networks</figcaption>
</figure>

### Data Transfer Services ###

<figure>
  <img src="/assets/images/articles/18_gcp_data_transfer_services.png" alt="mindmap of topics related to data transfer services">
  <figcaption>Figure 4: Google Cloud Platform Data Transfer Services</figcaption>
</figure>

### Resource Manager ###

<figure>
  <img src="/assets/images/articles/18_gcp_resource_manager.png" alt="mindmap of topics related to resource manager">
  <figcaption>Figure 5: Google Cloud Platform Resource Manager</figcaption>
</figure>

### Security ###

<figure>
  <img src="/assets/images/articles/18_gcp_security.png" alt="mindmap of topics related to security">
  <figcaption>Figure 6: Security in Google Cloud Platform</figcaption>
</figure>

### Compute ###

<figure>
  <img src="/assets/images/articles/18_gcp_compute.png" alt="mindmap of topics related to compute">
  <figcaption>Figure 7: Google Cloud Platform Compute</figcaption>
</figure>

### Storage ### 

<figure>
  <img src="/assets/images/articles/18_gcp_storage.png" alt="mindmap of topics related to storage">
  <figcaption>Figure 8: Google Cloud Platform Storage</figcaption>
</figure>

### Ingestion and Processing ###

<figure>
  <img src="/assets/images/articles/18_gcp_ingestion_and_processing.png" alt="mindmap of topics related to ingestion and processing">
  <figcaption>Figure 9: Ingestion and Processing in Google Cloud Platform</figcaption>
</figure>

### Data Pipelines Management ###

<figure>
  <img src="/assets/images/articles/18_gcp_data_pipelines_management.png" alt="mindmap of topics related to data pipelines management">
  <figcaption>Figure 10: Data Pipelines Management in Google Cloud Platform Data</figcaption>
</figure>

### Data Governance ###

<figure>
  <img src="/assets/images/articles/18_gcp_data_governance.png" alt="mindmap of topics related to data governance">
  <figcaption>Figure 11: Data Governance in Google Cloud Platform</figcaption>
</figure>

### Analytics ###

<figure>
  <img src="/assets/images/articles/18_gcp_analytics.png" alt="mindmap of topics related to analytics">
  <figcaption>Figure 12: Analytics in Google Cloud Platform</figcaption>
</figure>

### Machine Learning ###

<figure>
  <img src="/assets/images/articles/18_gcp_machine_learning.png" alt="mindmap of topics related to machine learning">
  <figcaption>Figure 13: Machine Learning in Google Cloud Platform</figcaption>
</figure>

## Ingestion and Pocessing ##

As a professional data engineer, designing data processing systems requires building and operationalizing data pipelines by choosing the appropriate services to integrate new data sources and processing the data in batch or streaming fashion. In this section, we deep dive into services that will allow you to ingest data in real time and build data processing systems whether you are migrating on premises workloads or starting from scratch. 

<div id="mindmap-container-ingestion-and-processing"></div>
<script>
    createChart("mindmap-container-ingestion-and-processing", "/assets/data/2023-11-19-gcp-data-engineer-certification/ingestion-and-processing.json", "mindmap", {
      width: 800,
      height: 600,
      nodeColor: "#fefae0",
      nodeBorderColor: "#333",
      linkColor: "#aaa",
      linkWidth: 2,
      textFontSize: "14px",
      textColor: "#444"
    });
</script>
<figure>
   <figcaption>Figure 14: Ingestion and Processing Topics</figcaption>
</figure>


### Pub/Sub ###

<figure>
  <img src="/assets/images/articles/18_gcp_pub_sub.png" alt="mindmap of topics related to pub sub">
  <figcaption>Figure 15: Pub/Sub</figcaption>
</figure>

### Dataproc ###

<figure>
  <img src="/assets/images/articles/18_gcp_dataproc.png" alt="mindmap of topics related to dataproc part 1">
  <figcaption>Figure 16: Dataproc Part 1/2</figcaption>
</figure>

<figure>
  <img src="/assets/images/articles/18_gcp_dataproc_2.png" alt="mindmap of topics related to dataproc part 2">
  <figcaption>Figure 17: Dataproc Part 2/2</figcaption>
</figure>

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

<figure>
  <img src="/assets/images/articles/18_gcp_dataflow.png" alt="mindmap of topics related to dataproc part 1">
  <figcaption>Figure 18: Datflow Part 1/3</figcaption>
</figure>

<figure>
  <img src="/assets/images/articles/18_gcp_dataflow_2.png" alt="mindmap of topics related to dataproc part 2">
  <figcaption>Figure 19: Datflow Part 2/3</figcaption>
</figure>

<figure>
  <img src="/assets/images/articles/18_gcp_dataflow_3.png" alt="mindmap of topics related to dataproc part 3">
  <figcaption>Figure 20: Datflow Part 3/3</figcaption>
</figure>

## Storage ##

One of a data engineer's most important skills is choosing the right storage technology, which involves knowing how to use managed services and having a solid grasp of storage performance and pricing. To further optimize your data processing and cut expenses, consider data modeling, schema design, and data life cycle management. In this section we will delve into the many storage options provided by Google Cloud. 

<div id="mindmap-container-storage"></div>
<script>
    createChart("mindmap-container-storage", "/assets/data/2023-11-19-gcp-data-engineer-certification/storage.json", "mindmap", {
      width: 800,
      height: 600,
      nodeColor: "#fefae0",
      nodeBorderColor: "#333",
      linkColor: "#aaa",
      linkWidth: 2,
      textFontSize: "14px",
      textColor: "#444"
    });
</script>
<figure>
   <figcaption>Figure 21: Storage Topics</figcaption>
</figure>

### Cloud Storage ### 

<figure>
  <img src="/assets/images/articles/18_gcp_cloud_storage.png" alt="mindmap of topics related to cloud storage part 1">
  <figcaption>Figure 22: Cloud Storage Part 1/2</figcaption>
</figure>

<figure>
  <img src="/assets/images/articles/18_gcp_cloud_storage_2.png" alt="mindmap of topics related to cloud storage part 2">
  <figcaption>Figure 23: Cloud Storage Part 2/2</figcaption>
</figure>

Google Cloud provides 3 ways to manage the KEK encryption key:
- Google Managed Encryption Keys - GMEK: automatic encryption using Cloud KMS (Key Management Service)
- Customer Managed Encryption Keys - CMEK: you control the creation and existance of the KEK key in KMS 
- Customer Supplied Encryption Keys - CSEK: you provide the KEK key 

### Cloud SQL ### 

Cloud SQL is a fully managed relational database service for:
- MySQL
- PostgreSQL
- Microsoft SQL

<figure>
  <img src="/assets/images/articles/18_gcp_cloud_sql.png" alt="mindmap of topics related to cloud slq">
  <figcaption>Figure 24: Cloud SQL</figcaption>
</figure>

### Query Insights ### 

<figure>
  <img src="/assets/images/articles/18_gcp_insights.png" alt="mindmap of topics related to query insights">
  <figcaption>Figure 25: Query Insights</figcaption>
</figure>

### Cloud Spanner ### 

<figure>
  <img src="/assets/images/articles/18_gcp_cloud_spanner.png" alt="mindmap of topics related to cloud spanner">
  <figcaption>Figure 26: Cloud Spanner</figcaption>
</figure>

### Firestore ### 

<figure>
  <img src="/assets/images/articles/18_gcp_firestore.png" alt="mindmap of topics related to firestore">
  <figcaption>Figure 27: Firestore</figcaption>
</figure>

### Datastore ### 

<figure>
  <img src="/assets/images/articles/18_gcp_datastore.png" alt="mindmap of topics related to datastore">
  <figcaption>Figure 28: Datastore</figcaption>
</figure>

### Memorystore ### 

<figure>
  <img src="/assets/images/articles/18_gcp_memorystore.png" alt="mindmap of topics related to memorystore">
  <figcaption>Figure 29: Memorystore</figcaption>
</figure>

### Bigtable ### 

Bigtable is a fully managed NoSQL database service. It is suitable for:
- Storing > 1TB
- High Throughput 
- Low latency random data access 

<figure>
  <img src="/assets/images/articles/18_gcp_bigtable.png" alt="mindmap of topics related to bigtable">
  <figcaption>Figure 30: Bigtable</figcaption>
</figure>

## BigQuery ##

<div id="mindmap-container-bigquery"></div>
<script>
    createChart("mindmap-container-bigquery", "/assets/data/2023-11-19-gcp-data-engineer-certification/bigquery.json", "mindmap", {
      width: 800,
      height: 600,
      nodeColor: "#fefae0",
      nodeBorderColor: "#333",
      linkColor: "#aaa",
      linkWidth: 2,
      textFontSize: "14px",
      textColor: "#444"
    });
</script>
<figure>
   <figcaption>Figure 31: BigQuery Topics</figcaption>
</figure>

The last section is solely dedicated to BigQuery. BigQuery is a serverless and cost-effective data warehouse. It is deeply integrated with the GCP’s analytical and data processing offering, allowing customers to build an enterprise ready cloud native data warehouse. BigQuery is part of Google Cloud’s comprehensive data analytics platform that covers the analytics value chain from Ingest, process and store to advanced analytics and collaboration.

<figure>
  <img src="/assets/images/articles/18_gcp_bigquery.png" alt="mindmap of topics related to bigquery part 1">
  <figcaption>Figure 32: BigQuery Part 1/12</figcaption>
</figure>

<figure>
  <img src="/assets/images/articles/18_gcp_bigquery_2.png" alt="mindmap of topics related to bigquery part 2">
  <figcaption>Figure 33: BigQuery Part 2/12</figcaption>
</figure>

<figure>
  <img src="/assets/images/articles/18_gcp_bigquery_3.png" alt="mindmap of topics related to bigquery part 3">
  <figcaption>Figure 34: BigQuery Part 3/12</figcaption>
</figure>

<figure>
  <img src="/assets/images/articles/18_gcp_bigquery_4.png" alt="mindmap of topics related to bigquery part 4">
  <figcaption>Figure 35: BigQuery Part 4/12</figcaption>
</figure>

<figure>
  <img src="/assets/images/articles/18_gcp_bigquery_5.png" alt="mindmap of topics related to bigquery part 5">
  <figcaption>Figure 36: BigQuery Part 5/12</figcaption>
</figure>

<figure>
  <img src="/assets/images/articles/18_gcp_bigquery_6.png" alt="mindmap of topics related to bigquery part 6">
  <figcaption>Figure 37: BigQuery Part 6/12</figcaption>
</figure>

<figure>
  <img src="/assets/images/articles/18_gcp_bigquery_7.png" alt="mindmap of topics related to bigquery part 7">
  <figcaption>Figure 38: BigQuery Part 7/12</figcaption>
</figure>

<figure>
  <img src="/assets/images/articles/18_gcp_bigquery_8.png" alt="mindmap of topics related to bigquery part 8">
  <figcaption>Figure 39: BigQuery Part 8/12</figcaption>
</figure>

<figure>
  <img src="/assets/images/articles/18_gcp_bigquery_9.png" alt="mindmap of topics related to bigquery part 9">
  <figcaption>Figure 40: BigQuery Part 9/12</figcaption>
</figure>

<figure>
  <img src="/assets/images/articles/18_gcp_bigquery_10.png" alt="mindmap of topics related to bigquery part 10">
  <figcaption>Figure 41: BigQuery Part 10/12</figcaption>
</figure>

<figure>
  <img src="/assets/images/articles/18_gcp_bigquery_11.png" alt="mindmap of topics related to bigquery part 11">
  <figcaption>Figure 42: BigQuery Part 11/12</figcaption>
</figure>

<figure>
  <img src="/assets/images/articles/18_gcp_bigquery_12.png" alt="mindmap of topics related to bigquery part 12">
  <figcaption>Figure 43: BigQuery Part 12/12</figcaption>
</figure>

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
