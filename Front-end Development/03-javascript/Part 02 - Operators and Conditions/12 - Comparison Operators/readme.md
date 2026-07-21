# 12 - JavaScript Comparison Operators

## Introduction

In the previous lesson, I learned about JavaScript numbers.

In this lesson, I am learning how comparison operators compare values.

Comparison operators return a boolean result:

```text
true
false
```

Example:

```javascript
console.log(20 > 18);
```

Output:

```text
true
```

---

## Folder Structure

```text
12 - Comparison Operators/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Comparison Operators

| Operator | Meaning |
|---|---|
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal to |
| `<=` | Less than or equal to |
| `===` | Strictly equal |
| `!==` | Strictly not equal |
| `==` | Loosely equal |
| `!=` | Loosely not equal |

---

## Comparing Numbers

```javascript
console.log(20 > 18);
console.log(15 < 20);
console.log(18 >= 18);
console.log(20 <= 18);
```

Output:

```text
true
true
true
false
```

---

## Strict Equality

Strict equality compares both the value and data type.

```javascript
console.log(10 === 10);
console.log(10 === "10");
```

Output:

```text
true
false
```

The second comparison is false because `10` is a number and `"10"` is a string.

For most comparisons, use:

```javascript
===
```

---

## Strict Inequality

Strict inequality checks whether values or data types are different.

```javascript
console.log(10 !== "10");
console.log(10 !== 10);
```

Output:

```text
true
false
```

---

## Loose Equality

Loose equality may convert data types before comparing values.

```javascript
console.log(10 == "10");
```

Output:

```text
true
```

This can make comparisons less clear.

Prefer:

```javascript
10 === "10"
```

---

## Comparing Strings

String comparisons are case-sensitive.

```javascript
console.log("JavaScript" === "JavaScript");
console.log("JavaScript" === "javascript");
```

Output:

```text
true
false
```

---

## Practical Example

```javascript
const userAge = 20;
const minimumAge = 18;

const canContinue =
    userAge >= minimumAge;

console.log(canContinue);
```

Output:

```text
true
```

The result can later be used inside conditions.

---

## Practice Tasks

### Practice 1: Compare Two Numbers

```javascript
const firstNumber = 30;
const secondNumber = 20;

console.log(firstNumber > secondNumber);
console.log(firstNumber < secondNumber);
```

### Practice 2: Test Strict Equality

```javascript
console.log(25 === 25);
console.log(25 === "25");
```

### Practice 3: Check a Minimum Score

```javascript
const studentScore = 75;
const passingScore = 50;

console.log(studentScore >= passingScore);
```

---

## Common Beginner Mistakes

### Confusing Assignment and Comparison

Assignment:

```javascript
const score = 50;
```

Comparison:

```javascript
score === 50
```

A single equal sign assigns a value.

Three equal signs compare value and data type.

### Using Loose Equality

```javascript
10 == "10"
```

This returns true because JavaScript converts the values.

Prefer:

```javascript
10 === "10"
```

### Ignoring Letter Case

```javascript
"JavaScript" === "javascript"
```

This returns false because strings are case-sensitive.

---

## What I Learned

In this lesson, I learned:

- How comparison operators work.
- Why comparisons return boolean values.
- How to use greater-than and less-than operators.
- How to compare equal values.
- The difference between strict and loose equality.
- Why strict equality is recommended.
- How strings are compared.
- How comparisons can check requirements such as age or score.

The next lesson is **13 - Logical Operators**.