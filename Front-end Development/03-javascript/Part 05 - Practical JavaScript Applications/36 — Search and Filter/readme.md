# 36 - Search and Filter

## Introduction

In this lesson, I built a live search and filter feature.

The user can search technologies by name or category.

## Reading the Search Value

```javascript
const searchValue =
    searchInput.value
        .trim()
        .toLowerCase();
```

Converting text to lowercase makes the search case-insensitive.

## Checking for a Match

```javascript
const matchesSearch =
    technologyName.includes(searchValue);
```

## Showing and Hiding Cards

```javascript
card.classList.toggle(
    "hidden",
    !matchesSearch
);
```

## Concepts Used

- Input events
- Loops
- Data attributes
- String methods
- `includes()`
- CSS classes
- Result counting

## Practice Tasks

1. Add more technology cards.
2. Search only by category.
3. Add category filter buttons.
4. Highlight the matching text.

## What I Learned

I learned how to loop through webpage elements and display only matching results.

The next lesson is **37 - Dynamic List Management**.