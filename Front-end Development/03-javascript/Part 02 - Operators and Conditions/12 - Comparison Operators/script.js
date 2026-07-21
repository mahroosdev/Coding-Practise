// ========================================
// Comparison Operator Introduction
// ========================================

const introductionResult = 20 > 18;

console.log("Comparison operator introduction:");
console.log(introductionResult);
console.log(typeof introductionResult);

document.getElementById("introduction-output").textContent =
    "20 > 18: " + introductionResult + "\n" +
    "Result type: " + typeof introductionResult;


// ========================================
// Greater Than
// ========================================

const greaterThanTrue = 20 > 18;
const greaterThanFalse = 15 > 20;

console.log("Greater than:");
console.log(greaterThanTrue);
console.log(greaterThanFalse);

document.getElementById("greater-than-output").textContent =
    "20 > 18: " + greaterThanTrue + "\n" +
    "15 > 20: " + greaterThanFalse;


// ========================================
// Less Than
// ========================================

const lessThanTrue = 15 < 20;
const lessThanFalse = 25 < 20;

console.log("Less than:");
console.log(lessThanTrue);
console.log(lessThanFalse);

document.getElementById("less-than-output").textContent =
    "15 < 20: " + lessThanTrue + "\n" +
    "25 < 20: " + lessThanFalse;


// ========================================
// Greater Than or Equal To
// ========================================

const greaterEqualOne = 20 >= 18;
const greaterEqualTwo = 18 >= 18;
const greaterEqualThree = 15 >= 18;

console.log("Greater than or equal to:");
console.log(greaterEqualOne);
console.log(greaterEqualTwo);
console.log(greaterEqualThree);

document.getElementById("greater-equal-output").textContent =
    "20 >= 18: " + greaterEqualOne + "\n" +
    "18 >= 18: " + greaterEqualTwo + "\n" +
    "15 >= 18: " + greaterEqualThree;


// ========================================
// Less Than or Equal To
// ========================================

const lessEqualOne = 15 <= 18;
const lessEqualTwo = 18 <= 18;
const lessEqualThree = 20 <= 18;

console.log("Less than or equal to:");
console.log(lessEqualOne);
console.log(lessEqualTwo);
console.log(lessEqualThree);

document.getElementById("less-equal-output").textContent =
    "15 <= 18: " + lessEqualOne + "\n" +
    "18 <= 18: " + lessEqualTwo + "\n" +
    "20 <= 18: " + lessEqualThree;


// ========================================
// Strict Equality
// ========================================

const strictEqualOne = 10 === 10;
const strictEqualTwo = 10 === "10";
const strictEqualThree = "JavaScript" === "JavaScript";

console.log("Strict equality:");
console.log(strictEqualOne);
console.log(strictEqualTwo);
console.log(strictEqualThree);

document.getElementById("strict-equality-output").textContent =
    "10 === 10: " + strictEqualOne + "\n" +
    '10 === "10": ' + strictEqualTwo + "\n" +
    '"JavaScript" === "JavaScript": ' + strictEqualThree;


// ========================================
// Strict Inequality
// ========================================

const strictNotEqualOne = 10 !== "10";
const strictNotEqualTwo = 10 !== 5;
const strictNotEqualThree = 10 !== 10;

console.log("Strict inequality:");
console.log(strictNotEqualOne);
console.log(strictNotEqualTwo);
console.log(strictNotEqualThree);

document.getElementById("strict-inequality-output").textContent =
    '10 !== "10": ' + strictNotEqualOne + "\n" +
    "10 !== 5: " + strictNotEqualTwo + "\n" +
    "10 !== 10: " + strictNotEqualThree;


// ========================================
// Loose Equality
// ========================================

const looseEqualOne = 10 == "10";
const looseEqualTwo = 1 == true;
const looseEqualThree = 0 == false;

console.log("Loose equality:");
console.log(looseEqualOne);
console.log(looseEqualTwo);
console.log(looseEqualThree);

document.getElementById("loose-equality-output").textContent =
    '10 == "10": ' + looseEqualOne + "\n" +
    "1 == true: " + looseEqualTwo + "\n" +
    "0 == false: " + looseEqualThree;


// ========================================
// String Comparisons
// ========================================

const sameLanguage =
    "JavaScript" === "JavaScript";

const differentLetterCase =
    "JavaScript" === "javascript";

const differentWords =
    "JavaScript" !== "Python";

console.log("String comparisons:");
console.log(sameLanguage);
console.log(differentLetterCase);
console.log(differentWords);

document.getElementById("string-comparison-output").textContent =
    '"JavaScript" === "JavaScript": ' +
    sameLanguage + "\n" +
    '"JavaScript" === "javascript": ' +
    differentLetterCase + "\n" +
    '"JavaScript" !== "Python": ' +
    differentWords;


// ========================================
// Practical Age Check
// ========================================

const userAge = 20;
const minimumAge = 18;

const canContinue =
    userAge >= minimumAge;

const isUnderMinimumAge =
    userAge < minimumAge;

console.log("Age comparison:");
console.log(canContinue);
console.log(isUnderMinimumAge);

document.getElementById("age-check-output").textContent =
    "User age: " + userAge + "\n" +
    "Minimum age: " + minimumAge + "\n" +
    "Meets minimum age: " + canContinue + "\n" +
    "Below minimum age: " + isUnderMinimumAge;


// ========================================
// Comparison Cards
// ========================================

document.getElementById("card-one-output").textContent =
    20 > 18;

document.getElementById("card-two-output").textContent =
    10 < 5;

document.getElementById("card-three-output").textContent =
    15 === 15;

document.getElementById("card-four-output").textContent =
    15 === "15";

document.getElementById("card-five-output").textContent =
    10 !== 5;

document.getElementById("card-six-output").textContent =
    "JS" === "js";