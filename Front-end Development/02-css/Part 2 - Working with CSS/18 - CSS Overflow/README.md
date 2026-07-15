# 18 - CSS Overflow

## Introduction

In the previous lesson, I learned how the `display` property controls how HTML elements appear.

In this lesson, I am learning how CSS handles content that is too large for its container.

The `overflow` property controls what happens when content does not fit inside an element.

---

## What is CSS Overflow?

Overflow happens when the content inside an element is larger than the available width or height.

Example:

```css
.box {
    width: 300px;
    height: 80px;
}
```

If the content needs more space than the box provides, it may overflow outside the box.

CSS provides the `overflow` property to control this behavior.

---

## Overflow Syntax

```css
selector {
    overflow: value;
}
```

Common overflow values include:

```text
visible
hidden
scroll
auto
```

---

## Visible Overflow

The value `visible` allows extra content to appear outside the element.

```css
.visible-box {
    overflow: visible;
}
```

This is the default overflow behavior.

The content is not hidden, even when it does not fit inside the box.

---

## Hidden Overflow

The value `hidden` hides any content that does not fit inside the element.

```css
.hidden-box {
    overflow: hidden;
}
```

The extra content is cut off.

Users cannot scroll to view the hidden content.

---

## Scroll Overflow

The value `scroll` adds scrollbars to the element.

```css
.scroll-box {
    overflow: scroll;
}
```

Users can scroll inside the box to view the remaining content.

Scrollbars may appear even when the content fits inside the box.

---

## Auto Overflow

The value `auto` adds scrollbars only when they are needed.

```css
.auto-box {
    overflow: auto;
}
```

If the content fits, no scrollbar appears.

If the content is too large, the browser adds a scrollbar.

This is often more practical than always using `scroll`.

---

## Shared Box Styles

All four boxes use the same basic styles.

```css
.visible-box,
.hidden-box,
.scroll-box,
.auto-box {
    width: 300px;
    height: 80px;
    background-color: lightyellow;
    border: 2px solid darkgreen;
    padding: 10px;
}
```

This gives every box:

- A width of `300px`
- A height of `80px`
- A light-yellow background
- A dark-green border
- Space inside the border

Only the overflow value changes.

---

## Overflow Value Comparison

### Visible

```css
overflow: visible;
```

- Extra content appears outside the box.
- This is the default behavior.

### Hidden

```css
overflow: hidden;
```

- Extra content is hidden.
- No scrollbar is provided.

### Scroll

```css
overflow: scroll;
```

- Scrollbars are always added.
- Users can scroll to view the content.

### Auto

```css
overflow: auto;
```

- Scrollbars appear only when needed.
- This is useful when content size may change.

---

## Horizontal and Vertical Overflow

CSS can control horizontal and vertical overflow separately.

### Horizontal Overflow

```css
overflow-x: auto;
```

This controls content overflowing from the left or right.

### Vertical Overflow

```css
overflow-y: auto;
```

This controls content overflowing from the top or bottom.

Example:

```css
.box {
    overflow-x: hidden;
    overflow-y: auto;
}
```

This hides horizontal overflow and allows vertical scrolling.

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

.visible-box,
.hidden-box,
.scroll-box,
.auto-box {
    width: 300px;
    height: 80px;
    background-color: lightyellow;
    border: 2px solid darkgreen;
    padding: 10px;
}

.visible-box {
    overflow: visible;
}

.hidden-box {
    overflow: hidden;
}

.scroll-box {
    overflow: scroll;
}

.auto-box {
    overflow: auto;
}
```

---

## Output

When the webpage is opened in the browser:

- The visible box allows content to continue outside its border.
- The hidden box cuts off extra content.
- The scroll box always displays scrollbars.
- The auto box displays scrollbars only when needed.

---

## Practice

Try increasing the height of the boxes:

```css
.visible-box,
.hidden-box,
.scroll-box,
.auto-box {
    height: 140px;
}
```

Try changing the hidden box to auto:

```css
.hidden-box {
    overflow: auto;
}
```

Try allowing only vertical scrolling:

```css
.scroll-box {
    overflow-x: hidden;
    overflow-y: scroll;
}
```

Save the file and refresh the browser after each change.

---

## Important Note

Be careful when using:

```css
overflow: hidden;
```

It can hide important content if the box is too small.

Use it only when hiding overflow is intentional.

---

## What I Learned

In this lesson, I learned:

- Overflow happens when content is larger than its container.
- The `overflow` property controls extra content.
- `visible` allows content outside the box.
- `hidden` removes extra visible content.
- `scroll` always adds scrollbars.
- `auto` adds scrollbars only when needed.
- `overflow-x` and `overflow-y` control horizontal and vertical overflow separately.