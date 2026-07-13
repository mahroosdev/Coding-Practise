# 04 - CSS Colors

## Introduction

In the previous lesson, I learned how CSS selectors choose HTML elements.

In this lesson, I am learning how to add colors to text and backgrounds using CSS.

CSS supports different ways of writing colors.

---

## Text Color

The `color` property changes the color of text.

Example:

```css
h1 {
    color: darkblue;
}
```

This changes the heading text to dark blue.

---

## Background Color

The `background-color` property changes the background color of an element.

Example:

```css
body {
    background-color: lightgray;
}
```

This changes the background of the webpage to light gray.

---

## Color Names

CSS includes simple color names.

Example:

```css
.color-name {
    color: green;
}
```

Some common color names are:

```text
red
blue
green
black
white
yellow
orange
purple
gray
```

Color names are easy to understand and useful for basic practice.

---

## HEX Colors

HEX colors begin with a hash symbol (`#`).

Example:

```css
.hex-color {
    color: #8b0000;
}
```

A HEX color usually contains six characters.

Example:

```text
#ff0000
```

This represents red.

Other examples:

```text
#000000  Black
#ffffff  White
#0000ff  Blue
#008000  Green
```

---

## RGB Colors

RGB stands for:

- Red
- Green
- Blue

Example:

```css
.rgb-color {
    color: rgb(128, 0, 128);
}
```

Each number can have a value between `0` and `255`.

Example:

```text
rgb(255, 0, 0)
```

This represents red.

---

## Background Color Example

```css
.background-example {
    color: black;
    background-color: lightyellow;
}
```

This changes the text color to black and the paragraph background to light yellow.

---

## CSS Used in This Lesson

```css
body {
    background-color: lightgray;
}

h1 {
    color: darkblue;
}

.color-name {
    color: green;
}

.hex-color {
    color: #8b0000;
}

.rgb-color {
    color: rgb(128, 0, 128);
}

.background-example {
    color: black;
    background-color: lightyellow;
}
```

---

## Output

When the webpage is opened in the browser:

- The page background appears light gray.
- The heading appears dark blue.
- The first paragraph appears green.
- The second paragraph uses a HEX color.
- The third paragraph uses an RGB color.
- The final paragraph has a light-yellow background.

---

## Practice

Try changing the colors inside `style.css`.

Example:

```css
.color-name {
    color: orange;
}

.hex-color {
    color: #0000ff;
}

.rgb-color {
    color: rgb(255, 0, 0);
}

.background-example {
    background-color: lightblue;
}
```

Save the file and refresh the browser to view the changes.

---

## What I Learned

In this lesson, I learned:

- The `color` property changes text color.
- The `background-color` property changes an element's background.
- CSS colors can be written using color names.
- HEX colors begin with `#`.
- RGB colors use red, green, and blue values.