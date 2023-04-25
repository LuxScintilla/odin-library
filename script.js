let inputTitle = document.querySelector("#title");
let inputAuthor = document.querySelector("#author");
const addButton = document.querySelector(".add-button");
let toggleCheck = document.querySelector("#check");
let toggleText = document.querySelector(".text-toggle");
const deleteButton = document.querySelector(".delete");
const bookCard = document.querySelector(".card");
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
  let code = `
  <div class="card">
        <div class="card-title">
          <p>Title</p>
          <p class="display-title">${book.title}</p>
        </div>
        <div class="card-author">
          <p>Author</p>
          <p class="display-author">${book.author}</p>
        </div>
        <div class="read">
          <label class="toggle">
            <input type="checkbox" id="check" />
            <span class="slider"></span>
          </label>
          <p class="text-toggle">Not Read</p>
        </div>
        <button class="delete"><img src="img/delete.svg" /></button>
      </div>`;
  libraryContainer.innerHTML += code;
}

toggleCheck.addEventListener("click", toggleBook);

function toggleBook() {
  if (toggleCheck.checked) {
    toggleText.textContent = "Read";
    toggleText.style.color = "var(--green)";
  } else if (toggleCheck.checked === false) {
    toggleText.textContent = "Not Read";
    toggleText.style.color = "var(--dark-clr)";
  }
}

deleteButton.addEventListener("click", deleteCard);

function deleteCard() {}
