// ========================================
// Basic String
// ========================================

const courseName = "JavaScript";

console.log("Basic string:");
console.log(courseName);
console.log(typeof courseName);

document.getElementById("basic-string-output").textContent =
    "Value: " + courseName + "\n" +
    "Data type: " + typeof courseName;


// ========================================
// Creating Strings
// ========================================

const doubleQuoteString = "JavaScript";
const singleQuoteString = 'Software Engineer';
const backtickString = `Coding Practice`;

console.log("String quotation marks:");
console.log(doubleQuoteString);
console.log(singleQuoteString);
console.log(backtickString);

document.getElementById("double-quote-output").textContent =
    doubleQuoteString;

document.getElementById("single-quote-output").textContent =
    singleQuoteString;

document.getElementById("backtick-output").textContent =
    backtickString;


// ========================================
// String Concatenation
// ========================================

const firstName = "Mahroos";
const lastName = "Mahthie";

const fullName = firstName + " " + lastName;

const concatenationMessage =
    fullName + " is learning " + courseName + ".";

console.log("String concatenation:");
console.log(fullName);
console.log(concatenationMessage);

document.getElementById("concatenation-output").textContent =
    "First name: " + firstName + "\n" +
    "Last name: " + lastName + "\n" +
    "Full name: " + fullName + "\n" +
    concatenationMessage;


// ========================================
// Template Literals
// ========================================

const studentName = "Mahroos";
const language = "JavaScript";
const lessonNumber = 9;

const templateMessage =
    `${studentName} is learning ${language} Lesson ${lessonNumber}.`;

const calculationMessage =
    `Ten plus five equals ${10 + 5}.`;

console.log("Template literals:");
console.log(templateMessage);
console.log(calculationMessage);

document.getElementById("template-output").textContent =
    templateMessage + "\n" +
    calculationMessage;


// ========================================
// String Length
// ========================================

const courseNameLength = courseName.length;
const fullNameLength = fullName.length;

console.log("String lengths:");
console.log(courseNameLength);
console.log(fullNameLength);

document.getElementById("length-output").textContent =
    '"' + courseName + '" contains ' +
    courseNameLength + " characters.\n" +
    '"' + fullName + '" contains ' +
    fullNameLength + " characters, including the space.";


// ========================================
// String Character Indexes
// ========================================

const firstCharacter = courseName[0];
const secondCharacter = courseName[1];
const fifthCharacter = courseName[4];

const lastCharacter =
    courseName[courseName.length - 1];

const invalidCharacter =
    courseName[20];

console.log("String characters:");
console.log(firstCharacter);
console.log(secondCharacter);
console.log(fifthCharacter);
console.log(lastCharacter);
console.log(invalidCharacter);

document.getElementById("character-output").textContent =
    "Character at index 0: " + firstCharacter + "\n" +
    "Character at index 1: " + secondCharacter + "\n" +
    "Character at index 4: " + fifthCharacter + "\n" +
    "Last character: " + lastCharacter + "\n" +
    "Character at index 20: " + invalidCharacter;


// ========================================
// Escape Characters
// ========================================

const doubleQuoteMessage =
    "Mahroos said, \"I am learning JavaScript.\"";

const singleQuoteMessage =
    'It\'s a JavaScript lesson.';

const newLineMessage =
    "First line\nSecond line";

const backslashMessage =
    "Folder: JavaScript\\Lesson-09";

console.log("Escape characters:");
console.log(doubleQuoteMessage);
console.log(singleQuoteMessage);
console.log(newLineMessage);
console.log(backslashMessage);

document.getElementById("escape-output").textContent =
    doubleQuoteMessage + "\n" +
    singleQuoteMessage + "\n" +
    newLineMessage + "\n" +
    backslashMessage;


// ========================================
// Strings and Numbers
// ========================================

const numberAddition = 10 + 5;
const stringAndNumber = "10" + 5;

console.log("Numbers and strings:");
console.log(numberAddition);
console.log(stringAndNumber);

document.getElementById("number-addition-output").textContent =
    "Result: " + numberAddition + "\n" +
    "Data type: " + typeof numberAddition;

document.getElementById("string-number-output").textContent =
    "Result: " + stringAndNumber + "\n" +
    "Data type: " + typeof stringAndNumber;


// ========================================
// Comparing Strings
// ========================================

const firstLanguage = "JavaScript";
const secondLanguage = "JavaScript";
const lowercaseLanguage = "javascript";

const sameStringResult =
    firstLanguage === secondLanguage;

const caseDifferenceResult =
    firstLanguage === lowercaseLanguage;

console.log("String comparisons:");
console.log(sameStringResult);
console.log(caseDifferenceResult);

document.getElementById("comparison-output").textContent =
    '"JavaScript" === "JavaScript": ' +
    sameStringResult + "\n" +
    '"JavaScript" === "javascript": ' +
    caseDifferenceResult;


// ========================================
// Empty String
// ========================================

const emptyMessage = "";

console.log("Empty string:");
console.log(emptyMessage);
console.log(emptyMessage.length);
console.log(typeof emptyMessage);

document.getElementById("empty-string-output").textContent =
    'Value: "' + emptyMessage + '"\n' +
    "Length: " + emptyMessage.length + "\n" +
    "Data type: " + typeof emptyMessage;