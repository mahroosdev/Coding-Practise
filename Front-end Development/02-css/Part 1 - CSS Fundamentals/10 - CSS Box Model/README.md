# 10 - CSS Box Model

## Introduction

In the previous lessons, I learned about width, height, padding, borders, and margins.

In this lesson, I am learning how these properties work together as the CSS box model.

Every HTML element can be viewed as a box.

---

## What is the CSS Box Model?

The CSS box model explains how the browser calculates the space used by an HTML element.

The box model contains four main parts:

1. Content
2. Padding
3. Border
4. Margin

---

## Box Model Structure

```text
Margin
└── Border
    └── Padding
        └── Content
```

The content is in the center.

Padding, border, and margin are added around the content.

---

## Content

The content is the text, image, or other information inside the element.

Example:

```html
<p>This is the content.</p>
```

In the example page, the heading and paragraph are part of the content.

---

## Padding

Padding creates space between the content and the border.

Example:

```css
.box {
    padding: 20px;
}
```

This adds `20px` of space inside the border.

---

## Border

The border appears around the padding and content.

Example:

```css
.box {
    border: 5px solid darkblue;
}
```

This creates a dark-blue solid border.

---

## Margin

Margin creates space outside the border.

Example:

```css
.box {
    margin: 30px;
}
```

This creates `30px` of space around the element.

---

## Complete Box Model Example

```css
.box {
    width: 300px;
    background-color: white;
    padding: 20px;
    border: 5px solid darkblue;
    margin: 30px;
}
```

This box contains:

- A width of `300px`
- Padding of `20px`
- A border of `5px`
- A margin of `30px`

---

## Understanding the Width

The `width` property controls the width of the content area by default.

Example:

```css
width: 300px;
```

Padding and border are added outside this width.

The total visible width is calculated like this:

```text
Content width
+ Left padding
+ Right padding
+ Left border
+ Right border
```

For this example:

```text
300px content
+ 20px left padding
+ 20px right padding
+ 5px left border
+ 5px right border
= 350px total visible width
```

The margin adds extra space outside the box, but it is not part of the visible box width.

---

## First Box

```css
.box {
    width: 300px;
    background-color: white;
    padding: 20px;
    border: 5px solid darkblue;
    margin: 30px;
}
```

This box has:

- White background
- Solid dark-blue border
- 20 pixels of padding
- 30 pixels of margin

---

## Second Box

```css
.second-box {
    width: 300px;
    background-color: lightyellow;
    padding: 30px;
    border: 3px dashed darkgreen;
    margin: 40px;
}
```

This box uses different padding, border, and margin values.

It helps show how changing these values affects the size and spacing of an element.

---

## CSS Used in This Lesson

```css
body {
    background-color: lightgray;
}

h1 {
    color: darkblue;
}

.box {
    width: 300px;
    background-color: white;
    padding: 20px;
    border: 5px solid darkblue;
    margin: 30px;
}

.second-box {
    width: 300px;
    background-color: lightyellow;
    padding: 30px;
    border: 3px dashed darkgreen;
    margin: 40px;
}
```

---

## Output

When the webpage is opened in the browser:

- The page background appears light gray.
- The first box has a white background and solid border.
- The second box has a light-yellow background and dashed border.
- Padding creates space inside each border.
- Margin creates space outside each border.

---

## Practice

Try changing the padding:

```css
.box {
    padding: 40px;
}
```

Try changing the border width:

```css
.box {
    border: 10px solid darkblue;
}
```

Try changing the margin:

```css
.box {
    margin: 60px;
}
```

Save the file and refresh the browser after each change.

Observe how the size and spacing of the box change.

---

## Easy Way to Remember

```text
Content → What is inside the element

Padding → Space inside the border

Border → Line around the element

Margin → Space outside the border
```

---

## What I Learned

In this lesson, I learned:

- Every HTML element can be viewed as a box.
- The box model contains content, padding, border, and margin.
- Padding creates space inside the border.
- Margin creates space outside the border.
- Borders appear between padding and margin.
- Padding and borders increase the visible size of an element.