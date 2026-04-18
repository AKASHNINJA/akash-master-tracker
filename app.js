const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');
const footer = document.getElementById('footer');
const itemsLeft = document.getElementById('items-left');
const clearBtn = document.getElementById('clear-btn');
const emptyState = document.getElementById('empty-state');
const filterBtns = document.querySelectorAll('.filter-btn');

let todos = JSON.parse(localStorage.getItem('todos') || '[]');
let filter = 'all';

function save() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getVisible() {
  if (filter === 'active') return todos.filter(t => !t.done);
  if (filter === 'completed') return todos.filter(t => t.done);
  return todos;
}

function render() {
  list.innerHTML = '';
  const visible = getVisible();

  visible.forEach((todo) => {
    const i = todos.indexOf(todo);
    const li = document.createElement('li');
    li.className = 'todo-item' + (todo.done ? ' done' : '');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.done;
    checkbox.addEventListener('change', () => toggle(i));

    const label = document.createElement('span');
    label.className = 'label';
    label.textContent = todo.text;

    const del = document.createElement('button');
    del.className = 'delete-btn';
    del.textContent = '✕';
    del.title = 'Delete';
    del.addEventListener('click', () => remove(i));

    li.append(checkbox, label, del);
    list.appendChild(li);
  });

  const remaining = todos.filter(t => !t.done).length;
  const hasAny = todos.length > 0;

  footer.style.display = hasAny ? 'flex' : 'none';
  emptyState.style.display = visible.length === 0 ? 'block' : 'none';

  if (hasAny) {
    itemsLeft.textContent = `${remaining} item${remaining !== 1 ? 's' : ''} left`;
  }
}

function addTodo() {
  const text = input.value.trim();
  if (!text) return;
  todos.unshift({ text, done: false });
  input.value = '';
  save();
  render();
}

function toggle(i) {
  todos[i].done = !todos[i].done;
  save();
  render();
}

function remove(i) {
  todos.splice(i, 1);
  save();
  render();
}

addBtn.addEventListener('click', addTodo);
input.addEventListener('keydown', e => { if (e.key === 'Enter') addTodo(); });

clearBtn.addEventListener('click', () => {
  todos = todos.filter(t => !t.done);
  save();
  render();
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filter = btn.dataset.filter;
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render();
  });
});

render();
