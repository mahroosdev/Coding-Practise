const validationForm =
    document.getElementById("validation-form");

const usernameInput =
    document.getElementById("username");

const emailInput =
    document.getElementById("email");

const passwordInput =
    document.getElementById("password");

const confirmPasswordInput =
    document.getElementById("confirm-password");

const termsCheckbox =
    document.getElementById("terms");

const formResult =
    document.getElementById("form-result");


// Display an error

function showError(input, errorElementId, message) {
    input.classList.add("input-error");

    document.getElementById(errorElementId).textContent =
        message;
}


// Remove an error

function clearError(input, errorElementId) {
    input.classList.remove("input-error");

    document.getElementById(errorElementId).textContent =
        "";
}


// Clear all errors

function clearAllErrors() {
    clearError(usernameInput, "username-error");
    clearError(emailInput, "email-error");
    clearError(passwordInput, "password-error");

    clearError(
        confirmPasswordInput,
        "confirm-password-error"
    );

    document.getElementById("terms-error").textContent =
        "";
}


// Form validation

validationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    clearAllErrors();

    formResult.classList.remove(
        "success-result",
        "error-result"
    );

    const username =
        usernameInput.value.trim();

    const email =
        emailInput.value.trim();

    const password =
        passwordInput.value;

    const confirmPassword =
        confirmPasswordInput.value;

    let formIsValid = true;

    if (username.length < 3) {
        showError(
            usernameInput,
            "username-error",
            "Username must contain at least 3 characters."
        );

        formIsValid = false;
    }

    if (
        email === "" ||
        !email.includes("@") ||
        !email.includes(".")
    ) {
        showError(
            emailInput,
            "email-error",
            "Enter a valid email address."
        );

        formIsValid = false;
    }

    if (password.length < 8) {
        showError(
            passwordInput,
            "password-error",
            "Password must contain at least 8 characters."
        );

        formIsValid = false;
    }

    if (
        confirmPassword === "" ||
        confirmPassword !== password
    ) {
        showError(
            confirmPasswordInput,
            "confirm-password-error",
            "Passwords must match."
        );

        formIsValid = false;
    }

    if (!termsCheckbox.checked) {
        document.getElementById("terms-error").textContent =
            "You must agree to the terms.";

        formIsValid = false;
    }

    if (formIsValid) {
        formResult.textContent =
            "Form submitted successfully!\n" +
            "Username: " + username + "\n" +
            "Email: " + email;

        formResult.classList.add("success-result");
    } else {
        formResult.textContent =
            "Please correct the form errors.";

        formResult.classList.add("error-result");
    }
});