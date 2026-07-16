# 25 - CSS Pseudo-Classes

## Introduction

In the previous lesson, I learned how CSS Grid arranges elements using rows and columns.

In this lesson, I am learning how CSS pseudo-classes select elements in a special state or position.

Pseudo-classes can apply styles when:

- A user moves the mouse over an element
- A user clicks inside a form field
- A link has already been visited
- An element is the first or last child
- An element appears in a specific position

---

## What is a Pseudo-Class?

A pseudo-class selects an element based on its state or position.

Basic syntax:

```css
selector:pseudo-class {
    property: value;
}
```

Example:

```css
button:hover {
    background-color: darkgreen;
}
```

The button background changes when the mouse moves over it.

---

## The Colon Symbol

Pseudo-classes use one colon:

```text
:
```

Example:

```css
a:hover
```

In this selector:

- `a` selects the link.
- `:` introduces the pseudo-class.
- `hover` describes the state.

---

## Hover Pseudo-Class

The `:hover` pseudo-class applies styles when the mouse is placed over an element.

Example:

```css
.action-button:hover {
    background-color: darkgreen;
}
```

The button starts with a dark-blue background.

When the mouse moves over it, the background changes to dark green.

---

## Link Hover Example

```css
.website-link:hover {
    color: darkred;
}
```

The link becomes dark red when the mouse moves over it.

The normal link style is:

```css
.website-link {
    color: darkblue;
}
```

---

## Visited Pseudo-Class

The `:visited` pseudo-class selects a link that has already been opened.

Example:

```css
.website-link:visited {
    color: purple;
}
```

After the user visits the linked page, the link may appear purple.

Browser privacy rules limit some styles that can be applied to visited links.

Basic color changes are commonly used.

---

## Focus Pseudo-Class

The `:focus` pseudo-class applies when an element is selected for user input.

Example:

```css
input:focus {
    border-color: darkblue;
    outline: none;
}
```

When the user clicks inside the input field:

- The border becomes dark blue.
- The browser's default outline is removed.

The focus state helps users understand which form field is active.

---

## First Child Pseudo-Class

The `:first-child` pseudo-class selects an element when it is the first child inside its parent.

Example:

```css
.paragraph-group p:first-child {
    color: darkred;
    font-weight: bold;
}
```

HTML:

```html
<div class="paragraph-group">

    <p>First paragraph</p>

    <p>Second paragraph</p>

    <p>Third paragraph</p>

</div>
```

Only the first paragraph receives the dark-red color and bold text.

---

## Last Child Pseudo-Class

The `:last-child` pseudo-class selects the final child inside a parent.

Example:

```css
.item-list li:last-child {
    color: darkgreen;
    font-weight: bold;
}
```

HTML:

```html
<ul class="item-list">

    <li>HTML</li>

    <li>CSS</li>

    <li>JavaScript</li>

</ul>
```

Only the final list item is styled.

---

## Nth Child Pseudo-Class

The `:nth-child()` pseudo-class selects elements based on their position.

Example:

```css
.number-list p:nth-child(even) {
    background-color: lightblue;
}
```

The value `even` selects every even-numbered element.

This means:

```text
Item 2
Item 4
Item 6
```

will receive the style.

---

## Odd and Even Values

### Even Elements

```css
p:nth-child(even) {
    background-color: lightblue;
}
```

This selects positions:

```text
2, 4, 6, 8
```

### Odd Elements

```css
p:nth-child(odd) {
    background-color: lightyellow;
}
```

This selects positions:

```text
1, 3, 5, 7
```

---

## Selecting a Specific Child

A number can be used inside `:nth-child()`.

Example:

```css
p:nth-child(2) {
    color: darkred;
}
```

This selects the second paragraph inside its parent.

Another example:

```css
li:nth-child(3) {
    font-weight: bold;
}
```

This selects the third list item.

---

## Common Pseudo-Classes

Some common pseudo-classes include:

```text
:hover
:focus
:visited
:first-child
:last-child
:nth-child()
```

---

## Pseudo-Class Examples

### Hover

```css
button:hover {
    background-color: darkgreen;
}
```

Used when the mouse is over an element.

### Focus

```css
input:focus {
    border-color: darkblue;
}
```

Used when a form element is selected.

### Visited

```css
a:visited {
    color: purple;
}
```

Used for links that have already been opened.

### First Child

```css
p:first-child {
    color: red;
}
```

Selects the first child.

### Last Child

```css
li:last-child {
    color: green;
}
```

Selects the final child.

### Nth Child

```css
p:nth-child(even) {
    background-color: lightblue;
}
```

Selects children based on their position.

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

.website-link {
    color: darkblue;
    font-size: 18px;
}

.website-link:hover {
    color: darkred;
}

.website-link:visited {
    color: purple;
}

.action-button {
    background-color: darkblue;
    color: white;
    border: none;
    padding: 12px 20px;
    cursor: pointer;
}

.action-button:hover {
    background-color: darkgreen;
}

label {
    display: block;
    margin-bottom: 8px;
}

input {
    width: 300px;
    border: 2px solid gray;
    padding: 10px;
}

input:focus {
    border-color: darkblue;
    outline: none;
}

.paragraph-group p:first-child {
    color: darkred;
    font-weight: bold;
}

.item-list li:last-child {
    color: darkgreen;
    font-weight: bold;
}

.number-list p:nth-child(even) {
    background-color: lightblue;
    padding: 10px;
}
```

---

## Output

When the webpage is opened in the browser:

- The link changes color when the mouse moves over it.
- A visited link may appear purple.
- The button changes from dark blue to dark green on hover.
- The input border changes when the user clicks inside it.
- The first paragraph appears dark red and bold.
- The last list item appears dark green and bold.
- Every even paragraph receives a light-blue background.

---

## Practice

Change the button hover color:

```css
.action-button:hover {
    background-color: darkred;
}
```

Style the first list item:

```css
.item-list li:first-child {
    color: darkblue;
}
```

Style the third paragraph:

```css
.number-list p:nth-child(3) {
    background-color: lightgreen;
}
```

Style all odd paragraphs:

```css
.number-list p:nth-child(odd) {
    background-color: lightyellow;
}
```

Change the input focus background:

```css
input:focus {
    background-color: lightyellow;
}
```

Save the file and refresh the browser after each change.

---

## Important Note

Pseudo-classes do not create new HTML elements.

They select existing elements based on:

- State
- User interaction
- Position inside a parent

---

## Easy Way to Remember

```text
:hover
```

The mouse is over the element.

```text
:focus
```

The element is selected for input.

```text
:visited
```

The link has already been opened.

```text
:first-child
```

The element is the first child.

```text
:last-child
```

The element is the final child.

```text
:nth-child()
```

The element is selected by its position.

---

## What I Learned

In this lesson, I learned:

- Pseudo-classes select elements in special states.
- Pseudo-classes use one colon.
- `:hover` responds to mouse movement.
- `:focus` styles a selected form element.
- `:visited` styles an opened link.
- `:first-child` selects the first child.
- `:last-child` selects the final child.
- `:nth-child()` selects elements by position.