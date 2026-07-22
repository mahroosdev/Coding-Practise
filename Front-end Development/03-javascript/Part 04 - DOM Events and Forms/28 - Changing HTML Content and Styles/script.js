// Changing introduction content

const introductionOutput =
    document.getElementById("introduction-output");

introductionOutput.textContent =
    "JavaScript changed this message using textContent.";


// Changing textContent

const textTarget =
    document.getElementById("text-target");

const originalText =
    textTarget.textContent.trim();

textTarget.textContent =
    "JavaScript changed the paragraph text.";

document.getElementById("text-output").textContent =
    "Original text: " + originalText + "\n" +
    "Updated text: " + textTarget.textContent;


// Changing innerHTML

const htmlTarget =
    document.getElementById("html-target");

htmlTarget.innerHTML =
    "<strong>JavaScript</strong> added this bold HTML content.";

document.getElementById("html-output").textContent =
    "The innerHTML property added a strong element.";


// Changing inline styles

const styleTarget =
    document.getElementById("style-target");

styleTarget.style.backgroundColor = "lightyellow";
styleTarget.style.color = "darkblue";
styleTarget.style.fontWeight = "bold";
styleTarget.style.borderWidth = "4px";

document.getElementById("style-output").textContent =
    "Background, text colour, font weight, and border were changed.";


// Adding a class

const addClassTarget =
    document.getElementById("add-class-target");

addClassTarget.classList.add("highlight-box");

document.getElementById("add-class-output").textContent =
    "Contains highlight-box: " +
    addClassTarget.classList.contains("highlight-box");


// Removing a class

const removeClassTarget =
    document.getElementById("remove-class-target");

const hadOldStyle =
    removeClassTarget.classList.contains("old-style");

removeClassTarget.classList.remove("old-style");

document.getElementById("remove-class-output").textContent =
    "Contained old-style before removal: " +
    hadOldStyle + "\n" +
    "Contains old-style now: " +
    removeClassTarget.classList.contains("old-style");


// Toggling a class

const toggleClassTarget =
    document.getElementById("toggle-class-target");

toggleClassTarget.classList.toggle("rounded-box");

document.getElementById("toggle-class-output").textContent =
    "Contains rounded-box: " +
    toggleClassTarget.classList.contains("rounded-box");


// Changing an attribute

const portfolioLink =
    document.getElementById("portfolio-link");

portfolioLink.setAttribute(
    "href",
    "https://portfolio-mahroos.netlify.app/"
);

portfolioLink.setAttribute(
    "target",
    "_blank"
);

portfolioLink.setAttribute(
    "rel",
    "noopener noreferrer"
);

document.getElementById("attribute-output").textContent =
    "Updated href: " +
    portfolioLink.getAttribute("href") + "\n" +
    "Updated target: " +
    portfolioLink.getAttribute("target");


console.log("Text target:", textTarget);
console.log("HTML target:", htmlTarget);
console.log("Style target:", styleTarget);
console.log("Portfolio link:", portfolioLink);