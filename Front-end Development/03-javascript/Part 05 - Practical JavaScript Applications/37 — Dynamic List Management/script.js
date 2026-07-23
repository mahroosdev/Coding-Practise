const taskForm =
    document.getElementById("task-form");

const taskInput =
    document.getElementById("task-input");

const taskList =
    document.getElementById("task-list");

const errorMessage =
    document.getElementById("error-message");

const totalTasks =
    document.getElementById("total-tasks");

const completedTasks =
    document.getElementById("completed-tasks");

const emptyMessage =
    document.getElementById("empty-message");

const clearCompletedButton =
    document.getElementById(
        "clear-completed-button"
    );


// Update task information

function updateTaskInformation() {
    const allTaskItems =
        taskList.querySelectorAll(".task-item");

    const completedTaskItems =
        taskList.querySelectorAll(
            ".task-item.completed"
        );

    totalTasks.textContent =
        "Total tasks: " +
        allTaskItems.length;

    completedTasks.textContent =
        "Completed tasks: " +
        completedTaskItems.length;

    emptyMessage.classList.toggle(
        "hidden",
        allTaskItems.length !== 0
    );

    clearCompletedButton.disabled =
        completedTaskItems.length === 0;
}


// Create a new task

function createTask(taskName) {
    const taskItem =
        document.createElement("li");

    const taskText =
        document.createElement("span");

    const completeButton =
        document.createElement("button");

    const deleteButton =
        document.createElement("button");


    taskItem.className = "task-item";

    taskText.className = "task-text";
    taskText.textContent = taskName;


    completeButton.type = "button";
    completeButton.className =
        "task-button complete-button";

    completeButton.textContent =
        "Complete";


    deleteButton.type = "button";
    deleteButton.className =
        "task-button delete-button";

    deleteButton.textContent =
        "Delete";


    completeButton.addEventListener(
        "click",
        function () {
            taskItem.classList.toggle("completed");

            const taskIsCompleted =
                taskItem.classList.contains(
                    "completed"
                );

            completeButton.textContent =
                taskIsCompleted
                    ? "Undo"
                    : "Complete";

            updateTaskInformation();
        }
    );


    deleteButton.addEventListener(
        "click",
        function () {
            taskItem.remove();

            updateTaskInformation();
        }
    );


    taskItem.append(
        taskText,
        completeButton,
        deleteButton
    );

    taskList.append(taskItem);
}


// Add a submitted task

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskName =
        taskInput.value.trim();

    if (taskName === "") {
        errorMessage.textContent =
            "Enter a task before adding it.";

        taskInput.focus();

        return;
    }

    errorMessage.textContent = "";

    createTask(taskName);

    taskInput.value = "";

    taskInput.focus();

    updateTaskInformation();
});


// Clear completed tasks

clearCompletedButton.addEventListener(
    "click",
    function () {
        const completedTaskItems =
            taskList.querySelectorAll(
                ".task-item.completed"
            );

        completedTaskItems.forEach(
            function (taskItem) {
                taskItem.remove();
            }
        );

        updateTaskInformation();
    }
);


// Show the initial state

updateTaskInformation();