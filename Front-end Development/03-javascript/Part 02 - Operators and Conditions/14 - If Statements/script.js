// ========================================
// If Statement Introduction
// ========================================

const introductionCondition = true;

document.getElementById("introduction-output").textContent =
    "The condition is false, so the block did not run.";

if (introductionCondition) {
    document.getElementById("introduction-output").textContent =
        "The condition is true, so the if block ran.";
}

console.log("Introduction condition:");
console.log(introductionCondition);


// ========================================
// True Condition
// ========================================

const trueConditionResult = 20 > 18;

document.getElementById("true-condition-output").textContent =
    "The condition was false.";

if (trueConditionResult) {
    document.getElementById("true-condition-output").textContent =
        "20 > 18 is true.\nThe code inside the if statement ran.";
}

console.log("True condition:");
console.log(trueConditionResult);


// ========================================
// False Condition
// ========================================

const falseConditionResult = 10 > 20;

document.getElementById("false-condition-output").textContent =
    "10 > 20 is false.\nThe code inside the if statement was skipped.";

if (falseConditionResult) {
    document.getElementById("false-condition-output").textContent =
        "This message will not appear.";
}

console.log("False condition:");
console.log(falseConditionResult);


// ========================================
// Age Check
// ========================================

const userAge = 20;
const minimumAge = 18;

document.getElementById("age-output").textContent =
    "The age requirement was not met.";

if (userAge >= minimumAge) {
    document.getElementById("age-output").textContent =
        "User age: " + userAge + "\n" +
        "Minimum age: " + minimumAge + "\n" +
        "The age requirement was met.";
}

console.log("Age check:");
console.log(userAge >= minimumAge);


// ========================================
// Strict Equality Check
// ========================================

const courseName = "JavaScript";

document.getElementById("equality-output").textContent =
    "The course name did not match.";

if (courseName === "JavaScript") {
    document.getElementById("equality-output").textContent =
        "Course name: " + courseName + "\n" +
        "The course name matched correctly.";
}

console.log("Strict equality check:");
console.log(courseName === "JavaScript");


// ========================================
// Logical AND
// ========================================

const hasEmail = true;
const hasPassword = true;

document.getElementById("and-output").textContent =
    "The login details are incomplete.";

if (hasEmail && hasPassword) {
    document.getElementById("and-output").textContent =
        "Email entered: " + hasEmail + "\n" +
        "Password entered: " + hasPassword + "\n" +
        "Both login details are available.";
}

console.log("Logical AND inside an if statement:");
console.log(hasEmail && hasPassword);


// ========================================
// Logical OR
// ========================================

const isAdmin = false;
const isCreator = true;

document.getElementById("or-output").textContent =
    "The user does not have access.";

if (isAdmin || isCreator) {
    document.getElementById("or-output").textContent =
        "Administrator: " + isAdmin + "\n" +
        "Creator: " + isCreator + "\n" +
        "At least one access condition is true.";
}

console.log("Logical OR inside an if statement:");
console.log(isAdmin || isCreator);


// ========================================
// Multiple If Statements
// ========================================

const studentScore = 85;

let resultMessages = "";

if (studentScore >= 50) {
    resultMessages +=
        "The student reached the passing score.\n";
}

if (studentScore >= 75) {
    resultMessages +=
        "The student achieved a high score.\n";
}

if (studentScore === 100) {
    resultMessages +=
        "The student achieved a perfect score.";
}

document.getElementById("multiple-if-output").textContent =
    "Student score: " + studentScore + "\n" +
    resultMessages;

console.log("Multiple if statements:");
console.log(resultMessages);


// ========================================
// Example Cards
// ========================================

const cardAge = 21;
const cardScore = 70;
const cardLoginStatus = true;

document.getElementById("age-card-output").textContent =
    "Condition is false.";

if (cardAge >= 18) {
    document.getElementById("age-card-output").textContent =
        "Condition is true.";
}

document.getElementById("score-card-output").textContent =
    "Condition is false.";

if (cardScore >= 50) {
    document.getElementById("score-card-output").textContent =
        "Condition is true.";
}

document.getElementById("login-card-output").textContent =
    "Condition is false.";

if (cardLoginStatus === true) {
    document.getElementById("login-card-output").textContent =
        "Condition is true.";
}