let input = document.getElementById("input");
const add_btn = document.getElementById("btn");
const removeBtn = document.getElementById("remove");
let content = document.getElementById("content");
let idNum = 0;

{/* <div
  id="todoEl"
  class="flex mb-4 items-center justify-between"
  data-todo-number="${idNum += 1}"
>
  <div class="todo-text w-96 h-auto bg-red-600 border-2 border-green-600">
    <p class="break-words overflow-y-auto">
    ${el}
    </p>
  </div>
  <div class="todo-button flex">
    <button
      class="
                  flex-no-shrink
                  p-2
                  ml-4
                  mr-2
                  border-2 border-green-500
                  rounded
                  hover:text-white
                  text-green-500
                  hover:bg-green-500
                "
    >
      Done
    </button>
    <button
      id="remove"
      class="
                  flex-no-shrink
                  p-2
                  ml-2
                  border-2
                  rounded
                  text-red-500
                  border-red-500
                  hover:text-white
                  hover:bg-red-500
                "
    >
      Remove
    </button>
  </div>
</div>; */}

function newContent(el) {
  content.innerHTML += `<div
  id="todoEl"
  class="flex mb-4 justify-evenly items-center sm:justify-between"
  data-todo-number="${idNum += 1}"
>
  <div class="todo-text w-48 sm:w-96 h-auto text-2xl">
    <p class="break-words">
    ${el}
    </p>
  </div>
  <div class="todo-button flex">
    <button
      class="
                  flex-no-shrink
                  p-2
                  ml-4
                  mr-2
                  border-2 border-green-500
                  rounded
                  hover:text-white
                  text-green-500
                  hover:bg-green-500
                "
    >
      Done
    </button>
    <button
      id="remove"
      class="
                  flex-no-shrink
                  p-2
                  ml-2
                  border-2
                  rounded
                  text-red-500
                  border-red-500
                  hover:text-white
                  hover:bg-red-500
                "
    >
      Remove
    </button>
  </div>
</div>`;

  input.value = "";
  return content;
}

function remove(numId) {
  let todoEl = document
    .getElementById("todoEl")
    .getAttribute("data-todo-number");
  this.todoEl.remove(numId);

  return todoEl;
}

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    newContent(input.value);
  }
});

add_btn.addEventListener("click", function () {
  newContent(input.value);
});

window.addEventListener("click", function (event) {
  const target = event.target;

  if (target.id === "remove") {
    const todoContent = target.parentElement;
    console.log(event);
    console.log(todoContent);
    todoContent.remove();
  }
});
