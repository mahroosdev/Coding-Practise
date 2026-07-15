# 07 - CSS Margins

## Introduction

In the previous lesson, I learned how to add borders around HTML elements.

In this lesson, I am learning how to create space outside an element using CSS margins.

Margins help separate elements from each other.

---

## What is a Margin?

A margin is the space outside an HTML element.

It creates distance between the selected element and the elements around it.

For example:

```css
section {
    margin: 20px;
}
```

This adds `20px` of space outside the section.

---

## Margin Property

The `margin` property adds the same amount of space on all four sides.

Example:

```css
.small-margin {
    margin: 10px;
}
```

This adds `10px` of margin to:

- Top
- Right
- Bottom
- Left

---

## Small Margin

```css
.small-margin {
    margin: 10px;
}
```

This section has a small amount of space around it.

---

## Large Margin

```css
.large-margin {
    margin: 40px;
}
```

This section has more space around it.

A larger margin value creates more distance between elements.

---

## Individual Margin Properties

CSS allows each side to have a different margin.

The individual margin properties are:

```text
margin-top
margin-right
margin-bottom
margin-left
```

Example:

```css
.different-margins {
    margin-top: 20px;
    margin-right: 40px;
    margin-bottom: 60px;
    margin-left: 80px;
}
```

This applies:

- `20px` at the top
- `40px` on the right
- `60px` at the bottom
- `80px` on the left

---

## Margin Shorthand

Margins can also be written in one line.

```css
margin: 20px 40px 60px 80px;
```

The values are applied in this order:

```text
Top
Right
Bottom
Left
```

Example:

```css
.different-margins {
    margin: 20px 40px 60px 80px;
}
```

This gives the same result as writing each margin property separately.

---

## Two Margin Values

When two values are used:

```css
margin: 20px 40px;
```

The first value controls:

```text
Top and Bottom
```

The second value controls:

```text
Left and Right
```

---

## One Margin Value

When one value is used:

```css
margin: 20px;
```

The same margin is applied to all four sides.

---

## CSS Used in This Lesson

```css
body {
    background-color: lightgray;
}

h1 {
    color: darkblue;
}

section {
    background-color: white;
    border: 2px solid darkblue;
    padding: 15px;
}

.small-margin {
    margin: 10px;
}

.large-margin {
    margin: 40px;
}

.different-margins {
    margin-top: 20px;
    margin-right: 40px;
    margin-bottom: 60px;
    margin-left: 80px;
}
```

---

## Output

When the webpage is opened in the browser:

- The page background appears light gray.
- Each section has a white background and a border.
- The first section has a small margin.
- The second section has a larger margin.
- The final section has different margin values on each side.

---

## Practice

Try changing the small margin:

```css
.small-margin {
    margin: 20px;
}
```

Try changing the large margin:

```css
.large-margin {
    margin: 60px;
}
```

Try using shorthand:

```css
.different-margins {
    margin: 10px 30px 50px 70px;
}
```

Save the file and refresh the browser to compare the spacing.

---

## Important Difference

A margin creates space outside an element.

```text
Margin → Outside the border
```

In the next lesson, padding will create space inside an element.

```text
Padding → Inside the border
```

---

## What I Learned

In this lesson, I learned:

- Margins create space outside HTML elements.
- The `margin` property applies space to all four sides.
- CSS provides separate properties for each side.
- Margin shorthand can use one, two, or four values.
- Larger margin values create more distance between elements.
