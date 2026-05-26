# GreenPeddle Intern Assignment

This is my submission for the Product & Operations Intern assessment at GreenPeddle.
---

## Task 1 - Product Feed Filter (JavaScript)

I wrote a function called processProductFeed() that goes through a list of products and separates the good ones from the bad ones.

- If a product has no stock, zero price or is not verified, it gets flagged with a reason
- I also cleaned the product names by removing extra spaces and converting them to title case
- At the end it returns available products, flagged products and a summary count

---

## Task 2 - CSV Cleaner (Node.js)

I wrote a script that reads a messy seller CSV file, cleans it up and saves a new file called cleaned_products.csv.

- Removed extra spaces from all fields
- Converted product names to title case
- Flagged and printed rows that had missing price, zero price or missing stock
- Saved only the valid rows to the new file
- Used only built in Node.js modules, no npm packages

---

## Task 3 - SQL Queries

Wrote 4 queries for the orders table. All queries are in queries.sql with comments explaining each one.

- Sellers who had at least one failed order in the last 30 days
- Top 5 sellers by total revenue from completed orders this month
- Buyers who placed more than 3 orders but never completed one
- Count of orders per status in the last 7 days

---

## Task 4 - Bug Report

I opened Amazon and tested the review filter feature. Found a UI bug where filtered results still showed unrelated reviews. Wrote a full bug report with steps to reproduce, expected vs actual behaviour, severity and a suggested fix. Screenshot is attached in the folder.

---


