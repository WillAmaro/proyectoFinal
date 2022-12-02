import { useState, useEffect, useContext } from "react";
	import { TaskForm, TaskCard } from "../../components";
import { get2,  update } from "../../services";
import { MedicalModel2 } from "../../models/MedicalModel2";

import { AuthContext } from "../../context/AuthContext";
import "./index.css"

function Home() {
	const { user } = useContext(AuthContext);
	const [taskList, setTaskList] = useState([]);

	async function getTasks() {
		const tasks = await get2();
		const tasksModels = tasks.map((task) => {
			return new MedicalModel2(
				task.id,
				task.createdAt,
				task.name,
				task.fecha,
				task.petname,
				task.petplace,
				task.especialidad,
				
			);
		});
		console.log(tasksModels)


		

		const myUserTasks = tasksModels.filter((task) => {
			if (task.name === user.name) return task;
			
		});
		setTaskList(myUserTasks);	
		console.log(myUserTasks)
	}

	//async function addTask(text) {
	//	const newTask = new MedicalModel(null, text, null, null, null, user.id);
	//	await post(newTask);
	//	await getTasks();
//	}

	async function updateTask(id, body = { type :'',doneAt:'',deleteAt:'', name:'' }) {
		
		await update(id, body);
		await getTasks();
	}

	async function updateTask2(id, type) {
		const body =
			type === "done"
				? { doneAt: new Date() }
				: { deletedAt: new Date() };
		await update(id, body);
		await getTasks();
	}

	useEffect(() => {
		getTasks();
	}, []);

	return (
		<div id="titulo" className="container my-5">
			<h2>Hola {user.name} estas son tus citas registradas</h2>
{/*<TaskForm  onSubmitFunction={addTask}/>*/}
			<div className="text-primary">
				<hr />
			</div>
			<div className="mt-5">
				{taskList.map((task, index) => (
					<TaskCard
						key={index}
						task={task}
						getTasks={getTasks}
						updateTask={updateTask}
					/>
				))}
			</div>
		</div>
	);
}

export default Home;
