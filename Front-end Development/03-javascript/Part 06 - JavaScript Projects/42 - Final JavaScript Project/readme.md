# 42 - Expense Tracker Project

## Project Overview

This is a complete JavaScript expense-tracking application.

The user can:

- Add income and expenses
- Select categories and dates
- Edit transactions
- Delete transactions
- Search transaction records
- Filter by type and category
- View financial totals
- Save records using local storage

## Transaction Object

Each transaction is stored as an object:

```javascript
const transaction = {
    id: "unique-id",
    description: "Monthly Salary",
    amount: 1200,
    type: "income",
    category: "Salary",
    date: "2026-07-23"
};
```

All transactions are stored inside an array:

```javascript
let transactions = [];
```

## Balance Calculation

```javascript
const balance =
    totalIncome - totalExpenses;
```

## Saving Transactions

```javascript
localStorage.setItem(
    storageKey,
    JSON.stringify(transactions)
);
```

## Concepts Used

- Arrays and objects
- Forms and validation
- Functions
- DOM manipulation
- Events
- Search and filtering
- Editing and deleting records
- Array methods
- Financial calculations
- Local storage and JSON

## Possible Improvements

1. Add monthly reports.
2. Add charts.
3. Add custom categories.
4. Add budget limits.
5. Add CSV export.
6. Add dark mode.

## What I Built

I built a complete expense tracker that manages income and expenses and stores the information inside the browser.

This project completes:

```text
Part 06 - JavaScript Projects
```

It also completes the current JavaScript course structure.