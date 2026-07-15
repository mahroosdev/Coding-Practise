# 12 - CSS Fonts

## Introduction

In the previous lesson, I learned how to change text alignment, decoration, capitalization, and spacing.

In this lesson, I am learning how to change the font family, size, weight, and style of text using CSS.

Fonts help control how text looks and can make a webpage easier to read.

---

## Font Family

The `font-family` property changes the typeface used for text.

Example:

```css
.arial-font {
    font-family: Arial, sans-serif;
}
```

This paragraph uses Arial.

---

## Font Fallback

It is useful to provide more than one font.

Example:

```css
font-family: Arial, sans-serif;
```

The browser first tries to use Arial.

If Arial is not available, it uses another sans-serif font.

---

## Serif and Sans-Serif Fonts

### Serif Font

Serif fonts have small decorative lines on the letters.

Example:

```css
.georgia-font {
    font-family: Georgia, serif;
}
```

### Sans-Serif Font

Sans-serif fonts have a cleaner appearance without decorative lines.

Example:

```css
.arial-font {
    font-family: Arial, sans-serif;
}
```

### Monospace Font

In a monospace font, every character uses the same amount of width.

Example:

```css
.monospace-font {
    font-family: "Courier New", monospace;
}
```

Monospace fonts are commonly used when displaying code.

---

## Font Size

The `font-size` property changes the size of text.

Example:

```css
.medium-text {
    font-size: 18px;
}
```

This makes the text 18 pixels in size.

---

## Small Font Size

```css
.small-text {
    font-size: 14px;
}
```

---

## Medium Font Size

```css
.medium-text {
    font-size: 18px;
}
```

---

## Large Font Size

```css
.large-text {
    font-size: 28px;
}
```

A larger value creates larger text.

---

## Font Weight

The `font-weight` property controls how thick the text appears.

### Normal Font Weight

```css
.normal-text {
    font-weight: normal;
}
```

### Bold Font Weight

```css
.bold-text {
    font-weight: bold;
}
```

Bold text is often used to make important information stand out.

---

## Font Style

The `font-style` property controls whether text appears normal or italic.

### Normal Style

```css
.normal-style {
    font-style: normal;
}
```

### Italic Style

```css
.italic-style {
    font-style: italic;
}
```

Italic text is commonly used for emphasis.

---

## CSS Used in This Lesson

```css
body {
    background-color: lightgray;
}

h1 {
    color: darkblue;
    text-align: center;
}

section {
    background-color: white;
    border: 2px solid darkblue;
    margin-bottom: 20px;
    padding: 15px;
}

.arial-font {
    font-family: Arial, sans-serif;
}

.georgia-font {
    font-family: Georgia, serif;
}

.monospace-font {
    font-family: "Courier New", monospace;
}

.small-text {
    font-size: 14px;
}

.medium-text {
    font-size: 18px;
}

.large-text {
    font-size: 28px;
}

.normal-text {
    font-weight: normal;
}

.bold-text {
    font-weight: bold;
}

.normal-style {
    font-style: normal;
}

.italic-style {
    font-style: italic;
}
```

---

## Output

When the webpage is opened in the browser:

- The first section displays different font families.
- The second section displays different font sizes.
- One paragraph uses normal font weight.
- One paragraph appears bold.
- One paragraph uses normal font style.
- One paragraph appears italic.

---

## Practice

Try changing the font family:

```css
.arial-font {
    font-family: Verdana, sans-serif;
}
```

Try increasing the large text size:

```css
.large-text {
    font-size: 36px;
}
```

Try changing normal text to bold:

```css
.normal-text {
    font-weight: bold;
}
```

Try changing normal style to italic:

```css
.normal-style {
    font-style: italic;
}
```

Save the file and refresh the browser after each change.

---

## What I Learned

In this lesson, I learned:

- The `font-family` property changes the typeface.
- Font fallback provides another font when the first font is unavailable.
- Serif, sans-serif, and monospace fonts have different appearances.
- The `font-size` property changes text size.
- The `font-weight` property changes text thickness.
- The `font-style` property changes text to normal or italic.