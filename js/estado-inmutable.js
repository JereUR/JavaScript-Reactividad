const d = document;

//State
const state = {
  todoList: [],
};

//Template UI
const template = () => {
  if (state.todoList.length < 1)
    return `<p><em>Lista sin tareas por hacer.</em></p>`;

  let todos = state.todoList.map((item) => `<li>${item}</li>`).join("");

  return todos;
};

//Render UI
const render = () => {
  console.log(state);
  const $list = d.getElementById("todo-list");
  if (!$list) return;

  $list.innerHTML = template();
};

//Reactive state update
const setState = (obj) => {
  for (let key in obj) {
    if (state.hasOwnProperty(key)) {
      state[key] = obj[key];
    }
  }

  render();
};

//Get inmutable copy state
const getState = () => JSON.parse(JSON.stringify(state));

d.addEventListener("DOMContentLoaded", render);

//Setting defaults values state
setState({
  todoList: ["Task 1", "Task 2", "Task 3"],
});

//This does not change the state
const items = getState();
items.todoList.push("Task 4");

d.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;

  e.preventDefault();

  const $item = d.getElementById("todo-item");
  if (!$item) return;

  //Reactive state update
  const lastState = getState();
  lastState.todoList.push($item.value);
  setState({ todoList: lastState.todoList });

  //Clear input
  $item.value = "";
  $item.focus;
});
