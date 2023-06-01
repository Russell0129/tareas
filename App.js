const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function addTask() {
const taskText = taskInput.value;
if (taskText.trim() !== '') {
const taskItem = document.createElement('li');
taskItem.classList.add('task-item');
taskItem.innerHTML = `
<span>${taskText}</span>
<button class="delete-btn">Eliminar</button>
`;
taskList.appendChild(taskItem);
taskInput.value = '';

taskItem.classList.add('fade-in');
setTimeout(() => {
taskItem.classList.remove('fade-in');
}, 500);
}
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', (event) => {
if (event.key === 'Enter') {
addTask();
}
});

taskList.addEventListener('click', (event) => {
if (event.target.classList.contains('delete-btn')) {
const taskItem = event.target.parentElement;
taskList.removeChild(taskItem);
}
});
