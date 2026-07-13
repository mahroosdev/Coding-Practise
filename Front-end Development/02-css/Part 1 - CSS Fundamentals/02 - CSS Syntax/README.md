# 02 - CSS Syntax

## Introduction

In the previous lesson, I learned that CSS is used to style HTML webpages.

In this lesson, I am learning the basic syntax used to write CSS.

---

## Basic CSS Syntax

A CSS rule contains:

- A selector
- A property
- A value

The basic structure looks like this:

```css
selector {
    property: value;
}
```

---

## Selector

The selector chooses the HTML element that will be styled.

Example:

```css
h1 {
    color: darkblue;
}
```

In this example, `h1` is the selector.

It selects every `<h1>` element on the webpage.

---

## Property

The property tells the browser what should be changed.

Example:

```css
color: darkblue;
```

In this example, `color` is the property.

It changes the text color.

---

## Value

The value tells the browser how the property should appear.

Example:

```css
color: darkblue;
```

In this example, `darkblue` is the value.

---

## Complete Example

```css
h1 {
    color: darkblue;
}
```

In this CSS rule:

- `h1` is the selector.
- `color` is the property.
- `darkblue` is the value.

---

## Curly Brackets

CSS declarations are written inside curly brackets.

```css
h1 {

}
```

The opening bracket `{` starts the CSS rule.

The closing bracket `}` ends the CSS rule.

---

## Colon

A colon separates the property from the value.

```css
color: darkblue;
```

---

## Semicolon

A semicolon ends a CSS declaration.

```css
color: darkblue;
```

The semicolon is important when an element has more than one CSS property.

Example:

```css
p {
    color: darkgreen;
    font-size: 18px;
}
```

---

## Multiple CSS Properties

One selector can contain more than one property.

```css
p {
    color: darkgreen;
    font-size: 18px;
}
```

This changes both the text color and the font size of the paragraphs.

---

## CSS Used in This Lesson

```css
body {
    background-color: lightgray;
}

h1 {
    color: darkblue;
}

p {
    color: darkgreen;
    font-size: 18px;
}
```

---

## File Structure

```text
02 - CSS Syntax/
│
├── index.html
├── style.css
└── README.md
```

---

## Output

When the webpage is opened in the browser:

- The page background appears light gray.
- The heading appears dark blue.
- The paragraphs appear dark green.
- The paragraph text appears slightly larger.

---

## Practice

Try changing the CSS values.

Example:

```css
body {
    background-color: lightyellow;
}

h1 {
    color: red;
}

p {
    color: blue;
    font-size: 20px;
}
```

Save the file and refresh the browser to see the result.

---

## What I Learned

In this lesson, I learned:

- A CSS rule contains a selector, property, and value.
- Selectors choose HTML elements.
- Properties describe what should change.
- Values describe how the property should appear.
- CSS declarations are written inside curly brackets.
- A colon separates the property and value.
- A semicolon ends each declaration.