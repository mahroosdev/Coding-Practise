// Show and hide password

const passwordInput =
    document.getElementById("password-input");

const passwordButton =
    document.getElementById("password-button");

const passwordStatus =
    document.getElementById("password-status");

let passwordIsVisible = false;


function updatePasswordVisibility() {
    if (passwordIsVisible) {
        passwordInput.type = "text";

        passwordButton.textContent =
            "Hide Password";

        passwordStatus.textContent =
            "The password is visible.";
    } else {
        passwordInput.type = "password";

        passwordButton.textContent =
            "Show Password";

        passwordStatus.textContent =
            "The password is hidden.";
    }

    passwordButton.setAttribute(
        "aria-pressed",
        passwordIsVisible
    );
}


passwordButton.addEventListener("click", function () {
    passwordIsVisible =
        !passwordIsVisible;

    updatePasswordVisibility();
});


// Expand and collapse content

const extraContent =
    document.getElementById("extra-content");

const contentButton =
    document.getElementById("content-button");

let contentIsExpanded = false;


function updateContentVisibility() {
    extraContent.classList.toggle(
        "hidden-content",
        !contentIsExpanded
    );

    if (contentIsExpanded) {
        contentButton.textContent =
            "Read Less";
    } else {
        contentButton.textContent =
            "Read More";
    }

    contentButton.setAttribute(
        "aria-expanded",
        contentIsExpanded
    );
}


contentButton.addEventListener("click", function () {
    contentIsExpanded =
        !contentIsExpanded;

    updateContentVisibility();
});


// Show and hide message

const messageButton =
    document.getElementById("message-button");

const noticeBox =
    document.getElementById("notice-box");

let messageIsVisible = true;


messageButton.addEventListener("click", function () {
    messageIsVisible =
        !messageIsVisible;

    noticeBox.classList.toggle(
        "hidden-content",
        !messageIsVisible
    );

    if (messageIsVisible) {
        messageButton.textContent =
            "Hide Message";
    } else {
        messageButton.textContent =
            "Show Message";
    }
});


// Show the initial states

updatePasswordVisibility();
updateContentVisibility();