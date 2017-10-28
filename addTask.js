function Task(description, state) {
  this.id = Task.UID++;
  this.description = description;
  this.isCompleted = false;
  this.state = state;
}
Task.UID = 1;

var tasks = [];
var buttons = [];

const addingButton = document.getElementById('add-btn');
addingButton.addEventListener('click', addTask);

function addTask() {

  if(document.querySelector('input[name="urgency"]:checked') == null) { 
    document.getElementById('form').innerHTML += `<div class="alert alert-danger alert-dismissable">
<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
<strong>Warning!</strong> You have to select an urgency.
</div>`
  }
  else {
    var uid = Task.UID;
    tasks[uid] = new Task(document.querySelector('#task').value, document.querySelector('input[name="urgency"]:checked').value);

    var alert = (tasks[uid].state == 'im' ? "alert-danger" : (tasks[uid].state == 'ur' ? "alert-warning" : "alert-info"));

    var task = `<div class="panel panel-default todo-item" id="todo-` + tasks[uid].id + `">
<div class="panel-body alert ` + alert + `">
<div class="row">
<div class="col-sm-8">
<p class="todo-description">
${tasks[uid].description}
</p>
</div>
<div class="col-sm-2">
<div class="checkbox">
<label>
<input type="checkbox"> Done
</label>
</div>
</div>
<div class="col-sm-2">
<button type="submit" class="btn btn-block btn-danger" id="delete` + tasks[uid].id +`" onclick="deleteTask('todo-` + tasks[uid].id + `')">
Delete
</button>
</div>
</div>
</div>
</div>`;

    var todoPanel = document.querySelector('.todo-panel');
    todoPanel.innerHTML += task;

    buttons[tasks[uid].id] = document.querySelector("#delete" + tasks[uid].id);
  }
}


