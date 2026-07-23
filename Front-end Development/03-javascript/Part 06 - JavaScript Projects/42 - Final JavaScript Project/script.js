const transactionForm =
    document.getElementById("transaction-form");

const formTitle =
    document.getElementById("form-title");

const descriptionInput =
    document.getElementById("description-input");

const amountInput =
    document.getElementById("amount-input");

const typeSelect =
    document.getElementById("type-select");

const categorySelect =
    document.getElementById("category-select");

const dateInput =
    document.getElementById("date-input");

const formError =
    document.getElementById("form-error");

const submitButton =
    document.getElementById("submit-button");

const cancelEditButton =
    document.getElementById("cancel-edit-button");

const searchInput =
    document.getElementById("search-input");

const typeFilter =
    document.getElementById("type-filter");

const categoryFilter =
    document.getElementById("category-filter");

const transactionTableBody =
    document.getElementById("transaction-table-body");

const transactionSummary =
    document.getElementById("transaction-summary");

const visibleCount =
    document.getElementById("visible-count");

const emptyMessage =
    document.getElementById("empty-message");

const clearAllButton =
    document.getElementById("clear-all-button");

const balanceAmount =
    document.getElementById("balance-amount");

const incomeAmount =
    document.getElementById("income-amount");

const expenseAmount =
    document.getElementById("expense-amount");

const transactionCount =
    document.getElementById("transaction-count");


const storageKey = "javascriptExpenseTrackerProject";

let transactions = [];
let editingTransactionId = null;


// Create a unique ID

function createTransactionId() {
    return Date.now().toString() +
        Math.random().toString(16).slice(2);
}


// Format currency

function formatCurrency(amount) {
    return "$" +
        Number(amount).toFixed(2);
}


// Get today's date for the form

function getTodayDate() {
    const currentDate =
        new Date();

    const year =
        currentDate.getFullYear();

    const month =
        String(
            currentDate.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            currentDate.getDate()
        ).padStart(2, "0");

    return year + "-" + month + "-" + day;
}


// Save transactions

function saveTransactions() {
    localStorage.setItem(
        storageKey,
        JSON.stringify(transactions)
    );
}


// Load transactions

function loadTransactions() {
    const savedTransactions =
        localStorage.getItem(storageKey);

    if (savedTransactions === null) {
        transactions = [];
        return;
    }

    try {
        const parsedTransactions =
            JSON.parse(savedTransactions);

        transactions =
            Array.isArray(parsedTransactions)
                ? parsedTransactions
                : [];
    } catch (error) {
        transactions = [];

        console.error(
            "Could not load transactions:",
            error
        );
    }
}


// Reset the transaction form

function resetTransactionForm() {
    transactionForm.reset();

    dateInput.value =
        getTodayDate();

    typeSelect.value =
        "expense";

    categorySelect.value =
        "";

    editingTransactionId =
        null;

    formTitle.textContent =
        "Add Transaction";

    submitButton.textContent =
        "Add Transaction";

    cancelEditButton.classList.add(
        "hidden"
    );

    formError.textContent =
        "";
}


// Create a new transaction

function addTransaction(
    description,
    amount,
    type,
    category,
    date
) {
    const newTransaction = {
        id: createTransactionId(),
        description: description,
        amount: amount,
        type: type,
        category: category,
        date: date
    };

    transactions.unshift(
        newTransaction
    );

    saveTransactions();
    renderApplication();
}


// Find a transaction

function findTransaction(transactionId) {
    return transactions.find(
        function (transaction) {
            return (
                transaction.id ===
                transactionId
            );
        }
    );
}


// Start editing

function startEditingTransaction(
    transactionId
) {
    const selectedTransaction =
        findTransaction(transactionId);

    if (!selectedTransaction) {
        return;
    }

    editingTransactionId =
        transactionId;

    descriptionInput.value =
        selectedTransaction.description;

    amountInput.value =
        selectedTransaction.amount;

    typeSelect.value =
        selectedTransaction.type;

    categorySelect.value =
        selectedTransaction.category;

    dateInput.value =
        selectedTransaction.date;

    formTitle.textContent =
        "Edit Transaction";

    submitButton.textContent =
        "Save Changes";

    cancelEditButton.classList.remove(
        "hidden"
    );

    formError.textContent =
        "";

    transactionForm.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    descriptionInput.focus();
}


// Update an existing transaction

function updateTransaction(
    description,
    amount,
    type,
    category,
    date
) {
    const selectedTransaction =
        findTransaction(
            editingTransactionId
        );

    if (!selectedTransaction) {
        return;
    }

    selectedTransaction.description =
        description;

    selectedTransaction.amount =
        amount;

    selectedTransaction.type =
        type;

    selectedTransaction.category =
        category;

    selectedTransaction.date =
        date;

    saveTransactions();
    resetTransactionForm();
    renderApplication();
}


// Delete a transaction

function deleteTransaction(
    transactionId
) {
    const selectedTransaction =
        findTransaction(transactionId);

    if (!selectedTransaction) {
        return;
    }

    const shouldDelete =
        confirm(
            "Delete the transaction \"" +
            selectedTransaction.description +
            "\"?"
        );

    if (!shouldDelete) {
        return;
    }

    transactions =
        transactions.filter(
            function (transaction) {
                return (
                    transaction.id !==
                    transactionId
                );
            }
        );

    if (
        editingTransactionId ===
        transactionId
    ) {
        resetTransactionForm();
    }

    saveTransactions();
    renderApplication();
}


// Filter transactions

function getFilteredTransactions() {
    const searchValue =
        searchInput.value
            .trim()
            .toLowerCase();

    const selectedType =
        typeFilter.value;

    const selectedCategory =
        categoryFilter.value;

    return transactions.filter(
        function (transaction) {
            const matchesSearch =
                transaction.description
                    .toLowerCase()
                    .includes(searchValue) ||
                transaction.category
                    .toLowerCase()
                    .includes(searchValue);

            const matchesType =
                selectedType === "all" ||
                transaction.type ===
                selectedType;

            const matchesCategory =
                selectedCategory === "all" ||
                transaction.category ===
                selectedCategory;

            return (
                matchesSearch &&
                matchesType &&
                matchesCategory
            );
        }
    );
}


// Create a table cell

function createTableCell(
    text,
    className = ""
) {
    const tableCell =
        document.createElement("td");

    tableCell.textContent =
        text;

    if (className !== "") {
        tableCell.className =
            className;
    }

    return tableCell;
}


// Create one transaction row

function createTransactionRow(
    transaction
) {
    const tableRow =
        document.createElement("tr");

    const descriptionCell =
        createTableCell(
            transaction.description,
            "transaction-description"
        );

    const categoryCell =
        document.createElement("td");

    const typeCell =
        document.createElement("td");

    const dateCell =
        createTableCell(
            transaction.date
        );

    const amountCell =
        createTableCell(
            (
                transaction.type === "income"
                    ? "+"
                    : "-"
            ) +
            formatCurrency(
                transaction.amount
            ),
            transaction.type === "income"
                ? "amount-income"
                : "amount-expense"
        );

    const actionsCell =
        document.createElement("td");

    const categoryLabel =
        document.createElement("span");

    const typeLabel =
        document.createElement("span");

    const actionButtons =
        document.createElement("div");

    const editButton =
        document.createElement("button");

    const deleteButton =
        document.createElement("button");


    categoryLabel.className =
        "category-label";

    categoryLabel.textContent =
        transaction.category;

    categoryCell.append(
        categoryLabel
    );


    typeLabel.className =
        "type-label type-" +
        transaction.type;

    typeLabel.textContent =
        transaction.type === "income"
            ? "Income"
            : "Expense";

    typeCell.append(typeLabel);


    actionButtons.className =
        "action-buttons";

    editButton.type =
        "button";

    editButton.className =
        "action-button edit-button";

    editButton.textContent =
        "Edit";

    deleteButton.type =
        "button";

    deleteButton.className =
        "action-button delete-button";

    deleteButton.textContent =
        "Delete";


    editButton.addEventListener(
        "click",
        function () {
            startEditingTransaction(
                transaction.id
            );
        }
    );

    deleteButton.addEventListener(
        "click",
        function () {
            deleteTransaction(
                transaction.id
            );
        }
    );


    actionButtons.append(
        editButton,
        deleteButton
    );

    actionsCell.append(
        actionButtons
    );


    tableRow.append(
        descriptionCell,
        categoryCell,
        typeCell,
        dateCell,
        amountCell,
        actionsCell
    );

    return tableRow;
}


// Update financial summary

function updateFinancialSummary() {
    const totalIncome =
        transactions
            .filter(function (transaction) {
                return (
                    transaction.type ===
                    "income"
                );
            })
            .reduce(
                function (total, transaction) {
                    return (
                        total +
                        transaction.amount
                    );
                },
                0
            );

    const totalExpenses =
        transactions
            .filter(function (transaction) {
                return (
                    transaction.type ===
                    "expense"
                );
            })
            .reduce(
                function (total, transaction) {
                    return (
                        total +
                        transaction.amount
                    );
                },
                0
            );

    const balance =
        totalIncome - totalExpenses;

    balanceAmount.textContent =
        formatCurrency(balance);

    incomeAmount.textContent =
        formatCurrency(totalIncome);

    expenseAmount.textContent =
        formatCurrency(totalExpenses);

    transactionCount.textContent =
        transactions.length;

    clearAllButton.disabled =
        transactions.length === 0;


    if (transactions.length === 0) {
        transactionSummary.textContent =
            "No transactions have been added.";
    } else {
        transactionSummary.textContent =
            transactions.length +
            (
                transactions.length === 1
                    ? " transaction recorded."
                    : " transactions recorded."
            );
    }
}


// Render transaction table

function renderTransactions() {
    transactionTableBody.innerHTML =
        "";

    const filteredTransactions =
        getFilteredTransactions();

    filteredTransactions.forEach(
        function (transaction) {
            transactionTableBody.append(
                createTransactionRow(
                    transaction
                )
            );
        }
    );

    visibleCount.textContent =
        filteredTransactions.length +
        " visible";

    emptyMessage.classList.toggle(
        "hidden",
        filteredTransactions.length !== 0
    );
}


// Render the full application

function renderApplication() {
    updateFinancialSummary();
    renderTransactions();
}


// Submit form

transactionForm.addEventListener(
    "submit",
    function (event) {
        event.preventDefault();

        const description =
            descriptionInput.value.trim();

        const amount =
            Number(amountInput.value);

        const type =
            typeSelect.value;

        const category =
            categorySelect.value;

        const date =
            dateInput.value;


        if (description === "") {
            formError.textContent =
                "Enter a transaction description.";

            descriptionInput.focus();

            return;
        }

        if (
            !Number.isFinite(amount) ||
            amount <= 0
        ) {
            formError.textContent =
                "Enter an amount greater than zero.";

            amountInput.focus();

            return;
        }

        if (category === "") {
            formError.textContent =
                "Choose a transaction category.";

            categorySelect.focus();

            return;
        }

        if (date === "") {
            formError.textContent =
                "Choose a transaction date.";

            dateInput.focus();

            return;
        }

        formError.textContent =
            "";

        if (
            editingTransactionId === null
        ) {
            addTransaction(
                description,
                amount,
                type,
                category,
                date
            );

            resetTransactionForm();
        } else {
            updateTransaction(
                description,
                amount,
                type,
                category,
                date
            );
        }
    }
);


// Cancel editing

cancelEditButton.addEventListener(
    "click",
    resetTransactionForm
);


// Search and filter events

searchInput.addEventListener(
    "input",
    renderTransactions
);

typeFilter.addEventListener(
    "change",
    renderTransactions
);

categoryFilter.addEventListener(
    "change",
    renderTransactions
);


// Clear all records

clearAllButton.addEventListener(
    "click",
    function () {
        if (transactions.length === 0) {
            return;
        }

        const shouldClear =
            confirm(
                "Remove every transaction?"
            );

        if (!shouldClear) {
            return;
        }

        transactions = [];

        saveTransactions();
        resetTransactionForm();
        renderApplication();
    }
);


// Start the application

loadTransactions();
resetTransactionForm();
renderApplication();