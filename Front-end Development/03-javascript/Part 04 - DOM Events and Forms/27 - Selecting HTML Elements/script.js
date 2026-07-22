// Selecting an element for the introduction

const introductionOutput =
    document.getElementById("introduction-output");

introductionOutput.textContent =
    "JavaScript successfully selected this output element.";


// Selecting by ID

const idExample =
    document.getElementById("id-example");

document.getElementById("id-output").textContent =
    "Selected tag: " + idExample.tagName + "\n" +
    "Selected ID: " + idExample.id + "\n" +
    "Text: " + idExample.textContent.trim();


// querySelector()

const firstQueryExample =
    document.querySelector(".query-example");

document.getElementById("query-output").textContent =
    "querySelector() selected:\n" +
    firstQueryExample.textContent.trim();


// querySelectorAll()

const technologyItems =
    document.querySelectorAll(".technology-item");

let technologyResult = "";

technologyItems.forEach(function (item, index) {
    technologyResult +=
        "Item " + (index + 1) + ": " +
        item.textContent + "\n";
});

document.getElementById("query-all-output").textContent =
    "Number of selected items: " +
    technologyItems.length + "\n" +
    technologyResult;


// getElementsByClassName()

const courseCards =
    document.getElementsByClassName("course-card");

let courseResult = "";

for (let index = 0; index < courseCards.length; index++) {
    courseResult +=
        "Course " + (index + 1) + ": " +
        courseCards[index].textContent + "\n";
}

document.getElementById("class-output").textContent =
    "Number of course cards: " +
    courseCards.length + "\n" +
    courseResult;


// getElementsByTagName()

const pageSections =
    document.getElementsByTagName("section");

document.getElementById("tag-output").textContent =
    "Selected tag: section\n" +
    "Number of sections: " +
    pageSections.length;


console.log("Selected by ID:", idExample);
console.log("querySelector:", firstQueryExample);
console.log("querySelectorAll:", technologyItems);
console.log("Class selection:", courseCards);
console.log("Tag selection:", pageSections);