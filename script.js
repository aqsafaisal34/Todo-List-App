let addToDoButton = document.querySelector("#new-task-submit");
let taskList = document.querySelector(".task-list");
let newTaskInput = document.querySelector("#new-task-input");

addToDoButton.addEventListener('click', function(){
   let paragraph = document.createElement('p');// to create paragraph element inside tasklist
   paragraph.innerText = newTaskInput.value;
   taskList.appendChild(paragraph);
   newTaskInput.value = "";
   paragraph.addEventListener('click', function(){
      paragraph.style.textDecoration = "line-through"
   })
   paragraph.addEventListener('dblclick', function(){
      taskList.removeChild(paragraph);
   })
})