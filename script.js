var btnAdd = document.getElementById("btnAdd");
var inputData = document.getElementById("data");
var myList = document.getElementById("myList");

btnAdd.addEventListener("click", addItem);
inputData.addEventListener("keypress", addItemAfterKeyPress);

function addItem() {
  if (inputData.value.trim().length === 0) return;

  var item = document.createElement("li");

  //item.addEventListener("click", markDone);
  //btnDelete.addEventListener("click", deleteItem.bind(item));

  item.classList.add("col-lg-12", "mb-4");
  var card = document.createElement("div");
  card.classList.add("card", "bg-primary", "text-white", "shadow");
  var cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardBody.appendChild(document.createTextNode(inputData.value));

  card.appendChild(cardBody);
  item.appendChild(card);

  myList.appendChild(item);

  inputData.value = "";

  var deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-danger", "btn-circle", "btn-sm");
  var icon = document.createElement("i");
  icon.classList.add("fas", "fa-trash");

  deleteButton.appendChild(icon);
  cardBody.appendChild(deleteButton);

  item.addEventListener("mouseover", hoverItem);
  item.addEventListener("mouseout", hoverItem);
  item.addEventListener("click", markDone);
  deleteButton.addEventListener("click", deleteItem.bind(item));
}

function hoverItem() {
  this.children.item(0).classList.toggle("bg-primary");
  this.children.item(0).classList.toggle("bg-info");
}

function markDone() {
  this.children.item(0).classList.toggle("bg-success");
}

function deleteItem() {
  this.classList.toggle("deleted");
}

function addItemAfterKeyPress(event) {
  if (event.which === 13) addItem();
}
