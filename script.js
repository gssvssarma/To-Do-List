// Function to add a new task to the list
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskDescription = taskInput.value.trim();

    if (taskDescription !== "") {
        var taskList = document.getElementById("taskList");
        var newTask = document.createElement("li");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        newTask.appendChild(checkbox);

        var taskText = document.createTextNode(taskDescription);
        newTask.appendChild(taskText);

        // Add timestamp for task creation
        var timestamp = document.createElement("span");
        timestamp.textContent = "Added: " + getCurrentTime();
        newTask.appendChild(timestamp);

        // Create input field for due date
        var dueDateInput = document.createElement("input");
        dueDateInput.type = "date";
        newTask.appendChild(dueDateInput);

        // Add an "Edit" button for updating the due date
        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function() {
            var newDueDate = dueDateInput.value;
            if (newDueDate) {
                updateDueDate(newTask, newDueDate);
            }
        };
        newTask.appendChild(editButton);

        taskList.appendChild(newTask);

        taskInput.value = "";
    }
}

// Function to update the due date for a task
function updateDueDate(taskItem, newDueDate) {
    var dueDateElement = taskItem.querySelector("span.due-date");
    dueDateElement.textContent = "Due: " + newDueDate;
}

// Custom function to get the current time in a readable format
function getCurrentTime() {
    var now = new Date();
    return now.toLocaleString();
}

// Add event listener to input field to add a task when Enter key is pressed
document.getElementById("taskInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

