# 19 - CSS Opacity

## Introduction

In the previous lesson, I learned how CSS handles content that overflows from an element.

In this lesson, I am learning how to make HTML elements transparent using CSS opacity.

Opacity controls how clearly an element is displayed.

---

## What is Opacity?

The `opacity` property controls the transparency of an HTML element.

The value can be between:

```text
0
```

and:

```text
1
```

Example:

```css
.box {
    opacity: 0.5;
}
```

This makes the element partly transparent.

---

## Opacity Values

### Full Opacity

```css
opacity: 1;
```

The element is fully visible.

### Medium Opacity

```css
opacity: 0.6;
```

The element is partly transparent.

### Low Opacity

```css
opacity: 0.3;
```

The element appears more transparent.

### Fully Transparent

```css
opacity: 0;
```

The element becomes invisible, but it still uses space on the webpage.

---

## Full Opacity Example

```css
.full-opacity {
    opacity: 1;
}
```

The element appears normally without transparency.

---

## Medium Opacity Example

```css
.medium-opacity {
    opacity: 0.6;
}
```

The element becomes slightly transparent.

---

## Low Opacity Example

```css
.low-opacity {
    opacity: 0.3;
}
```

The element appears much lighter because more transparency is applied.

---

## Important Behavior

The `opacity` property affects the entire element.

This includes:

- Background color
- Text
- Border
- Images
- Child elements

Example:

```css
.medium-opacity {
    opacity: 0.6;
}
```

The box, text, and border all become transparent.

---

## Transparent Background Color

Sometimes, only the background should be transparent while the text remains fully visible.

For this, CSS can use an RGBA color.

Example:

```css
.transparent-background {
    background-color: rgba(0, 0, 139, 0.4);
}
```

RGBA stands for:

- Red
- Green
- Blue
- Alpha

The final value controls transparency.

```text
rgba(0, 0, 139, 0.4)
```

In this example:

- `0` is the red value.
- `0` is the green value.
- `139` is the blue value.
- `0.4` is the transparency value.

---

## Opacity and RGBA Difference

### Opacity

```css
opacity: 0.5;
```

This makes the whole element transparent.

That includes:

- Text
- Background
- Border
- Child elements

### RGBA

```css
background-color: rgba(0, 0, 139, 0.5);
```

This only makes the background color transparent.

The text remains fully visible.

---

## Shared Box Styles

The boxes use the same basic styles.

```css
.full-opacity,
.medium-opacity,
.low-opacity,
.transparent-background {
    width: 300px;
    background-color: darkblue;
    color: white;
    border: 2px solid black;
    padding: 20px;
}
```

Each box has:

- A width of `300px`
- A dark-blue background
- White text
- A black border
- Padding inside the box

Only the opacity values change.

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

.full-opacity,
.medium-opacity,
.low-opacity,
.transparent-background {
    width: 300px;
    background-color: darkblue;
    color: white;
    border: 2px solid black;
    padding: 20px;
}

.full-opacity {
    opacity: 1;
}

.medium-opacity {
    opacity: 0.6;
}

.low-opacity {
    opacity: 0.3;
}

.transparent-background {
    background-color: rgba(0, 0, 139, 0.4);
}
```

---

## Output

When the webpage is opened in the browser:

- The first box is fully visible.
- The second box is slightly transparent.
- The third box has more transparency.
- The final box has a transparent background while the text remains fully visible.

---

## Practice

Try changing the medium opacity:

```css
.medium-opacity {
    opacity: 0.8;
}
```

Try making the low-opacity box almost invisible:

```css
.low-opacity {
    opacity: 0.1;
}
```

Try changing the transparent background:

```css
.transparent-background {
    background-color: rgba(255, 0, 0, 0.4);
}
```

Try making the background less transparent:

```css
.transparent-background {
    background-color: rgba(0, 0, 139, 0.8);
}
```

Save the file and refresh the browser after each change.

---

## Important Note

An element using:

```css
opacity: 0;
```

is invisible, but it still occupies space in the page layout.

This is different from:

```css
display: none;
```

`display: none` hides the element and removes its space.

---

## Easy Comparison

```text
opacity: 0;
```

- Invisible
- Still uses space

```text
display: none;
```

- Invisible
- Does not use space

---

## What I Learned

In this lesson, I learned:

- The `opacity` property controls element transparency.
- Opacity values range from `0` to `1`.
- `opacity: 1` means fully visible.
- `opacity: 0` means fully transparent.
- Opacity affects the entire element.
- RGBA can make only a background color transparent.
- An invisible element using opacity still occupies space.