---
layout: post
title:  "Level Up Your SQL Skills As a Data Engineer"
date:   2024-12-30
modified_date: 
category: articles
tags: ["Data Engineering"]
author: Firas Esbai
description: "Overview of sql topics from basic to advanced with example queries for data engineers looking to level up their sql skills"
comments: true
---

*Mastering SQL and understanding what can be done with it is crucial in making you a better data engineer.*

This article is your starting point to leveling up your SQL skills. We will start with a refresher and then move on to more advanced topics and optimizations techniques all packed with concrete examples and a final case study to wrap it all up.

*So let’s get started!*

{% include table-of-content.html %}

## SQL Overview ##

There are 5 components of the SQL language:

- **Data Definition Language (DDL)**: Used to define the structure that holds the data. It includes commands like:
    - CREATE: Used to create objects in the database (e.g., tables).
    - ALTER: Used to modify the structure of an existing database object.
    - DROP: Used to delete objects from the database.
- **Data Manipulation Language (DML)**: deals with the manipulation of the data itself. Common DML commands include:
    - INSERT: Used to add new rows of data into a table.
    - UPDATE: Used to modify existing data within a table.
    - DELETE: Used to remove rows from a table.
- **Data Control Language (DCL)**: concerned with the rights, permissions, and other controls of the database system. It includes commands like:
    - GRANT: Gives users access privileges to database.
    - REVOKE: Takes back privileges granted with the GRANT command.
- **Transaction Control Language (TCL)**: deals with transactions within a database. Transactions allow for control over groups of SQL statements. Common TCL commands include:
    - COMMIT: Saves changes made during the current transaction.
    - ROLLBACK: Restores the database to its original state since the last COMMIT.
- **Data Query Language (DQL)**: used to retrieve data from the database. The primary command in DQL is:
    - SELECT: Retrieves data from one or more tables.

These components together provide a comprehensive set of tools to interact with and manage databases using SQL.

## SQL Query Order of Execution ##

For a given SQL query, the SQL engine will execute its clauses in a specific standard order in order to process your query and return the desired results.

Understanding the order in which a SQL query is executed is important and will allow you to optimize your queries by minimizing the amount of data processed and improving query execution times. In addition, it will result in writing better and more efficient queries which consume less resources and lead to faster response times and less constraints on the database server.

The following table summarizes the SQL query order of execution:

| Order | Clause    | Function                                            |
| ------|:----------|:----------------------------------------------------|
| 1     | From/Join | Determines table(s) from which data will be queried |
| 2     | Where     | Filters data on rows                                |
| 3     | Group By  | Checks if you have aggregations                     |
| 4     | Having    | Filters data based on specified groups              |
| 5     | Select    | Selects which columns you want to see returned      |
| 6     | Order By  | Sorts the data returned                             |
| 7     | Limit     | Limits the number of rows returned                  |

<p style="text-align:center;">Table 1: SQL query order of execution</p>

## Advanced SQL ##

## Subquery vs CTE vs Temp Table ##

### What is a Subquery? ###

Subquery, also known as inner query, is a query nested inside another SQL query. Subqueries are enclosed within parentheses and can be placed in various parts of a SQL statement such as the SELECT, FROM, WHERE, or HAVING clauses.

Example:

{% highlight ruby %}
{% raw %}   
CREATE TABLE departments (id INT, name VARCHAR(50));

CREATE TABLE employees (
   id INT, 
   name VARCHAR(50), 
   salary DECIMAL(10, 2), 
   department_id INT);

INSERT INTO departments (id, name)
VALUES (1, 'HR'), (2, 'Finance'), (3, 'Marketing');

INSERT INTO employees (id, name, salary, department_id)
VALUES 
   (1, 'John Doe', 50000, 1), 
   (2, 'Jane Smith', 60000, 2), 
   (3, 'Alice Johnson', 70000, 1), 
   (4, 'Bob Williams', 55000, 3);
{% endraw %}
{% endhighlight %}

Suppose we want to retrieve all the employees that work in **HR** department:

{% highlight ruby %}
{% raw %}   
SELECT id, name, salary
FROM employees
WHERE department_id = (
	SELECT id FROM departments WHERE name = 'HR'
);
{% endraw %}
{% endhighlight %}

Subqueries are a powerful feature of SQL allowing for more complex and dynamic queries by enabling you to use the results of one query as a condition or value in another.

### What is a CTE? ###

CTE stands for Common Table Expression. It is a named temporary result set that exist only for the duration of the main query.

*Basic Syntax:*

{% highlight ruby %}
{% raw %} 
-- Start of a CTE
WITH cte_name AS (
	-- CTE query definition here
	SELECT column1, column2, ...
	FROM table_name
	WHERE conditions
)
-- END of a CTE 
SELECT *
FROM cte_name;
{% endraw %}
{% endhighlight %}

CTEs are useful for improving the readability and maintainability of complex queries. In addition, when you need to use the same subquery result multiple times within a larger query, it avoids duplicating complex logic and can make queries more readable and easier to maintain.

### What is a Temp Table? ###

A temporary table in SQL is a table that exists temporarily on the database server.

Unlike CTEs that exist only in the context of the query in which they are defined, Temp tables can be created and used just like regular database tables, but they are dropped automatically when the session ends or when explicitly dropped by the user.

Temp Tables are useful for holding intermediate results that you want to reuse multiple times within a session and allow to break down complex tasks into smaller, more manageable tasks.

## Window Functions ##

SQL Window functions show up in pretty much every data engineering interview nowadays. Therefore, it is important to understand the key concepts related to this powerful feature.

### So what exactly are Window functions? ###

Window functions allow you to perform calculations across a set of table rows related to the current row. This is different from aggregate functions, which summarize data into a single output row for each group.

### Breakdown of Window functions ###

1. **Partitioning**: Window functions are typically used with an **OVER clause**, which defines the window of rows over which the function will operate. This clause can partition the result set into groups of rows based on one or more column values.
2. **Ordering**: Within each partition, you can specify an **ORDER BY** clause to define the order in which the rows are processed by the window function.
3. **Window Frame**: This defines the subset of rows within the partition to which the function is applied. The frame can be defined as rows preceding or following the current row, or between a range of rows.

There are two main categories of window functions:
- **Aggregate Window Functions:** These functions resemble regular aggregate functions (SUM, COUNT, AVG, etc.) but operate within the window instead of across the entire dataset. This allows you to calculate things like **running totals** or **moving averages**.
    
    Commonly used SQL Aggregate Window Functions include:
    
    - **COUNT**() counts the number of rows in a specified column across a defined window.
    - **SUM**() computes the sum of values within a specified column across a defined window.
    - **AVG**() calculates the average of a selected group of values across a defined window.
    - **MIN**() retrieves the lowest value from a particular column across a defined window.
    - **MAX**() fetches the highest value from a specific column across a defined window.
    - **FIRST_VALUE**() returns the first value in a designated column across a defined window.
    - **LAST_VALUE**() provides the last value in a given column across a defined window.

- **Ranking Window Functions:** These functions assign a rank or order to each row based on a specified value. Examples include ROW_NUMBER(), RANK(), and DENSE_RANK(). These are useful for identifying **top performers**, assigning **unique sequential identifiers**, or **grouping data into buckets**.

To better illustrate the syntax of the window function, let’s take the following example:

Suppose we have a table **employees**:

{% highlight ruby %}
{% raw %} 
CREATE TABLE employees (
    emp_id INT,
    emp_name VARCHAR(50),
    department VARCHAR(50),
    salary DECIMAL(10, 2)
);

INSERT INTO employees (emp_id, emp_name, department, salary)
VALUES
    (1, 'Alice', 'HR', 50000.00),
    (2, 'Bob', 'HR', 60000.00),
    (3, 'Charlie', 'Engineering', 70000.00),
    (4, 'David', 'Engineering', 80000.00),
    (5, 'Eve', 'Engineering', 90000.00);
{% endraw %}
{% endhighlight %}

We want to calculate the average salary for each departement:

{% highlight ruby %}
{% raw %} 
SELECT
    emp_id,
    emp_name,
    department,
    salary,
    AVG(salary) OVER(PARTITION BY department) AS avg_salary_department
FROM
    employees;
{% endraw %}
{% endhighlight %}

The result would be:

{% highlight ruby %}
{% raw %} 
emp_id | emp_name | department  | salary   | avg_salary_department
------------------------------------------------------------------
1      | Alice    | HR          | 50000.00 | 55000.00
2      | Bob      | HR          | 60000.00 | 55000.00
3      | Charlie  | Engineering | 70000.00 | 80000.00
4      | David    | Engineering | 80000.00 | 80000.00
5      | Eve      | Engineering | 90000.00 | 80000.00   
{% endraw %}
{% endhighlight %}

The window function calculates the average salary for each row in the result set, but it doesn't change the number of rows returned. Each row retains its original data, but we also get a new column with the average salary for the department of that row.

However, using a **Group By**, the result set is reduced to one row per department, where each row represents a distinct department.

{% highlight ruby %}
{% raw %} 
SELECT
    department,
    AVG(salary) AS avg_salary_department
FROM
    employees
GROUP BY
    department;

department  | avg_salary_department
------------------------------------
HR          | 55000.00
Engineering | 80000.00
{% endraw %}
{% endhighlight %}

To better illustrate the difference between ROW_NUMBER(), RANK(), and DENSE_RANK(), we will update our employees table with the following values:

{% highlight ruby %}
{% raw %} 
emp_id | emp_name | department  | salary   
-------------------------------------------
1      | Alice    | HR          | 60000.00 
2      | Bob      | HR          | 70000.00 
3      | Charlie  | Engineering | 80000.00 
4      | David    | Engineering | 80000.00 
5      | Eve      | Engineering | 75000.00 
6      | Frank    | Engineering | 70000.00   
{% endraw %}
{% endhighlight %}

Ranking the employees within their departments based on their salaries results in the following queries:

{% highlight ruby %}
{% raw %} 
SELECT
   emp_id,
   emp_name,
   department,
   salary,
   ROW_NUMBER() OVER(PARTITION BY department ORDER BY salary DESC) AS row_number
FROM
   employees;

emp_id | emp_name | department  | salary   | row_number
-------------------------------------------------------
2      | Bob      | HR          | 70000.00 | 1
6      | Frank    | HR          | 70000.00 | 2
1      | Alice    | HR          | 60000.00 | 3
3      | Charlie  | Engineering | 80000.00 | 1
4      | David    | Engineering | 80000.00 | 2
5      | Eve      | Engineering | 75000.00 | 3
{% endraw %}
{% endhighlight %}

Each Row has a unique number regardless of ties.

{% highlight ruby %}
{% raw %} 
SELECT
   emp_id,
   emp_name,
   department,
   salary,
   RANK() OVER(PARTITION BY department ORDER BY salary DESC) AS rank
FROM
   employees;

emp_id | emp_name | department  | salary   | rank
--------------------------------------------------
2      | Bob      | HR          | 70000.00 | 1
6      | Frank    | HR          | 70000.00 | 1
1      | Alice    | HR          | 60000.00 | 3
3      | Charlie  | Engineering | 80000.00 | 1
4      | David    | Engineering | 80000.00 | 1
5      | Eve      | Engineering | 75000.00 | 3
{% endraw %}
{% endhighlight %}

{% highlight ruby %}
{% raw %} 
SELECT
   emp_id,
   emp_name,
   department,
   salary,
   DENSE_RANK() OVER(PARTITION BY department ORDER BY salary DESC) AS dense_rank
FROM
   employees;

emp_id | emp_name | department  | salary   | dense_rank
-------------------------------------------------------
2      | Bob      | HR          | 70000.00 | 1
6      | Frank    | HR          | 70000.00 | 1
1      | Alice    | HR          | 60000.00 | 2
3      | Charlie  | Engineering | 80000.00 | 1
4      | David    | Engineering | 80000.00 | 1
5      | Eve      | Engineering | 75000.00 | 2
{% endraw %}
{% endhighlight %}

The difference between RANK and DENSE_RANK is the gaps between the ranking in case of ties. You can check this by looking at the row of Alice and Eve where their rank is 3 with RANK but 2 with DENSE_RANK.

## SQL Query Optimization Techniques ##

Since SQL is declarative, there are typically many alternative ways to execute a given query, with widely varying performance. When a query is submitted to the database, the query optimizer evaluates different possible plans or query execution plans which are sequences of steps used to access data. Once determined, the most efficient query is then returned.

Many database systems provide tools to view the query plan, either graphically or in text format. This helps developers understand and optimize query performance.

Regularly reviewing and analyzing query execution plans to understand how queries are executed and identify potential performance issues is very helpful. In addition, knowing and applying other optimization techinques can enahance the performance of your system. Here are some general tips for query optimization:

- Use column names instead of * in a SELECT statement. This reduces the amount of data transferred and processed.
- Use the most appropriate and efficient data types for your columns to save space and improve performance.
- Create indexes on columns that are frequently used in WHERE clauses, JOIN conditions, and as part of ORDER BY clauses for faster data retrievel.
- Use appropriate join types(INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN) and ensure that join conditions are based on indexed columns.
- Consider the order of joins: join smaller tables first to reduce the size of intermediate results.
- Use INNER JOINs where possible as it’s usually faster than OUTER JOINs.
- Use subqueries only when necessary and consider alternatives like JOINs or Common Table Expressions (CTEs) to simplify and optimize complex queries

## Case Study: NYC Citi Bike Trips ##

In this section we will try to apply some of the learnings from previous sections to answer some questions about the Citi Bike Trips dataset using SQL.

This dataset contains information about trips of the Citi Bike share program. It is hosted and available in Google BigQuery and included in the free tier processing. For more information, check [this link](https://console.cloud.google.com/marketplace/product/city-of-new-york/nyc-citi-bike?project=propane-cooler-150809).

Each question is followed by the corresponding SQL query and its output. For better readability the output of some queries is limited to 3 rows. 

The answer and expected output are hidden. Try to answer the questions to test your understanding before revealing them. 

**Which trips lasted longer than 30 minutes?**

<details>
<summary>Show Answer</summary>
   {% highlight ruby %}
   {% raw %}   
   SELECT 
      tripduration, 
      start_station_name, 
      end_station_name, 
      bikeid, 
      usertype 
   FROM `bigquery-public-data.new_york_citibike.citibike_trips` 
   WHERE tripduration > 30 
   LIMIT 3;
   
   tripduration | start_station_name      | end_station_name      | bikeid | usertype
   ------------------------------------------------------------------------------------
   16930        | South St & Whitehall St | NYCBS Depot BAL - DYR | 14826  | Subscriber
   547          | 12 Ave & W 40 St        | NYCBS Depot BAL - DYR | 22094  | Subscriber
   442403       | E 10 St & Avenue A      | NYCBS Depot - DEL     | 16592  | Customer   
   {% endraw %}
   {% endhighlight %}
</details>
<br>

**What is the average trip duration for each user type (Subscriber and Customer)?**

<details>
<summary>Show Answer</summary>
   {% highlight ruby %}
   {% raw %}   
   SELECT 
      usertype, 
      ROUND(AVG(tripduration), 2) AS average_trip_duration 
   FROM `bigquery-public-data.new_york_citibike.citibike_trips` 
   GROUP BY usertype;
   
   usertype   | average_trip_duration
   ----------------------------------
   Subscriber | 806.38  
   Customer   | 2145.51 
   {% endraw %}
   {% endhighlight %}
</details>
<br>

**How many trips were made each day?**

<details>
<summary>Show Answer</summary>
   {% highlight ruby %}
   {% raw %}   
   SELECT 
      DATE(starttime) AS day, 
      COUNT(*) AS trip_count 
   FROM `bigquery-public-data.new_york_citibike.citibike_trips` 
   GROUP BY day 
   ORDER BY day;

   day        | trip_count
   -----------------------
   2013-07-01 | 16650 
   2013-07-02 | 22745 
   2013-07-03 | 21864 
   {% endraw %}
   {% endhighlight %}
</details>
<br>

**Which start station has the highest number of trips?**

<details>
<summary>Show Answer</summary>
   {% highlight ruby %}
   {% raw %}   
   SELECT 
      start_station_name, 
      COUNT(*) as trip_count 
   FROM `bigquery-public-data.new_york_citibike.citibike_trips` 
   GROUP BY start_station_name 
   ORDER BY trip_count DESC;

   start_station_name    | trip_count
   ----------------------------------
   Pershing Square North | 438077 
   E 17 St & Broadway    | 423334 
   W 21 St & 6 Ave       | 403795 
   {% endraw %}
   {% endhighlight %}
</details>
<br>

**Which stations had more than 1,000 trips starting from them?**

<details>
<summary>Show Answer</summary>
   {% highlight ruby %}
   {% raw %}   
   SELECT 
      start_station_name, 
      COUNT(*) AS trip_count 
   FROM `bigquery-public-data.new_york_citibike.citibike_trips` 
   GROUP BY start_station_name 
   HAVING trip_count > 1000;
   
   start_duration_name   | trip_count 
   ---------------------------------- 
   Liberty St & Broadway | 149199     
   W 45 St & 6 Ave       | 118394     
   Henry St & Grand St   | 105108     
   {% endraw %}
   {% endhighlight %}
</details>
<br>

**What is the rolling average trip duration for each bike?**

<details>
<summary>Show Answer</summary>
   {% highlight ruby %}
   {% raw %}   
   SELECT 
      bikeid, 
      DATE(starttime) as trip_date, 
      tripduration, 
      AVG(tripduration) OVER (PARTITION BY bikeid ORDER BY starttime ROWS BETWEEN 7 PRECEDING AND CURRENT ROW) AS rolling_avg 
      FROM `bigquery-public-data.new_york_citibike.citibike_trips` ;

   bikeid | trip_date  | tripduration | rolling_avg
   ------------------------------------------------
   23076  | 2015-11-04 | 468          | 505.2      
   23076  | 2015-11-04 | 332          | 869.8
   23076  | 2015-11-05 | 729          | 588.8
   {% endraw %}
   {% endhighlight %}
</details>
<br>

**What are the top 3 longest trips for each station?**

<details>
<summary>Show Answer</summary>
   {% highlight ruby %}
   {% raw %}   
   WITH ranked_trips AS (
      SELECT
         start_station_id,
         tripduration,
         ROW_NUMBER() OVER (PARTITION BY start_station_id ORDER BY tripduration DESC) AS rank
      FROM `bigquery-public-data.new_york_citibike.citibike_trips`
   )
   SELECT
      start_station_id,
      tripduration
   FROM ranked_trips
   WHERE rank <= 3
   ORDER BY start_station_id, tripduration DESC;

   start_station_id | tripduration
   -------------------------------
   72               | 2006840 
   72               | 792782  
   72               | 594321  
   {% endraw %}
   {% endhighlight %}
</details>
<br>

With this we have reached the end of this post, I hope you enjoyed it!

If you have any remarks or questions, please don’t hesitate and do drop a comment below.

*Stay tuned!* 

## Recap ##

In this article, we explored on a high level topics of different difficulty levels of the SQL language. Hopefully the examples and the case study helped in clarifying these concepts but this is only the tip of the iceberg. Writing clearer and more efficient SQL queries requires practice. The resources section contains valuable materials to support you further in your learning journey.  

*Happy learning!*

## Resources ##

[https://en.wikipedia.org/wiki/Query_plan](https://en.wikipedia.org/wiki/Query_plan)

[https://sqlzoo.net/wiki/SQL_Tutorial](https://sqlzoo.net/wiki/SQL_Tutorial)

[https://www.windowfunctions.com/](https://www.windowfunctions.com/)

[https://datalemur.com/sql-tutorial](https://datalemur.com/sql-tutorial)

[https://selectstarsql.com/](https://selectstarsql.com/)