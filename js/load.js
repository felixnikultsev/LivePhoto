const list = document.querySelector('.collection');

const items = JSON.parse(localStorage.getItem('todos')) || [];

document.addEventListener('DOMContentLoaded', loadTodos);

function deleteTodo(index) {
  items.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(items));
  loadTodos();
}

function loadTodos() {
  list.innerHTML =
    '<li class="collection-header"><h4>Список задач</h4></li>' +
    items
      .map(
        (item, index) => `
        <li class="collection-item">
          <div>${item.value}<i onclick="deleteTodo(${index})" class="delete-button">&times;</i></div>
        </li>
      `,
      )
      .join('');
}
