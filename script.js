// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add event listener to the "Add Task" button
addTaskButton.addEventListener('click', addTask);

// Function to add a task
function addTask() {
  // Retrieve the value of the input field
  const taskText = taskInput.value.trim();

  // Check if the task is not empty
  if (taskText !== '') {
    // Create a new list item
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Add a delete button to the task item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteTask);

    // Append the delete button to the task item
    taskItem.appendChild(deleteButton);

    // Append the task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
  }
}

// Function to delete a task
function deleteTask(event) {
  const taskItem = event.target.parentNode;
  taskList.removeChild(taskItem);
}

// Add event listener to task items for marking as completed
taskList.addEventListener('click', markTaskCompleted);

// Function to mark a task as completed
function markTaskCompleted(event) {
  const taskItem = event.target;
  taskItem.classList.toggle('completed');
}

// Function for sorting tasks
function sortTasks() {
  const tasks = Array.from(taskList.children);
  tasks.sort((a, b) => a.textContent.localeCompare(b.textContent));
  taskList.innerHTML = '';
  tasks.forEach(task => taskList.appendChild(task));
}

// Add event listener to the "Sort" button
const sortButton = document.getElementById('sortButton');
sortButton.addEventListener('click', sortTasks);
