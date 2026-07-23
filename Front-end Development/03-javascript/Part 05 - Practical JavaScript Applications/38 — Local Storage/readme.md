# 38 - Local Storage

## Introduction

In this lesson, I built a profile form that saves information inside the browser.

The data remains available after refreshing the page.

## Saving Data

```javascript
localStorage.setItem(
    "username",
    "Mahroos"
);
```

## Reading Data

```javascript
const username =
    localStorage.getItem("username");
```

## Removing Data

```javascript
localStorage.removeItem("username");
```

## Saving an Object

Local storage saves strings, so objects must be converted.

```javascript
const profile = {
    name: "Mahroos",
    role: "Software Engineer"
};

localStorage.setItem(
    "profile",
    JSON.stringify(profile)
);
```

Read the object:

```javascript
const savedProfile =
    JSON.parse(
        localStorage.getItem("profile")
    );
```

## Concepts Used

- Forms
- Objects
- Local storage
- `JSON.stringify()`
- `JSON.parse()`
- DOM updates

## Practice Tasks

1. Save a preferred language.
2. Add a clear-all button.
3. Save more profile properties.
4. Restore data when the page opens.

## What I Learned

I learned how to save, read, restore, and remove browser data using local storage.

The next lesson is **39 - Timers and Digital Clock**.