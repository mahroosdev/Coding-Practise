# 23 - CSS Flexbox

## Introduction

In the previous lesson, I learned how `z-index` controls the stacking order of overlapping elements.

In this lesson, I am learning how CSS Flexbox is used to arrange elements in rows or columns.

Flexbox makes it easier to align elements, control spacing, and build flexible webpage layouts.

---

## What is CSS Flexbox?

Flexbox stands for **Flexible Box Layout**.

It is used to arrange elements inside a container.

Flexbox contains two main parts:

- Flex container
- Flex items

The parent element becomes the flex container.

The elements inside it become flex items.

---

## Creating a Flex Container

The `display: flex` property changes an element into a flex container.

Example:

```css
.container {
    display: flex;
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

The three boxes appear beside each other.

---

## Basic Flexbox Example

```css
.basic-container {
    display: flex;
    gap: 10px;
}
```

The `display: flex` property places the boxes in a row.

The `gap` property adds space between them.

---

## Flex Container and Flex Items

In this example:

```html
<div class="basic-container">

    <div class="box">Box 1</div>

    <div class="box">Box 2</div>

    <div class="box">Box 3</div>

</div>
```

The element with the class `basic-container` is the flex container.

The elements with the class `box` are flex items.

---

## Justify Content

The `justify-content` property controls the horizontal alignment of flex items when the direction is a row.

Example:

```css
.center-container {
    display: flex;
    justify-content: center;
}
```

This places all flex items in the center.

---

## Common Justify Content Values

```text
flex-start
center
flex-end
space-between
space-around
space-evenly
```

---

## Flex Start

```css
justify-content: flex-start;
```

The items appear at the beginning of the container.

This is the default value.

---

## Center

```css
justify-content: center;
```

The items appear in the center of the container.

---

## Flex End

```css
justify-content: flex-end;
```

The items appear at the end of the container.

---

## Space Between

```css
justify-content: space-between;
```

The first item appears at the beginning.

The final item appears at the end.

The remaining space is placed between the items.

Example:

```css
.space-between-container {
    display: flex;
    justify-content: space-between;
}
```

---

## Gap

The `gap` property adds space between flex items.

Example:

```css
.basic-container {
    gap: 10px;
}
```

This adds ten pixels of space between each box.

The `gap` property is easier than adding separate margins to every item.

---

## Align Items

The `align-items` property controls alignment across the other direction.

When flex items are displayed in a row, `align-items` controls their vertical alignment.

Example:

```css
.vertical-container {
    display: flex;
    align-items: center;
    height: 200px;
}
```

The items appear vertically centered inside the container.

---

## Common Align Items Values

```text
stretch
flex-start
center
flex-end
```

---

## Stretch

```css
align-items: stretch;
```

The items stretch to fill the available space when their size allows it.

This is the default value.

---

## Flex Start

```css
align-items: flex-start;
```

The items appear at the top of the container.

---

## Center

```css
align-items: center;
```

The items appear in the vertical center.

---

## Flex End

```css
align-items: flex-end;
```

The items appear at the bottom of the container.

---

## Flex Direction

The `flex-direction` property controls the direction of flex items.

Common values include:

```text
row
column
row-reverse
column-reverse
```

---

## Row Direction

```css
flex-direction: row;
```

The items appear from left to right.

This is the default direction.

---

## Column Direction

```css
.column-container {
    display: flex;
    flex-direction: column;
}
```

The items appear from top to bottom.

---

## Row Reverse

```css
flex-direction: row-reverse;
```

The items appear in a reversed horizontal order.

---

## Column Reverse

```css
flex-direction: column-reverse;
```

The items appear in a reversed vertical order.

---

## Flex Wrap

By default, flex items try to remain on one line.

The `flex-wrap` property allows them to move to another line when there is not enough space.

Example:

```css
.wrap-container {
    display: flex;
    flex-wrap: wrap;
}
```

When the browser becomes narrower, some boxes move to the next row.

---

## Common Flex Wrap Values

```text
nowrap
wrap
wrap-reverse
```

### No Wrap

```css
flex-wrap: nowrap;
```

All items remain on one line.

This is the default value.

### Wrap

```css
flex-wrap: wrap;
```

Items move to another row when needed.

### Wrap Reverse

```css
flex-wrap: wrap-reverse;
```

Items wrap in the reverse direction.

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
    width: 100px;
    background-color: lightyellow;
    border: 2px solid darkgreen;
    padding: 20px;
    text-align: center;
}

.basic-container {
    display: flex;
    gap: 10px;
}

.center-container {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.space-between-container {
    display: flex;
    justify-content: space-between;
}

.vertical-container {
    display: flex;
    align-items: center;
    height: 200px;
    gap: 10px;
}

.column-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.wrap-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
```

---

## Output

When the webpage is opened in the browser:

- The basic flex items appear in one row.
- The centered items appear in the middle of their container.
- The space-between items spread across the container.
- The vertical items appear centered inside a taller container.
- The column items appear from top to bottom.
- The wrapped items move to another line when there is not enough space.

---

## Practice

Center the basic flex items:

```css
.basic-container {
    justify-content: center;
}
```

Move the vertical items to the bottom:

```css
.vertical-container {
    align-items: flex-end;
}
```

Reverse the column direction:

```css
.column-container {
    flex-direction: column-reverse;
}
```

Change the spacing:

```css
.wrap-container {
    gap: 30px;
}
```

Resize the browser window and observe how the wrapped items move between rows.

---

## Important Note

Properties such as:

```css
justify-content
align-items
flex-direction
flex-wrap
gap
```

are added to the flex container.

They control how the flex items are arranged inside it.

---

## Easy Way to Remember

```text
display: flex
```

Turns the parent into a flex container.

```text
justify-content
```

Controls item alignment along the main direction.

```text
align-items
```

Controls alignment across the other direction.

```text
flex-direction
```

Controls whether items use a row or column.

```text
flex-wrap
```

Controls whether items can move to another line.

```text
gap
```

Adds space between items.

---

## What I Learned

In this lesson, I learned:

- Flexbox arranges elements inside a container.
- `display: flex` creates a flex container.
- Child elements become flex items.
- `justify-content` controls alignment along the main direction.
- `align-items` controls alignment across the other direction.
- `flex-direction` changes items between rows and columns.
- `flex-wrap` allows items to move to another line.
- `gap` adds space between flex items.