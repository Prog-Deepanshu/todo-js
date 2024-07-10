// Selectors
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Event listener for adding a new todo
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        createTodoElement(todoText);
        todoInput.value = '';
    }
}

// Function to create todo element
function createTodoElement(todoText) {
    const li = document.createElement('li');
    li.textContent = todoText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

// Event listener for Enter key press in input field
todoInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});
