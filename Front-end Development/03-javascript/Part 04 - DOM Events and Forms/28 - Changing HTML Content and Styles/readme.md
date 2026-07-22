# 28 - Changing HTML Content and Styles

## Introduction

In this lesson, I am learning how JavaScript changes selected HTML elements.

---

## Changing Text

```javascript
const title =
    document.getElementById("title");

title.textContent = "New title";
```

`textContent` changes plain text.

---

## Changing HTML

```javascript
element.innerHTML =
    "<strong>Important text</strong>";
```

`innerHTML` can add HTML elements.

Only use trusted content with `innerHTML`.

---

## Changing Styles

```javascript
element.style.backgroundColor =
    "lightyellow";

element.style.color =
    "darkblue";
```

JavaScript CSS property names use camel case.

```text
background-color → backgroundColor
```

---

## Changing CSS Classes

```javascript
element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("selected");
```

Using CSS classes is usually cleaner than adding many inline styles.

---

## Changing Attributes

```javascript
link.setAttribute(
    "href",
    "https://example.com"
);
```

Read an attribute:

```javascript
link.getAttribute("href");
```

---

## Practice Tasks

1. Change the text of a heading.
2. Change an element's background colour.
3. Add and remove a CSS class.
4. Change the `href` of a link.

---

## What I Learned

- How to change text using `textContent`.
- How to change HTML using `innerHTML`.
- How to update inline styles.
- How to add, remove, and toggle classes.
- How to change HTML attributes.

The next lesson is **29 - JavaScript Events**.