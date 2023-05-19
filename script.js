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

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Library {
  constructor() {
    this.books = [];
  }
  addBook(newBook) {
    this.books.push(newBook);
  }
  removeBook(findBook) {
    // const index = this.books.findIndex((x) => x.title === findBook);
    const index = this.books.findIndex(function (book) {
      return book.title === findBook;
    });
    console.log(index);
    this.books.splice(index, 1);
  }
}

const myLibrary = new Library();

function createCard() {
  const book = new Book(inputTitle.value, inputAuthor.value);
  myLibrary.addBook(book);
  console.log(myLibrary.books);

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

  const toggleContainer = document.createElement("div");
  toggleContainer.className = "toggle-container";
  const toggleCheck = document.createElement("input");
  toggleCheck.setAttribute("type", "checkbox");
  toggleCheck.setAttribute("name", "checkbox");
  toggleCheck.className = "check";
  const toggleLabel = document.createElement("label");
  toggleLabel.setAttribute("for", "checkbox");
  toggleLabel.className = "toggle";

  toggleCheck.addEventListener("click", function () {
    if (toggleCheck.checked) {
      toggleLabel.textContent = "Read";
      toggleLabel.style.color = "var(--green)";
    } else if (toggleCheck.checked === false) {
      toggleLabel.textContent = "Not Read";
      toggleLabel.style.color = "var(--dark-clr)";
    }
  });

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.textContent = "Delete";
  deleteButton.setAttribute("data-book", book.title);

  toggleContainer.appendChild(toggleCheck);
  toggleContainer.appendChild(toggleLabel);

  titleContainer.appendChild(titleTag);
  authorContainer.appendChild(authorTag);

  titleContainer.appendChild(titleInput);
  authorContainer.appendChild(authorInput);

  card.appendChild(titleContainer);
  card.appendChild(authorContainer);
  card.appendChild(toggleContainer);
  card.appendChild(deleteButton);
  libraryContainer.appendChild(card);

  deleteButton.addEventListener("click", function () {
    myLibrary.removeBook(this.dataset.book);
    console.log(myLibrary.books);
    let removeElement = this.parentNode;
    libraryContainer.removeChild(removeElement);
  });
}
