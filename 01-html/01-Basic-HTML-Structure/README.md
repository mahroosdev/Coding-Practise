# 01 - Basic HTML Structure

## Introduction

HTML stands for **HyperText Markup Language**.

It is the standard markup language used to create and structure web pages.

Before learning different HTML tags, it is important to understand the basic structure of an HTML document. Every HTML page starts with the same foundation.

---

# Basic HTML Structure

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Page Title</title>
</head>

<body>

</body>

</html>
```

---

# Understanding Each Part

## 1. `<!DOCTYPE html>`

This tells the browser that the document is an HTML5 document.

It should always be the first line in an HTML file.

Example:

```html
<!DOCTYPE html>
```

---

## 2. `<html>`

The `<html>` tag is the root element of an HTML document.

Everything on the webpage is placed inside this tag.

Example:

```html
<html>
    ...
</html>
```

The `lang` attribute specifies the language of the document.

Example:

```html
<html lang="en">
```

---

## 3. `<head>`

The `<head>` section contains information about the webpage that is **not displayed** directly in the browser.

It usually contains:

- Character encoding
- Viewport settings
- Page title
- Links to CSS files
- JavaScript files
- Metadata

Example:

```html
<head>

</head>
```

---

## 4. `<meta charset="UTF-8">`

Defines the character encoding.

UTF-8 supports most languages and special characters.

Example:

```html
<meta charset="UTF-8">
```

---

## 5. `<meta name="viewport">`

Makes the webpage responsive on different screen sizes.

Example:

```html
<meta name="viewport"
      content="width=device-width, initial-scale=1.0">
```

---

## 6. `<title>`

Defines the title shown on the browser tab.

Example:

```html
<title>Basic HTML Structure</title>
```

---

## 7. `<body>`

The `<body>` contains everything that is visible on the webpage.

Examples include:

- Headings
- Paragraphs
- Images
- Links
- Tables
- Forms

Example:

```html
<body>

</body>
```

---

# Output

When opening the example page in a browser, you will see:

```
Welcome to HTML

This is my first HTML page.
```

---

# Practice Exercise

Create a webpage that contains:

- A title named **My First Webpage**
- One heading
- One paragraph

---

# Challenge

Create another HTML page and change:

- The page title
- The heading
- The paragraph text

Observe how the browser tab title changes while the page content also changes.

---

# Summary

In this lesson, you learned:

- The purpose of `<!DOCTYPE html>`
- The `<html>` element
- The `<head>` section
- The `<meta>` tags
- The `<title>` tag
- The `<body>` section

These elements form the basic structure of every HTML document.