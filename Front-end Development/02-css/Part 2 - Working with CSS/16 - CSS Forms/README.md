# 16 - CSS Forms

## Introduction

In the previous lesson, I learned how to style HTML tables.

In this lesson, I am learning how to improve the appearance of HTML forms using CSS.

CSS can change the size, spacing, colors, borders, and behavior of form elements.

---

## HTML Form Elements

This lesson uses the following form elements:

- `<form>`
- `<label>`
- `<input>`
- `<select>`
- `<option>`
- `<textarea>`

The form also contains a submit button.

---

## Styling the Form Container

The form is placed inside a section.

```css
section {
    width: 500px;
    background-color: white;
    border: 2px solid darkblue;
    margin: 20px auto;
    padding: 20px;
}
```

This gives the section:

- A width of `500px`
- A white background
- A dark-blue border
- Space around the section
- Space inside the section

---

## Centering the Form

The section uses:

```css
margin: 20px auto;
```

The first value adds `20px` of space above and below.

The value `auto` centers the section horizontally.

---

## Styling Labels

The `<label>` elements describe each form field.

```css
label {
    display: block;
    color: darkblue;
    font-weight: bold;
    margin-bottom: 8px;
}
```

The `display: block` property places each label on its own line.

The labels also use:

- Dark-blue text
- Bold font
- Space below the label

---

## Styling Form Fields

The input fields, select menu, and textarea share the same styles.

```css
input,
select,
textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid gray;
    margin-bottom: 18px;
    box-sizing: border-box;
}
```

This selector applies the styles to all three types of form controls.

---

## Form Field Width

```css
width: 100%;
```

This makes each form field use the full available width of the form.

---

## Form Field Padding

```css
padding: 10px;
```

This creates space between the text and the field border.

---

## Form Field Border

```css
border: 1px solid gray;
```

This adds a simple gray border around each field.

---

## Space Between Fields

```css
margin-bottom: 18px;
```

This creates space below each form field.

---

## Box Sizing

```css
box-sizing: border-box;
```

This keeps the padding and border inside the element's total width.

Without this property, a field using `width: 100%` may become wider than its container.

---

## Focus Effect

The `:focus` selector applies styles when a user clicks or types inside a form field.

```css
input:focus,
select:focus,
textarea:focus {
    border-color: darkblue;
    outline: none;
}
```

When a field is selected:

- Its border becomes dark blue.
- The browser's default outline is removed.

---

## Textarea Resize

The `resize` property controls how users can resize a textarea.

```css
textarea {
    resize: vertical;
}
```

The value `vertical` allows the textarea to be resized only up and down.

---

## Styling the Submit Button

The submit button is selected using its input type.

```css
input[type="submit"] {
    color: white;
    background-color: darkblue;
    border: none;
    cursor: pointer;
}
```

This gives the button:

- White text
- A dark-blue background
- No border
- A pointer cursor

---

## Attribute Selector

This selector:

```css
input[type="submit"]
```

selects only an `<input>` element whose type is `submit`.

It does not change the text or email input fields.

---

## Submit Button Hover Effect

```css
input[type="submit"]:hover {
    background-color: darkgreen;
}
```

When the mouse moves over the submit button, its background changes to dark green.

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
    width: 500px;
    background-color: white;
    border: 2px solid darkblue;
    margin: 20px auto;
    padding: 20px;
}

label {
    display: block;
    color: darkblue;
    font-weight: bold;
    margin-bottom: 8px;
}

input,
select,
textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid gray;
    margin-bottom: 18px;
    box-sizing: border-box;
}

input:focus,
select:focus,
textarea:focus {
    border-color: darkblue;
    outline: none;
}

textarea {
    resize: vertical;
}

input[type="submit"] {
    color: white;
    background-color: darkblue;
    border: none;
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: darkgreen;
}
```

---

## Output

When the webpage is opened in the browser:

- The form appears inside a centered white section.
- Labels appear above their form fields.
- Every form field uses the full available width.
- The fields have padding and gray borders.
- A selected field receives a dark-blue border.
- The textarea can only be resized vertically.
- The submit button has a dark-blue background.
- The button changes to dark green when the mouse moves over it.

---

## Practice

Try increasing the form width:

```css
section {
    width: 600px;
}
```

Try changing the form field border:

```css
input,
select,
textarea {
    border: 2px solid darkgreen;
}
```

Try adding rounded corners:

```css
input,
select,
textarea {
    border-radius: 5px;
}
```

Try changing the submit button color:

```css
input[type="submit"] {
    background-color: darkred;
}
```

Save the file and refresh the browser after each change.

---

## Important Note

This form only demonstrates the appearance of form controls.

The form does not send information to a server because no backend processing has been added.

---

## What I Learned

In this lesson, I learned:

- CSS can improve the appearance of HTML forms.
- Labels can be displayed as block elements.
- Several form elements can share the same CSS rules.
- The `box-sizing` property helps control field width.
- The `:focus` selector styles a selected form field.
- Attribute selectors can target specific input types.
- The `:hover` selector can style the submit button.
- The `cursor` property changes the mouse pointer.