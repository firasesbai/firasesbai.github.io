---
layout: post
title:  "Data Encoding and Formats"
date:   2025-05-18
category: articles
tags: ["Data Engineering"]
author: Firas Esbai
description: "Overview of data formats, their characteristics and how to choose the right format for better performance"
comments: true
---

*In this article, we will explore the importance of data encoding and how to choose the right data format, weather it is simple CSVs or binary formats like Avro and Parquet, in order to achieve better performance, cost, and evolvability.*

Data Serialization and Data Formats go hand in hand; one converts data objects to a shareable or storable structure and the other describes how this new structure is stored or transmitted and retrieved. The choice of _how_ we serialize and the _format_ we use impacts performance, storage costs and interoperability. Getting it right is key to building efficient, scalable, and maintainable data pipelines.

*So let’s get started!*

{% include table-of-content.html %}

## Data Serialization ##

The seemingly simple act of storing data or sending it across a network involves a fundamental process: **data serialization**. This is the conversion of data objects, residing in potentially complex in-memory structures (like objects, lists, trees in our code), into a byte stream suitable for persistent storage or network transmission. Once data arrives at its destination, the reverse process, **deserialization** (or parsing/decoding), reconstructs the original object structures from the byte sequence. 

For example, in the context of databases, when a process is writing data to the database, the data is initially encoded into a sequence of bytes and then stored. Later when another process tries to read data from the database, it needs to decode it first. Similarly the communication between web services through REST APIs involves encoding the request by the client before sending it. Once the server receives it, it decodes the request, process it and then encode the response to be sent back to the client. The latter makes the last deserialization of this exchange. 

Data serialization is ideal for storing data efficiently as serialized data takes up less storage space. This results in faster data transfer and reduced latency as data can be transmitted quickly and efficiently over networks. In addition, it enhances flexibility and interoperability making data exchange seamless across different applications and networks. 

With this understanding and examples of the data serialization process and its application, in the coming sections we will look into the types and characteristics of common data formats.  

## Data Formats Characteristics  ##

Before going through each data format separately, let's start by understanding general characteristics we will be using when evaluating how they behave, what they are good for and where they might fall short. 

- **Human Readability**: Can humans easily open and understand the data with a text editor? 
- **Compressibility:** How well does the format compress and how much space does it take? This is important for saving storage and network bandwidth. 
- **Speed and Performance**: How quickly can the format be read/written? 
- **Splittable:** Can a single large file be processed in parallel chunks? This is essential for distributed data processing frameworks such as Apache Spark. 
- **Schema Support**: Does the format have a defined **schema** (structure definition)? Schema allows for validation and consistent data interpretation.
- **Self-describing:** Does the file embed its own schema or metadata about its structure? This simplifies reading without needing external schema definitions.
- **Schema Evolution:** How well does the format handle changes (adding/removing fields) over time while maintaining compatibility?
- **Interoperability**: Can it be easily used across languages, tools, platforms?


## Standardized Textual Formats ##

Many programming languages provide built-in mechanisms for encoding in-memory objects into byte sequences like Python's `pickle` module. While these are easy to use, the encoding is tightly coupled to the specific language used making it very difficult or impossible to read the data in a different programming languages. In addition, the processes of encoding and decoding are usually CPU intensive and result in a sizeable encoded data. Not to mention that they are open to security vulnerabilities when malicious byte sequence is decoded that causes the application to instantiate unintended classes, potentially leading to arbitrary code execution.

To overcome the limitations of language-specific formats, standardized encodings readable by multiple languages are widely used. Common examples include JSON, XML, and CSV due to their human-readability and simplicity, especially for data exchange.

### XML ###
XML (eXtensible Markup Language) is a nested markup format. Its hierarchical structure makes it splittable by elements, though it is often criticized for verbosity which reduces compression efficiency. It’s still widely used in enterprise environments despite declining popularity due to complexity.    

### JSON ###
JSON (JavaScript Object Notation) gained popularity due to its relative simplicity in comparison to XML and native support in web browsers. JSON offers a simpler, row-like nested structure with arrays and objects, making it both compressible and splittable. It's self-describing (with field names), making it easier for data exchange, though schema evolution isn’t natively supported. JSON is common in web APIs, configs, and moderately complex datasets.

### CSV ###
CSV (Comma Separated Values) is a flat, row-based format that’s highly compressible and trivially splittable by lines. It lacks self-description and schema enforcement, making it lightweight but error-prone. It’s ideal for small, tabular data where structure is known or managed externally.

Despite being readable, these textual formats share some key limitations. For instance, in both XML and CSV there is no clear distinction between a number and a string composed of digits. JSON on the other hand does separate numbers from strings but doesn't specify numeric types or their precision. In addition, all three formats lack native support for binary data (sequences of raw bytes like images) and this usually involves encoding it into text using schemes like Base64, which increases the data size.

## Binary Data Formats ##

There has been a couple of projects that converted JSON and XML into a binary representation and tried to solve some of the problems we mentioned before but the main drawback still the missing schema. For small data sets, the gains might be negligible but for large datasets or performance-critical applications, choosing the appropriate binary format offers significant advantages in size and speed. Therefore, in this section we will look into the characteristics of 3 common binary formats: Apache Avro, Apache Parquet and Apache ORC. 

### Apache Avro ###

Apache Avro is a data serialization system providing rich data structures and compact binary data format. It started in 2009 as a sub project of Hadoop as a result of [Thrift](https://thrift.apache.org/) not being a good fit for Hadoop's use case. 
A key feature of Apache Avro is its robust support for schema evolution. It uses JSON-based schema definition. The schema is typically **embedded within the data file** which permits full processing of the data without code generation and less type information encoded within the data resulting in smaller serialization size. 
Crucially, Avro distinguishes between the **writer's schema** (used during encoding) and the **reader's schema** (used during decoding). They don't need to be identical, only _compatible_, enabling robust **schema evolution**.
Apache Avro is often used in write-heavy batch ingestion, streaming data messages like Apache Kafka and scenarios needing strong schema validation and evolution guarantees.

### Apache Parquet ###

**Apache Parquet** is a columnar storage format optimized for analytical workloads, developed jointly by Cloudera and Twitter in 2013 as part of the Hadoop ecosystem.
Parquet stores data in a **column-oriented** layout, which means data from the same column are stored together. This design allows for **highly efficient scans** when querying subsets of columns and enables advanced **compression and encoding techniques** tailored per column.
Parquet supports schema evolution through metadata that tracks schema changes over time. Parquet files embed the schema, allowing readers to reconcile differences between older and newer versions using a **merge** strategy.
Apache Parquet is often used in data lakes, data warehouses and large-scale analytics engines like Spark, Presto, Trino, etc. 

### Apache ORC (Optimized Row Columnar) ###

**Apache ORC** (Optimized Row Columnar) is another high-performance columnar format, created in 2013 by Hortonworks to optimize Hive workloads. Like Parquet, ORC organizes data column-wise but adds features tailored for Hive, such as ACID transaction support. It also stores extensive metadata, such as min/max values and row-level statistics, enabling **aggressive query optimizations**. ORC files store schema information and statistics in footers, enabling efficient reads.
While similar to Parquet in structure, ORC shines in Hive-centric workflows and **write-once, read-many** batch processing jobs. Its design emphasizes **fast scan performance** and **compression ratios**, especially when working with large, structured datasets.

## Choosing the Right Format ##

Choosing a format isn't just about static storage. Systems evolve and so does the underlying data. There is no single best format and the choice will depend on some tradeoffs even though in practice pipelines end up using multiple formats for different purposes. 

The following table compares the key characteristics worth having in mind when choosing among the data formats we discussed:  

<div style="overflow-x: auto;">
  {{ "
  | **Characteristic**                  | **XML**     | **JSON**     | **CSV**     | **Avro**     | **Parquet**    |**ORC**     |
  | ----------------------------------- | :---------- | :----------- | :---------- | :----------- | :------------- | :--------- |
  | **Human Readability**               | Yes         | Yes          | Yes (simple)| No           | No             | No         |
  | **Compressibility**                 | Moderate (verbose)| Moderate| Low        | High (binary + schema)| Very High (columnar)| Very High (columnar)|
  | **Speed & Performance(Read/Write)** | Slow (verbose parsing)          | Decent (for small data)     | Fast (simple format)    | Fast                           | Very Fast (columnar)           | Very Fast (columnar)           |
  | **Splittable**                      | No                              | Partial (depends on parser) | Yes (if line delimited) | Yes                            | Yes                            | Yes                            |
  | **Schema Support**                  | Optional (XSD, external)        | Optional                    | No                      | Yes                            | Yes                            | Yes                            |
  | **Schema Evolution**                | Poor                            | Poor                        | None                    | Excellent                      | Good                           | Good                           |
  | **Best Use Case**                   | Config/debugging with structure | Debugging, API responses    | Simple tabular data     | OLTP-like ingestion, Kafka     | OLAP, analytics, Spark/Hadoop  | OLAP, analytics, Hive/Spark    |
  | **Read vs. Write**                  | Read/debugging                  | Read/debugging              | Read/debugging          | Write-heavy (streaming, Kafka) | Read-heavy (query performance) | Read-heavy (query performance) |
  | **Data Complexity**                 | Supports nesting                | Supports nesting            | Flat only               | Supports nesting               | Supports nesting               | Supports nesting               |
  " | markdownify }}
</div>

<p style="text-align:center;">Table 1: Characteristics of data formats</p>

With this we have reached the end of this post, I hope you enjoyed it!

If you have any remarks or questions, please don’t hesitate and do drop a comment below.

*Stay tuned!* 

## Recap ##

We've explored the critical role of data serialization and file formats in data engineering. We saw the limitations of language-specific and simple textual formats (CSV, JSON, XML) and contrasted them with powerful, schema-driven binary formats like Avro, Parquet, and ORC. Understanding the trade-offs—read/write performance, compression, splittability, schema evolution, and human readability—is vital for choosing the right tool for the job. 

These file formats often form the storage layer for modern **Open Table Formats** (Apache Iceberg, Apache Hudi, Delta Lake), which add transactional capabilities, time travel, and enhanced schema management on top – a powerful combination and perhaps a topic for a future deep dive!

*Happy learning!*

## Resources ##

[https://www.datanami.com/2018/05/16/big-data-file-formats-demystified/](https://www.datanami.com/2018/05/16/big-data-file-formats-demystified/)

[https://luminousmen.com/post/big-data-file-formats](https://luminousmen.com/post/big-data-file-formats) 

[https://www.confluent.io/learn/data-serialization/](https://www.confluent.io/learn/data-serialization/) 

[https://d9nich.medium.com/json-xml-protobuf-thrift-avro-or-everything-you-need-to-know-about-encoding-data-6077a7e769e2](https://d9nich.medium.com/json-xml-protobuf-thrift-avro-or-everything-you-need-to-know-about-encoding-data-6077a7e769e2)
