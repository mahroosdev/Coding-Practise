# 03 - JavaScript Output

## Introduction

In the previous lesson, I learned three ways to add JavaScript to HTML.

In this lesson, I am learning how JavaScript can display output.

JavaScript output can appear in different places, including:

- On the webpage
- In the browser console
- Inside an alert box

---

## Folder Structure

```text
03 - JavaScript Output/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## What is JavaScript Output?

Output is information produced by a program.

For example, JavaScript can produce:

- A text message
- A number
- A warning
- An error
- A calculation result
- New webpage content

This lesson uses JavaScript to display output on the webpage and inside the browser console.

---

## Output on the Webpage

The HTML contains a paragraph with an ID.

```html
<p id="page-output">Waiting for JavaScript output...</p>
```

The JavaScript finds this paragraph and changes its text.

```javascript
document.getElementById("page-output").textContent =
    "Hello! This message was added using JavaScript.";
```

The original text:

```text
Waiting for JavaScript output...
```

changes to:

```text
Hello! This message was added using JavaScript.
```

---

## Understanding the Webpage Output

The complete JavaScript statement is:

```javascript
document.getElementById("page-output").textContent =
    "Hello! This message was added using JavaScript.";
```

### `document`

`document` represents the current HTML webpage.

### `getElementById()`

This finds an HTML element using its ID.

```javascript
getElementById("page-output")
```

The HTML element has the matching ID:

```html
<p id="page-output">
```

### `textContent`

`textContent` controls the text inside the selected HTML element.

```javascript
.textContent
```

### Assignment Symbol

The equals symbol assigns a new value.

```javascript
=
```

The text on the right side is placed inside the selected paragraph.

Do not worry about memorizing the full statement yet. Selecting and changing HTML elements will be explained in detail during the DOM lessons.

---

## Output in the Browser Console

The browser console is useful for displaying information while writing and testing JavaScript.

This lesson uses three console methods:

```javascript
console.log("JavaScript is working.");

console.warn("This is a practice warning.");

console.error("This is a practice error.");
```

---

## Normal Console Output

The `console.log()` method displays a normal message.

```javascript
console.log("JavaScript is working.");
```

It is commonly used to:

- Check whether JavaScript is running
- Display values
- Test code
- Understand what a program is doing

Expected console output:

```text
JavaScript is working.
```

---

## Warning Output

The `console.warn()` method displays a warning.

```javascript
console.warn("This is a practice warning.");
```

Browsers normally display warning messages using a yellow color or warning symbol.

Warnings can be used for something that requires attention but does not completely stop the program.

---

## Error Output

The `console.error()` method displays an error message.

```javascript
console.error("This is a practice error.");
```

Browsers normally display error messages using a red color or error symbol.

The practice error is intentionally displayed using `console.error()`.

It does not mean the lesson code is broken.

---

## Output Using an Alert Box

The `alert()` method displays a popup message in the browser.

```javascript
alert("Hello from JavaScript!");
```

When this code runs, the browser displays a message box.

The user must close the alert before continuing to use the webpage.

Alerts can be useful for:

- Small learning examples
- Simple notifications
- Testing a short message

However, too many alert boxes can interrupt the user.

For that reason, the alert does not run automatically in this lesson.

You can add it to `script.js` as a practice example.

---

## Output Using `document.write()`

Another JavaScript output method is:

```javascript
document.write("Hello from JavaScript!");
```

It writes content directly into the HTML document.

However, `document.write()` is not recommended for modern webpages.

If it runs after the webpage has finished loading, it may replace the existing page content.

For this reason, this course will not use it for normal webpage development.

It is useful to recognize the method, but `textContent` is safer for changing text on an existing webpage.

---

## Comparing Output Methods

| Method | Output Location | Common Purpose |
| --- | --- | --- |
| `textContent` | Webpage | Changes text on the page |
| `console.log()` | Browser console | Displays normal information |
| `console.warn()` | Browser console | Displays a warning |
| `console.error()` | Browser console | Displays an error |
| `alert()` | Popup box | Displays a browser message |
| `document.write()` | HTML document | Basic learning examples only |

---

## JavaScript Used in This Lesson

### Webpage Output

```javascript
document.getElementById("page-output").textContent =
    "Hello! This message was added using JavaScript.";
```

### Console Output (Normal)

```javascript
console.log("JavaScript is working.");
```

### Warning Console Output

```javascript
console.warn("This is a practice warning.");
```

### Error Console Output

```javascript
console.error("This is a practice error.");
```

---

## Expected Output

When the webpage is opened:

- The page background appears light gray.
- The header and footer appear dark blue.
- Four white content sections are displayed.
- The webpage output box displays a message added by JavaScript.
- The console example has a dark background.
- The warning example appears yellow.
- The error example appears light red.
- The alert code is displayed as an example.

The webpage output changes from:

```text
Waiting for JavaScript output...
```

to:

```text
Hello! This message was added using JavaScript.
```

The browser console displays:

```text
JavaScript is working.
This is a practice warning.
This is a practice error.
```

The warning and error may also display special colors and symbols.

---

## How to Check the Console Output

1. Open `index.html` in the browser.
2. Right-click anywhere on the webpage.
3. Select **Inspect**.
4. Open the **Console** tab.

The console should display all three messages.

---

## Practice Examples

### Practice 1: Change the Webpage Message

Change:

```javascript
"Hello! This message was added using JavaScript."
```

To:

```javascript
"Welcome to my JavaScript output lesson."
```

Save the file and refresh the browser.

---

### Practice 2: Display Your Name

Add this line to `script.js`:

```javascript
console.log("My name is Mahroos.");
```

Check the browser console.

---

### Practice 3: Add Another Warning

Add:

```javascript
console.warn("Remember to save the JavaScript file.");
```

Check how the browser displays the warning.

---

### Practice 4: Add an Alert

Add this line to the bottom of `script.js`:

```javascript
alert("Welcome to my JavaScript webpage!");
```

Save the file and refresh the browser.

The message will appear inside an alert box.

Remove the line after testing if you do not want the popup to appear every time.

---

### Practice 5: Display a Number

Add a number to the console.

```javascript
console.log(25);
```

Numbers do not need quotation marks.

The difference between text and numbers will be explained in the data types lesson.

---

## Common Beginner Mistakes

### Incorrect Element ID

HTML:

```html
<p id="page-output"></p>
```

Incorrect JavaScript:

```javascript
document.getElementById("output")
```

Correct JavaScript:

```javascript
document.getElementById("page-output")
```

The ID values must match exactly.

---

### Missing Quotation Marks

Incorrect:

```javascript
console.log(JavaScript is working);
```

Correct:

```javascript
console.log("JavaScript is working");
```

Text must be placed inside quotation marks.

---

### Incorrect Console Spelling

Incorrect:

```javascript
Console.log("Hello");
```

Correct:

```javascript
console.log("Hello");
```

JavaScript is case-sensitive.

---

### Using `warn` Without `console`

Incorrect:

```javascript
warn("This is a warning");
```

Correct:

```javascript
console.warn("This is a warning");
```

---

### Confusing a Practice Error with a Code Error

This line intentionally displays an error-style message:

```javascript
console.error("This is a practice error.");
```

It does not mean that JavaScript failed.

---

## Important Notes

- JavaScript can display output in different places.
- `textContent` can change text on a webpage.
- `console.log()` displays normal console information.
- `console.warn()` displays a warning.
- `console.error()` displays an error-style message.
- `alert()` displays a browser popup.
- Too many alerts can interrupt the user.
- `document.write()` is not recommended for modern webpages.
- HTML IDs and JavaScript ID values must match.
- Use the browser console to test JavaScript.
- Save the file and refresh the browser after changing the code.

---

## Easy Way to Remember

Remember the main output locations using **P-C-A**:

```text
P = Page
C = Console
A = Alert
```

Remember the console methods:

```javascript
console.log("Normal message");

console.warn("Warning message");

console.error("Error message");
```

---

## What I Learned

In this lesson, I learned:

- What JavaScript output means.
- How to display output on a webpage.
- How `textContent` changes text.
- How to use `console.log()`.
- How to use `console.warn()`.
- How to use `console.error()`.
- How to display an alert box.
- Why too many alerts should be avoided.
- Why `document.write()` is not recommended.
- How to check JavaScript output in the browser console.
- How to identify common output mistakes.

The next lesson is 04 - Statements and Comments.
