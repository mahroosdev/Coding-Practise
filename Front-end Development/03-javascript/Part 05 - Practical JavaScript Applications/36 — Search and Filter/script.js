const searchInput =
    document.getElementById("search-input");

const technologyCards =
    document.querySelectorAll(".technology-card");

const resultCount =
    document.getElementById("result-count");

const clearSearchButton =
    document.getElementById("clear-search-button");

const emptyMessage =
    document.getElementById("empty-message");


// Filter the technology cards

function filterTechnologies() {
    const searchValue =
        searchInput.value
            .trim()
            .toLowerCase();

    let visibleCardCount = 0;

    technologyCards.forEach(function (card) {
        const technologyName =
            card.dataset.name.toLowerCase();

        const technologyCategory =
            card.dataset.category.toLowerCase();

        const matchesSearch =
            technologyName.includes(searchValue) ||
            technologyCategory.includes(searchValue);

        card.classList.toggle(
            "hidden",
            !matchesSearch
        );

        if (matchesSearch) {
            visibleCardCount++;
        }
    });

    resultCount.textContent =
        visibleCardCount +
        (visibleCardCount === 1
            ? " result found"
            : " results found");

    emptyMessage.classList.toggle(
        "hidden",
        visibleCardCount !== 0
    );
}


// Filter while typing

searchInput.addEventListener(
    "input",
    filterTechnologies
);


// Clear the search

clearSearchButton.addEventListener(
    "click",
    function () {
        searchInput.value = "";

        filterTechnologies();

        searchInput.focus();
    }
);


// Show the initial results

filterTechnologies();