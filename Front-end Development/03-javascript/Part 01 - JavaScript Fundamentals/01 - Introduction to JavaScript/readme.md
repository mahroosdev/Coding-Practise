# 01 - Introduction to JavaScript

## Introduction

I have completed the beginner HTML and CSS sections.

In this lesson, I am starting JavaScript.

JavaScript is a programming language used to add behaviour and interactivity to webpages.

HTML, CSS, and JavaScript have different purposes:

- HTML creates the webpage structure.
- CSS controls the webpage design.
- JavaScript controls the webpage behaviour.

---

## Folder Structure

```text
01 - Introduction to JavaScript/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## What is JavaScript?

JavaScript is a programming language commonly used in web development.

It can make a webpage respond to actions performed by the user.

For example, JavaScript can:

- Change text
- Change styles
- Show and hide content
- Respond to button clicks
- Read information entered into forms
- Perform calculations
- Create image sliders
- Create counters
- Validate forms
- Create games
- Update webpage content

JavaScript files normally use the `.js` file extension.

Example:

```text
script.js
```

---

## HTML, CSS and JavaScript

HTML, CSS, and JavaScript work together when creating a webpage.

### HTML

HTML creates the structure and content.

```html
<h1>My Website</h1>
```

### CSS

CSS controls the appearance.

```css
h1 {
    color: darkblue;
}
```

### JavaScript

JavaScript controls the behaviour.

```javascript
console.log("Hello from JavaScript!");
```

An easy way to understand their purposes is:

```text
HTML       = Structure
CSS        = Design
JavaScript = Behaviour
```

---

## The JavaScript File

The JavaScript code for this lesson is written inside:

```text
script.js
```

The file contains:

```javascript
console.log("Hello! JavaScript is working.");

console.log("I am learning JavaScript step by step.");

console.log("HTML creates the structure.");

console.log("CSS controls the design.");

console.log("JavaScript controls the behaviour.");
```

Each line displays a message inside the browser console.

---

## Connecting the JavaScript File

The JavaScript file is connected near the end of the HTML document.

```html
<script src="script.js"></script>
```

This line is placed before the closing `</body>` tag.

```html
    <script src="script.js"></script>

</body>
```

The browser reads the HTML and then loads the JavaScript file.

The different ways of adding JavaScript to HTML will be explained in the next lesson.

---

## What is the Browser Console?

The browser console is a tool that developers use to:

- View JavaScript messages
- Test JavaScript code
- Find errors
- Understand what a program is doing

The console is part of the browser's developer tools.

---

## How to Open the Console

### Google Chrome or Microsoft Edge

1. Open `index.html` in the browser.
2. Right-click anywhere on the webpage.
3. Select **Inspect**.
4. Select the **Console** tab.

A keyboard shortcut can also be used:

```text
Ctrl + Shift + J
```

The console should display:

```text
Hello! JavaScript is working.
I am learning JavaScript step by step.
HTML creates the structure.
CSS controls the design.
JavaScript controls the behaviour.
```

---

## The `console.log()` Method

The following JavaScript code displays a message inside the browser console:

```javascript
console.log("Hello!");
```

### `console`

`console` refers to the browser console.

### `.log`

`log` tells JavaScript to display information in the console.

### Parentheses

The message is placed inside parentheses:

```javascript
("Hello!")
```

### Quotation Marks

Text is placed inside quotation marks:

```javascript
"Hello!"
```

### Semicolon

The JavaScript statement ends with a semicolon:

```javascript
;
```

The complete statement is:

```javascript
console.log("Hello!");
```

---

## JavaScript Statements

A JavaScript statement is an instruction given to the browser.

Example:

```javascript
console.log("JavaScript is working.");
```

This statement tells the browser to display a message in the console.

Statements are normally written one after another.

```javascript
console.log("First message");

console.log("Second message");
```

JavaScript reads the code from top to bottom.

---

## JavaScript is Case-Sensitive

JavaScript is case-sensitive.

This means uppercase and lowercase letters are treated differently.

Correct:

```javascript
console.log("Hello");
```

Incorrect:

```javascript
Console.log("Hello");
```

The correct word is:

```javascript
console
```

It begins with a lowercase `c`.

---

## Expected Output

When `index.html` is opened in the browser:

- The page background appears light gray.
- The header and footer appear dark blue.
- The content sections have a white background.
- Three information cards explain what JavaScript can do.
- Instructions explain how to open the console.
- A dark console example appears on the page.

When the browser console is opened, it displays:

```text
Hello! JavaScript is working.
I am learning JavaScript step by step.
HTML creates the structure.
CSS controls the design.
JavaScript controls the behaviour.
```

The JavaScript messages appear in the browser console, not directly on the webpage.

---

## Practice Examples

### Practice 1: Display Your Name

Add your name to `script.js`.

```javascript
console.log("My name is Mahroos.");
```

Open the console and check the output.

---

### Practice 2: Display Your Role

Add another message.

```javascript
console.log("I am a Junior Software Engineer.");
```

---

### Practice 3: Display a Learning Goal

Write a message about your goal.

```javascript
console.log("My goal is to learn JavaScript.");
```

---

### Practice 4: Change a Message

Change:

```javascript
console.log("Hello! JavaScript is working.");
```

To:

```javascript
console.log("Welcome to my JavaScript course!");
```

Save the file and refresh the browser.

---

### Practice 5: Create Multiple Messages

Add three new messages.

```javascript
console.log("I completed HTML.");

console.log("I completed CSS.");

console.log("I am starting JavaScript.");
```

Check whether the messages appear in the correct order.

---

## Common Beginner Mistakes

### Missing Quotation Mark

Incorrect:

```javascript
console.log("Hello);
```

Correct:

```javascript
console.log("Hello");
```

Both quotation marks must be included.

---

### Incorrect Capital Letter

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

### Missing Parenthesis

Incorrect:

```javascript
console.log("Hello";
```

Correct:

```javascript
console.log("Hello");
```

Both opening and closing parentheses are required.

---

### Incorrect File Name

The HTML uses:

```html
<script src="script.js"></script>
```

The actual filename must also be:

```text
script.js
```

If the filename is different, the browser may not load the JavaScript code.

---

## Important Notes

- JavaScript is different from Java.
- JavaScript files use the `.js` extension.
- JavaScript can add behaviour to webpages.
- JavaScript is case-sensitive.
- Text values are written inside quotation marks.
- JavaScript statements are normally read from top to bottom.
- `console.log()` displays information in the browser console.
- Console messages do not normally appear on the webpage.
- Save `script.js` before refreshing the browser.
- Check the browser console when JavaScript is not working.
- Keep the HTML, CSS, and JavaScript in separate files.

---

## Easy Way to Remember

Remember the three main web technologies like this:

```text
HTML       = What is on the page
CSS        = How the page looks
JavaScript = What the page does
```

Remember the first JavaScript command as:

```javascript
console.log("Your message");
```

Think of it as:

```text
console → browser console
log     → display information
```

---

## What I Learned

In this lesson, I learned:

- What JavaScript is.
- Why JavaScript is used in web development.
- The difference between HTML, CSS, and JavaScript.
- That JavaScript files use the `.js` extension.
- How to connect a JavaScript file to HTML.
- What the browser console is.
- How to open the browser console.
- How to use `console.log()`.
- That JavaScript reads statements from top to bottom.
- That JavaScript is case-sensitive.
- How to identify some common beginner mistakes.

The next lesson is 02 - Adding JavaScript to HTML.