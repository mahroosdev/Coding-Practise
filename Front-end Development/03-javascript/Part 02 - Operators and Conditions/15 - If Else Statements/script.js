// If else introduction

const introductionCondition = true;
let introductionMessage;

if (introductionCondition) {
    introductionMessage =
        "The condition is true, so the if block ran.";
} else {
    introductionMessage =
        "The condition is false, so the else block ran.";
}

document.getElementById("introduction-output").textContent =
    introductionMessage;

console.log("Introduction:");
console.log(introductionMessage);


// True condition

const firstNumber = 20;
const secondNumber = 10;
let trueMessage;

if (firstNumber > secondNumber) {
    trueMessage =
        "20 is greater than 10.\nThe if block ran.";
} else {
    trueMessage =
        "20 is not greater than 10.\nThe else block ran.";
}

document.getElementById("true-output").textContent =
    trueMessage;


// False condition

const availableStock = 0;
let stockMessage;

if (availableStock > 0) {
    stockMessage = "The product is available.";
} else {
    stockMessage = "The product is out of stock.";
}

document.getElementById("false-output").textContent =
    "Available stock: " + availableStock + "\n" +
    stockMessage;


// Age check

const userAge = 17;
const minimumAge = 18;
let ageMessage;

if (userAge >= minimumAge) {
    ageMessage = "The user meets the age requirement.";
} else {
    ageMessage = "The user does not meet the age requirement.";
}

document.getElementById("age-output").textContent =
    "User age: " + userAge + "\n" +
    "Minimum age: " + minimumAge + "\n" +
    ageMessage;


// Passing score

const studentScore = 72;
const passingScore = 50;
let scoreMessage;

if (studentScore >= passingScore) {
    scoreMessage = "The student passed.";
} else {
    scoreMessage = "The student failed.";
}

document.getElementById("score-output").textContent =
    "Student score: " + studentScore + "\n" +
    "Passing score: " + passingScore + "\n" +
    scoreMessage;


// Login status

const isLoggedIn = false;
let loginMessage;

if (isLoggedIn) {
    loginMessage = "Welcome back!";
} else {
    loginMessage = "Please log in to continue.";
}

document.getElementById("login-output").textContent =
    "Logged in: " + isLoggedIn + "\n" +
    loginMessage;


// Even or odd

const numberValue = 7;
let numberMessage;

if (numberValue % 2 === 0) {
    numberMessage = numberValue + " is an even number.";
} else {
    numberMessage = numberValue + " is an odd number.";
}

document.getElementById("number-output").textContent =
    numberMessage;


// Example cards

document.getElementById("age-card-output").textContent =
    ageMessage;

document.getElementById("score-card-output").textContent =
    scoreMessage;

document.getElementById("login-card-output").textContent =
    loginMessage;