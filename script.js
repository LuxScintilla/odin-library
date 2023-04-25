let inputTitle = document.querySelector("#title");
let inputAuthor = document.querySelector("#author");
const addButton = document.querySelector(".add-button");
let toggleCheck = document.querySelector(".check");
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

let i = 0;

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
            <input type="checkbox" id="check-${i}" />
            <span class="slider"></span>
          </label>
          <p class="text-toggle-${i}">Not Read</p>
        </div>
        <button class="delete" id="delete-${i}"><img src="img/delete.svg" /></button>
      </div>`;
  libraryContainer.insertAdjacentHTML("beforeend", code);
  document.querySelector("#delete-" + i).addEventListener("click", function () {
    let removeElement = this.parentNode;
    libraryContainer.removeChild(removeElement);
  });

  let toggleText = document.querySelector(".text-toggle-" + i);

  document.querySelector("#check-" + i).addEventListener("click", function () {
    if (this.checked) {
      toggleText.textContent = "Read";
      toggleText.style.color = "var(--green)";
    } else if (this.checked === false) {
      toggleText.textContent = "Not Read";
      toggleText.style.color = "var(--dark-clr)";
    }
  });

  i++;
}

// toggleCheck.addEventListener("click", toggleBook);

// function toggleBook() {
//   if (toggleCheck.checked) {
//     toggleText.textContent = "Read";
//     toggleText.style.color = "var(--green)";
//   } else if (toggleCheck.checked === false) {
//     toggleText.textContent = "Not Read";
//     toggleText.style.color = "var(--dark-clr)";
//   }
// }
