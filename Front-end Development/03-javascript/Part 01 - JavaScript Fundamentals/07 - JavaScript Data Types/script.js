// String data type
const studentName = "Mahroos";

console.log("String value:");
console.log(studentName);

document.getElementById("string-output").textContent =
    'Value: "' + studentName + '"';

document.getElementById("string-type").textContent =
    typeof studentName;


// Number data type
const lessonNumber = 7;

console.log("Number value:");
console.log(lessonNumber);

document.getElementById("number-output").textContent =
    "Value: " + lessonNumber;

document.getElementById("number-type").textContent =
    typeof lessonNumber;


// Boolean data type
const isLearningJavaScript = true;

console.log("Boolean value:");
console.log(isLearningJavaScript);

document.getElementById("boolean-output").textContent =
    "Value: " + isLearningJavaScript;

document.getElementById("boolean-type").textContent =
    typeof isLearningJavaScript;


// Undefined data type
let nextLesson;

console.log("Undefined value:");
console.log(nextLesson);

document.getElementById("undefined-output").textContent =
    "Value: " + nextLesson;

document.getElementById("undefined-type").textContent =
    typeof nextLesson;


// Null value
const completedProject = null;

console.log("Null value:");
console.log(completedProject);

document.getElementById("null-output").textContent =
    "Value: " + completedProject;

document.getElementById("null-type").textContent =
    typeof completedProject;


// Additional console examples
console.log("Checking all data types:");

console.log(typeof studentName);
console.log(typeof lessonNumber);
console.log(typeof isLearningJavaScript);
console.log(typeof nextLesson);
console.log(typeof completedProject);