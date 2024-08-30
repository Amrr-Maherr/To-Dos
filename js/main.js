// Select the input field where tasks are entered
let inputText = document.querySelector("input[type=text]");

// Select the button used to add a new task
let btnAddTask = document.querySelector(".btn");

// Select the unordered list (ul) element where tasks will be appended
let ulList = document.querySelector(".list");

// Select the div where the "Delete All" button will be placed
let buttonsDiv = document.querySelector(".buttonsDiv");

// Create a button element for deleting all tasks
let deleteAllBtn = document.createElement("button");

// Function to add a new task to the list
function addTask() {
  // Check if the input field is empty
  if (inputText.value.trim() === "") {
    alert("Please enter a task"); // Alert user to enter a task
  } else {
    // Create a new list item (li) for the task
    let Task = document.createElement("li");

    // Create a span element for the task text
    let TaskText = document.createElement("span");
    TaskText.classList.add("task-text"); // Add class for styling
    TaskText.textContent = inputText.value.trim(); // Set the text content of the span
    inputText.value = ""; // Clear the input field

    // Append the text span to the task list item
    Task.appendChild(TaskText);

    // Append the new task to the unordered list
    ulList.appendChild(Task);

    // Apply styles to the task
    TaskStyle(Task);

    // Add action icons to the task
    iconDiv(Task);

    // Add the "Delete All" button to the buttons div
    delBtn(buttonsDiv);
  }
}

// Set the click event handler for the "Add Task" button
btnAddTask.onclick = function () {
  addTask(); // Call the function to add a new task
};

// Function to apply styles to the task
function TaskStyle(Task) {
  Task.classList.add(
    "lead",
    "text-break",
    "text-capitalize",
    "d-flex",
    "align-items-center",
    "justify-content-between",
    "my-3",
    "w-100",
    "p-4",
    "rounded",
    "border-bottom"
  );
}

// Function to add action icons to a task
function iconDiv(Task) {
  // Create a div element to hold the icons
  let iconD = document.createElement("div");
  iconD.classList.add("d-flex", "gap-3", "mx-2");

  // Append the icons div to the task
  Task.appendChild(iconD);

  // Add specific icons to the icons div
  icon(iconD, Task);
}

// Function to create and add icons to the icons div
function icon(iconD, Task) {
  // Create a drag icon
  let Drag = document.createElement("li");
  Drag.classList.add(
    "fa-solid",
    "fa-bars",
    "p-2",
    "cursor",
    "rounded",
    "grab",
    "text-info"
  );

  // Create a "done" icon
  let iconDone = document.createElement("li");
  iconDone.classList.add(
    "fa-regular",
    "fa-circle-check",
    "p-2",
    "cursor",
    "rounded",
    "text-success"
  );

  // Create a "delete" icon
  let iconDelete = document.createElement("li");
  iconDelete.classList.add(
    "fa-solid",
    "fa-trash-can",
    "p-2",
    "cursor",
    "rounded",
    "text-danger"
  );

  // Set the click event handler for the delete icon
  iconDelete.onclick = function () {
    // Confirm if the user really wants to delete the task
    if (confirm("Do you want to delete this task")) {
      Task.remove(); // Remove the task from the list
    }
  };

  // Set the click event handler for the "done" icon
  iconDone.onclick = function () {
    Task.classList.toggle("done"); // Toggle the "done" class to mark the task as completed
  };

  // Append the icons to the icons div
  iconD.appendChild(iconDone);
  iconD.appendChild(iconDelete);
  iconD.appendChild(Drag);
}

// Function to create and add the "Delete All" button
function delBtn(buttonsDiv) {
  deleteAllBtn.textContent = "Delete All"; // Set button text
  deleteAllBtn.classList.add("btn", "btn-danger", "d-block", "w-100", "my-2"); // Add styling classes

  // Append the "Delete All" button to the buttons div
  buttonsDiv.appendChild(deleteAllBtn);

  // Set the click event handler for the "Delete All" button
  deleteAllBtn.onclick = function () {
    deleteAll(ulList); // Call function to delete all tasks
  };
}

// Function to delete all tasks from the list
function deleteAll(ulList) {
  ulList.innerHTML = ""; // Clear the list
}

// Initialize sortable functionality on the task list after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const sortable = Sortable.create(ulList, {
    animation: 150, // Set animation speed for drag-and-drop
  });
});
