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

// func displayBook()
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

// function displayValues() {
//     const holderDiv = document.createElement("div");
// }

// V1
// ---------------------------------------------------------------
// div that holds each book entry
// const outerDiv = document.createElement("div");
// outerDiv.classList.add("new-entry");

// // title
// const innerDiv = document.createElement("div");
// innerDiv.textContent = "random text"
// innerDiv.classList.add("random-class");

// outerDiv.appendChild(innerDiv);

// // author
// const innerInnerDiv = document.createElement("div");
// innerInnerDiv.textContent = "other random text"
// innerInnerDiv.classList.add("random-other-class")

// outerDiv.appendChild(innerInnerDiv);

// // page count
// const innerInnerInnerDiv = document.createElement("div");
// innerInnerInnerDiv.textContent = "20"
// innerInnerInnerDiv.classList.add("number")

// outerDiv.appendChild(innerInnerInnerDiv);

// // read status
// const innerInnerInnerInnerDiv = document.createElement("div");
// innerInnerInnerInnerDiv.textContent = "Not Read"
// innerInnerInnerInnerDiv.classList.add("number")

// outerDiv.appendChild(innerInnerInnerInnerDiv);

// // edit btn
// const editImgDiv = document.createElement("div");
// const editImg = document.createElement("img");
// editImg.src = "./icons/book-edit-outline.svg";
// editImgDiv.appendChild(editImg);

// outerDiv.appendChild(editImgDiv);

// // delete btn
// const deleteImgDiv = document.createElement("div");
// const deleteImg = document.createElement("img");
// deleteImg.src = "./icons/book-remove-outline.svg";
// deleteImgDiv.appendChild(deleteImg);

// outerDiv.appendChild(deleteImgDiv);
// ---------------------------------------------------------------


// V2
// ---------------------------------------------------------------
// const outerDiv = document.createElement("div");
// outerDiv.classList.add("new-entry");

// // title
// const innerDiv = document.createElement("div");
// innerDiv.textContent = "random text"
// innerDiv.classList.add("random-class");

// // author
// const innerInnerDiv = document.createElement("div");
// innerInnerDiv.textContent = "other random text"
// innerInnerDiv.classList.add("random-other-class")

// // page count
// const innerInnerInnerDiv = document.createElement("div");
// innerInnerInnerDiv.textContent = "20"
// innerInnerInnerDiv.classList.add("number")

// // read status
// const innerInnerInnerInnerDiv = document.createElement("div");
// innerInnerInnerInnerDiv.textContent = "Not Read"
// innerInnerInnerInnerDiv.classList.add("number")

// // edit btn
// const editImgDiv = document.createElement("div");
// const editImg = document.createElement("img");
// editImg.src = "./icons/book-edit-outline.svg";
// editImgDiv.appendChild(editImg);

// // delete btn
// const deleteImgDiv = document.createElement("div");
// const deleteImg = document.createElement("img");
// deleteImg.src = "./icons/book-remove-outline.svg";
// deleteImgDiv.appendChild(deleteImg);

// outerDiv.append(innerDiv, innerInnerDiv, innerInnerInnerDiv, innerInnerInnerInnerDiv, editImgDiv, deleteImgDiv);
// ---------------------------------------------------------------

// bookLog.appendChild(outerDiv);


// newEntry.textContent = "THE DIV IS RIGHT HERE";
// newEntry.classList.add("new-entry");

// const newTitle = document.createElement("div");



function bookCheck() {
    for (book in myLibrary) {
        console.log("a book")
    };
};
