let input = document.getElementById("input");
const add_btn = document.getElementById("btn");
const removeBtn = document.getElementById("remove");
let todoEl = document.querySelectorAll(".todoEl");
let content = document.getElementById("content");
let numberTodos = document.getElementById("numberTodos");
// let todoDone = parseInt(todoDones.innerText);
let todoDones = document.getElementById("todoDone");
let doneNum = 0;
todoDones.innerHTML = doneNum;
const textTodo = document.getElementById("text-todo");
let idNum = 0;

function newContent(el) {
  content.innerHTML += `<div
  id="todoEl"
  class="todoEl flex py-8 sm:py-0 border-b-2 border-gray-300 sm:border-none sm:mb-8 justify-evenly items-center sm:justify-between transition-all ease-in-out"
  data-todo-number="${(idNum += 1)}"
>
  <div class="todo-text w-28 sm:w-96 md:w-72 h-auto text-xl sm:text-2xl">
    <p id="text-todo" class="break-words">
    ${el}
    </p>
  </div>
  <div class="todo-button flex flex-col sm:flex-row h-28 mr-0.5 sm:mr-3 justify-between sm:h-auto">
    <button id="done"
      class="
                  flex-no-shrink
                  p-2
                  ml-2
                  sm:ml-4
                  mr-0
                  sm:mr-2
                  border-2 
                  border-green-500
                  rounded
                  hover:text-white
                  focus:outline-none
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
                  focus:outline-none
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
  numberTodos.innerText = content.childElementCount;

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
  const value = input.value;
  const trimmed = value.trim();

  if (event.keyCode === 13) {
    if (trimmed) {
      event.preventDefault();
      newContent(input.value);
    } else {
      alert("Coba Lagi");
      input.value = "";
    }
  }
});

add_btn.addEventListener("click", function (event) {
  const value = input.value;
  const trimmed = value.trim();

  if (trimmed) {
    event.preventDefault();
    newContent(input.value);
  } else {
    alert("Coba Lagi");
    input.value = "";
  }
});

window.addEventListener("click", function (event) {
  const target = event.target;

  if (target.id === "remove") {
    const todoContents = target.parentElement;
    const todoContent = todoContents.parentElement;
    console.log(event);
    console.log(todoContent);
    todoContent.remove();

    numberTodos.innerText = content.childElementCount;
  }

  if (target.id === "done") {
    if (target.innerText === "Done") {
      let textBtn = target.innerText;
      console.log(textBtn);
      target.classList.toggle("border-green-500");
      target.classList.toggle("hover:bg-green-500");
      target.classList.toggle("text-green-500");
      target.classList.toggle("border-gray-500");
      target.classList.toggle("hover:bg-gray-500");
      target.classList.toggle("text-gray-500");
      target.innerText = "Not Done!";
      const btnParent = target.parentElement;
      console.log(btnParent);
      const btnSibling = btnParent.previousElementSibling;
      console.log(btnSibling);
      const textDone = btnSibling.children[0];
      console.log(textDone);
      textDone.classList.toggle("text-gray-400");
      textDone.classList.toggle("line-through");
      doneNum += 1;
      todoDones.innerHTML = doneNum;
    } else {
      let textBtn = target.innerText;
      console.log(textBtn);
      target.classList.toggle("border-green-500");
      target.classList.toggle("hover:bg-green-500");
      target.classList.toggle("text-green-500");
      target.classList.toggle("border-gray-500");
      target.classList.toggle("hover:bg-gray-500");
      target.classList.toggle("text-gray-500");
      target.innerText = "Done";
      const btnParent = target.parentElement;
      console.log(btnParent);
      const btnSibling = btnParent.previousElementSibling;
      console.log(btnSibling);
      const textDone = btnSibling.children[0];
      console.log(textDone);
      textDone.classList.toggle("text-gray-400");
      textDone.classList.toggle("line-through");
      doneNum -= 1;
      todoDones.innerHTML = doneNum;
    }
  }
});
