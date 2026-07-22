# 29 - JavaScript Events

## Introduction

In this lesson, I am learning how JavaScript responds to browser and user actions.

Examples of events include clicking, typing, and moving the mouse.

---

## Adding an Event Listener

```javascript
const button =
    document.getElementById("button");

button.addEventListener(
    "click",
    function () {
        console.log("Button clicked");
    }
);
```

The function runs when the event happens.

---

## Common Events

```text
click
dblclick
mouseenter
mouseleave
keydown
input
```

Example:

```javascript
element.addEventListener(
    "mouseenter",
    function () {
        console.log("Mouse entered");
    }
);
```

---

## The Event Object

JavaScript can provide information about an event.

```javascript
button.addEventListener(
    "click",
    function (event) {
        console.log(event.type);
        console.log(event.target);
    }
);
```

`event.type` contains the event name.

`event.target` contains the element that caused the event.

---

## Click Counter

```javascript
let count = 0;

button.addEventListener(
    "click",
    function () {
        count++;
        output.textContent = count;
    }
);
```

---

## Practice Tasks

1. Display a message when a button is clicked.
2. Change a box when the mouse enters it.
3. Display the key pressed inside an input.
4. Create a click counter.

---

## Common Beginner Mistakes

Do not call the function immediately:

```javascript
button.addEventListener(
    "click",
    showMessage()
);
```

Pass the function instead:

```javascript
button.addEventListener(
    "click",
    showMessage
);
```

The event name should not include `on`:

```javascript
"click"
```

Not:

```javascript
"onclick"
```

---

## What I Learned

- What browser events are.
- How to use `addEventListener()`.
- How click, mouse, and keyboard events work.
- What the event object contains.
- How to build a simple click counter.

The next lesson is **30 - Forms and Input Values**.