# 40 - Simple Counter Project

## Project Overview

This is a complete JavaScript counter project.

The counter supports:

- Increase and decrease
- Custom step values
- Minimum and maximum limits
- Reset control
- Counter history
- Local storage

## Main State

```javascript
let counterState = {
    value: 0,
    step: 1,
    minimum: 0,
    maximum: 100,
    history: []
};
```

## Updating the Counter

```javascript
counterState.value +=
    counterState.step;
```

The project also uses `Math.min()` and `Math.max()` to prevent the value from leaving the allowed range.

## Saving Data

```javascript
localStorage.setItem(
    storageKey,
    JSON.stringify(counterState)
);
```

## Concepts Used

- Variables and objects
- Functions
- Conditions
- Forms and validation
- DOM events
- Dynamic elements
- Arrays
- Local storage
- JSON

## Project Improvements

Possible future improvements:

1. Add keyboard controls.
2. Add multiple independent counters.
3. Add a counter-history export button.
4. Add sound effects.
5. Add light and dark themes.

## What I Built

I built a complete counter application that combines the JavaScript concepts covered in the previous lessons.

The next project is **41 - To-Do List Project**.