const bookForm = document.querySelector(".new-book-form");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPageCount = document.getElementById("page-count");
const bookReadStatus = document.querySelectorAll('input[name="status"]');
const addBookBtn = document.getElementById("add-book-btn");
const bookLog = document.getElementById("book-entries");

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
};

function addBookToLibrary() {
    const bookEntryTitle = bookTitle.value;
    const bookEntryAuthor = bookAuthor.value;
    const bookEntryPageCount = bookPageCount.value;
    const bookEntryStatus = statusSelect();
    let bookEntry = new Book(
        bookEntryTitle,
        bookEntryAuthor,
        bookEntryPageCount,
        bookEntryStatus
    )
    myLibrary.push(bookEntry);
}

function statusSelect() {
    for (const radioButton of bookReadStatus) {
        if (radioButton.checked) {
            const selectedValue = radioButton.value;
            return selectedValue;
        }
    }
}

function clearForm() {
    bookForm.reset();
}

function displayBook() {
    bookLog.innerHTML = ""
    // Clear bookLog to prevent duplicating contents

    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        
        // container for new book
        const newEntryDiv = document.createElement("div");
        newEntryDiv.classList.add("new-entry");
        newEntryDiv.dataset.index = [i];

        // title
        const newTitleDiv = document.createElement("div");
        newTitleDiv.textContent = book.title;

        // author
        const newAuthorDiv = document.createElement("div");
        newAuthorDiv.textContent = book.author;

        // page count
        const newPageDiv = document.createElement("div");
        newPageDiv.textContent = book.pages;

        // read status
        const newStatusDiv = document.createElement("div");
        newStatusDiv.textContent = book.read;

        // toggle button
        const toggleImgBtn = document.createElement("button");
        const toggleImg = document.createElement("img");
        toggleImgBtn.classList.add("entry", "toggle")
        toggleImg.src = "./icons/book-toggle-outline.svg";
        toggleImgBtn.appendChild(toggleImg);

        // delete button
        const deleteImgBtn = document.createElement("button");
        const deleteImg = document.createElement("img");
        deleteImgBtn.classList.add("entry", "delete")
        deleteImg.src = "./icons/book-remove-outline.svg";
        deleteImgBtn.appendChild(deleteImg);

        newEntryDiv.append(newTitleDiv, newAuthorDiv, newPageDiv, newStatusDiv, toggleImgBtn, deleteImgBtn);
        newEntryDiv.dataset.index = `book-${i}`;

        bookLog.appendChild(newEntryDiv);
    }
};