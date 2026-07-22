# 27 - Selecting HTML Elements

## Introduction

In this lesson, I am learning how JavaScript selects HTML elements from the DOM.

JavaScript must select an element before reading or changing it.

---

## Selecting by ID

```javascript
const title =
    document.getElementById("page-title");
```

An ID should identify one element.

---

## Using querySelector()

```javascript
const card =
    document.querySelector(".card");
```

`querySelector()` selects the first matching CSS selector.

It can use IDs, classes, or tags:

```javascript
document.querySelector("#title");
document.querySelector(".card");
document.querySelector("p");
```

---

## Selecting Several Elements

```javascript
const items =
    document.querySelectorAll(".item");
```

The result contains all matching elements.

```javascript
items.forEach(function (item) {
    console.log(item.textContent);
});
```

---

## Other Selection Methods

```javascript
document.getElementsByClassName("card");
document.getElementsByTagName("section");
```

These methods return collections of matching elements.

---

## Practice Tasks

1. Select a heading by ID.
2. Select the first paragraph using `querySelector()`.
3. Select all list items using `querySelectorAll()`.
4. Display the number of selected elements.

---

## What I Learned

- How to select an element by ID.
- How `querySelector()` works.
- How `querySelectorAll()` selects several elements.
- How to select elements by class and tag name.

The next lesson is **28 - Changing HTML Content and Styles**.