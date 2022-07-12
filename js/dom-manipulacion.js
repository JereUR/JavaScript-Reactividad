const d = document,
  $item = d.getElementById("todo-item"),
  $list = d.getElementById("todo-list");

d.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;

  e.preventDefault();

  //Add item into the list
  let $li = d.createElement("li");
  $li.textContent = $item.value;
  $list.appendChild($li);

  //Clear input
  $item.value = "";
  $item.focus;
});
