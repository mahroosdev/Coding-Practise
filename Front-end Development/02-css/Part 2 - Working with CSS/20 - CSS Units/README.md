# 20 - CSS Units

## Introduction

In the previous lesson, I learned how to control transparency using CSS opacity.

In this lesson, I am learning how CSS units are used to define sizes and spacing.

CSS units can be used with properties such as:

- Width
- Height
- Font size
- Margin
- Padding
- Border width

---

## What is a CSS Unit?

A CSS unit tells the browser how large or small a value should be.

Example:

```css
width: 300px;
```

In this example:

- `300` is the value.
- `px` is the unit.

---

## Common CSS Units

This lesson introduces:

```text
px
%
em
rem
vw
```

These units are commonly used when building webpages.

---

## Pixels

Pixels use the `px` unit.

Example:

```css
.pixel-box {
    width: 300px;
    font-size: 18px;
}
```

Pixels create fixed sizes.

The box remains 300 pixels wide even when the browser window changes.

---

## Percentage

Percentage values use the `%` symbol.

Example:

```css
.percentage-box {
    width: 70%;
}
```

This makes the element use 70% of the available width of its parent.

The width changes when the parent or browser size changes.

---

## EM Unit

The `em` unit is relative to the font size of the current element or its parent.

Example:

```css
.em-box {
    font-size: 1.5em;
}
```

If the parent font size is `16px`, then:

```text
1em = 16px
1.5em = 24px
2em = 32px
```

The `em` unit can change depending on where the element is placed.

---

## REM Unit

The `rem` unit is relative to the font size of the root `<html>` element.

Example:

```css
html {
    font-size: 16px;
}

.rem-box {
    font-size: 1.5rem;
}
```

Because the root font size is `16px`:

```text
1rem = 16px
1.5rem = 24px
2rem = 32px
```

Unlike `em`, the `rem` unit always uses the root font size.

---

## EM and REM Difference

### EM

```css
font-size: 1.5em;
```

The size depends on the current or parent element.

### REM

```css
font-size: 1.5rem;
```

The size depends on the root `<html>` font size.

A simple way to remember:

```text
em  → Relative to the current area

rem → Relative to the root element
```

---

## Viewport Width

The `vw` unit means viewport width.

Example:

```css
.viewport-box {
    width: 50vw;
}
```

`1vw` equals 1% of the browser window width.

Therefore:

```text
50vw = 50% of the browser window width
```

The box changes size when the browser window changes.

---

## Viewport Height

CSS also provides the `vh` unit.

```css
height: 50vh;
```

`1vh` equals 1% of the browser window height.

Example:

```text
50vh = 50% of the browser window height
```

The example page only uses `vw`, but `vh` works in a similar way.

---

## Fixed and Relative Units

### Fixed Unit

```text
px
```

A fixed unit normally stays the same size.

Example:

```css
width: 300px;
```

### Relative Units

```text
%
em
rem
vw
vh
```

Relative units depend on another size, such as:

- A parent element
- The root font size
- The browser window

---

## CSS Used in This Lesson

```css
html {
    font-size: 16px;
}

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

.pixel-box,
.percentage-box,
.em-box,
.rem-box,
.viewport-box {
    background-color: lightyellow;
    border: 2px solid darkgreen;
    margin-bottom: 10px;
    padding: 10px;
}

.pixel-box {
    width: 300px;
    font-size: 18px;
}

.percentage-box {
    width: 70%;
}

.em-box {
    font-size: 1.5em;
}

.rem-box {
    font-size: 1.5rem;
}

.viewport-box {
    width: 50vw;
}
```

---

## Output

When the webpage is opened in the browser:

- The pixel box has a fixed width.
- The percentage box uses 70% of its parent width.
- The `em` text size depends on its current font-size context.
- The `rem` text size depends on the root font size.
- The viewport box uses half of the browser window width.

---

## Practice

Try changing the pixel width:

```css
.pixel-box {
    width: 500px;
}
```

Try changing the percentage width:

```css
.percentage-box {
    width: 90%;
}
```

Try increasing the `em` size:

```css
.em-box {
    font-size: 2em;
}
```

Try increasing the `rem` size:

```css
.rem-box {
    font-size: 2rem;
}
```

Try changing the viewport width:

```css
.viewport-box {
    width: 80vw;
}
```

Save the file and resize the browser window to compare the results.

---

## Important Note

Fixed units are useful when an exact size is needed.

Relative units are useful when a webpage should adjust to different screen sizes.

Responsive websites often use a combination of both.

---

## What I Learned

In this lesson, I learned:

- CSS units define sizes and spacing.
- `px` creates a fixed size.
- `%` depends on the parent element.
- `em` depends on the current font-size context.
- `rem` depends on the root font size.
- `vw` depends on the browser width.
- `vh` depends on the browser height.
- Relative units are useful for flexible layouts.