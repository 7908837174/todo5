window.addEventListener('load', () => {
    const form = document.querySelector('#form');
    const input = document.querySelector('#add-task');
    const task_content = document.querySelector('#task-list');
    let taskDate = '';

    document.getElementById('date-btn').addEventListener('click', () => {
        const currentDate = new Date();
        taskDate = currentDate.toLocaleDateString(); // Format the date as needed
        alert(`Current Date Added: ${taskDate}`); // Alert for confirmation
    });

    form.addEventListener('submit', function(f) {
        f.preventDefault();
        const value = input.value;
        if (value === "") {
            alert("Please enter some task");
            return;
        } else {
            const task = document.createElement('div');
            task.classList.add('tasks');

            const task_input = document.createElement('div');
            task_input.classList.add('content');
            task.appendChild(task_input);

            const input_text = document.createElement('input');
            input_text.type = 'text';
            input_text.id = 'task';
            input_text.setAttribute("readonly", "readonly");
            input_text.value = `${value} (Date: ${taskDate})`; // Include the date here
            input_text.style.cssText = 'background:transparent; text-align:center;color:yellow;border-radius: 20px;';
            task_input.appendChild(input_text);

            const input_action = document.createElement('div');
            input_action.classList.add('actions');
            task.appendChild(input_action);

            const edit = document.createElement('button');
            edit.id = 'edit';
            edit.innerText = 'Edit';
            edit.style.cssText += 'background: rgb(105, 105, 247);border-radius:10px;';
            input_action.appendChild(edit);
            edit.addEventListener('click', function(e) {
                if (edit.innerText === 'Edit') {
                    input_text.removeAttribute('readonly');
                    input_text.focus();
                    edit.innerText = 'Save';
                    edit.style.cssText += 'background:green;border-radius:10px;';
                } else {
                    if (input_text.value === "") {
                        alert("Please add some task");
                        return;
                    } else {
                        input_text.setAttribute('readonly', 'readonly');
                        edit.innerText = 'Edit';
                        edit.style.cssText += 'background: rgb(105, 105, 247);border-radius:10px;';
                    }
                }
            });

            const del = document.createElement('button');
            del.id = 'delete';
            del.innerText = 'Delete';
            del.style.cssText += 'border-radius:10px;';
            input_action.appendChild(del);
            del.addEventListener('click', function(d) {
                if (confirm("This will delete the task from your task-list?")) {
                    task_content.removeChild(task);
                } else {
                    return;
                }
            });

            task_content.appendChild(task);
            input.value = "";
            taskDate = ''; // Reset the date after adding the task
        }
    });
});

function searchtask() {
    const search = document.querySelector('#searchbar').value.toLowerCase();
    let x = document.getElementsByClassName('tasks');
    for (let i = 0; i < x.length; i++) {
        if (!x[i].childNodes[0].childNodes[0].value.toLowerCase().includes(search)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "flex";
        }
    }
}
