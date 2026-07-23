const profileForm =
    document.getElementById("profile-form");

const nameInput =
    document.getElementById("name-input");

const roleInput =
    document.getElementById("role-input");

const themeSelect =
    document.getElementById("theme-select");

const loadButton =
    document.getElementById("load-button");

const removeButton =
    document.getElementById("remove-button");

const savedName =
    document.getElementById("saved-name");

const savedRole =
    document.getElementById("saved-role");

const savedTheme =
    document.getElementById("saved-theme");

const statusMessage =
    document.getElementById("status-message");

const errorMessage =
    document.getElementById("error-message");


const storageKey = "javascriptUserProfile";


// Display profile information

function displayProfile(profile) {
    savedName.textContent = profile.name;
    savedRole.textContent = profile.role;
    savedTheme.textContent = profile.theme;
}


// Reset displayed information

function clearDisplayedProfile() {
    savedName.textContent = "Not saved";
    savedRole.textContent = "Not saved";
    savedTheme.textContent = "Not saved";
}


// Save information

profileForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name =
        nameInput.value.trim();

    const role =
        roleInput.value.trim();

    const theme =
        themeSelect.value;

    if (name === "" || role === "" || theme === "") {
        errorMessage.textContent =
            "Complete every field before saving.";

        return;
    }

    errorMessage.textContent = "";

    const userProfile = {
        name: name,
        role: role,
        theme: theme
    };

    localStorage.setItem(
        storageKey,
        JSON.stringify(userProfile)
    );

    displayProfile(userProfile);

    statusMessage.textContent =
        "The profile was saved successfully.";

    statusMessage.className =
        "status-message success-message";
});


// Load saved information

loadButton.addEventListener("click", function () {
    const savedProfileText =
        localStorage.getItem(storageKey);

    if (savedProfileText === null) {
        clearDisplayedProfile();

        statusMessage.textContent =
            "No saved profile was found.";

        statusMessage.className =
            "status-message remove-message";

        return;
    }

    const savedProfile =
        JSON.parse(savedProfileText);

    displayProfile(savedProfile);

    nameInput.value =
        savedProfile.name;

    roleInput.value =
        savedProfile.role;

    themeSelect.value =
        savedProfile.theme;

    statusMessage.textContent =
        "The saved profile was loaded.";

    statusMessage.className =
        "status-message success-message";
});


// Remove saved information

removeButton.addEventListener("click", function () {
    localStorage.removeItem(storageKey);

    profileForm.reset();

    clearDisplayedProfile();

    errorMessage.textContent = "";

    statusMessage.textContent =
        "The saved profile was removed.";

    statusMessage.className =
        "status-message remove-message";
});


// Automatically load saved data

function loadProfileWhenPageOpens() {
    const savedProfileText =
        localStorage.getItem(storageKey);

    if (savedProfileText === null) {
        return;
    }

    const savedProfile =
        JSON.parse(savedProfileText);

    displayProfile(savedProfile);

    nameInput.value =
        savedProfile.name;

    roleInput.value =
        savedProfile.role;

    themeSelect.value =
        savedProfile.theme;

    statusMessage.textContent =
        "Saved information was restored automatically.";

    statusMessage.className =
        "status-message success-message";
}


loadProfileWhenPageOpens();