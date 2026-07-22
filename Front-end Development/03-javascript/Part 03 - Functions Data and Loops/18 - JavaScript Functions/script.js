// Function introduction

function showMessage() {
    document.getElementById("introduction-output").textContent =
        "Hello from a JavaScript function!";
}

showMessage();


// Greeting function

function greetStudent() {
    document.getElementById("greeting-output").textContent =
        "Welcome to JavaScript Functions!";
}

greetStudent();


// Calling a function more than once

let callCount = 0;
let callMessages = "";

function recordFunctionCall() {
    callCount++;

    callMessages +=
        "Function call number: " + callCount + "\n";
}

recordFunctionCall();
recordFunctionCall();
recordFunctionCall();

document.getElementById("multiple-call-output").textContent =
    callMessages;


// Function with several statements

function displayCourseDetails() {
    const courseName = "JavaScript";
    const lessonNumber = 18;
    const lessonTitle = "JavaScript Functions";

    const courseMessage =
        "Course: " + courseName + "\n" +
        "Lesson number: " + lessonNumber + "\n" +
        "Lesson title: " + lessonTitle;

    document.getElementById("course-output").textContent =
        courseMessage;

    console.log(courseMessage);
}

displayCourseDetails();


// Calculation function

function calculateTotal() {
    const productPrice = 20;
    const quantity = 3;
    const totalPrice = productPrice * quantity;

    document.getElementById("calculation-output").textContent =
        "Product price: " + productPrice + "\n" +
        "Quantity: " + quantity + "\n" +
        "Total price: " + totalPrice;
}

calculateTotal();