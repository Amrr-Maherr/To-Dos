let inputText = document.querySelector(".form-control");
let inputSub = document.querySelector(".btn");
let ulList = document.querySelector(".list");
let col = document.querySelector("#Buttons");
let dellBtn = document.createElement("button");
dellBtn.innerHTML = "Delete All";
dellBtn.classList.add("btn", "btn-danger", "w-100", "my-2", "fs-4");

function createEle() {
  if (inputText.value.trim() === "") {
    alert("Please Enter A Task");
  } else {
    let task = document.createElement("li");
    task.classList.add(
      "my-2",
      "fs-3",
      "bg-secondary",
      "rounded",
      "p-3",
      "col-12",
      "w-100",
      "d-block"
    );
    let taskText = document.createTextNode(inputText.value);
    task.appendChild(taskText);
    task.classList.add(
      "animate__animated",
      "animate__backInLeft",
      "d-flex",
      "align-items-center",
      "justify-content-between"
    );
    ulList.appendChild(task);
    console.log(ulList);
    inputText.value = "";
    inputSub.classList.add("animate__animated", "animate__pulse");
    if (col.contains(dellBtn) === false) {
      col.appendChild(dellBtn);
    }
    let iconDiv = document.createElement("div");
    iconDiv.classList.add("d-flex", "gap-5");
    let doneIcon = document.createElement("i");
    doneIcon.classList.add("fa-solid", "fa-check", "text-info");
    iconDiv.appendChild(doneIcon);
    let delIcon = document.createElement("i");
    delIcon.classList.add("fa-solid", "fa-trash", "text-danger");
    iconDiv.appendChild(delIcon);
    task.appendChild(iconDiv);
    delIcon.onclick = function () {
      deleteTask(task);
    };
    doneIcon.onclick = function () {
      done(task);
    };
  }
}

inputSub.onclick = createEle;
dellBtn.onclick = deleteALL;

function deleteALL() {
  ulList.innerHTML = "";
}

function deleteTask(task) {
  task.remove();
}

function done(task) {
  task.classList.add("bg-success", "text-white");
}

// Initialize SortableJS
const sortable = Sortable.create(document.getElementById("sortable-list"), {
  animation: 150, // Animation speed in ms
  chosenClass: "sortable-chosen", // Class name for the chosen item
  dragClass: "sortable-drag", // Class name for the dragging item
    onEnd: function (evt) {
    // Callback function when dragging ends
    console.log(
      "Item moved from index",
      evt.oldIndex,
      "to index",
      evt.newIndex
    );
  },
});
