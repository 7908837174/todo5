var task = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var taskList = document.getElementById("list");

var createNewTaskElement = function (taskString) {
  var listItem = document.createElement("li");

  var para = document.createElement("p");

//   var deleteButton = document.createElement("button");

  para.innerText = taskString;
    para.style="text-align:center;overflow:hidden;";

  listItem.className = "list-group-item";
//   deleteButton.innerText = "✘";
//   deleteButton.style = "background:transparent;border:none;float:right;";
//   deleteButton.className = "delete";

  listItem.appendChild(para);

//   listItem.appendChild(deleteButton);

  return listItem;
};
function addTask() {
  console.log("Adding new task...");
  //Create a new list item with the text from the #new-task:
  if (!task.value.trim()) return;
  var listItem = createNewTaskElement(task.value);

  //Append listItem to incompleteTaskHolder
  taskList.appendChild(listItem);
  task.value = "";
};
