import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./index.css"
import {destroy} from "../../services"

function TaskCard(props) {
	const { task, updateTask, destroyTask} = props;



	async function createAlert(text) {
		const res = await Swal.fire({
			title: "Importante!!!",
			text,
			showCancelButton: true,
			showConfirmButton: true,
		});

		//ok => true
		// cancel => false
		return res.isConfirmed;
	}

	async function confirmUpdate() {
		const isConfirmed = await createAlert(
			"Estas seguro de confirmar que terminaste esta tarea?"
		);

		if (isConfirmed) {
			await updateTask (task.id, "done");
		}
	}

	async function confirmDestroy() {
		const isConfirmed = await createAlert(
			"Esta seguro de hacer esta acción, ya no hay vuelta atrás"
		);

		if (isConfirmed) {
			await updateTask(task.id, "delete");
		}
	}


	const [ currentName, setCurrentName ] = useState({})
	const [ inputSelect, setInputSelect] = useState("") ;

	async function modificarNombre (taskId) {
		const fecha = `task${taskId}`
		setInputSelect(fecha);


	

	//	const nombre = window.prompt('cambiar nombre')
	//	if(nombre){
	//		await updateTask(task.id,{name:nombre})
	//		}

	
	}

	async function eliminarNombre (taskId) {
			
		await destroyTask(taskId)

	

	

	//	const nombre = window.prompt('cambiar nombre')
	//	if(nombre){
	//		await updateTask(task.id,{name:nombre})
	//		}

	
	}


	async	function handleKeyDown (e){
		if (e.key === 'Enter') {
			const nombre = e.target.value
			await updateTask(task.id,{ fecha: nombre })
			setInputSelect('')
		}
	} 

	function handleOnChange (e){
		console.log(e.target.value)
		const {fecha, value} = e.target
		setCurrentName({ ...currentName, [fecha]: value })
	}


	return (
		<div
			className="mt-3 card p-3 mt-3 shadow-sm bg-opacity-10 "
		>
			<div  className="d-flex">
				
				

				{
					inputSelect === `task${task.id}`
						?
							(
								<div id="citas" style={{ display: 'flex', flexDirection: 'column' }}>
									<h3>Dia de cita a cambiar: </h3>{task.fecha}
									<h3>Dia de cita nueva : </h3>
									<input className="btn btn-light"
										name={`task${task.id}`}
										value={currentName[`task${task.id}`]}
										onKeyDown={handleKeyDown}
										onChange={handleOnChange}
									/>
								</div>
							)
						:  <div className="d-flex mx-auto flex-column" >
							<h3> Dia de cita programada :  </h3> 
						<h3>  	{task.fecha}</h3>
						
						
					
						
						</div>
				}
			</div>
			<hr className="border border-muted border-1" />
			<div className="d-flex flex-column flex-wrap m-auto">
				<span className="text-muted ">
				<h4>	Servicio requerido : {task.especialidad} </h4>
				</span>				<span className="text-success small">
				<h4>	
						Correo :	{task.email}</h4>
					</span>
						
					<span className="text-dark text-bold small">
						
						<h4>
				 Hora de cita : {task.hora}

						</h4>
							</span>
				
					<span className="text-primary text-bold small">
						
						<h4>
				 Dueño : {task.name}

						</h4>
							</span>
				
				
					<span className="text-danger small">
				<h4>	
						Mascota :	{task.petname}</h4>
					</span>

					<span className="text-dark small">
				<h4>	
						Sede :	{task.petplace}</h4>
					</span>
				
				<div className="d-flex gap-2 mx-auto">
					
						<button className="btn btn-sm btn-outline-secondary py-0 small opacity-50" onClick={()=>modificarNombre(task.id)}>
							<h4>Modificar cita</h4>
						</button>
					

					
						<button
					
				onClick={()=>eliminarNombre(task.id)}
							className="btn btn-sm btn-outline-danger py-0 small opacity-50"
						>
						<h4>	×</h4>
						</button>
						
					
				</div>
			</div>
		</div>
	);
}

export default TaskCard;
