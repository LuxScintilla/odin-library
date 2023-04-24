let inputTitle = document.querySelector("#title");
let inputAuthor = document.querySelector("#author");
let displayTitle = document.querySelector(".display-title");
let displayAuthor = document.querySelector(".display-author");
const addButton = document.querySelector(".add-button");
const toggleRead = document.querySelector(".toggle-checkbox");
const deleteButton = document.querySelector(".delete");
const bookCard = document.querySelector(".card");
const libraryContainer = document.querySelector(".library-container");

addButton.addEventListener("click", function (event) {
  event.preventDefault();
  addBook();
  displayBooks();
});

let myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBook() {
  let title = inputTitle.value;
  let author = inputAuthor.value;
  let newBook = new Book(title, author);
  myLibrary.push(newBook);
  console.log(myLibrary);
}

function displayBooks() {
  for (let book of myLibrary) {
    let newBook = document.createElement("div");
    displayTitle.textContent = book.title;
    displayAuthor.textContent = book.author;
    newBook.appendChild(displayTitle);
    newBook.appendChild(displayAuthor);
    libraryContainer.appendChild(newBook);
  }
}
