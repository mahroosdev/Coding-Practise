# 14 - JavaScript If Statements

## Introduction

In the previous lesson, I learned about logical operators.

In this lesson, I am learning how an `if` statement runs code only when a condition is true.

---

## Folder Structure

```text
14 - If Statements/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## If Statement Syntax

The basic syntax is:

```javascript
if (condition) {
    // Code to run
}
```

The condition is written inside parentheses.

The code that should run is written inside curly braces.

---

## True Condition

```javascript
if (20 > 18) {
    console.log("The condition is true.");
}
```

Output:

```text
The condition is true.
```

Because `20 > 18` is true, JavaScript runs the code block.

---

## False Condition

```javascript
if (10 > 20) {
    console.log("This message will not appear.");
}
```

The condition is false, so JavaScript skips the code inside the curly braces.

---

## Checking Variables

```javascript
const userAge = 20;
const minimumAge = 18;

if (userAge >= minimumAge) {
    console.log("The age requirement was met.");
}
```

The comparison returns true, so the message appears.

---

## Using Equality

```javascript
const courseName = "JavaScript";

if (courseName === "JavaScript") {
    console.log("The course name matched.");
}
```

Strict equality checks both the value and data type.

---

## Using Logical Operators

Two conditions can be combined using logical operators.

```javascript
const hasEmail = true;
const hasPassword = true;

if (hasEmail && hasPassword) {
    console.log("Login details are complete.");
}
```

The block runs because both conditions are true.

---

## Multiple If Statements

Separate if statements check conditions independently.

```javascript
const score = 85;

if (score >= 50) {
    console.log("Passed");
}

if (score >= 75) {
    console.log("High score");
}
```

Output:

```text
Passed
High score
```

Both blocks run because both conditions are true.

---

## Practice Tasks

### Practice 1: Check an Age

```javascript
const age = 21;

if (age >= 18) {
    console.log("Adult age reached.");
}
```

### Practice 2: Check a Score

```javascript
const score = 75;

if (score >= 50) {
    console.log("The student passed.");
}
```

### Practice 3: Check Login Details

```javascript
const hasUsername = true;
const hasPassword = true;

if (hasUsername && hasPassword) {
    console.log("Login details are complete.");
}
```

---

## Common Beginner Mistakes

### Adding a Semicolon After the Condition

Avoid:

```javascript
if (score >= 50); {
    console.log("Passed");
}
```

Correct:

```javascript
if (score >= 50) {
    console.log("Passed");
}
```

### Using Assignment Instead of Comparison

Assignment:

```javascript
score = 50
```

Comparison:

```javascript
score === 50
```

### Forgetting Curly Braces

Use curly braces to make the code block clear:

```javascript
if (isLoggedIn) {
    console.log("Welcome");
}
```

### Expecting False Conditions to Run

An if block runs only when its condition is true.

---

## What I Learned

In this lesson, I learned:

- What an if statement is.
- How to write an if statement.
- How true and false conditions behave.
- How to check variables.
- How to use comparison operators inside conditions.
- How to combine conditions using logical operators.
- How multiple independent if statements work.

The next lesson is **15 - If Else Statements**.