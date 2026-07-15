# 22 - CSS Z-Index

## Introduction

In the previous lesson, I learned how the CSS `position` property controls where elements appear on a webpage.

In this lesson, I am learning how the `z-index` property controls which element appears in front when elements overlap.

---

## What is Z-Index?

The `z-index` property controls the stacking order of positioned elements.

When two or more elements overlap, the element with the higher `z-index` value appears in front.

Example:

```css
.box-one {
    z-index: 1;
}

.box-two {
    z-index: 2;
}
```

Because `2` is higher than `1`, `.box-two` appears in front of `.box-one`.

---

## Basic Syntax

```css
selector {
    z-index: number;
}
```

Example:

```css
.box {
    z-index: 3;
}
```

---

## Positioned Elements

The `z-index` property is mainly used with positioned elements.

Examples include:

```css
position: relative;
position: absolute;
position: fixed;
position: sticky;
```

In this lesson, the boxes use:

```css
position: absolute;
```

This allows them to overlap.

---

## Parent Container

The parent container uses:

```css
.box-container {
    position: relative;
}
```

This gives the absolutely positioned boxes a reference area.

Without a positioned parent, the boxes may be placed relative to another ancestor or the page.

---

## Shared Box Styles

All three boxes use the same basic styles.

```css
.box {
    position: absolute;
    width: 180px;
    height: 120px;
    color: white;
    border: 2px solid black;
    padding: 20px;
}
```

Each box has:

- Absolute positioning
- A fixed width
- A fixed height
- White text
- A black border
- Padding inside the box

---

## First Box

```css
.box-one {
    top: 20px;
    left: 20px;
    background-color: darkblue;
    z-index: 1;
}
```

This box has the lowest `z-index` value.

It appears behind the other boxes.

---

## Second Box

```css
.box-two {
    top: 70px;
    left: 90px;
    background-color: darkgreen;
    z-index: 2;
}
```

This box has a higher value than Box One.

It appears in front of Box One but behind Box Three.

---

## Third Box

```css
.box-three {
    top: 120px;
    left: 160px;
    background-color: darkred;
    z-index: 3;
}
```

This box has the highest `z-index` value.

It appears in front of the other boxes.

---

## Stacking Order

The stacking order in this lesson is:

```text
Box Three → z-index: 3
Box Two   → z-index: 2
Box One   → z-index: 1
```

The higher the number, the closer the element appears to the front.

---

## Negative Z-Index

A negative value can place an element behind another element.

Example:

```css
.box-one {
    z-index: -1;
}
```

Be careful when using negative values because the element may move behind its parent or become difficult to see.

---

## Same Z-Index Value

If overlapping elements use the same `z-index` value, the element written later in the HTML usually appears in front.

Example:

```css
.box-one {
    z-index: 1;
}

.box-two {
    z-index: 1;
}
```

Because `.box-two` appears after `.box-one` in the HTML, it may display above it.

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
    margin: 20px;
    padding: 20px;
}

.box-container {
    position: relative;
    height: 300px;
}

.box {
    position: absolute;
    width: 180px;
    height: 120px;
    color: white;
    border: 2px solid black;
    padding: 20px;
}

.box-one {
    top: 20px;
    left: 20px;
    background-color: darkblue;
    z-index: 1;
}

.box-two {
    top: 70px;
    left: 90px;
    background-color: darkgreen;
    z-index: 2;
}

.box-three {
    top: 120px;
    left: 160px;
    background-color: darkred;
    z-index: 3;
}
```

---

## Output

When the webpage is opened in the browser:

- Three boxes overlap each other.
- Box One appears at the back.
- Box Two appears in the middle.
- Box Three appears at the front.
- The stacking order follows the `z-index` values.

---

## Practice

Move Box One to the front:

```css
.box-one {
    z-index: 5;
}
```

Move Box Three to the back:

```css
.box-three {
    z-index: 0;
}
```

Give all boxes the same value:

```css
.box-one,
.box-two,
.box-three {
    z-index: 1;
}
```

Observe which box appears in front.

Save the file and refresh the browser after each change.

---

## Important Note

A high `z-index` value does not always guarantee that an element appears above everything.

Elements can belong to different stacking contexts, which may affect how `z-index` works.

For beginner practice, use `z-index` with elements inside the same positioned container.

---

## What I Learned

In this lesson, I learned:

- The `z-index` property controls stacking order.
- A higher `z-index` value appears in front.
- A lower value appears behind.
- Positioned elements can overlap.
- A relative parent can contain absolute children.
- Negative values can place an element behind others.
- When values are equal, HTML order can affect which element appears in front.