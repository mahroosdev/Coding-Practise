// Live input value

const liveNameInput =
    document.getElementById("live-name");

const liveOutput =
    document.getElementById("live-output");

liveNameInput.addEventListener("input", function () {
    const enteredName =
        liveNameInput.value.trim();

    if (enteredName === "") {
        liveOutput.textContent =
            "Your entered name will appear here.";
    } else {
        liveOutput.textContent =
            "Entered name: " + enteredName;
    }
});


// Registration form

const registrationForm =
    document.getElementById("registration-form");

const studentNameInput =
    document.getElementById("student-name");

const studentEmailInput =
    document.getElementById("student-email");

const courseSelect =
    document.getElementById("course");

const termsCheckbox =
    document.getElementById("terms");

const formOutput =
    document.getElementById("form-output");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const studentName =
        studentNameInput.value.trim();

    const studentEmail =
        studentEmailInput.value.trim();

    const selectedCourse =
        courseSelect.value;

    const acceptedTerms =
        termsCheckbox.checked;

    formOutput.textContent =
        "Name: " + studentName + "\n" +
        "Email: " + studentEmail + "\n" +
        "Course: " + selectedCourse + "\n" +
        "Terms accepted: " + acceptedTerms;

    console.log("Submitted form values:");
    console.log(studentName);
    console.log(studentEmail);
    console.log(selectedCourse);
    console.log(acceptedTerms);
});


// Reset event

registrationForm.addEventListener("reset", function () {
    formOutput.textContent =
        "The form was reset.";
});