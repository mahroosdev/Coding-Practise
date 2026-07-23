# 31 - JavaScript Form Validation

## Introduction

In this lesson, I am learning how JavaScript checks form values before accepting a submission.

---

## Checking an Empty Value

```javascript
const username =
    usernameInput.value.trim();

if (username === "") {
    console.log("Username is required.");
}
```

`trim()` removes unnecessary outer spaces.

---

## Checking Length

```javascript
if (username.length < 3) {
    console.log(
        "Username must contain at least 3 characters."
    );
}
```

---

## Checking Passwords

```javascript
if (password !== confirmPassword) {
    console.log("Passwords do not match.");
}
```

---

## Checking a Checkbox

```javascript
if (!termsCheckbox.checked) {
    console.log(
        "You must agree to the terms."
    );
}
```

---

## Practice Tasks

1. Check whether a username is empty.
2. Require a password with at least eight characters.
3. Check whether two passwords match.
4. Require the terms checkbox.
5. Display success only when every rule passes.

---

## Important Note

Client-side JavaScript validation improves the user experience, but important applications must also validate information on the server.

---

## What I Learned

- How to check empty fields.
- How to validate minimum lengths.
- How to compare password values.
- How to check checkbox values.
- How to display field-specific errors.
- How to show success only when all rules pass.

This lesson completes **Part 04 - DOM Events and Forms**.
