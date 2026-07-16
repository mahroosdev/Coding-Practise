# 32 - CSS Variables

## Introduction

In the previous lesson, I learned how to create a responsive webpage using flexible widths, Flexbox, Grid, images, and media queries.

In this lesson, I am learning how to create and use CSS variables.

CSS variables allow me to save CSS values and reuse them in different parts of the stylesheet.

---

## What is a CSS Variable?

A CSS variable is a named value that can be reused inside CSS.

For example, the same color may be used for:

- The page header
- Headings
- Borders
- Buttons
- The footer

Without a CSS variable, the color must be written separately in every CSS rule.

```css
header {
    background-color: darkblue;
}

h2 {
    color: darkblue;
}

button {
    background-color: darkblue;
}
```

With a CSS variable, the color can be saved once and reused.

```css
:root {
    --primary-color: darkblue;
}
```

The variable can then be used with the `var()` function.

```css
header {
    background-color: var(--primary-color);
}
```

---

## Creating a CSS Variable

A CSS variable name begins with two hyphens.

```css
--primary-color: darkblue;
```

In this example:

- `--primary-color` is the variable name.
- `darkblue` is the value stored in the variable.

The variable name and value are separated by a colon.

The declaration ends with a semicolon.

---

## The `:root` Selector

The variables in this lesson are created inside the `:root` selector.

```css
:root {
    --primary-color: darkblue;
    --page-background: lightgray;
    --section-background: white;
}
```

Variables created inside `:root` can be used throughout the stylesheet.

This makes `:root` a useful place for storing the main colors, spacing, and sizes used by a webpage.

---

## Using a CSS Variable

The `var()` function is used to access a CSS variable.

```css
body {
    background-color: var(--page-background);
}
```

In this example, the browser finds the value stored inside `--page-background`.

The variable contains:

```css
--page-background: lightgray;
```

The browser therefore applies a light-gray background to the page.

---

## Color Variables

This lesson uses variables to store the main colors.

```css
:root {
    --primary-color: darkblue;
    --secondary-color: #1f4f8a;
    --page-background: lightgray;
    --section-background: white;
    --text-color: #333333;
    --light-background: #e6ecf5;
}
```

The primary color is reused in headings, borders, buttons, the header, and the footer.

```css
header {
    background-color: var(--primary-color);
}

.intro-section h2 {
    color: var(--primary-color);
}

.intro-section {
    border: 2px solid var(--primary-color);
}
```

If the value of `--primary-color` is changed, every rule using the variable will receive the new color.

---

## Spacing Variables

CSS variables can also store spacing values.

```css
:root {
    --main-spacing: 30px;
    --small-spacing: 15px;
}
```

The main spacing variable is used for padding, margins, and gaps.

```css
header {
    padding: var(--main-spacing);
}

.intro-section {
    margin: var(--main-spacing) 0;
    padding: var(--main-spacing);
}

.example-section {
    gap: var(--main-spacing);
}
```

This helps the webpage use consistent spacing.

---

## Size Variables

CSS variables can store border and text sizes.

```css
:root {
    --border-size: 2px;
    --heading-size: 28px;
}
```

They are used like this:

```css
.intro-section {
    border: var(--border-size) solid var(--primary-color);
}

.intro-section h2 {
    font-size: var(--heading-size);
}
```

---

## Changing Variable Values

One benefit of CSS variables is that the value only needs to be changed in one place.

Original variable:

```css
:root {
    --primary-color: darkblue;
}
```

Changed variable:

```css
:root {
    --primary-color: darkgreen;
}
```

Every element using `var(--primary-color)` will then use dark green.

There is no need to find and change every CSS rule separately.

---

## CSS Variables and Media Queries

CSS variables can receive different values inside a media query.

```css
@media screen and (max-width: 500px) {
    :root {
        --main-spacing: 20px;
        --heading-size: 23px;
    }
}
```

On screens that are 500 pixels wide or smaller:

- The main spacing changes from `30px` to `20px`.
- The heading size changes from `28px` to `23px`.

All CSS rules using these variables receive the new values automatically.

---

## Important Properties and Values

### `:root`

The `:root` selector is used to store variables that will be available throughout the stylesheet.

```css
:root {
    --primary-color: darkblue;
}
```

### Two Hyphens

A CSS variable name must begin with two hyphens.

```css
--primary-color
```

### `var()`

The `var()` function reads the value stored inside a variable.

```css
color: var(--primary-color);
```

### Meaningful Names

Variable names should explain the purpose of the value.

```css
--primary-color: darkblue;
--page-background: lightgray;
--main-spacing: 30px;
```

Names such as `--color1` or `--size2` are less clear.

---

## CSS Used in This Lesson

### Creating the Variables

```css
:root {
    --primary-color: darkblue;
    --secondary-color: #1f4f8a;
    --page-background: lightgray;
    --section-background: white;
    --text-color: #333333;
    --light-background: #e6ecf5;
    --main-spacing: 30px;
    --small-spacing: 15px;
    --border-size: 2px;
    --heading-size: 28px;
}
```

### Using a Background Variable

```css
body {
    background-color: var(--page-background);
}
```

### Using Color and Spacing Variables

```css
header {
    background-color: var(--primary-color);
    color: var(--section-background);
    padding: var(--main-spacing);
}
```

### Using Multiple Variables

```css
.intro-section {
    background-color: var(--section-background);
    border: var(--border-size) solid var(--primary-color);
    margin: var(--main-spacing) 0;
    padding: var(--main-spacing);
}
```

### Changing Variables in a Media Query

```css
@media screen and (max-width: 500px) {
    :root {
        --main-spacing: 20px;
        --heading-size: 23px;
    }
}
```

---

## Expected Output

When the webpage is opened in the browser:

- The page background appears light gray.
- The header and footer appear dark blue.
- The content sections have a white background.
- The headings and borders use the primary dark-blue color.
- The feature cards have a light-blue background.
- The button uses the primary color.
- The button changes to a lighter blue when the mouse moves over it.
- The cards appear next to each other on larger screens.
- The cards appear in one column on smaller screens.
- The example section becomes a single-column layout on smaller screens.
- The spacing and heading sizes become smaller on mobile screens.

---

## Practice Examples

### Practice 1: Change the Primary Color

Change the primary color from dark blue to dark green.

```css
:root {
    --primary-color: darkgreen;
}
```

Check how the header, footer, headings, borders, and button change.

### Practice 2: Change the Page Background

Change the page background variable.

```css
:root {
    --page-background: beige;
}
```

### Practice 3: Change the Main Spacing

Change the main spacing from `30px` to `40px`.

```css
:root {
    --main-spacing: 40px;
}
```

Check how the spacing changes in different sections.

### Practice 4: Create a New Variable

Create a variable for the card border size.

```css
:root {
    --card-border-size: 5px;
}
```

Use the new variable:

```css
.feature-card {
    border-left: var(--card-border-size) solid var(--primary-color);
}
```

### Practice 5: Change the Mobile Values

Change the variable values inside the mobile media query.

```css
@media screen and (max-width: 500px) {
    :root {
        --main-spacing: 15px;
        --heading-size: 21px;
    }
}
```

Resize the browser and check the result.

---

## Important Notes

- CSS variable names must begin with two hyphens.
- The `var()` function is used to access a variable.
- Variables created inside `:root` can be used throughout the stylesheet.
- A variable can store a color, size, spacing value, or many other CSS values.
- Use clear and meaningful variable names.
- Changing one variable can update many elements.
- CSS variables help keep repeated values consistent.
- Do not add a separate variable for every small value.
- Create variables mainly for values that are reused.
- Make sure the variable name is written correctly when using `var()`.

---

## Easy Way to Remember

Remember CSS variables in three steps:

1. **Create** the variable using two hyphens.

```css
--primary-color: darkblue;
```

2. **Store** it inside `:root`.

```css
:root {
    --primary-color: darkblue;
}
```

3. **Use** it with `var()`.

```css
color: var(--primary-color);
```

The simple pattern is:

```css
:root {
    --variable-name: value;
}

.element {
    property: var(--variable-name);
}
```

---

## What I Learned

In this lesson, I learned:

- What a CSS variable is.
- How to create a CSS variable.
- Why variable names begin with two hyphens.
- How to store variables inside `:root`.
- How to access variables using `var()`.
- How to reuse colors with variables.
- How to reuse spacing values with variables.
- How to reuse text and border sizes.
- How changing one variable can update many elements.
- How to change variable values inside a media query.
- Why meaningful variable names make CSS easier to understand.

The next lesson is 33 - Final HTML and CSS Website.