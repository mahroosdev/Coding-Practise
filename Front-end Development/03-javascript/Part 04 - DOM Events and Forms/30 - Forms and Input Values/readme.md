# 30 - Forms and Input Values

## Introduction

In this lesson, I am learning how JavaScript reads values entered into HTML forms.

---

## Reading an Input Value

```javascript
const nameInput =
    document.getElementById("name");

const name =
    nameInput.value;
```

The `value` property reads the current input value.

---

## Reading a Checkbox

```javascript
const terms =
    document.getElementById("terms");

console.log(terms.checked);
```

The `checked` property returns `true` or `false`.

---

## Form Submit Event

```javascript
form.addEventListener(
    "submit",
    function (event) {
        event.preventDefault();

        console.log(nameInput.value);
    }
);
```

`preventDefault()` stops the page from refreshing when the form is submitted.

---

## Practice Tasks

1. Read a name from a text input.
2. Read a selected course.
3. Check whether a checkbox is selected.
4. Display the form values after submission.

---

## What I Learned

- How to read input values.
- How to read select values.
- How to check a checkbox.
- How the submit event works.
- How `preventDefault()` stops page refresh.
- How the input and reset events work.

The next lesson is **31 - Form Validation**.
