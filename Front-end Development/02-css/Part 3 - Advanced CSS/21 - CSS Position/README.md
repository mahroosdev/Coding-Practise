# 21 - CSS Position

## Introduction

In the previous lesson, I learned how different CSS units control sizes and spacing.

In this lesson, I am learning how the `position` property controls where an HTML element appears on a webpage.

CSS positioning can move elements from their normal location or keep them visible while the page is scrolling.

---

## What is CSS Position?

The `position` property controls how an element is placed on the webpage.

Basic syntax:

```css
selector {
    position: value;
}
```

Common position values include:

```text
static
relative
absolute
fixed
sticky
```

---

## Position Helper Properties

Positioned elements often use these properties:

```text
top
right
bottom
left
```

Example:

```css
.box {
    position: relative;
    top: 10px;
    left: 20px;
}
```

This moves the box:

- 10 pixels from the top
- 20 pixels from the left

---

## Static Position

The value `static` is the default position of HTML elements.

```css
.static-box {
    position: static;
}
```

A static element stays in the normal page layout.

The `top`, `right`, `bottom`, and `left` properties do not normally move a static element.

---

## Relative Position

The value `relative` moves an element from its normal position.

```css
.relative-box {
    position: relative;
    top: 10px;
    left: 30px;
}
```

The element still keeps its original space in the page layout.

It is only moved visually from that position.

---

## Absolute Position

The value `absolute` removes an element from the normal page layout.

```css
.absolute-box {
    position: absolute;
    top: 20px;
    right: 20px;
}
```

The absolute element is positioned relative to its nearest positioned parent.

In this lesson, the parent container uses:

```css
.position-container {
    position: relative;
}
```

The absolute box is therefore positioned inside that container.

---

## Positioned Parent

A parent element can use:

```css
position: relative;
```

without being moved.

Example:

```css
.position-container {
    position: relative;
}
```

This creates a reference area for the absolute child element.

---

## Fixed Position

The value `fixed` keeps an element in the same place on the browser screen.

```css
.fixed-box {
    position: fixed;
    right: 20px;
    bottom: 20px;
}
```

The fixed box stays:

- 20 pixels from the right side
- 20 pixels from the bottom

It remains visible even when the page is scrolled.

---

## Sticky Position

The value `sticky` behaves like a normal element until the page reaches a specified scroll position.

```css
.sticky-heading {
    position: sticky;
    top: 0;
}
```

The heading stays at the top of the screen while its section is being scrolled.

The `top` property is required for this sticky behavior.

---

## Position Comparison

### Static

```css
position: static;
```

- Default position
- Stays in the normal layout
- Cannot normally be moved with `top` or `left`

### Relative

```css
position: relative;
```

- Stays in the normal layout
- Can move from its original position
- Keeps its original page space

### Absolute

```css
position: absolute;
```

- Removed from the normal layout
- Positioned relative to a positioned parent
- Can use `top`, `right`, `bottom`, and `left`

### Fixed

```css
position: fixed;
```

- Removed from the normal layout
- Positioned relative to the browser window
- Stays visible while scrolling

### Sticky

```css
position: sticky;
```

- Starts in the normal layout
- Becomes fixed after reaching a scroll position
- Usually needs a value such as `top: 0`

---

## CSS Used in This Lesson

```css
body {
    min-height: 1400px;
    background-color: lightgray;
    font-family: Arial, sans-serif;
}

h1 {
    color: darkblue;
    text-align: center;
}

section {
    background-color: white;
    border: 2px solid darkblue;
    margin-bottom: 30px;
    padding: 20px;
}

.static-box,
.relative-box,
.absolute-box,
.fixed-box {
    width: 180px;
    background-color: lightyellow;
    border: 2px solid darkgreen;
    padding: 15px;
}

.static-box {
    position: static;
}

.relative-box {
    position: relative;
    top: 10px;
    left: 30px;
}

.position-container {
    position: relative;
    height: 180px;
    background-color: lightblue;
    border: 2px dashed darkblue;
    padding: 15px;
}

.absolute-box {
    position: absolute;
    top: 20px;
    right: 20px;
}

.fixed-box {
    position: fixed;
    right: 20px;
    bottom: 20px;
    background-color: darkblue;
    color: white;
}

.sticky-heading {
    position: sticky;
    top: 0;
    background-color: darkgreen;
    color: white;
    padding: 10px;
}
```

---

## Output

When the webpage is opened in the browser:

- The static box remains in its normal position.
- The relative box moves slightly down and to the right.
- The absolute box appears in the top-right corner of its parent container.
- The fixed box stays in the bottom-right corner of the browser.
- The sticky heading remains visible while scrolling through its section.

---

## Practice

Move the relative box further to the right:

```css
.relative-box {
    left: 80px;
}
```

Move the absolute box to the bottom-left corner:

```css
.absolute-box {
    top: auto;
    right: auto;
    bottom: 20px;
    left: 20px;
}
```

Move the fixed box to the top-right corner:

```css
.fixed-box {
    top: 20px;
    right: 20px;
    bottom: auto;
}
```

Change the sticky distance:

```css
.sticky-heading {
    top: 20px;
}
```

Save the file and refresh the browser after each change.

---

## Important Note

Absolute positioning can cause elements to overlap other content.

Always check:

- The positioned parent
- The available space
- The `top`, `right`, `bottom`, and `left` values

Use absolute positioning only when it is needed.

---

## What I Learned

In this lesson, I learned:

- The `position` property controls element placement.
- Static is the default position.
- Relative positioning moves an element from its normal location.
- Absolute positioning uses a positioned parent as its reference.
- Fixed positioning keeps an element attached to the browser window.
- Sticky positioning keeps an element visible during part of the scrolling.
- The `top`, `right`, `bottom`, and `left` properties control placement.