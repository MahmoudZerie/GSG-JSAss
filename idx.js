const taskList = []; 

function printComand() {
	console.log(`Task Manager Menu:
1. Add Task
2. View Tasks
3. Toggle Task Completion
4. Edit Task
5. Delete Task
6. Search Task by Name
7. Exit`);
}

function addTaskFun() {
	const task = prompt("Enter the task description");
	const id = taskList.length + 1;
	const taskCase = "Not Completed";
	taskList.push({ id: id, task: task, taskCase: taskCase });
	console.log(`Task Added: ${task}`);
}

function viewTaskFun() {
	console.log('Tasks:');
	taskList.forEach(({ id, task, taskCase }) => {
		console.log(`${id}. ${task} [${taskCase}]`);
	});
}

function toggleTaskFun() {
	const taskId = Number(prompt("Enter The task ID to toggle completion"));
	if (taskId < 1 || taskId > taskList.length) {
		console.log("ID out of range");
	} else {
		const task = taskList.find((task) => task.id === taskId);
		if (task.taskCase === "Not Completed") {
			task.taskCase = "Completed";
			console.log(`Task ${task.task} is now marked as Completed`);
		} else {
			task.taskCase = "Not Completed";
			console.log(`Task ${task.task} is now marked as Not Completed`);
		}
	}
}

function editTaskFun() {
	const taskId = Number(prompt("Enter The task ID to edit"));
	if (taskId < 1 || taskId > taskList.length) {
		console.log("ID out of range");
	} else {
		const task = taskList.find((task) => task.id === taskId);
		const newDescription = prompt("Enter the new description");
		task.task = newDescription;
		console.log(`Task ${taskId} updated to: ${newDescription}`);
	}
}

function deleteTaskFun() {
	const taskId = Number(prompt("Enter The task ID to delete it"));
	if (taskId < 1 || taskId > taskList.length) {
		console.log("ID out of range");
	} else {
		taskList.splice(taskId - 1, 1);
		console.log(`Task ${taskId} has been deleted.`);

		for (let i = 0; i < taskList.length; i++) {
			taskList[i].id = i + 1; 
		}
		viewTaskFun();
	}
}

function searchTaskByName() {
	const searchTerm = prompt("Enter task name to search:");
	const foundTask = taskList.find(taskObj =>
		taskObj.task.toLowerCase().includes(searchTerm.toLowerCase())
	);

	if (foundTask) {
		console.log(`Task found: ${foundTask.id}. ${foundTask.task} [${foundTask.taskCase}]`);
	} else {
		console.log(`No task found with the name "${searchTerm}".`);
	}
}

let ok = true;
while (ok) {
	printComand();
	const taskNum = Number(prompt("Enter your choice (1-7):"));
	switch (taskNum) {
		case 1:
			addTaskFun();
			break;
		case 2:
			viewTaskFun();
			break;
		case 3:
			toggleTaskFun();
			break;
		case 4:
			editTaskFun();
			break;
		case 5:
			deleteTaskFun();
			break;
		case 6:
			searchTaskByName();
			break;
		case 7:
			ok = false;
			console.log("Exiting Task Manager.");
			break;
		default:
			console.log("Invalid choice, please enter a number between 1 and 7");
	}
}
