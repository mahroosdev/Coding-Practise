# 17 - JavaScript Switch Statements

## Introduction

In the previous lesson, I learned about `else if` statements.

In this lesson, I am learning how a `switch` statement compares one value against several possible cases.

---

## Syntax

```javascript
switch (value) {
    case "option":
        // Code
        break;

    default:
        // Fallback code
}
```

---

## Basic Example

```javascript
const trafficLight = "green";

switch (trafficLight) {
    case "green":
        console.log("Go");
        break;

    case "yellow":
        console.log("Prepare to stop");
        break;

    case "red":
        console.log("Stop");
        break;

    default:
        console.log("Unknown value");
}
```

Output:

```text
Go
```

---

## The break Keyword

`break` stops JavaScript after a matching case.

```javascript
case "green":
    console.log("Go");
    break;
```

Without `break`, JavaScript may continue into the next case.

---

## The default Case

`default` runs when no case matches.

```javascript
default:
    console.log("Unknown value");
```

---

## Grouping Cases

Several cases can share one result.

```javascript
switch (day) {
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;

    default:
        console.log("Weekday");
}
```

---

## Practice Tasks

### Practice 1

Create a switch statement for seven day numbers.

### Practice 2

Create cases for `admin`, `developer`, and `user`.

### Practice 3

Create cases for red, yellow, and green traffic lights.

---

## Common Beginner Mistakes

Forgetting `break`:

```javascript
case "green":
    console.log("Go");
```

Correct:

```javascript
case "green":
    console.log("Go");
    break;
```

Case values must match the correct data type:

```javascript
switch (dayNumber) {
    case 1:
        console.log("Monday");
}
```

The number `1` is different from the string `"1"`.

---

## What I Learned

- How a switch statement works.
- How to create matching cases.
- Why the `break` keyword is important.
- How the `default` case works.
- How several cases can share one result.

This lesson completes **Part 02 - Operators and Conditions**.