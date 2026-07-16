# 29 - CSS Animations

## Introduction

In the previous lesson, I learned how CSS transforms move, rotate, resize, and tilt elements.

In this lesson, I am learning how CSS animations change styles automatically over time.

Unlike transitions, animations do not always need a hover action or user interaction.

---

## What is a CSS Animation?

A CSS animation allows an element to change from one style to another.

Animations are created using:

- The `@keyframes` rule
- Animation properties

Basic example:

```css
.box {
    animation-name: change-color;
    animation-duration: 3s;
}

@keyframes change-color {
    from {
        background-color: blue;
    }

    to {
        background-color: green;
    }
}
```

The box gradually changes from blue to green.

---

## The `@keyframes` Rule

The `@keyframes` rule describes the stages of an animation.

Example:

```css
@keyframes change-color {
    from {
        background-color: lightblue;
    }

    to {
        background-color: lightgreen;
    }
}
```

The `from` block represents the starting style.

The `to` block represents the ending style.

---

## Animation Name

The `animation-name` property connects an element to a keyframe animation.

```css
.color-box {
    animation-name: change-color;
}
```

The name must match the name used after `@keyframes`.

```css
@keyframes change-color {
}
```

---

## Animation Duration

The `animation-duration` property controls how long one animation cycle takes.

```css
.color-box {
    animation-duration: 3s;
}
```

This animation takes three seconds.

Another example:

```css
animation-duration: 500ms;
```

The `ms` unit means milliseconds.

```text
1000ms = 1 second
```

---

## Animation Iteration Count

The `animation-iteration-count` property controls how many times an animation runs.

Example:

```css
animation-iteration-count: 3;
```

The animation runs three times.

To make the animation continue without stopping:

```css
animation-iteration-count: infinite;
```

---

## Color Animation

The first box changes its background color.

```css
.color-box {
    animation-name: change-color;
    animation-duration: 3s;
    animation-iteration-count: infinite;
}
```

The keyframes are:

```css
@keyframes change-color {
    from {
        background-color: lightblue;
    }

    to {
        background-color: lightgreen;
    }
}
```

The box repeatedly changes from light blue to light green.

---

## Moving Animation

The moving box changes its horizontal position.

```css
@keyframes move-box {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(300px);
    }
}
```

The box moves 300 pixels to the right.

The animation settings are:

```css
.moving-box {
    animation-name: move-box;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}
```

---

## Animation Direction

The `animation-direction` property controls the direction of the animation.

Example:

```css
animation-direction: alternate;
```

The animation moves forward during one cycle and backward during the next cycle.

Common values include:

```text
normal
reverse
alternate
alternate-reverse
```

---

## Normal Direction

```css
animation-direction: normal;
```

The animation runs from the beginning to the end.

This is the default value.

---

## Reverse Direction

```css
animation-direction: reverse;
```

The animation runs from the end to the beginning.

---

## Alternate Direction

```css
animation-direction: alternate;
```

The animation runs forward and then backward.

---

## Rotating Animation

The rotating box turns continuously.

```css
.rotating-box {
    animation: rotate-box 2s linear infinite;
}
```

The keyframes are:

```css
@keyframes rotate-box {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
```

The box completes one full rotation.

---

## Animation Timing Function

The `animation-timing-function` property controls the speed pattern.

Common values include:

```text
ease
linear
ease-in
ease-out
ease-in-out
```

Example:

```css
animation-timing-function: linear;
```

The animation moves at the same speed from beginning to end.

---

## Growing Animation

The growing box changes its scale.

```css
@keyframes grow-box {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.3);
    }
}
```

The animation settings are:

```css
.growing-box {
    animation: grow-box 2s ease-in-out infinite alternate;
}
```

The box becomes larger and then returns to its original size.

---

## Percentage Keyframes

Keyframes can also use percentages.

Example:

```css
@keyframes limited-color {
    0% {
        background-color: lightblue;
    }

    50% {
        background-color: lightyellow;
    }

    100% {
        background-color: lightpink;
    }
}
```

The percentages represent different stages:

```text
0%   → Beginning
50%  → Middle
100% → End
```

---

## Limited Animation

The final box runs only three times.

```css
.limited-box {
    animation: limited-color 2s ease 3;
}
```

This means:

- Animation name: `limited-color`
- Duration: `2s`
- Timing function: `ease`
- Iteration count: `3`

After the third cycle, the animation stops.

---

## Animation Shorthand

Several animation properties can be written together.

Long version:

```css
.box {
    animation-name: rotate-box;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
```

Shorthand version:

```css
.box {
    animation: rotate-box 2s linear infinite;
}
```

Both versions create the same animation.

---

## Animation Delay

The `animation-delay` property waits before starting an animation.

Example:

```css
animation-delay: 2s;
```

The animation begins after two seconds.

The shorthand version can include the delay:

```css
animation: move-box 3s ease 1s infinite;
```

In this example, the animation waits one second before starting.

---

## Animation Fill Mode

The `animation-fill-mode` property controls which style remains before or after an animation.

Example:

```css
animation-fill-mode: forwards;
```

The element keeps the final keyframe style after the animation ends.

Common values include:

```text
none
forwards
backwards
both
```

Example:

```css
.box {
    animation: change-color 2s;
    animation-fill-mode: forwards;
}
```

After the animation finishes, the final background color remains.

---

## Transition and Animation Difference

### Transition

A transition usually needs a style change.

Example:

```css
.box:hover {
    background-color: green;
}
```

It often begins because of:

- Hover
- Focus
- Class change

### Animation

An animation can start automatically.

Example:

```css
.box {
    animation: change-color 2s infinite;
}
```

It can also:

- Repeat automatically
- Use several stages
- Move forward and backward
- Run a specific number of times

---

## CSS Used in This Lesson

```css
body {
    background-color: lightgray;
    font-family: Arial, sans-serif;
}

h1 {
    color: darkblue;
    text-align: center;
}

section {
    background-color: white;
    border: 2px solid darkblue;
    margin-bottom: 20px;
    padding: 20px;
}

.animation-area {
    height: 100px;
    border: 2px dashed gray;
    padding: 20px;
}

.box {
    width: 160px;
    background-color: lightblue;
    border: 2px solid darkblue;
    padding: 20px;
    text-align: center;
}

.color-box {
    animation-name: change-color;
    animation-duration: 3s;
    animation-iteration-count: infinite;
}

@keyframes change-color {
    from {
        background-color: lightblue;
    }

    to {
        background-color: lightgreen;
    }
}

.moving-box {
    animation-name: move-box;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

@keyframes move-box {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(300px);
    }
}

.rotating-box {
    animation: rotate-box 2s linear infinite;
}

@keyframes rotate-box {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.growing-box {
    animation: grow-box 2s ease-in-out infinite alternate;
}

@keyframes grow-box {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.3);
    }
}

.limited-box {
    animation: limited-color 2s ease 3;
}

@keyframes limited-color {
    0% {
        background-color: lightblue;
    }

    50% {
        background-color: lightyellow;
    }

    100% {
        background-color: lightpink;
    }
}
```

---

## Output

When the webpage is opened in the browser:

- The first box repeatedly changes color.
- The second box moves from left to right and back.
- The third box rotates continuously.
- The fourth box becomes larger and smaller.
- The final box changes through three colors.
- The final animation stops after running three times.

---

## Practice

Make the color animation faster:

```css
.color-box {
    animation-duration: 1s;
}
```

Move the box farther:

```css
@keyframes move-box {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(500px);
    }
}
```

Rotate in the opposite direction:

```css
@keyframes rotate-box {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(-360deg);
    }
}
```

Make the growing box smaller:

```css
@keyframes grow-box {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(0.6);
    }
}
```

Add a delay:

```css
.limited-box {
    animation-delay: 2s;
}
```

Save the file and refresh the browser after each change.

---

## Important Note

Too many animations can make a webpage distracting and difficult to use.

Animations should be:

- Simple
- Smooth
- Useful
- Not too fast
- Not used on every element

Use animations to support the design instead of distracting the user.

---

## Easy Way to Remember

```text
@keyframes
```

Defines the animation stages.

```text
animation-name
```

Connects the element to the keyframes.

```text
animation-duration
```

Controls how long one cycle takes.

```text
animation-iteration-count
```

Controls how many times it runs.

```text
animation-direction
```

Controls whether it runs forward or backward.

```text
animation-timing-function
```

Controls the speed pattern.

```text
animation-delay
```

Waits before starting.

```text
animation
```

Combines multiple animation settings.

---

## What I Learned

In this lesson, I learned:

- CSS animations change styles automatically.
- The `@keyframes` rule defines animation stages.
- `animation-name` connects an element to keyframes.
- `animation-duration` controls the animation time.
- `animation-iteration-count` controls repetition.
- `animation-direction` controls the running direction.
- Percentage keyframes create multiple animation stages.
- Animation shorthand combines several properties.
- Animations can move, rotate, resize, and recolor elements.