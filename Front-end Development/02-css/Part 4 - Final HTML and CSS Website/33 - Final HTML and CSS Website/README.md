# 33 - Final HTML and CSS Website

## Introduction

In the previous lesson, I learned how to create and reuse CSS variables.

In this final lesson, I am combining the HTML and CSS concepts from the previous lessons to create a complete personal portfolio website.

The website contains:

- A header
- A navigation menu
- A hero section
- An about section
- A skills section
- A projects section
- A contact form
- A footer
- A responsive layout

This project uses only HTML and CSS. It does not use JavaScript.

---

## Project Folder Structure

```text
33 - Final HTML and CSS Website/
│
├── index.html
├── style.css
└── README.md
```

---

## Main Concept

The main concept of this lesson is to combine different HTML and CSS skills in one practical project.

The webpage uses HTML to create its structure and CSS to control its appearance.

HTML is used for:

- Headings
- Paragraphs
- Links
- Images
- Lists
- Sections
- Forms
- Buttons

CSS is used for:

- Colors
- Backgrounds
- Fonts
- Borders
- Margins
- Padding
- Flexbox
- Grid
- CSS variables
- Hover effects
- Focus styles
- Responsive design
- Media queries

---

## Website Sections

### Header

The header contains the website logo and navigation menu.

```html
<header class="page-header">
    <div class="container header-container">
        <a href="#home" class="logo">My Portfolio</a>

        <nav class="navigation">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
</header>
```

Each navigation link points to a section using its ID.

For example:

```html
<a href="#about">About</a>
```

This link moves to:

```html
<section id="about">
```

---

### Hero Section

The hero section is the first main section of the website.

It contains:

- A welcome message
- A main heading
- A short description
- Two links styled as buttons
- A responsive image

```html
<section class="hero-section" id="home">
```

The hero section uses Flexbox to place the text and image next to each other on larger screens.

```css
.hero-container {
    display: flex;
    align-items: center;
    gap: 40px;
}
```

---

### About Section

The about section introduces the person who owns the portfolio.

It contains:

- A short introduction
- Learning goals
- Quick personal information

The content uses Flexbox.

```css
.about-content {
    display: flex;
    gap: 30px;
}
```

---

### Skills Section

The skills section displays the skills learned during the course.

Each skill is placed inside an `<article>` element.

```html
<article class="skill-card">
    <h3>HTML</h3>

    <p>
        Creating headings, paragraphs, links, images,
        lists, forms, tables, and page sections.
    </p>
</article>
```

The skill cards use CSS Grid.

```css
.skills-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
```

---

### Projects Section

The projects section displays example projects.

Each project card contains:

- A project number
- A project title
- A project description
- A project link

```html
<article class="project-card">
    <div class="project-number">01</div>

    <div class="project-content">
        <h3>Personal Profile Page</h3>

        <p>
            A simple profile page with personal information,
            skills, interests, and contact details.
        </p>

        <a href="#" class="project-link">View Project</a>
    </div>
</article>
```

The `#` links are placeholders. They can be replaced with real project links later.

---

### Contact Section

The contact section contains contact information and a form.

The form includes:

- A name field
- An email field
- A message field
- A submit button

```html
<form class="contact-form">
```

The inputs use labels.

```html
<label for="name">Name</label>

<input
    type="text"
    id="name"
    name="name"
    placeholder="Enter your name"
    required
>
```

The label's `for` value matches the input's `id`.

This helps connect the label to the correct input.

The `required` attribute means the user must complete the field before submitting the form.

This is a front-end practice form. It does not send or save messages because no backend or JavaScript has been added.

---

### Footer

The footer contains copyright text and a link that returns to the top of the page.

```html
<footer class="page-footer">
```

The following link moves back to the hero section:

```html
<a href="#home">Back to Top</a>
```

---

## Semantic HTML

This project uses semantic HTML elements.

Examples include:

```html
<header>
<nav>
<main>
<section>
<article>
<form>
<footer>
```

Semantic elements describe the purpose of the content.

They make the HTML structure easier to understand.

---

## CSS Variables

The main CSS values are stored inside `:root`.

```css
:root {
    --primary-color: darkblue;
    --secondary-color: #1f4f8a;
    --page-background: lightgray;
    --section-background: white;
    --light-background: #e6ecf5;
    --text-color: #333333;
    --border-color: darkblue;
    --main-spacing: 30px;
    --section-spacing: 60px;
}
```

The variables are reused throughout the stylesheet.

```css
.page-header {
    background-color: var(--primary-color);
}

body {
    background-color: var(--page-background);
}

.hero-section {
    padding: var(--section-spacing) 0;
}
```

If a variable is changed inside `:root`, every CSS rule using that variable receives the new value.

---

## Page Container

The `.container` class controls the width of the page content.

```css
.container {
    width: 90%;
    max-width: 1100px;
    margin: auto;
}
```

### `width: 90%`

The content uses 90% of the available screen width.

### `max-width: 1100px`

The content cannot become wider than 1100 pixels.

### `margin: auto`

The content is placed in the center of the page.

---

## Flexbox

Flexbox is used in several parts of the website.

It is used for:

- The header
- The hero section
- The hero buttons
- The about section
- The contact section
- The footer

Example:

```css
.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}
```

### `align-items: center`

This aligns the Flexbox items vertically.

### `justify-content: space-between`

This places space between the items.

### `gap`

This adds space between the Flexbox items.

---

## CSS Grid

CSS Grid is used for the skill cards and project cards.

```css
.skills-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
```

The following value creates three equal columns:

```css
repeat(3, 1fr)
```

The layout changes to two columns on tablet screens and one column on mobile screens.

---

## Responsive Images

The image uses the following CSS:

```css
img {
    display: block;
    max-width: 100%;
    height: auto;
}
```

This prevents the image from becoming wider than its container.

The image keeps its correct shape because it uses:

```css
height: auto;
```

---

## Buttons and Hover Effects

The main links are styled to look like buttons.

```css
.primary-button {
    background-color: var(--primary-color);
    color: white;
}
```

A hover effect changes the background when the mouse moves over the button.

```css
.primary-button:hover {
    background-color: var(--secondary-color);
}
```

The contact form also has a styled submit button.

---

## Form Styles

The form fields use the full available width.

```css
.form-group input,
.form-group textarea {
    width: 100%;
    padding: 10px;
}
```

The labels appear above the fields.

```css
.form-group label {
    display: block;
    margin-bottom: 5px;
}
```

A focus style appears when the user selects an input.

```css
.form-group input:focus,
.form-group textarea:focus {
    border-color: var(--primary-color);
    outline: 2px solid var(--light-background);
}
```

---

## Responsive Design

The website uses the viewport meta tag.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

It also uses media queries for tablet and mobile screens.

---

## Tablet Media Query

The first media query is used when the screen is 800 pixels wide or smaller.

```css
@media screen and (max-width: 800px) {
    .header-container {
        flex-direction: column;
    }

    .hero-container {
        flex-direction: column;
    }

    .about-content {
        flex-direction: column;
    }

    .skills-container,
    .projects-container {
        grid-template-columns: repeat(2, 1fr);
    }

    .contact-container {
        flex-direction: column;
    }
}
```

On tablet-sized screens:

- The header content moves into a column.
- The hero content moves into a column.
- The about content moves into a column.
- The cards change to two columns.
- The contact section moves into a column.

---

## Mobile Media Query

The second media query is used when the screen is 550 pixels wide or smaller.

```css
@media screen and (max-width: 550px) {
    .skills-container,
    .projects-container {
        grid-template-columns: 1fr;
    }
}
```

On mobile screens:

- The navigation links wrap onto another line when necessary.
- The main heading becomes smaller.
- The hero buttons appear one below the other.
- The skill cards appear in one column.
- The project cards appear in one column.
- The footer content appears in one column.
- The section spacing becomes smaller.

---

## Important Properties

### `scroll-behavior`

```css
html {
    scroll-behavior: smooth;
}
```

This creates a smooth movement when a navigation link is selected.

### `display: flex`

```css
display: flex;
```

This creates a flexible row or column layout.

### `display: grid`

```css
display: grid;
```

This creates a Grid layout.

### `flex: 1`

```css
flex: 1;
```

This allows an item to use the available space inside a Flexbox container.

### `grid-template-columns`

```css
grid-template-columns: repeat(3, 1fr);
```

This creates three equal Grid columns.

### `max-width`

```css
max-width: 1100px;
```

This controls the largest width an element can use.

### `padding`

```css
padding: 20px;
```

This creates space inside an element.

### `margin`

```css
margin: 20px;
```

This creates space outside an element.

### `border`

```css
border: 2px solid darkblue;
```

This adds a border around an element.

### `:hover`

```css
.primary-button:hover {
    background-color: var(--secondary-color);
}
```

This applies a style when the mouse is placed over an element.

### `:focus`

```css
.form-group input:focus {
    border-color: var(--primary-color);
}
```

This applies a style when an input is selected.

---

## CSS Used in This Lesson

The main CSS concepts used in this project are:

```css
:root {
    --primary-color: darkblue;
    --page-background: lightgray;
    --section-background: white;
}
```

```css
.container {
    width: 90%;
    max-width: 1100px;
    margin: auto;
}
```

```css
.hero-container {
    display: flex;
    align-items: center;
    gap: 40px;
}
```

```css
.skills-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
```

```css
img {
    max-width: 100%;
    height: auto;
}
```

```css
@media screen and (max-width: 550px) {
    .skills-container,
    .projects-container {
        grid-template-columns: 1fr;
    }
}
```

---

## Expected Output

When the webpage is opened on a desktop screen:

- A dark-blue header appears at the top.
- The navigation links appear next to the logo.
- The hero text and image appear next to each other.
- The about information appears in two sections.
- The skills appear in three columns.
- The projects appear in three columns.
- The contact information and form appear next to each other.
- A dark-blue footer appears at the bottom.

On a tablet screen:

- The header content appears in a column.
- The hero content appears in a column.
- The cards appear in two columns.
- The contact section appears in a column.

On a mobile screen:

- The navigation links wrap when necessary.
- The hero buttons appear one below the other.
- The skill and project cards appear in one column.
- The text and spacing become more suitable for a small screen.
- The footer content appears in one column.

---

## Practice Examples

### Practice 1: Add Your Name

Change the main hero heading.

```html
<h1>Your Name</h1>
```

Add your job title inside the welcome text.

```html
<p class="welcome-text">Junior Software Engineer</p>
```

### Practice 2: Update the About Section

Replace the example paragraphs with information about yourself.

Include:

- What you are learning
- What you enjoy building
- Your career goal

### Practice 3: Add Your Real Skills

Add another skill card.

```html
<article class="skill-card">
    <h3>GitHub</h3>

    <p>
        Saving projects and tracking code changes using GitHub.
    </p>
</article>
```

### Practice 4: Add Real Project Links

Replace the placeholder link:

```html
<a href="#" class="project-link">View Project</a>
```

With a real project link:

```html
<a
    href="https://github.com/your-username/your-project"
    class="project-link"
>
    View Project
</a>
```

### Practice 5: Change the Main Color

Change the primary color inside `:root`.

```css
:root {
    --primary-color: darkgreen;
}
```

Check how the website colors change.

### Practice 6: Add Another Project

Copy one project card and change its content.

```html
<article class="project-card">
    <div class="project-number">04</div>

    <div class="project-content">
        <h3>Contact Form</h3>

        <p>
            A responsive contact form created using HTML and CSS.
        </p>

        <a href="#" class="project-link">View Project</a>
    </div>
</article>
```

### Practice 7: Test Responsive Design

Resize the browser and check the website at:

- More than 800 pixels
- Between 550 and 800 pixels
- Less than 550 pixels

Check whether the text, cards, navigation, images, and form remain easy to use.

---

## Important Notes

- Replace the example information with your real details.
- Replace `#` project links with real links.
- Replace the example email and location.
- The contact form does not send messages without a backend or another form service.
- Always use labels with form inputs.
- Always use useful alternative text for images.
- Add the viewport meta tag to responsive webpages.
- Use semantic HTML to keep the page structure clear.
- Use meaningful class names.
- Keep repeated colors and spacing inside CSS variables.
- Test the website on different screen sizes.
- Keep the HTML and CSS properly indented.
- Avoid adding unnecessary styles that make the page difficult to read.

---

## Easy Way to Remember

Remember the main website structure as:

**Header → Main Content → Footer**

Inside the main content, remember:

**Home → About → Skills → Projects → Contact**

Remember the styling process as:

1. Add the basic page styles.
2. Create the container.
3. Style each section.
4. Create layouts with Flexbox and Grid.
5. Add colors and spacing.
6. Make images responsive.
7. Add media queries.
8. Test different screen sizes.

---

## What I Learned

In this lesson, I learned:

- How to plan a complete webpage.
- How to create a portfolio website structure.
- How to use semantic HTML elements.
- How to create a navigation menu.
- How to connect navigation links to sections.
- How to create a hero section.
- How to create about, skills, and project sections.
- How to create a contact form.
- How to use CSS variables.
- How to create reusable containers.
- How to use Flexbox in different sections.
- How to use CSS Grid for cards.
- How to style links as buttons.
- How to add hover and focus effects.
- How to make images responsive.
- How to use media queries.
- How to create tablet and mobile layouts.
- How to combine HTML and CSS concepts in one project.

This is the final lesson in the beginner CSS course.

The HTML and CSS course is now complete.