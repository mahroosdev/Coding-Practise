# 37 - Dynamic List Management

## Introduction

In this lesson, I built a dynamic task list.

The user can:

- Add tasks
- Mark tasks as complete
- Undo completed tasks
- Delete tasks
- Clear completed tasks

## Creating an Element

```javascript
const taskItem =
    document.createElement("li");
```

## Adding Content

```javascript
taskText.textContent = taskName;
```

## Adding Elements to the Page

```javascript
taskItem.append(
    taskText,
    completeButton,
    deleteButton
);

taskList.append(taskItem);
```

## Removing an Element

```javascript
taskItem.remove();
```

## Concepts Used

- Forms
- Input validation
- Functions
- DOM element creation
- Event listeners
- CSS classes
- Element removal
- Task counting

## Practice Tasks

1. Add an edit button.
2. Prevent duplicate tasks.
3. Add task numbers.
4. Add a button to remove all tasks.

## What I Learned

I learned how JavaScript can create, update, and remove HTML elements dynamically.

The next lesson is **38 - Local Storage**.