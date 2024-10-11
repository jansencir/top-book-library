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

// function displayBook() {
    /*
    -Remember:
        -addBookToLibrary adds the form input to library
        -this function takes the library and displays its items
    
    -PB general
        -iterate through each book in myLibrary
        -take key-value pair of each book and add them to specific div by class

    -PB detailed
        -create new-entry parent div to hold each book
        -for each book, add it as children to new-entry div:
            -take value of title and add it to new-entry div with class entry-title
            -take value of author and add it to new-entry div with class entry-author
            -take value of page count and add it to new-entry div with class entry-pages
            -take value of read status and add it to new-entry div with class entry-status
            -then add edit icon and delete icon
    */


// }


// newEntry.textContent = "THE DIV IS RIGHT HERE";
// newEntry.classList.add("new-entry");



// const newTitle = document.createElement("div");

// html main container: bookLog

/*
- Start with a function
- for (new book in myLibrary) {
    -grab key-value
    add specific key-value to specific div in new-entry div
}
- Create new div (main container)
- Target and create new div's for:
    -title
    -author
    -page count
    -status
-append these new items to the main container
-append the new container to the existing html container
*/

function bookCheck() {
    for (book in myLibrary) {
        console.log("a book")
    };
};
