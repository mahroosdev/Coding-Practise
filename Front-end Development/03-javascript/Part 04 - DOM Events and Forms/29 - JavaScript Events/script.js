// Click event

const clickButton =
    document.getElementById("click-button");

const clickOutput =
    document.getElementById("click-output");

clickButton.addEventListener("click", function () {
    clickOutput.textContent =
        "The click event happened successfully.";
});


// Double-click event

const doubleClickButton =
    document.getElementById("double-click-button");

const doubleClickOutput =
    document.getElementById("double-click-output");

doubleClickButton.addEventListener("dblclick", function () {
    doubleClickOutput.textContent =
        "The button was double-clicked.";
});


// Mouse events

const mouseBox =
    document.getElementById("mouse-box");

const mouseOutput =
    document.getElementById("mouse-output");

mouseBox.addEventListener("mouseenter", function () {
    mouseBox.classList.add("mouse-active");

    mouseOutput.textContent =
        "The mouse entered the box.";
});

mouseBox.addEventListener("mouseleave", function () {
    mouseBox.classList.remove("mouse-active");

    mouseOutput.textContent =
        "The mouse left the box.";
});


// Keyboard event

const keyboardInput =
    document.getElementById("keyboard-input");

const keyboardOutput =
    document.getElementById("keyboard-output");

keyboardInput.addEventListener("keydown", function (event) {
    keyboardOutput.textContent =
        "Pressed key: " + event.key;
});


// Event object

const eventButton =
    document.getElementById("event-button");

const eventOutput =
    document.getElementById("event-output");

eventButton.addEventListener("click", function (event) {
    eventOutput.textContent =
        "Event type: " + event.type + "\n" +
        "Target tag: " + event.target.tagName + "\n" +
        "Target ID: " + event.target.id;
});


// Click counter

const counterButton =
    document.getElementById("counter-button");

const counterDisplay =
    document.getElementById("counter-display");

let clickCount = 0;

counterButton.addEventListener("click", function () {
    clickCount++;

    counterDisplay.textContent =
        clickCount;
});


console.log("Event listeners were added successfully.");