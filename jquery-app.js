console.log("Jquery version of doer");

var $newTodoInput = $('#new-todo-input');
var $addBtn = $("#add-btn");
var $todoList = $("#todo-list");
var $doneList = $('#done-list');

var addTodo = function() {
  $newTodoInput.val();

  // create a new list item using jquery
  var $newLI = $('<li>').text( $newTodoInput.val() );

  $todoList.append($newLI);
  $newTodoInput.val('');
}

$addBtn.on('click', addTodo);

// second argument is a filter argument
$todoList.on('click', 'li', function(event) {

  // convert DOM element into jquery object
  // $(event.target);

  // create new list item
  var $doneLI = $('<li>').addClass('done').text(event.target.textContent);

  //append to doneUL
  $doneList.append($doneLI);

  //remove existing li
  // ensure first converted to jquery object
  $(event.target).remove();

});
