
function Task(description, state) {
  this.id = Task.UID++;
  this.description = description;
  this.isCompleted = false;
  this.state = state;
}
Task.UID = 1;

const addButton = document.getElementById('add-btn');
addButton.addEventListener('click', addTask);



let newTaskTyping = new Task();

function addTask() {
  newTaskTyping.description = document.querySelector('#task').value;
  
  newTaskTyping.state = document.querySelector('input[name="urgency"]:checked').value;

  var html = (newTaskTyping.state == 'im' ? (`<div class="panel panel-default todo-item">
<div class="panel-body alert alert-danger">
<div class="row">
<div class="col-sm-8">
<p class="todo-description">
${newTaskTyping.description}
</p>
</div>
<div class="col-sm-2">
<div class="checkbox">
<label>
<input type="checkbox"> Gotowe
</label>
</div>
</div>
<div class="col-sm-2">
<button type="submit" class="btn btn-block btn-danger">
Usuń
</button>
</div>
</div>
</div>
</div>`) : (newTaskTyping.state == 'ur' ? (`<div class="panel panel-default todo-item">
<div class="panel-body alert alert-warning">
<div class="row">
<div class="col-sm-8">
<p class="todo-description">
${newTaskTyping.description}
</p>
</div>
<div class="col-sm-2">
<div class="checkbox">
<label>
<input type="checkbox"> Gotowe
</label>
</div>
</div>
<div class="col-sm-2">
<button type="submit" class="btn btn-block btn-danger">
Usuń
</button>
</div>
</div>
</div>
</div>`) : (`<div class="panel panel-default todo-item">
<div class="panel-body alert alert-info">
<div class="row">
<div class="col-sm-8">
<p class="todo-description">
${newTaskTyping.description}
</p>
</div>
<div class="col-sm-2">
<div class="checkbox">
<label>
<input type="checkbox"> Gotowe
</label>
</div>
</div>
<div class="col-sm-2">
<button type="submit" class="btn btn-block btn-danger">
Usuń
</button>
</div>
</div>
</div>
</div>`)))
  
  
  
  var todoPanel = document.querySelector('.todo-panel');
  todoPanel.innerHTML += html;
}

