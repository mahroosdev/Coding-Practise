# 17 - CSS Display

## Introduction

In the previous lesson, I learned how to style HTML forms.

In this lesson, I am learning how the CSS `display` property controls the way HTML elements appear on a webpage.

The display property can control whether an element:

- Starts on a new line
- Stays beside another element
- Accepts width and height
- Is hidden from the page

---

## What is the Display Property?

The `display` property controls how an HTML element is shown.

Basic syntax:

```css
selector {
    display: value;
}
```

Common display values include:

```text
block
inline
inline-block
none
```

---

## Block Elements

A block element normally starts on a new line.

It uses the available width unless another width is provided.

Example:

```css
.block-box {
    display: block;
}
```

In this lesson, the block elements also use:

```css
.block-box {
    width: 200px;
    background-color: lightblue;
    border: 2px solid darkblue;
    margin-bottom: 10px;
    padding: 10px;
}
```

Each block box appears on its own line.

---

## Inline Elements

An inline element stays on the same line as other inline elements.

Example:

```css
.inline-box {
    display: inline;
}
```

The two inline elements appear beside each other.

Inline elements do not normally use width and height in the same way as block elements.

---

## Inline-Block Elements

The `inline-block` value combines features of block and inline elements.

Example:

```css
.inline-block-box {
    display: inline-block;
}
```

Inline-block elements:

- Stay beside each other
- Can use width
- Can use height
- Can use padding and margins more easily

Example:

```css
.inline-block-box {
    display: inline-block;
    width: 160px;
}
```

The two boxes stay on the same line while keeping their assigned width.

---

## Display None

The value `none` hides an element.

Example:

```css
.hidden-text {
    display: none;
}
```

The hidden element does not appear on the webpage.

It also does not use any page space.

---

## Block and Inline Comparison

### Block

```css
display: block;
```

- Starts on a new line
- Can use width and height
- Usually takes available horizontal space

### Inline

```css
display: inline;
```

- Stays on the same line
- Uses only the space required by its content
- Does not normally use width and height

### Inline-Block

```css
display: inline-block;
```

- Stays on the same line
- Can use width and height
- Combines inline and block behavior

### None

```css
display: none;
```

- Hides the element
- Removes the element from the page layout

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

.block-box {
    display: block;
    width: 200px;
    background-color: lightblue;
    border: 2px solid darkblue;
    margin-bottom: 10px;
    padding: 10px;
}

.inline-box {
    display: inline;
    background-color: lightyellow;
    border: 2px solid darkgreen;
    padding: 10px;
}

.inline-block-box {
    display: inline-block;
    width: 160px;
    background-color: lightpink;
    border: 2px solid darkred;
    margin-right: 10px;
    padding: 10px;
}

.hidden-text {
    display: none;
}
```

---

## Output

When the webpage is opened in the browser:

- The block elements appear on separate lines.
- The inline elements appear beside each other.
- The inline-block elements appear beside each other and keep their width.
- The hidden paragraph does not appear.

---

## Practice

Change the block elements to inline:

```css
.block-box {
    display: inline;
}
```

Change the inline elements to block:

```css
.inline-box {
    display: block;
}
```

Change the inline-block elements to block:

```css
.inline-block-box {
    display: block;
}
```

Show the hidden paragraph by changing:

```css
.hidden-text {
    display: block;
}
```

Save the CSS file and refresh the browser after each change.

---

## Important Difference

`display: none` hides an element and removes its space from the layout.

```css
.hidden-text {
    display: none;
}
```

The element will behave as though it is not present on the page.

---

## What I Learned

In this lesson, I learned:

- The `display` property controls how an element appears.
- Block elements start on a new line.
- Inline elements remain on the same line.
- Inline-block elements stay on the same line and accept width and height.
- The value `none` hides an element and removes its layout space.