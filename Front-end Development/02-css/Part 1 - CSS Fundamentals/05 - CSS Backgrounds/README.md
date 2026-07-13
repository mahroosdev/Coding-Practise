# 05 - CSS Backgrounds

## Introduction

In the previous lesson, I learned how to add colors to text and backgrounds.

In this lesson, I am learning how to use background colors and background images with CSS.

Backgrounds can help separate sections and improve the appearance of a webpage.

---

## Background Color

The `background-color` property adds a color behind an HTML element.

Example:

```css
.color-background {
    background-color: lightyellow;
}
```

This gives the selected section a light-yellow background.

---

## Background Image

The `background-image` property adds an image behind an HTML element.

Example:

```css
.image-background {
    background-image: url("images/background-image.jpg");
}
```

The `url()` value contains the file path of the image.

---

## File Structure

```text
05 - CSS Backgrounds/
│
├── index.html
├── style.css
├── images/
│   └── background-image.jpg
└── README.md
```

Because the image is inside the `images` folder, the file path is:

```text
images/background-image.jpg
```

The file name and extension in the CSS must match the actual image.

---

## Background Repeat

By default, a small background image may repeat across the element.

The `background-repeat` property controls whether the image repeats.

Example:

```css
.image-background {
    background-repeat: no-repeat;
}
```

The value `no-repeat` prevents the background image from repeating.

---

## Background Size

The `background-size` property controls the size of the background image.

Example:

```css
.image-background {
    background-size: cover;
}
```

The value `cover` makes the image cover the available background area.

Some parts of the image may be cropped.

---

## Background Position

The `background-position` property controls where the image appears.

Example:

```css
.image-background {
    background-position: center;
}
```

The value `center` places the image in the center of the element.

---

## Complete Background Image Example

```css
.image-background {
    background-image: url("images/background-image.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: white;
}
```

The white text is used so it can be easier to read over a darker background image.

---

## CSS Used in This Lesson

```css
body {
    background-color: lightgray;
}

h1 {
    color: darkblue;
}

.color-background {
    background-color: lightyellow;
}

.image-background {
    background-image: url("images/background-image.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: white;
}
```

---

## Output

When the webpage is opened in the browser:

- The page background appears light gray.
- The main heading appears dark blue.
- The first section has a light-yellow background.
- The second section displays an image in the background.
- The background image does not repeat.
- The image covers the background area and stays centered.

---

## Practice

Try changing the background color:

```css
.color-background {
    background-color: lightblue;
}
```

Try allowing the image to repeat:

```css
.image-background {
    background-repeat: repeat;
}
```

Try changing the background size:

```css
.image-background {
    background-size: contain;
}
```

Save the files and refresh the browser to compare the results.

---

## What I Learned

In this lesson, I learned:

- The `background-color` property adds a background color.
- The `background-image` property adds a background image.
- The image path is written inside `url()`.
- The `background-repeat` property controls image repetition.
- The `background-size` property controls the background image size.
- The `background-position` property controls the image position.