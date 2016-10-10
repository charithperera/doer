console.log("This is the app.js");

console.log(aVariable);

var addBtn = document.querySelector("#add-btn");
var newTodoInput = document.querySelector('#new-todo-input');
var todoList = document.querySelector("#todo-list");
var doneList = document.querySelector("#done-list");

var addTodo = function() {
  var newTodoContent = newTodoInput.value;
  var newLI = document.createElement('li');
  var newContent = document.createTextNode(newTodoContent);
  newLI.appendChild(newContent);
  todoList.appendChild(newLI);
  newTodoInput.value = "";
}

addBtn.addEventListener("click", addTodo);
document.body.addEventListener("keydown", function(even) {
  if(event.keyCode === 13) {
    addTodo();
  }
})

todoList.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.className = "done";
  }
});

todoList.addEventListener("dblclick", function(event) {
    moveToDone(event);
    // doneList.appendChild(event.target);
})


function moveToDone(event) {
  if (event.target.tagName === "LI") {
    var newLI = document.createElement('li');
    var itemContent = event.target.textContent;
    var itemContentNode = document.createTextNode(itemContent);
    newLI.appendChild(itemContentNode);
    newLI.className += "done";
    doneList.appendChild(newLI);
    event.target.parentElement.removeChild(event.target);    
  }

}
