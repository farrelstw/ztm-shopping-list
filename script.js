var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  var deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("Delete"));
  li.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    li.remove();
  });

  ul.appendChild(li);
  input.value = "";
}

function toggleDone(event) {
  event.target.classList.toggle("done");
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function addDeleteButtonsToListItems() {
  var liElements = document.querySelectorAll("li");
  liElements.forEach(function (li) {
    // Only add a delete button if one doesn't already exist
    if (!li.querySelector("button")) {
      var deleteButton = document.createElement("button");
      deleteButton.appendChild(document.createTextNode("Delete"));
      li.appendChild(deleteButton);
    }
  });
}

ul.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    event.target.parentNode.remove();
  }
});

addDeleteButtonsToListItems();

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleDone);
