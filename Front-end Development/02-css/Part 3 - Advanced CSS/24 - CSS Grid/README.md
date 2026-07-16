# 24 - CSS Grid

## Introduction

In the previous lesson, I learned how Flexbox arranges elements in rows and columns.

In this lesson, I am learning how CSS Grid creates layouts using rows and columns together.

CSS Grid is useful for creating page layouts, image galleries, cards, and other structured designs.

---

## What is CSS Grid?

CSS Grid is a layout system used to arrange elements in rows and columns.

Grid contains two main parts:

- Grid container
- Grid items

The parent element becomes the grid container.

The elements inside it become grid items.

---

## Creating a Grid Container

The `display: grid` property changes an element into a grid container.

```css
.container {
    display: grid;
}
```

HTML example:

```html
<div class="container">

    <div>Box 1</div>

    <div>Box 2</div>

    <div>Box 3</div>

</div>
```

The child elements become grid items.

---

## Creating Grid Columns

The `grid-template-columns` property controls the number and size of columns.

Example:

```css
.basic-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

This creates three equal columns.

---

## The `fr` Unit

The `fr` unit means a fraction of the available space.

Example:

```css
grid-template-columns: 1fr 1fr 1fr;
```

This creates three equal columns.

Each column receives one equal fraction of the available width.

---

## The `repeat()` Function

The `repeat()` function avoids writing the same value several times.

Instead of:

```css
grid-template-columns: 1fr 1fr 1fr;
```

You can write:

```css
grid-template-columns: repeat(3, 1fr);
```

Both create three equal columns.

---

## Basic Grid Example

```css
.basic-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
```

This creates:

- Three equal columns
- Two rows for six boxes
- Ten pixels of space between items

---

## Grid Gap

The `gap` property adds space between grid items.

```css
.basic-grid {
    gap: 10px;
}
```

This adds spacing between both rows and columns.

---

## Unequal Columns

Grid columns do not need to have equal sizes.

```css
.unequal-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
}
```

This creates two columns.

The second column receives twice as much space as the first column.

```text
First column  → 1 fraction
Second column → 2 fractions
```

---

## Spanning Multiple Columns

A grid item can cover more than one column.

```css
.wide-box {
    grid-column: 1 / 3;
}
```

This means the item starts at grid line 1 and ends at grid line 3.

It covers two columns.

---

## Understanding Grid Lines

A two-column grid has three vertical grid lines.

```text
Line 1 | Column 1 | Line 2 | Column 2 | Line 3
```

Using:

```css
grid-column: 1 / 3;
```

makes the item span from the first line to the third line.

---

## Responsive Grid

A responsive grid can automatically change the number of columns.

```css
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 10px;
}
```

This allows the layout to adjust when the browser width changes.

---

## The `auto-fit` Value

The `auto-fit` value creates as many columns as can fit inside the container.

```css
repeat(auto-fit, ...)
```

When the browser becomes narrower, grid items move to new rows.

---

## The `minmax()` Function

The `minmax()` function gives each column a minimum and maximum size.

```css
minmax(160px, 1fr)
```

This means:

- The column should not become smaller than `160px`.
- It can grow to use available space.

---

## Grid and Flexbox Difference

### Flexbox

Flexbox mainly controls one direction at a time.

```text
Row or column
```

It is useful for:

- Navigation menus
- Button groups
- Aligning items
- Simple card rows

### Grid

Grid controls rows and columns together.

```text
Rows and columns
```

It is useful for:

- Page layouts
- Galleries
- Card sections
- Dashboard layouts

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

.box {
    background-color: lightyellow;
    border: 2px solid darkgreen;
    padding: 20px;
    text-align: center;
}

.basic-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.unequal-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 10px;
}

.spanning-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}

.wide-box {
    grid-column: 1 / 3;
}

.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 10px;
}
```

---

## Output

When the webpage is opened in the browser:

- The basic grid displays six boxes in three equal columns.
- The unequal grid displays one narrow and one wide column.
- The wide box spans across two columns.
- The responsive grid changes its number of columns when the browser is resized.
- All grid items have equal spacing.

---

## Practice

Change the basic grid to two columns:

```css
.basic-grid {
    grid-template-columns: repeat(2, 1fr);
}
```

Create four equal columns:

```css
.basic-grid {
    grid-template-columns: repeat(4, 1fr);
}
```

Change the unequal grid:

```css
.unequal-grid {
    grid-template-columns: 2fr 1fr;
}
```

Make the responsive columns wider:

```css
.responsive-grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
```

Resize the browser window and observe how the responsive grid changes.

---

## Important Note

Properties such as:

```css
grid-template-columns
gap
```

are placed on the grid container.

Properties such as:

```css
grid-column
```

are placed on individual grid items.

---

## Easy Way to Remember

```text
display: grid
```

Creates a grid container.

```text
grid-template-columns
```

Controls the number and size of columns.

```text
fr
```

Divides available space into fractions.

```text
gap
```

Adds space between grid items.

```text
grid-column
```

Makes an item span across columns.

```text
auto-fit and minmax()
```

Help create responsive grid layouts.

---

## What I Learned

In this lesson, I learned:

- `display: grid` creates a grid container.
- Grid arranges elements using rows and columns.
- `grid-template-columns` controls the columns.
- The `fr` unit divides available space.
- The `repeat()` function creates repeated columns.
- The `gap` property adds spacing between items.
- `grid-column` allows an item to span columns.
- `auto-fit` and `minmax()` help create responsive layouts.