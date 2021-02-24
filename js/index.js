const input = document.querySelector('.input');
const addButton = document.querySelector('.add-button');

const items = JSON.parse(localStorage.getItem('todos')) || [];

addButton.addEventListener('click', addTodo);
input.addEventListener('input', () => {
  if (input.value) {
    addButton.classList.remove('disabled');
  } else {
    addButton.classList.add('disabled');
  }
});

function addTodo() {
  const value = input.value;

  if (value.trim() !== '') {
    items.push({
      value,
    });

    localStorage.setItem('todos', JSON.stringify(items));
    window.location.pathname = '/LivePhoto/todos.html';
  }
}
