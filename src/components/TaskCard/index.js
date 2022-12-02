import { useState } from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import "./index.css"

function TaskCard(props) {
	const { task, updateTask } = props;



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
			className={`mt-3 card p-3 mt-3 shadow-sm bg-opacity-10 `}
		>
			<div id="container" className="d-flex">
				
					<span className="me-3">
						<button
							onClick={confirmUpdate}
							className="btn btn-sm btn-outline-primary py-0 small opacity-50"
						>
							
						</button>
					</span>

				{
					inputSelect === `task${task.id}`
						?
							(
								<div style={{ display: 'flex', flexDirection: 'column' }}>
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
						:  <Link to={"/task/" + task.id} >
							<h3> Dia de cita :  </h3> 
							{task.fecha}</Link>
				}
			</div>
			<hr className="border border-muted border-1" />
			<div className="d-flex justify-content-between">
				<span className="text-muted small">
					Servicio requerido : {task.especialidad}
				</span>
				
					<span className="text-success text-bold small">
						✓&nbsp;
						Dueño : {task.name}
					</span>
				
				
					<span className="text-danger small">
					✓&nbsp;
						Mascota :	{task.petname}
					</span>
				
				<span>
					
						<button className="btn btn-sm btn-outline-secondary py-0 small opacity-50" onClick={()=>modificarNombre(task.id)}>
							✎
						</button>
					

					
						<button
							onClick={confirmDestroy}
							className="btn btn-sm btn-outline-danger py-0 small opacity-50"
						>
							×
						</button>
					
				</span>
			</div>
		</div>
	);
}

export default TaskCard;
