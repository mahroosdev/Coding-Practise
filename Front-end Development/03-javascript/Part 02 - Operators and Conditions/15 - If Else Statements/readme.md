# 15 - JavaScript If Else Statements

## Introduction

In the previous lesson, I learned about `if` statements.

In this lesson, I am learning how JavaScript chooses between two actions using `if` and `else`.

---

## Syntax

```javascript
if (condition) {
    // Runs when true
} else {
    // Runs when false
}
```

Only one block runs.

---

## Age Example

```javascript
const age = 17;

if (age >= 18) {
    console.log("Age requirement met.");
} else {
    console.log("Age requirement not met.");
}
```

Output:

```text
Age requirement not met.
```

---

## Score Example

```javascript
const score = 75;

if (score >= 50) {
    console.log("Passed");
} else {
    console.log("Failed");
}
```

Output:

```text
Passed
```

---

## Even or Odd

```javascript
const number = 7;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
```

Output:

```text
Odd
```

---

## Practice Tasks

### Practice 1

Check whether a number is positive or negative.

### Practice 2

Check whether a product is available using its stock value.

### Practice 3

Check whether a user is logged in.

---

## Common Beginner Mistakes

Do not place a semicolon after the condition:

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

Use strict equality when comparing values:

```javascript
number % 2 === 0
```

---

## What I Learned

- How `if else` chooses between two actions.
- How true conditions run the `if` block.
- How false conditions run the `else` block.
- How to check age, scores, login status, and numbers.

The next lesson is **16 - Else If Statements**.