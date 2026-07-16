# 27 - CSS Transitions

## Introduction

In the previous lesson, I learned how pseudo-elements style specific parts of HTML elements.

In this lesson, I am learning how CSS transitions create smooth changes between one style and another.

Without a transition, a CSS style changes immediately.

With a transition, the browser changes the style gradually over a specified amount of time.

---

## What is a CSS Transition?

A CSS transition creates a smooth visual change when a property receives a new value.

Example:

```css
.box {
    background-color: lightblue;
    transition: background-color 1s;
}

.box:hover {
    background-color: lightgreen;
}
```

When the mouse moves over the box, the background color gradually changes from light blue to light green.

---

## Basic Transition Syntax

```css
selector {
    transition: property duration;
}
```

Example:

```css
.box {
    transition: background-color 1s;
}
```

In this example:

- `background-color` is the property being changed.
- `1s` is the transition duration.
- `s` means seconds.

---

## Transition Property

The transition property tells the browser which CSS property should change smoothly.

Example:

```css
transition-property: background-color;
```

This means only the background color receives a transition.

Another example:

```css
transition-property: width;
```

This means the width changes gradually.

---

## Transition Duration

The `transition-duration` property controls how long the transition takes.

Example:

```css
transition-duration: 1s;
```

This transition takes one second.

Another example:

```css
transition-duration: 0.5s;
```

This transition takes half a second.

---

## Transition Shorthand

The transition property and duration can be written together.

Instead of:

```css
.box {
    transition-property: background-color;
    transition-duration: 1s;
}
```

You can write:

```css
.box {
    transition: background-color 1s;
}
```

Both versions create the same result.

---

## Background Color Transition

The first box changes its background color.

```css
.color-box {
    transition: background-color 1s;
}
```

The hover style is:

```css
.color-box:hover {
    background-color: lightgreen;
}
```

When the mouse moves over the box, the color changes gradually.

---

## Width Transition

The second box changes its width.

```css
.width-box {
    transition: width 1s;
}
```

The hover style is:

```css
.width-box:hover {
    width: 400px;
}
```

The box gradually becomes wider when the mouse moves over it.

When the mouse moves away, it gradually returns to its original width.

---

## Button Transition

Transitions are commonly used with buttons.

```css
.transition-button {
    background-color: darkblue;
    transition: background-color 0.5s;
}
```

The hover style is:

```css
.transition-button:hover {
    background-color: darkgreen;
}
```

The button smoothly changes from dark blue to dark green.

---

## Multiple Transitions

More than one CSS property can receive a transition.

Example:

```css
.multiple-box {
    transition:
        width 1s,
        background-color 1s,
        color 1s;
}
```

Each transition is separated by a comma.

The hover style is:

```css
.multiple-box:hover {
    width: 400px;
    background-color: darkred;
    color: white;
}
```

The following properties change smoothly:

- Width
- Background color
- Text color

---

## Using `all`

CSS can apply a transition to every property that changes.

Example:

```css
.box {
    transition: all 1s;
}
```

This is easy to write, but it may apply transitions to properties that do not need them.

It is usually clearer to list the required properties.

Example:

```css
.box {
    transition:
        width 1s,
        background-color 1s;
}
```

---

## Transition Timing Function

The timing function controls the speed pattern of a transition.

Example:

```css
transition-timing-function: ease;
```

Common values include:

```text
ease
linear
ease-in
ease-out
ease-in-out
```

---

## Ease

```css
transition-timing-function: ease;
```

The transition starts slowly, becomes faster, and ends slowly.

This is the default value.

---

## Linear

```css
transition-timing-function: linear;
```

The transition uses the same speed from beginning to end.

---

## Ease-In

```css
transition-timing-function: ease-in;
```

The transition starts slowly.

---

## Ease-Out

```css
transition-timing-function: ease-out;
```

The transition ends slowly.

---

## Ease-In-Out

```css
transition-timing-function: ease-in-out;
```

The transition starts and ends slowly.

---

## Transition Delay

The `transition-delay` property waits before starting the transition.

Example:

```css
transition-delay: 1s;
```

The transition waits one second before beginning.

The shorthand version can include the delay:

```css
transition: background-color 1s ease 0.5s;
```

This means:

- Property: `background-color`
- Duration: `1s`
- Timing function: `ease`
- Delay: `0.5s`

---

## Full Transition Shorthand

The full transition syntax is:

```css
transition:
    property
    duration
    timing-function
    delay;
```

Example:

```css
.box {
    transition: width 1s ease 0.5s;
}
```

The duration is required for the transition to be visible.

The timing function and delay are optional.

---

## Where to Add the Transition

The transition should normally be added to the element's regular style.

Correct example:

```css
.box {
    background-color: blue;
    transition: background-color 1s;
}

.box:hover {
    background-color: green;
}
```

This allows the transition to work when the mouse enters and leaves the element.

Adding the transition only inside `:hover` may prevent a smooth return to the original style.

---

## CSS Used in This Lesson

```css
body {
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
    margin-bottom: 20px;
    padding: 20px;
}

.color-box,
.width-box,
.multiple-box {
    width: 220px;
    background-color: lightblue;
    border: 2px solid darkblue;
    padding: 20px;
    text-align: center;
}

.color-box {
    transition: background-color 1s;
}

.color-box:hover {
    background-color: lightgreen;
}

.width-box {
    transition: width 1s;
}

.width-box:hover {
    width: 400px;
}

.transition-button {
    background-color: darkblue;
    color: white;
    border: none;
    padding: 12px 24px;
    cursor: pointer;
    transition: background-color 0.5s;
}

.transition-button:hover {
    background-color: darkgreen;
}

.multiple-box {
    transition:
        width 1s,
        background-color 1s,
        color 1s;
}

.multiple-box:hover {
    width: 400px;
    background-color: darkred;
    color: white;
}
```

---

## Output

When the webpage is opened in the browser:

- The first box smoothly changes its background color.
- The second box smoothly increases its width.
- The button smoothly changes its background color.
- The final box smoothly changes its width, background color, and text color.
- The elements return smoothly to their original styles when the mouse moves away.

---

## Practice

Make the color transition slower:

```css
.color-box {
    transition: background-color 2s;
}
```

Make the width transition faster:

```css
.width-box {
    transition: width 0.5s;
}
```

Use a linear transition:

```css
.width-box {
    transition: width 1s linear;
}
```

Add a delay:

```css
.transition-button {
    transition: background-color 0.5s ease 1s;
}
```

Change multiple properties:

```css
.multiple-box:hover {
    width: 500px;
    background-color: darkgreen;
    color: yellow;
}
```

Save the file and refresh the browser after each change.

---

## Important Note

CSS transitions require:

1. An original property value
2. A changed property value
3. A transition duration

Example:

```css
.box {
    width: 200px;
    transition: width 1s;
}

.box:hover {
    width: 400px;
}
```

Without the duration, the change happens immediately.

---

## Easy Way to Remember

```text
transition-property
```

Chooses the property that should change smoothly.

```text
transition-duration
```

Controls how long the transition takes.

```text
transition-timing-function
```

Controls the transition speed pattern.

```text
transition-delay
```

Controls how long the browser waits before starting.

```text
transition
```

Combines the transition settings into one property.

---

## What I Learned

In this lesson, I learned:

- CSS transitions create smooth style changes.
- A transition needs an original and changed property value.
- `transition-property` selects the changing property.
- `transition-duration` controls how long the change takes.
- `transition-timing-function` controls the speed pattern.
- `transition-delay` delays the start.
- Multiple properties can receive separate transitions.
- The transition should normally be added to the element's regular style.