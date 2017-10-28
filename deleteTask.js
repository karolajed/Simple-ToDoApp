var idid = "todo-item-3";
function deleteTask(todoItemID) {
 if(confirm("Are you sure?")) {
   document.getElementById(todoItemID).innerHTML = "";
 } 
}