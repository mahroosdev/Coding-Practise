// Switch introduction

const courseName = "JavaScript";
let introductionMessage;

switch (courseName) {
    case "JavaScript":
        introductionMessage =
            "The JavaScript case matched.";
        break;

    case "Python":
        introductionMessage =
            "The Python case matched.";
        break;

    default:
        introductionMessage =
            "No course case matched.";
}

document.getElementById("introduction-output").textContent =
    "Course: " + courseName + "\n" +
    introductionMessage;


// Day of the week

const dayNumber = 3;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;

    case 2:
        dayName = "Tuesday";
        break;

    case 3:
        dayName = "Wednesday";
        break;

    case 4:
        dayName = "Thursday";
        break;

    case 5:
        dayName = "Friday";
        break;

    case 6:
        dayName = "Saturday";
        break;

    case 7:
        dayName = "Sunday";
        break;

    default:
        dayName = "Invalid day number";
}

document.getElementById("day-output").textContent =
    "Day number: " + dayNumber + "\n" +
    "Day name: " + dayName;


// Traffic light

const trafficLight = "green";
let trafficMessage;

switch (trafficLight) {
    case "green":
        trafficMessage = "Go";
        break;

    case "yellow":
        trafficMessage = "Prepare to stop";
        break;

    case "red":
        trafficMessage = "Stop";
        break;

    default:
        trafficMessage = "Unknown traffic-light value";
}

document.getElementById("traffic-output").textContent =
    "Traffic light: " + trafficLight + "\n" +
    "Instruction: " + trafficMessage;


// User role

const userRole = "developer";
let roleMessage;

switch (userRole) {
    case "admin":
        roleMessage = "Administrator area opened.";
        break;

    case "developer":
        roleMessage = "Developer workspace opened.";
        break;

    case "user":
        roleMessage = "Public user page opened.";
        break;

    default:
        roleMessage = "Unknown user role.";
}

document.getElementById("role-output").textContent =
    "Role: " + userRole + "\n" +
    roleMessage;


// Default case

const selectedLanguage = "Ruby";
let languageMessage;

switch (selectedLanguage) {
    case "JavaScript":
        languageMessage = "JavaScript selected.";
        break;

    case "Python":
        languageMessage = "Python selected.";
        break;

    default:
        languageMessage =
            "The selected language is not available.";
}

document.getElementById("default-output").textContent =
    "Selected language: " + selectedLanguage + "\n" +
    languageMessage;


// Grouping cases

const selectedDay = "Saturday";
let dayType;

switch (selectedDay) {
    case "Saturday":
    case "Sunday":
        dayType = "Weekend";
        break;

    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        dayType = "Weekday";
        break;

    default:
        dayType = "Unknown day";
}

document.getElementById("group-output").textContent =
    "Selected day: " + selectedDay + "\n" +
    "Day type: " + dayType;


console.log("Course:", introductionMessage);
console.log("Day:", dayName);
console.log("Traffic:", trafficMessage);
console.log("Role:", roleMessage);
console.log("Default:", languageMessage);
console.log("Grouped case:", dayType);