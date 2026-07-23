# 34 - Show and Hide Content

## Introduction

In this lesson, I built practical show-and-hide features.

The page includes:

- Show and hide password
- Expand and collapse content
- Show and hide a message

## Boolean State

```javascript
let passwordIsVisible = false;
```

The boolean tracks whether the password is visible.

## Changing Input Type

```javascript
passwordInput.type = "text";
```

Hide the password:

```javascript
passwordInput.type = "password";
```

## Toggling Content

```javascript
content.classList.toggle(
    "hidden-content",
    !contentIsExpanded
);
```

The CSS class uses:

```css
.hidden-content {
    display: none;
}
```

## Concepts Used

- Boolean values
- Functions
- Click events
- Conditions
- Input properties
- CSS classes
- Changing button text

## Practice Tasks

1. Add another expandable section.
2. Add a show-and-hide navigation menu.
3. Change the password button colour based on its state.
4. Add a button that hides all content cards.

## What I Learned

I learned how to track visibility state and use JavaScript to show or hide webpage content.

The next lesson is **35 - Live Character Counter**.