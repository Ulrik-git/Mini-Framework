/* const htmlObject = {
  "tag": "html",
  "attrs": {},
  "children": [
    {
      "tag": "div",
      "attrs": {
        "class": "nameSubm"
      },
      "children": [
        {
          "tag": "input",
          "attrs": {
            "type": "text",
            "placeholder": "Insert Name"
          }
        },
        {
          "tag": "input",
          "attrs": {
            "type": "submit",
            "placeholder": "Submit"
          }
        }
      ]
    }
  ]
};

function createElement(obj) {
  const element = document.createElement(obj.tag);
  const attrs = obj.attrs || {};
  for (let attr in attrs) {
    element.setAttribute(attr, attrs[attr]);
  }
  const children = obj.children || [];
  for (let child of children) {
    const childElement = createElement(child);
    element.appendChild(childElement);
  }
  return element;
}

const htmlElement = createElement(htmlObject);
document.body.appendChild(htmlElement);
*/

console.log("hello")

const state = {
    todos: [],
    editingTodo: null,
    filter: 'all',
};

function render(state) {
    console.log(state)
    const todoList = document.querySelector('.todo-list');
    const todoCount = document.querySelector('.todo-count');
    const clearCompletedButton = document.querySelector('.clear-completed');
    const filters = document.querySelectorAll('.filters a');

    // Clear the todo list before rendering
    todoList.innerHTML = '';

    // Render each todo as a list item
    state.todos.forEach(todo => {
        const li = document.createElement('li');
        li.dataset.id = todo.id;

        const divView = document.createElement('div');
        divView.classList.add('view');

        const inputToggle = document.createElement('input');
        inputToggle.classList.add('toggle');
        inputToggle.type = 'checkbox';
        inputToggle.checked = todo.completed;

        const label = document.createElement('label');
        label.textContent = todo.title;

        const buttonDestroy = document.createElement('button');
        buttonDestroy.classList.add('destroy');

        divView.appendChild(inputToggle);
        divView.appendChild(label);
        divView.appendChild(buttonDestroy);

        const inputEdit = document.createElement('input');
        inputEdit.classList.add('edit');
        inputEdit.value = todo.title;

        li.appendChild(divView);
        li.appendChild(inputEdit);

        if (state.editingTodo === todo.id) {
            li.classList.add('editing');
            inputEdit.focus();
        }

        if (todo.completed) {
            li.classList.add('completed');
        }

        todoList.appendChild(li);
    });

    // Render the count of incomplete todos
    const incompleteCount = state.todos.filter(todo => !todo.completed).length;
    const itemWord = incompleteCount === 1 ? 'item' : 'items';
    todoCount.innerHTML = `<strong>${incompleteCount}</strong> ${itemWord} left`;

    // Set the selected filter
    filters.forEach(filter => {
        if (filter.hash === `#${state.filter}`) {
            filter.classList.add('selected');
        } else {
            filter.classList.remove('selected');
        }
    });

    // Show or hide the clear completed button
    if (state.todos.some(todo => todo.completed)) {
        clearCompletedButton.style.display = 'block';
    } else {
        clearCompletedButton.style.display = 'none';
    }
}

function addTodo(title) {
    state.todos.push({
        id: Date.now(),
        title,
        completed: false,
    });
}

function deleteTodo(id) {
    state.todos = state.todos.filter(todo => todo.id !== id);
}

function editTodoStart(id) {
    state.editingTodo = id;
}

function editTodoEnd(id, title) {
    const todo = state.todos.find(todo => todo.id === id);
    if (todo) {
        todo.title = title;
        state.editingTodo = null;
    }
}

function toggleTodoCompleted(id) {
    const todo = state.todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
    }
}

function clearCompletedTodos() {
    state.todos = state.todos.filter(todo => !todo.completed);
}

function setFilter(filter) {
    state.filter = filter;
}

const newTodoInput = document.querySelector('.new-todo');
newTodoInput.addEventListener('keydown', event => {
    console.log("jdzajd")
    if (event.key === 'Enter') {
        event.preventDefault();
        const title = event.target.value.trim();
        if (title) {
            addTodo(title);
            event.target.value = '';
            render(state);
        }
    }
});

const todoList = document.querySelector('.todo-list');
todoList.addEventListener('click', event => {
    if (event.target.classList.contains('toggle')) {
        const id = parseInt(event.target.closest('li').dataset.id, 10);
        toggleTodoCompleted(id);
        render(state);
    } else if (event.target.classList.contains('destroy')) {
        const id = parseInt(event.target.closest('li').dataset.id, 10);
        deleteTodo(id);
        render(state);
    } else if (event.target.tagName === 'LABEL') {
        const li = event.target.closest('li');
        const id = parseInt(li.dataset.id, 10);
        editTodoStart(id);
        render(state);
    }
});

const todoListContainer = document.querySelector('.todo-list');
let editingTodoInput;
todoListContainer.addEventListener('dblclick', event => {
    if (event.target.tagName === 'LABEL') {
        const li = event.target.closest('li');
        editingTodoInput = li.querySelector('.edit');
        editingTodoInput.focus();
    }
});

todoListContainer.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        editingTodoInput.value = editingTodoInput.dataset.previousValue;
        editingTodoInput.blur();
    } else if (event.key === 'Enter') {
        const id = parseInt(event.target.closest('li').dataset.id, 10);
        const title = event.target.value.trim();
        editTodoEnd(id, title);
        render(state);
    }
});

const clearCompletedButton = document.querySelector('.clear-completed');
clearCompletedButton.addEventListener('click', event => {
    clearCompletedTodos();
    render(state);
});

const filters = document.querySelectorAll('.filters a');
filters.forEach(filter => {
    filter.addEventListener('click', event => {
        event.preventDefault();
        const filterValue = filter.hash.slice(1);
        setFilter(filterValue);
        render(state);
    });
});