let input = document.getElementById("input");
const add_btn = document.getElementById("btn");
const removeBtn = document.getElementById("remove");
let content = document.getElementById("content");
let idNum = 0;
function newContent(el) {
  
  content.innerHTML += `<div id="todoEl" class="flex mb-4 items-center" data-todo-number="${idNum += 1}">
  <p class="w-full text-grey-darkest">${el}</p>
  <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
  <button id="remove" class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
</div>`;

  input.value = "";
  return content;
}

function remove(numId){
  let todoEl = document.getElementById("todoEl").getAttribute('data-todo-number');
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

window.addEventListener('click', function(event){
  const target = event.target;

  if(target.id === 'remove'){
      const todoContent = target.parentElement;
      console.log(event)
      console.log(todoContent)
      todoContent.remove()
    }
})