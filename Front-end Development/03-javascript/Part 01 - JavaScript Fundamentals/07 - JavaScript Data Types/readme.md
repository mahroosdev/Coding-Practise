# 07 - JavaScript Data Types

## Introduction

In the previous lesson, I learned the difference between `let`, `const`, and `var`.

In this lesson, I am learning about JavaScript data types.

A data type describes the type of value stored inside a variable.

For example:

```javascript
const studentName = "Mahroos";
const lessonNumber = 7;
const isLearningJavaScript = true;
```

These variables contain different types of data.

---

## Folder Structure

```text
07 - JavaScript Data Types/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## What Is a Data Type?

A data type describes the kind of information stored inside a JavaScript value or variable.

JavaScript can work with different types of information.

Examples include:

- Text
- Numbers
- True or false values
- Values that have not been assigned
- Intentionally empty values

Example:

```javascript
const courseName = "JavaScript";
```

The value `"JavaScript"` is text.

Its data type is a string.

Another example:

```javascript
const lessonNumber = 7;
```

The value `7` is a number.

Its data type is number.

---

## Data Types Used in This Lesson

This lesson introduces the following JavaScript data types:

1. String
2. Number
3. Boolean
4. Undefined
5. Null

---

## 1. String

A string is used to store text.

Strings must normally be written inside quotation marks.

Example using double quotation marks:

```javascript
const studentName = "Mahroos";
```

Example using single quotation marks:

```javascript
const courseName = 'JavaScript';
```

Both examples create string values.

### More String Examples

```javascript
const country = "Sri Lanka";
const jobTitle = "Software Engineer";
const learningStatus = "In Progress";
```

Each value contains text, so each value is a string.

### Quotation Marks Are Important

Correct:

```javascript
const studentName = "Mahroos";
```

Incorrect:

```javascript
const studentName = Mahroos;
```

Without quotation marks, JavaScript treats `Mahroos` as the name of a variable.

---

## 2. Number

The number data type is used to store numbers.

A number does not require quotation marks.

Example:

```javascript
const lessonNumber = 7;
```

Whole-number example:

```javascript
const studentAge = 25;
```

Decimal-number example:

```javascript
const courseProgress = 42.5;
```

Both whole numbers and decimal numbers use the number data type.

### Number with Quotation Marks

This is a number:

```javascript
const score = 100;
```

This is a string:

```javascript
const score = "100";
```

The quotation marks change the data type.

Even though `"100"` contains number characters, JavaScript treats it as text.

---

## 3. Boolean

A boolean contains one of two values:

```text
true
false
```

Boolean values are useful for checking whether something is active, completed, available, or allowed.

Example:

```javascript
const isLearningJavaScript = true;
```

Another example:

```javascript
const isLessonCompleted = false;
```

Boolean values do not use quotation marks.

Correct:

```javascript
const isOnline = true;
```

Incorrect:

```javascript
const isOnline = "true";
```

The first value is a boolean.

The second value is a string because it uses quotation marks.

---

## 4. Undefined

A variable contains `undefined` when it has been declared but has not received a value.

Example:

```javascript
let nextLesson;
```

The variable exists, but no value has been assigned.

Its current value is:

```text
undefined
```

The value can be assigned later.

```javascript
let nextLesson;

nextLesson = "JavaScript Operators";
```

Before the assignment, the value is undefined.

After the assignment, the value becomes a string.

### Undefined Example

```javascript
let projectName;

console.log(projectName);
```

Console output:

```text
undefined
```

---

## 5. Null

The `null` value is used when we intentionally want a variable to contain no value.

Example:

```javascript
const completedProject = null;
```

This means that the variable intentionally contains an empty value.

Another example:

```javascript
let selectedUser = null;
```

This could mean that no user is currently selected.

### Null and Undefined Difference

Undefined usually means:

```text
A value has not been assigned yet.
```

Null usually means:

```text
The value was intentionally set as empty.
```

Example:

```javascript
let nextLesson;

const selectedProject = null;
```

`nextLesson` is undefined because it does not have an assigned value.

`selectedProject` contains null because it was intentionally assigned an empty value.

---

## The `typeof` Operator

The `typeof` operator is used to check the data type of a value.

Example:

```javascript
const studentName = "Mahroos";

console.log(typeof studentName);
```

Console output:

```text
string
```

### Checking a Number

```javascript
const lessonNumber = 7;

console.log(typeof lessonNumber);
```

Output:

```text
number
```

### Checking a Boolean

```javascript
const isLearningJavaScript = true;

console.log(typeof isLearningJavaScript);
```

Output:

```text
boolean
```

### Checking Undefined

```javascript
let nextLesson;

console.log(typeof nextLesson);
```

Output:

```text
undefined
```

---

## Important Note About Null

JavaScript produces a special result when `typeof` is used with null.

Example:

```javascript
const completedProject = null;

console.log(typeof completedProject);
```

Output:

```text
object
```

This is a historical behaviour in JavaScript.

The value is still `null`, even though `typeof null` displays `"object"`.

For this lesson, remember:

```text
null is an intentionally empty value
```

---

## JavaScript Used in This Lesson

### String

```javascript
const studentName = "Mahroos";
```

### Number

```javascript
const lessonNumber = 7;
```

### Boolean

```javascript
const isLearningJavaScript = true;
```

### Undefined

```javascript
let nextLesson;
```

### Null

```javascript
const completedProject = null;
```

---

## Displaying Values in the Console

The values are displayed using `console.log()`.

```javascript
console.log(studentName);
console.log(lessonNumber);
console.log(isLearningJavaScript);
console.log(nextLesson);
console.log(completedProject);
```

Expected output:

```text
Mahroos
7
true
undefined
null
```

---

## Displaying Data Types in the Console

The `typeof` operator checks each data type.

```javascript
console.log(typeof studentName);
console.log(typeof lessonNumber);
console.log(typeof isLearningJavaScript);
console.log(typeof nextLesson);
console.log(typeof completedProject);
```

Expected output:

```text
string
number
boolean
undefined
object
```

The final output is `object` because of JavaScript's historical behaviour with null.

---

## Displaying Values on the Webpage

JavaScript selects HTML elements using their IDs.

Example:

```javascript
document.getElementById("string-output").textContent =
    'Value: "' + studentName + '"';
```

The element with the ID `string-output` receives the string value.

HTML:

```html
<div id="string-output">
    JavaScript output will appear here.
</div>
```

JavaScript:

```javascript
document.getElementById("string-output").textContent =
    'Value: "' + studentName + '"';
```

Webpage output:

```text
Value: "Mahroos"
```

---

## Data Type Comparison

| Data Type | Example | Purpose |
|---|---|---|
| String | `"JavaScript"` | Stores text |
| Number | `7` | Stores numbers |
| Boolean | `true` | Stores true or false |
| Undefined | `undefined` | Represents a value not assigned yet |
| Null | `null` | Represents an intentionally empty value |

---

## Expected Webpage Output

When the webpage is opened:

- A dark-blue header is displayed.
- White lesson sections appear on a light-gray background.
- Each data type has its own example section.
- Dark output boxes display the JavaScript values.
- Cards display the result of the `typeof` operator.
- A table compares all five values.
- The layout adjusts for smaller screens.

The output boxes display:

```text
Value: "Mahroos"
Value: 7
Value: true
Value: undefined
Value: null
```

The data type cards display:

```text
string
number
boolean
undefined
object
```

---

## Practice Examples

### Practice 1: Create Another String

Add the following variable to `script.js`:

```javascript
const jobTitle = "Software Engineer";
```

Display it in the console:

```javascript
console.log(jobTitle);
console.log(typeof jobTitle);
```

Expected output:

```text
Software Engineer
string
```

---

### Practice 2: Create Another Number

Add:

```javascript
const completedLessons = 7;
```

Display its value and type:

```javascript
console.log(completedLessons);
console.log(typeof completedLessons);
```

Expected output:

```text
7
number
```

---

### Practice 3: Change a Boolean Value

Change:

```javascript
const isLearningJavaScript = true;
```

To:

```javascript
const isLearningJavaScript = false;
```

Save the file and refresh the webpage.

The Boolean output changes from:

```text
true
```

To:

```text
false
```

Its data type remains:

```text
boolean
```

---

### Practice 4: Assign an Undefined Variable

Start with:

```javascript
let nextLesson;
```

Then assign a value:

```javascript
nextLesson = "JavaScript Operators";
```

Display the value and type:

```javascript
console.log(nextLesson);
console.log(typeof nextLesson);
```

Expected output:

```text
JavaScript Operators
string
```

The variable is no longer undefined after receiving a value.

---

### Practice 5: Compare Number and String

Add:

```javascript
const numberValue = 100;
const stringValue = "100";
```

Check their types:

```javascript
console.log(typeof numberValue);
console.log(typeof stringValue);
```

Expected output:

```text
number
string
```

The values look similar, but their data types are different.

---

## Common Beginner Mistakes

### Forgetting Quotation Marks Around Text

Incorrect:

```javascript
const courseName = JavaScript;
```

Correct:

```javascript
const courseName = "JavaScript";
```

Text values must be written inside quotation marks.

---

### Placing Quotation Marks Around a Number

```javascript
const lessonNumber = "7";
```

This creates a string, not a number.

Correct number:

```javascript
const lessonNumber = 7;
```

---

### Placing Quotation Marks Around a Boolean

Incorrect boolean:

```javascript
const isCompleted = "true";
```

This is a string.

Correct boolean:

```javascript
const isCompleted = true;
```

---

### Confusing Undefined with Null

Undefined:

```javascript
let selectedLesson;
```

Null:

```javascript
let selectedLesson = null;
```

Undefined means a value has not been assigned.

Null means an empty value was intentionally assigned.

---

### Writing `True` or `False`

Incorrect:

```javascript
const isActive = True;
```

Correct:

```javascript
const isActive = true;
```

JavaScript boolean values must use lowercase letters:

```text
true
false
```

---

### Writing `Null` or `Undefined`

Incorrect:

```javascript
const project = Null;
```

Correct:

```javascript
const project = null;
```

JavaScript keywords are case-sensitive.

---

## Important Notes

- A data type describes the kind of value being used.
- Strings store text.
- Strings use quotation marks.
- Numbers do not use quotation marks.
- Numbers can be whole numbers or decimal numbers.
- Booleans contain either `true` or `false`.
- Boolean values do not use quotation marks.
- Undefined means a value has not been assigned.
- Null represents an intentionally empty value.
- The `typeof` operator checks a value's data type.
- `typeof null` returns `"object"` because of historical JavaScript behaviour.
- JavaScript is case-sensitive.

---

## Easy Way to Remember

```text
String    = Text
Number    = Number
Boolean   = True or false
Undefined = Not assigned
Null      = Intentionally empty
```

Remember quotation marks:

```text
"JavaScript" = String
7            = Number
true         = Boolean
```

Remember how to check a type:

```javascript
typeof value
```

---

## What I Learned

In this lesson, I learned:

- What a JavaScript data type is.
- How to create string values.
- How to create number values.
- How to create boolean values.
- What undefined means.
- What null means.
- The difference between undefined and null.
- How quotation marks affect data types.
- How to use the `typeof` operator.
- Why `typeof null` displays `"object"`.
- How to display data values on a webpage.
- How to check data types in the browser console.

The next lesson is **08 - JavaScript Operators**.