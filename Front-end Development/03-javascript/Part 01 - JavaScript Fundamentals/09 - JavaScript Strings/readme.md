# 09 - JavaScript Strings

## Introduction

In the previous lesson, I learned about JavaScript operators.

In this lesson, I am learning about JavaScript strings.

A string is a value used to store text.

Example:

```javascript
const courseName = "JavaScript";
```

The value `"JavaScript"` is a string because it is written inside quotation marks.

Strings can contain:

- Letters
- Numbers
- Spaces
- Symbols
- Words
- Sentences

---

## Folder Structure

```text
09 - JavaScript Strings/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# What Is a String?

A string is a JavaScript data type used to store text.

Example:

```javascript
const studentName = "Mahroos";
```

Another example:

```javascript
const jobTitle = "Software Engineer";
```

Check the data type:

```javascript
console.log(typeof studentName);
```

Output:

```text
string
```

---

# Creating Strings

JavaScript strings can be created using:

1. Double quotes
2. Single quotes
3. Backticks

---

## Double Quotes

A string can use double quotation marks.

```javascript
const language = "JavaScript";
```

Another example:

```javascript
const message = "Welcome to the course";
```

---

## Single Quotes

A string can use single quotation marks.

```javascript
const jobTitle = 'Software Engineer';
```

Another example:

```javascript
const country = 'Sri Lanka';
```

Both single and double quotes create strings.

---

## Backticks

A string can also use backticks.

```javascript
const projectName = `Coding Practice`;
```

Backticks are commonly used for template literals.

Backtick:

```text
`
```

Single quote:

```text
'
```

They look similar, but they are different characters.

---

# Matching Quotation Marks

The opening and closing quotation marks must match.

Correct:

```javascript
const message = "Hello";
```

Correct:

```javascript
const message = 'Hello';
```

Correct:

```javascript
const message = `Hello`;
```

Incorrect:

```javascript
const message = "Hello';
```

Incorrect:

```javascript
const message = 'Hello";
```

Mismatched quotation marks produce a syntax error.

---

# Quotation Marks Inside Strings

Different outer quotation marks can make inner quotation marks easier to use.

Example:

```javascript
const message =
    'Mahroos said, "Hello."';
```

Output:

```text
Mahroos said, "Hello."
```

Another example:

```javascript
const message =
    "It's a JavaScript lesson.";
```

Output:

```text
It's a JavaScript lesson.
```

---

# String Concatenation

Concatenation means joining strings together.

The plus operator joins strings.

```javascript
const firstName = "Mahroos";
const lastName = "Mahthie";

const fullName =
    firstName + lastName;
```

Output:

```text
MahroosMahthie
```

There is no space between the names.

Add a space string:

```javascript
const fullName =
    firstName + " " + lastName;
```

Output:

```text
Mahroos Mahthie
```

---

## Joining a Sentence

```javascript
const studentName = "Mahroos";
const language = "JavaScript";

const message =
    studentName + " is learning " + language + ".";

console.log(message);
```

Output:

```text
Mahroos is learning JavaScript.
```

The plus operator joins the variables and strings.

---

# Template Literals

Template literals use backticks.

```javascript
const message = `Hello`;
```

Template literals allow variables to be inserted directly into strings.

Use:

```javascript
${variableName}
```

Example:

```javascript
const studentName = "Mahroos";
const language = "JavaScript";

const message =
    `${studentName} is learning ${language}.`;

console.log(message);
```

Output:

```text
Mahroos is learning JavaScript.
```

---

## Concatenation Compared with Template Literals

Concatenation:

```javascript
const message =
    studentName + " is learning " + language + ".";
```

Template literal:

```javascript
const message =
    `${studentName} is learning ${language}.`;
```

Both produce the same result.

Template literals are often easier to read when several variables are used.

---

## Expressions Inside Template Literals

JavaScript expressions can be used inside `${}`.

```javascript
const message =
    `Ten plus five equals ${10 + 5}.`;

console.log(message);
```

Output:

```text
Ten plus five equals 15.
```

JavaScript calculates the expression before inserting the result.

---

# String Length

The `length` property counts the characters inside a string.

```javascript
const language = "JavaScript";

console.log(language.length);
```

Output:

```text
10
```

The word `JavaScript` contains ten characters.

---

## Spaces Are Counted

```javascript
const fullName = "Mahroos Mahthie";

console.log(fullName.length);
```

The space between the names is included in the character count.

JavaScript counts:

- Letters
- Numbers
- Spaces
- Punctuation
- Symbols

---

## Length Is a Property

Use:

```javascript
text.length
```

Do not add parentheses.

Correct:

```javascript
courseName.length
```

Incorrect:

```javascript
courseName.length()
```

String methods will be introduced in the next lesson, but `length` is a property.

---

# String Character Indexes

Each character inside a string has an index number.

JavaScript begins counting at zero.

For:

```text
JavaScript
```

The indexes are:

```text
J = 0
a = 1
v = 2
a = 3
S = 4
c = 5
r = 6
i = 7
p = 8
t = 9
```

---

## Access the First Character

```javascript
const language = "JavaScript";

console.log(language[0]);
```

Output:

```text
J
```

---

## Access the Second Character

```javascript
console.log(language[1]);
```

Output:

```text
a
```

Remember:

```text
Index 0 = First character
Index 1 = Second character
Index 2 = Third character
```

---

## Access the Last Character

The final index is one less than the string length.

```javascript
const language = "JavaScript";

const lastCharacter =
    language[language.length - 1];

console.log(lastCharacter);
```

Output:

```text
t
```

The length is `10`, but the last index is `9`.

---

## Invalid Index

JavaScript returns `undefined` when an index does not exist.

```javascript
const language = "JavaScript";

console.log(language[20]);
```

Output:

```text
undefined
```

---

# Escape Characters

Escape characters allow special characters to be written inside strings.

An escape character begins with a backslash:

```javascript
\
```

---

## Double Quotation Mark

Use:

```javascript
\"
```

Example:

```javascript
const message =
    "Mahroos said, \"Hello.\"";
```

Output:

```text
Mahroos said, "Hello."
```

---

## Single Quotation Mark

Use:

```javascript
\'
```

Example:

```javascript
const message =
    'It\'s a JavaScript lesson.';
```

Output:

```text
It's a JavaScript lesson.
```

---

## New Line

Use:

```javascript
\n
```

Example:

```javascript
const message =
    "First line\nSecond line";

console.log(message);
```

Output:

```text
First line
Second line
```

---

## Backslash

Use two backslashes to display one backslash.

```javascript
const folder =
    "JavaScript\\Lesson-09";

console.log(folder);
```

Output:

```text
JavaScript\Lesson-09
```

---

## Escape Character Summary

| Escape Character | Meaning |
|---|---|
| `\"` | Double quotation mark |
| `\'` | Single quotation mark |
| `\n` | New line |
| `\\` | Backslash |

---

# Strings and Numbers

The plus operator behaves differently with strings and numbers.

Number addition:

```javascript
console.log(10 + 5);
```

Output:

```text
15
```

Both values are numbers.

---

## String Concatenation with Numbers

```javascript
console.log("10" + 5);
```

Output:

```text
105
```

Because one value is a string, JavaScript joins the values as text.

Check the type:

```javascript
console.log(typeof ("10" + 5));
```

Output:

```text
string
```

---

## Calculation Order

```javascript
console.log(10 + 5 + " points");
```

Output:

```text
15 points
```

JavaScript adds the numbers first.

Another example:

```javascript
console.log("Points: " + 10 + 5);
```

Output:

```text
Points: 105
```

JavaScript starts joining from left to right.

Use parentheses to calculate first:

```javascript
console.log("Points: " + (10 + 5));
```

Output:

```text
Points: 15
```

---

# Comparing Strings

Strings can be compared using strict equality.

```javascript
const firstLanguage = "JavaScript";
const secondLanguage = "JavaScript";

console.log(
    firstLanguage === secondLanguage
);
```

Output:

```text
true
```

The two strings contain the same characters.

---

## Strings Are Case-Sensitive

```javascript
console.log(
    "JavaScript" === "javascript"
);
```

Output:

```text
false
```

The uppercase `J` and lowercase `j` are different.

JavaScript string comparisons are case-sensitive.

---

## Spaces Affect Comparisons

```javascript
console.log(
    "JavaScript" === "JavaScript "
);
```

Output:

```text
false
```

The second string contains an extra space.

---

# Empty Strings

An empty string contains quotation marks without any characters.

```javascript
const emptyMessage = "";
```

It is still a string.

```javascript
console.log(typeof emptyMessage);
```

Output:

```text
string
```

Its length is zero.

```javascript
console.log(emptyMessage.length);
```

Output:

```text
0
```

---

## Empty String Compared with a Space

Empty string:

```javascript
""
```

Length:

```text
0
```

String containing one space:

```javascript
" "
```

Length:

```text
1
```

A space is a character.

---

# Strings Cannot Be Changed by Character Index

Individual characters inside strings cannot be directly replaced.

```javascript
let language = "JavaScript";

language[0] = "Y";

console.log(language);
```

The result remains:

```text
JavaScript
```

To change the text, assign a new string.

```javascript
language = "TypeScript";
```

---

# JavaScript Used in This Lesson

## Basic String

```javascript
const courseName = "JavaScript";
```

## Double Quotes

```javascript
const language = "JavaScript";
```

## Single Quotes

```javascript
const role = 'Software Engineer';
```

## Backticks

```javascript
const project = `Coding Practice`;
```

## Concatenation

```javascript
const fullName =
    firstName + " " + lastName;
```

## Template Literal

```javascript
const message =
    `${studentName} is learning ${language}.`;
```

## String Length

```javascript
const characterCount =
    courseName.length;
```

## Character Index

```javascript
const firstCharacter =
    courseName[0];
```

## Last Character

```javascript
const lastCharacter =
    courseName[courseName.length - 1];
```

## Empty String

```javascript
const emptyMessage = "";
```

---

# Expected Webpage Output

When the webpage opens:

- A dark-blue header appears.
- White sections appear on a light-gray background.
- A basic string and its data type are displayed.
- Double quotes, single quotes, and backticks are compared.
- Two names are joined using concatenation.
- Variables are inserted using template literals.
- String lengths are displayed.
- JavaScript character indexes are shown.
- Escape-character examples appear.
- Number addition and string joining are compared.
- String comparisons display boolean results.
- An empty string displays a length of zero.
- The page adjusts for smaller screens.

---

# Practice Examples

## Practice 1: Create Three Strings

Create one string using each quotation style.

```javascript
const firstString = "JavaScript";
const secondString = 'Web Development';
const thirdString = `Coding Practice`;

console.log(firstString);
console.log(secondString);
console.log(thirdString);
```

---

## Practice 2: Join a Full Name

```javascript
const firstName = "Mahroos";
const lastName = "Mahthie";

const fullName =
    firstName + " " + lastName;

console.log(fullName);
```

Expected output:

```text
Mahroos Mahthie
```

---

## Practice 3: Create a Template Literal

```javascript
const studentName = "Mahroos";
const lessonNumber = 9;

const message =
    `${studentName} is studying Lesson ${lessonNumber}.`;

console.log(message);
```

Expected output:

```text
Mahroos is studying Lesson 9.
```

---

## Practice 4: Check String Length

```javascript
const projectName = "Coding Practice";

console.log(projectName.length);
```

Remember that the space is also counted.

---

## Practice 5: Access Characters

```javascript
const language = "JavaScript";

console.log(language[0]);
console.log(language[4]);
console.log(language[9]);
```

Expected output:

```text
J
S
t
```

---

## Practice 6: Access the Last Character

```javascript
const projectName = "Portfolio";

const lastCharacter =
    projectName[projectName.length - 1];

console.log(lastCharacter);
```

Expected output:

```text
o
```

---

## Practice 7: Test an Invalid Index

```javascript
const language = "JavaScript";

console.log(language[50]);
```

Expected output:

```text
undefined
```

---

## Practice 8: Use Escape Characters

```javascript
const message =
    "Mahroos said, \"JavaScript is interesting.\"";

console.log(message);
```

Expected output:

```text
Mahroos said, "JavaScript is interesting."
```

---

## Practice 9: Compare Strings

```javascript
console.log(
    "JavaScript" === "JavaScript"
);

console.log(
    "JavaScript" === "javascript"
);
```

Expected output:

```text
true
false
```

---

## Practice 10: Compare Number Addition and String Joining

```javascript
console.log(20 + 5);
console.log("20" + 5);
```

Expected output:

```text
25
205
```

---

# Common Beginner Mistakes

## Forgetting Quotation Marks

Incorrect:

```javascript
const language = JavaScript;
```

Correct:

```javascript
const language = "JavaScript";
```

---

## Mixing Quotation Marks

Incorrect:

```javascript
const message = "Hello';
```

Correct:

```javascript
const message = "Hello";
```

---

## Forgetting the Space During Concatenation

```javascript
const fullName =
    firstName + lastName;
```

Output:

```text
MahroosMahthie
```

Correct:

```javascript
const fullName =
    firstName + " " + lastName;
```

---

## Using Normal Quotes for Interpolation

Incorrect:

```javascript
const message =
    "${studentName} is learning JavaScript.";
```

This displays the symbols as normal text.

Correct:

```javascript
const message =
    `${studentName} is learning JavaScript.`;
```

Variable interpolation requires backticks.

---

## Starting Index Counting at One

Incorrect assumption:

```text
First character = Index 1
```

Correct:

```text
First character = Index 0
```

---

## Calling Length Like a Method

Incorrect:

```javascript
courseName.length()
```

Correct:

```javascript
courseName.length
```

`length` is a property.

---

## Expecting Number Addition from a String

```javascript
console.log("10" + 5);
```

The output is:

```text
105
```

It is not:

```text
15
```

The quoted value is a string.

---

## Ignoring Uppercase and Lowercase Differences

```javascript
"JavaScript" === "javascript"
```

Result:

```text
false
```

String comparisons are case-sensitive.

---

# Important Notes

- Strings store text.
- Strings can use double quotes.
- Strings can use single quotes.
- Strings can use backticks.
- Opening and closing quotation marks must match.
- The plus operator joins strings.
- Joining strings is called concatenation.
- Template literals use backticks.
- `${}` inserts values into template literals.
- The `length` property counts characters.
- String index counting begins at zero.
- Spaces and symbols are counted as characters.
- An invalid index returns `undefined`.
- Escape characters begin with a backslash.
- Strings and numbers behave differently with the plus operator.
- String comparisons are case-sensitive.
- An empty string has a length of zero.
- Individual string characters cannot be directly replaced.
- String methods are covered in the next lesson.

---

# Easy Way to Remember

Create strings:

```javascript
"Double quotes"
'Single quotes'
`Backticks`
```

Join strings:

```javascript
firstName + " " + lastName
```

Insert variables:

```javascript
`${firstName} ${lastName}`
```

Count characters:

```javascript
text.length
```

Read the first character:

```javascript
text[0]
```

Read the last character:

```javascript
text[text.length - 1]
```

Remember:

```text
String = Text
Index starts at 0
length counts characters
```

---

# What I Learned

In this lesson, I learned:

- What a JavaScript string is.
- How to create strings using double quotes.
- How to create strings using single quotes.
- How to create strings using backticks.
- Why quotation marks must match.
- How to include quotation marks inside strings.
- How string concatenation works.
- How to add spaces when joining strings.
- How template literals work.
- How to insert variables using `${}`.
- How expressions work inside template literals.
- How the `length` property counts characters.
- How JavaScript character indexes work.
- How to access the first and last characters.
- What happens when an index does not exist.
- How escape characters work.
- How strings and numbers behave with the plus operator.
- How to compare strings.
- Why string comparisons are case-sensitive.
- What an empty string is.

The next lesson is **10 - JavaScript String Methods**.