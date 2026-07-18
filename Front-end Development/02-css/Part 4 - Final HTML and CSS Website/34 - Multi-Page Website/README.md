# 34 - Building a Multi-Page Website

## Introduction

In the previous lesson, I created a complete one-page website using HTML and CSS.

In this lesson, I am learning how to create a website with multiple HTML pages.

The website contains:

- A home page
- An about page
- A projects page
- A contact page
- One shared CSS file

Every page has the same header, navigation menu, basic design, and footer.

---

## Folder Structure

```text
34 - Building a Multi-Page Website/
│
├── index.html
├── about.html
├── projects.html
├── contact.html
├── style.css
└── README.md
```

---

## Main Concept

A multi-page website contains more than one HTML file.

Each HTML file represents a separate webpage.

In this project:

| File | Purpose |
|---|---|
| `index.html` | Displays the home page |
| `about.html` | Displays information about me |
| `projects.html` | Displays example projects |
| `contact.html` | Displays contact information and a form |
| `style.css` | Styles all four webpages |
| `README.md` | Explains the lesson and project |

The pages are connected using HTML links.

---

## The Home Page

The home page normally uses the filename:

```text
index.html
```

The browser and most website hosting services automatically look for an `index.html` file when opening a folder or website.

The home page contains:

- The main navigation
- A hero section
- Links to the other pages
- Information cards
- A call-to-action section
- A footer

---

## Connecting Multiple Pages

The pages are connected with the `<a>` element.

```html
<a href="about.html">About</a>
```

The `href` attribute tells the browser which file should open.

The navigation menu contains links to every page.

```html
<nav class="navigation">
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>
```

Because all the HTML files are inside the same folder, only the filename is required.

---

## Relative File Paths

The links in this project use relative file paths.

Example:

```html
<a href="projects.html">Projects</a>
```

This means the browser should look for `projects.html` inside the current folder.

The pages must use the correct filenames.

For example:

```text
projects.html
```

and

```html
<a href="projects.html">Projects</a>
```

must match exactly.

A spelling mistake in the filename or link can cause the page to display a “file not found” error.

---

## Sharing One CSS File

Every HTML page uses the same stylesheet.

The following line is added inside the `<head>` of every page:

```html
<link rel="stylesheet" href="style.css">
```

This means all pages can reuse the styles inside `style.css`.

There is no need to create a separate CSS file for every page.

Using one shared stylesheet helps:

- Keep the design consistent
- Avoid repeated CSS
- Make style changes easier
- Keep the project organized

If the primary color is changed in `style.css`, the color changes on every page.

---

## Reusing the Navigation

Every page contains the same navigation links.

```html
<nav class="navigation">
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>
```

This allows users to move between pages from any part of the website.

The navigation should remain in the same order on every page.

---

## Showing the Active Page

The current page link uses the `active` class.

On the home page:

```html
<a href="index.html" class="active">Home</a>
```

On the about page:

```html
<a href="about.html" class="active">About</a>
```

On the projects page:

```html
<a href="projects.html" class="active">Projects</a>
```

On the contact page:

```html
<a href="contact.html" class="active">Contact</a>
```

The active link is styled with CSS:

```css
.navigation a.active {
    background-color: white;
    color: darkblue;
}
```

This helps the visitor understand which page is currently open.

Only one navigation link should have the `active` class on each page.

---

## Page Titles

Every page has its own `<title>`.

Home page:

```html
<title>Home | My Website</title>
```

About page:

```html
<title>About | My Website</title>
```

Projects page:

```html
<title>Projects | My Website</title>
```

Contact page:

```html
<title>Contact | My Website</title>
```

The page title appears on the browser tab.

Using a different title for every page helps users identify the page they are viewing.

---

## Meta Descriptions

Every page also has its own description.

```html
<meta
    name="description"
    content="Learn more about me and my web development journey."
>
```

The description briefly explains the purpose of the page.

---

## Consistent Header and Footer

The header and footer are repeated on every page.

This creates a consistent website design.

The header contains:

- The website logo
- The navigation menu

The footer contains:

- Copyright text
- A page link

When editing a repeated section manually, the same change may need to be added to every HTML file.

For example, if a new `Services` link is added, it should be added to every navigation menu.

---

## Home Page Links

The home page contains cards that link to the other pages.

```html
<a href="about.html">Visit About Page</a>
```

```html
<a href="projects.html">Visit Projects Page</a>
```

```html
<a href="contact.html">Visit Contact Page</a>
```

A page can contain more than one link to the same destination.

---

## About Page

The about page contains:

- A page banner
- A responsive image
- Information about the learning journey
- Skills learned
- Personal goals
- A link to the projects page

The page uses Flexbox for the image and text.

```css
.about-container {
    display: flex;
    align-items: center;
    gap: 40px;
}
```

---

## Projects Page

The projects page displays project cards using CSS Grid.

```css
.project-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
}
```

Each card contains:

- A project number
- A project title
- A description
- Skill tags
- A project link

The project links currently use `#` as a placeholder.

```html
<a href="#" class="project-link">View Project</a>
```

The `#` should later be replaced with the real project URL.

---

## Contact Page

The contact page contains contact information and a form.

The form includes:

- Full name
- Email address
- Subject
- Message
- Submit button

```html
<form class="contact-form">
```

This is a front-end practice form.

It will not send or save messages because it is not connected to JavaScript, a backend, or a form service.

---

## CSS Variables

The main styles are stored using CSS variables.

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

These variables are used across every page.

```css
.page-header {
    background-color: var(--primary-color);
}
```

Because every page uses the same CSS file, changing a variable updates the design on all pages.

---

## Important Properties

### `display: flex`

Flexbox is used for the header, hero section, about section, contact section, and footer.

```css
.header-container {
    display: flex;
}
```

### `display: grid`

Grid is used for cards and projects.

```css
.card-container {
    display: grid;
}
```

### `grid-template-columns`

This creates equal columns.

```css
grid-template-columns: repeat(3, 1fr);
```

### `gap`

This adds space between Flexbox or Grid items.

```css
gap: 20px;
```

### `max-width`

This prevents the page content from becoming too wide.

```css
max-width: 1100px;
```

### `flex-wrap`

This allows navigation links or tags to move onto another line.

```css
flex-wrap: wrap;
```

### `:hover`

This changes an element when the mouse moves over it.

```css
.navigation a:hover {
    background-color: var(--secondary-color);
}
```

### `.active`

This class shows the current page link.

```css
.navigation a.active {
    background-color: white;
    color: var(--primary-color);
}
```

---

## CSS Used in This Lesson

### Shared Page Container

```css
.container {
    width: 90%;
    max-width: 1100px;
    margin: auto;
}
```

### Navigation Layout

```css
.navigation ul {
    display: flex;
    gap: 10px;
    list-style: none;
}
```

### Active Navigation Link

```css
.navigation a.active {
    background-color: white;
    color: var(--primary-color);
}
```

### Card Layout

```css
.card-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
```

### Project Layout

```css
.project-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
}
```

### Responsive Layout

```css
@media screen and (max-width: 550px) {
    .card-container,
    .project-container {
        grid-template-columns: 1fr;
    }
}
```

---

## Expected Output

### Home Page

The home page displays:

- A dark-blue header
- A navigation menu
- A hero section with text and an image
- Three information cards
- A call-to-action section
- A footer

The Home link appears as the active navigation link.

### About Page

The about page displays:

- A page banner
- An image and introduction
- Three learning cards
- Three goal items
- A footer

The About link appears as the active navigation link.

### Projects Page

The projects page displays:

- A page banner
- Four project cards
- Project skill tags
- A call-to-action section
- A footer

The Projects link appears as the active navigation link.

### Contact Page

The contact page displays:

- A page banner
- Contact information
- A contact form
- A footer

The Contact link appears as the active navigation link.

### Smaller Screens

On tablet and mobile screens:

- The header content changes into a column.
- The navigation links wrap when needed.
- The hero content changes into a column.
- The about image and text appear in a column.
- The information cards use fewer columns.
- The project cards appear in one column on mobile.
- The contact information and form appear in a column.
- The footer content appears in a column.

---

## Practice Examples

### Practice 1: Add Your Real Information

Update the content inside `about.html`.

Add:

- Your name
- Your current role
- What you are learning
- Your career goal

### Practice 2: Add Real Project Links

Replace:

```html
<a href="#" class="project-link">View Project</a>
```

With your real GitHub project link:

```html
<a
    href="https://github.com/your-username/your-project"
    class="project-link"
>
    View Project
</a>
```

### Practice 3: Add Another Project

Copy one project card in `projects.html` and change its content.

Remember to update the project number.

### Practice 4: Change the Main Color

Change the primary color inside `style.css`.

```css
:root {
    --primary-color: darkgreen;
}
```

Open every page and check whether the new color appears.

### Practice 5: Create a New Page

Create a new HTML file:

```text
services.html
```

Add a Services link to every navigation menu:

```html
<li>
    <a href="services.html">Services</a>
</li>
```

Remember to use the `active` class on the Services page.

### Practice 6: Test Every Link

Open `index.html` and test:

- Home
- About
- Projects
- Contact
- Logo
- Buttons
- Footer links

Repeat the test from every page.

---

## Important Notes

- Keep all the project files inside the same folder.
- Make sure every filename is written correctly.
- Use `.html` at the end of HTML filenames.
- Use the same navigation links on every page.
- Add the `active` class to only the current page link.
- Link every page to the same `style.css` file.
- Use a different title and description for every page.
- Replace placeholder project links with real links later.
- The contact form does not send messages yet.
- Test every navigation link before completing the project.
- Test the website on mobile, tablet, and desktop sizes.
- When adding a new navigation page, update every HTML file.

---

## Easy Way to Remember

Remember a multi-page website using four steps:

1. **Create** separate HTML files.
2. **Connect** them using links.
3. **Share** one CSS file.
4. **Test** every page.

The simple linking pattern is:

```html
<a href="filename.html">Page Name</a>
```

Remember:

```text
One page = One HTML file
Shared design = One CSS file
```

---

## What I Learned

In this lesson, I learned:

- What a multi-page website is.
- How to create separate HTML pages.
- Why the home page is normally named `index.html`.
- How to connect pages using relative links.
- How to reuse the same navigation menu.
- How to share one CSS file across multiple pages.
- How to show the current page with an active class.
- How to create different titles for each page.
- How to create different meta descriptions.
- How to keep the header and footer consistent.
- How to create home, about, projects, and contact pages.
- How to use Flexbox and Grid across different pages.
- How to make multiple pages responsive.
- Why every page link should be tested.
- How to organize a small multi-page website.

The next lesson is 35 - Introduction to JavaScript.