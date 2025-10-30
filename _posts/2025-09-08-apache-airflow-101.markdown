---
layout: post
title:  "101 Apache Airflow Cheatsheet"
date:   2025-09-08
category: articles
tags: ["Data Engineering"]
author: Firas Esbai
description: "Apache Airflow simplifies workflow automation with DAGs, task scheduling, and data pipeline management for data engineering workflows."
comments: true
image: "/assets/images/articles/23_apache_airflow_architecture.png"
pinned:
---

*101 Apache Airflow Cheatsheet.*

{% include table-of-content.html %}

## What is Apache Airflow? ##

Apache Airflow is an open-source workflow management platform designed to programmatically author, schedule, and monitor complex data pipelines.

## Core Concepts ##

### Directed Acyclic Graphs (DAGs) ###

The fundamental structure in Airflow, representing a collection of tasks with defined dependencies. Each DAG is defined in Python code and dictates the order of task execution based on their relationships. A DAG is a graph structure where tasks are represented as nodes, and the dependencies between these tasks are represented as directed edges. The "directed" aspect indicates that tasks have a specific order of execution, while "acyclic" means there are no loops or cycles, preventing infinite execution paths. 

### DAG Run ###

A DAG Run is an object representing an instantiation of the DAG in time. Any time the DAG is executed, a DAG Run is created and all tasks inside it are executed. The status of the DAG Run depends on the tasks states. Each DAG Run is run separately from one another, meaning that you can have many runs of a DAG at the same time.

### Tasks ###

Task is the  individual units of work within a DAG. Each task represents a single operation, such as data extraction, transformation, or loading (ETL). The relationships between tasks are established using dependency definitions. This can be done through:
- Bitwise Operators: Using >> to set downstream dependencies and << for upstream dependencies.
- Methods: Using set_upstream() and set_downstream() methods to explicitly define task relationships.

There are three common types of task:
- **Operators**, conceptually a template for predefined tasks that you can string together quickly to build most parts of your DAGs.
- **Sensors**, a special subclass of Operators which are entirely about waiting for an external event to happen.
- A **TaskFlow-decorated** @task, which is a custom Python function packaged up as a Task.

To pass data between tasks you have three options:
- **XComs** (“Cross-communications”), a system where you can have tasks push and pull small bits of metadata identified by a **key** as well as the **task_id** and **dag_id** it came from.
- Uploading and downloading large files from a storage service (either one you run, or part of a public cloud)
- **TaskFlow API** automatically passes data between tasks via implicit XComs

### Task Instances ###

Much in the same way that a DAG is instantiated into a DAG Run each time it runs, task instances are specific executions of tasks at particular times, which can vary based on the DAG's scheduling.

### Variables ###

Variables are Airflow’s runtime configuration concept - a general key/value store that is global and can be queried from your tasks, and easily set via Airflow’s user interface, or bulk-uploaded as a JSON file.
Variables are **global**, and should only be used for overall configuration that covers the entire installation; to pass data from one Task/Operator to another, you should use XComs instead.

## Architecture Components ##

<figure>
  <img src="/assets/images/articles/23_apache_airflow_architecture.png" alt="Apache Airflow Architecture Components">
  <figcaption>Figure 1: Apache Airflow Architecture Components - <a href="https://airflow.apache.org/docs/apache-airflow/2.1.2/concepts/overview.html">Image Source</a></figcaption>
</figure>

- **Scheduler**: The component responsible for scheduling tasks and determining when they should run. It checks the DAG directory for tasks that need to be executed.
- **Executor**: This defines how and where tasks are executed. Various executors are available.  In the default Airflow installation, this runs everything inside the scheduler, but most production-suitable executors actually push task execution out to workers.
Most executors will generally also introduce other components to let them talk to their workers - like a **task queue** - but you can still think of the executor and its workers as a single logical component
- **Web Server**: Provides a user interface for monitoring and managing workflows, allowing users to inspect DAGs and task statuses.
- **A folder of DAG files**, read by the scheduler and executor (and any workers the executor has)
- **Metadata Database**: Stores all metadata related to DAGs and tasks, typically using PostgreSQL or MySQL.

## Architecture Components ##

- **Task Management**: Airflow manages task dependencies automatically, ensuring that tasks execute in the correct order.
- **Scheduling**: Airflow provides advanced scheduling capabilities, allowing workflows to run on defined schedules or trigger based on external events.
- **Extensibility**: Users can create custom operators and plugins to extend Airflow’s functionality, integrating with various data sources and services.
- **Error Handling and Retries**: Built-in mechanisms allow tasks to be retried automatically upon failure, enhancing workflow reliability.
- **Scalability**: Airflow can handle thousands of concurrent tasks across multiple workers, making it suitable for large-scale data operations.
- **Rich Command Line Interface (CLI)**: The CLI provides utilities for managing DAGs and executing tasks directly from the command line.
- **Integration with Other Tools**: Airflow supports integration with various cloud services and data tools, including AWS, Google Cloud Platform, and many others.

If you have any remarks or questions, please don’t hesitate and do drop a comment below.

*Happy learning!*
