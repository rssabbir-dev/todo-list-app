const addListText = document.getElementById('add-list-text');
const addListBtn = document.getElementById('add-list-btn');
const todoListContainer = document.getElementById("todo-list-container");
const pendingTasksText = document.getElementById("todo-list-counter");
const clearAllBtn = document.getElementById('clear-all-btn');


//Add List Event Handler
addListBtn.addEventListener('click', () => {
  const text = addListText.value;
  const deleteBtn = document.createElement('button');
  const newList = document.createElement("li");
  if (text == '') {
    addListText.style.border = '2px solid red';
  }
  else {
    deleteBtn.innerText = 'Delete';
    newList.innerText = text;
    newList.appendChild(deleteBtn)
    todoListContainer.appendChild(newList);
    addListText.value = '';
    addListText.style.border = "1px solid black";
    pendingTasksText.innerText = parseInt(pendingTasksText.innerText) + 1;
  }
})
// Delete Button Event Handler
todoListContainer.addEventListener('click',(event) => {
  if (event.target.innerText == 'Delete') {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode)
    pendingTasksText.innerText = parseInt(pendingTasksText.innerText) - 1;
  }
})

clearAllBtn.addEventListener('click', () => {
  todoListContainer.innerHTML = '';
  pendingTasksText.innerText = 0;
})