let inputTitle = document.querySelector("#title");
let inputAuthor = document.querySelector("#author");
const addButton = document.querySelector(".add-button");
const libraryContainer = document.querySelector(".library-container");

addButton.addEventListener("click", function (event) {
  event.preventDefault();
  createCard();
  inputTitle.value = "";
  inputAuthor.value = "";
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
}

function createCard() {
  addBook();
  let book = myLibrary[myLibrary.length - 1];

  const card = document.createElement("div");
  card.className = "card";

  const titleContainer = document.createElement("div");
  titleContainer.className = "title-container";
  const titleTag = document.createElement("p");
  titleTag.textContent = "Title";
  titleTag.className = "title-tag";
  const titleInput = document.createElement("p");
  titleInput.textContent = book.title;

  const authorContainer = document.createElement("div");
  authorContainer.className = "author-container";
  const authorTag = document.createElement("p");
  authorTag.textContent = "Author";
  authorTag.className = "author-tag";
  const authorInput = document.createElement("p");
  authorInput.textContent = book.author;

  titleContainer.appendChild(titleTag);
  authorContainer.appendChild(authorTag);
  titleContainer.appendChild(titleInput);
  authorContainer.appendChild(authorInput);
  card.appendChild(titleContainer);
  card.appendChild(authorContainer);
  libraryContainer.appendChild(card);
}
