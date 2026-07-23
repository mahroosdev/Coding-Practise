const counterValue =
    document.getElementById("counter-value");

const counterDisplay =
    document.getElementById("counter-display");

const counterMessage =
    document.getElementById("counter-message");

const rangeMessage =
    document.getElementById("range-message");

const saveStatus =
    document.getElementById("save-status");

const decreaseButton =
    document.getElementById("decrease-button");

const resetButton =
    document.getElementById("reset-button");

const increaseButton =
    document.getElementById("increase-button");

const settingsForm =
    document.getElementById("settings-form");

const stepInput =
    document.getElementById("step-input");

const minimumInput =
    document.getElementById("minimum-input");

const maximumInput =
    document.getElementById("maximum-input");

const settingsError =
    document.getElementById("settings-error");

const historyList =
    document.getElementById("history-list");

const emptyHistoryMessage =
    document.getElementById("empty-history-message");

const clearHistoryButton =
    document.getElementById("clear-history-button");


const storageKey = "simpleCounterProject";

let counterState = {
    value: 0,
    step: 1,
    minimum: 0,
    maximum: 100,
    history: []
};


// Save project data

function saveCounterState() {
    localStorage.setItem(
        storageKey,
        JSON.stringify(counterState)
    );

    saveStatus.textContent =
        "Changes saved automatically.";
}


// Create a history message

function addHistory(action) {
    const historyEntry = {
        action: action,
        time: new Date().toLocaleTimeString()
    };

    counterState.history.unshift(historyEntry);

    if (counterState.history.length > 10) {
        counterState.history.pop();
    }

    renderHistory();
}


// Display counter history

function renderHistory() {
    historyList.innerHTML = "";

    counterState.history.forEach(function (entry) {
        const historyItem =
            document.createElement("li");

        const actionText =
            document.createElement("span");

        const timeText =
            document.createElement("span");

        historyItem.className =
            "history-item";

        actionText.className =
            "history-action";

        timeText.className =
            "history-time";

        actionText.textContent =
            entry.action;

        timeText.textContent =
            entry.time;

        historyItem.append(
            actionText,
            timeText
        );

        historyList.append(historyItem);
    });

    const historyIsEmpty =
        counterState.history.length === 0;

    emptyHistoryMessage.classList.toggle(
        "hidden",
        !historyIsEmpty
    );

    clearHistoryButton.disabled =
        historyIsEmpty;
}


// Update the displayed counter

function updateCounterDisplay() {
    counterValue.textContent =
        counterState.value;

    rangeMessage.textContent =
        "Allowed range: " +
        counterState.minimum +
        " to " +
        counterState.maximum;

    decreaseButton.disabled =
        counterState.value <=
        counterState.minimum;

    increaseButton.disabled =
        counterState.value >=
        counterState.maximum;

    counterDisplay.classList.remove(
        "minimum-state",
        "maximum-state"
    );

    if (
        counterState.value ===
        counterState.minimum
    ) {
        counterDisplay.classList.add(
            "minimum-state"
        );

        counterMessage.textContent =
            "The counter is at its minimum value.";
    } else if (
        counterState.value ===
        counterState.maximum
    ) {
        counterDisplay.classList.add(
            "maximum-state"
        );

        counterMessage.textContent =
            "The counter reached its maximum value.";
    } else if (counterState.value > 0) {
        counterMessage.textContent =
            "The counter currently has a positive value.";
    } else if (counterState.value < 0) {
        counterMessage.textContent =
            "The counter currently has a negative value.";
    } else {
        counterMessage.textContent =
            "The counter value is zero.";
    }

    stepInput.value =
        counterState.step;

    minimumInput.value =
        counterState.minimum;

    maximumInput.value =
        counterState.maximum;

    saveCounterState();
}


// Increase counter

increaseButton.addEventListener("click", function () {
    const nextValue =
        counterState.value +
        counterState.step;

    const previousValue =
        counterState.value;

    counterState.value =
        Math.min(
            nextValue,
            counterState.maximum
        );

    addHistory(
        "Increased from " +
        previousValue +
        " to " +
        counterState.value
    );

    updateCounterDisplay();
});


// Decrease counter

decreaseButton.addEventListener("click", function () {
    const nextValue =
        counterState.value -
        counterState.step;

    const previousValue =
        counterState.value;

    counterState.value =
        Math.max(
            nextValue,
            counterState.minimum
        );

    addHistory(
        "Decreased from " +
        previousValue +
        " to " +
        counterState.value
    );

    updateCounterDisplay();
});


// Reset counter

resetButton.addEventListener("click", function () {
    const previousValue =
        counterState.value;

    counterState.value =
        counterState.minimum;

    addHistory(
        "Reset from " +
        previousValue +
        " to " +
        counterState.minimum
    );

    updateCounterDisplay();
});


// Apply counter settings

settingsForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newStep =
        Number(stepInput.value);

    const newMinimum =
        Number(minimumInput.value);

    const newMaximum =
        Number(maximumInput.value);

    if (
        !Number.isFinite(newStep) ||
        !Number.isFinite(newMinimum) ||
        !Number.isFinite(newMaximum)
    ) {
        settingsError.textContent =
            "Enter valid numbers for every setting.";

        return;
    }

    if (newStep <= 0) {
        settingsError.textContent =
            "The step value must be greater than zero.";

        return;
    }

    if (newMinimum >= newMaximum) {
        settingsError.textContent =
            "The minimum must be smaller than the maximum.";

        return;
    }

    settingsError.textContent = "";

    counterState.step = newStep;
    counterState.minimum = newMinimum;
    counterState.maximum = newMaximum;

    if (
        counterState.value <
        counterState.minimum
    ) {
        counterState.value =
            counterState.minimum;
    }

    if (
        counterState.value >
        counterState.maximum
    ) {
        counterState.value =
            counterState.maximum;
    }

    addHistory(
        "Settings updated: step " +
        newStep +
        ", range " +
        newMinimum +
        " to " +
        newMaximum
    );

    updateCounterDisplay();
});


// Clear counter history

clearHistoryButton.addEventListener(
    "click",
    function () {
        counterState.history = [];

        renderHistory();
        saveCounterState();
    }
);


// Load saved project data

function loadCounterState() {
    const savedState =
        localStorage.getItem(storageKey);

    if (savedState === null) {
        saveStatus.textContent =
            "A new counter was created.";

        return;
    }

    try {
        const parsedState =
            JSON.parse(savedState);

        if (
            typeof parsedState.value === "number" &&
            typeof parsedState.step === "number" &&
            typeof parsedState.minimum === "number" &&
            typeof parsedState.maximum === "number" &&
            Array.isArray(parsedState.history)
        ) {
            counterState = parsedState;

            saveStatus.textContent =
                "Saved counter state restored.";
        }
    } catch (error) {
        saveStatus.textContent =
            "Saved data could not be loaded.";

        console.error(
            "Counter storage error:",
            error
        );
    }
}


// Start the project

loadCounterState();
renderHistory();
updateCounterDisplay();