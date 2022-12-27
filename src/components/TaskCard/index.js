import { useState } from "react";
import "./index.css"

//	const nombre = window.prompt('cambiar nombre')
	//	if(nombre){
	//  await updateTask(task.id,{name:nombre})
	// } 


function TaskCard(props) {
	const { task, updateTask, destroyTask} = props;


	const [ currentName, setCurrentName ] = useState({fecha:"",hora:"", especialidad: "",})
	const [ inputSelect, setInputSelect] = useState("") ;

	async function modificarNombre (taskId) {
		const id = `task${taskId}`
		setInputSelect(id);
	}

	async function eliminarNombre (taskId) {
		await destroyTask(taskId)
	}


	async	function handleKeyDown (e){
		if (e.key === 'Enter') {
			e.preventDefault();
			await updateTask(task.id,currentName)
			setInputSelect('')
		}	
	
	} 

	async function onSubmit(e) {
		e.preventDefault();
		
		await updateTask(task.id,currentName);
		console.log(onSubmit)
	  }


	function handleOnChange (e){
    const { name, value } = e.target;
    setCurrentName({ ...currentName, [name]: value });

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
								<form id="citas" style={{ display: 'flex', flexDirection: 'column' }} >
									<h3>Dia de cita a cambiar: </h3>{task.fecha}
									<h3>Dia de cita nueva : </h3>
									<input className="btn btn-light  rounded-pill"
									name= "fecha"
									value={currentName.fecha}
									
									onKeyDown={handleKeyDown}
									onChange={handleOnChange} />
									

									<h3> Hora a cambiar: </h3>{task.hora}
									<h3> Hora nueva  de cita: </h3>
									<input className="btn btn-light rounded-pill"
									name= "hora"
									value={currentName.hora}
									onKeyDown={handleKeyDown}
									onChange={handleOnChange} 
									
									/>

									<h3> Especialidad a cambiar: </h3>{task.especialidad}
									<h3> Especialidad nueva: </h3>
									<input className="btn btn-light rounded-pill"
									name= "especialidad"
									value={currentName.especialidad}
									onKeyDown={handleKeyDown}
									onChange={handleOnChange} 
									
									/>
	

									<button className="btn btn-danger  rounded-pill" onSubmit={onSubmit}>Editar</button>

								</form>

								

								
							)
						:  <div className="d-flex mx-auto flex-column" >
							<h3> <span className="span">Dia de cita programada : </span>  </h3> 
						<h3>  	{task.fecha}</h3>
						
						
					
						
						</div>
				}
			</div>
			<hr className="border border-muted border-1" />
			<div className="d-flex flex-column flex-wrap m-auto ">
				<span className="text-muted ">
				<h4>	Servicio requerido : {task.especialidad} </h4>
				</span>				<span className="text-muted small">
			
				<h4>	
						Correo :	{task.email}</h4>
					</span>
		
					<span className="text-muted text-bold small">
						
						<h4>
				 Hora de cita : {task.hora}

						</h4>
							</span>
				
					<span className="text-muted text-bold small">
						
						<h4>
				 Dueño : {task.name}

						</h4>
							</span>
				
				
					<span className="text-muted small">
				<h4>	
						Mascota :	{task.petname}</h4>
					</span>

					<span className="text-muted small">
				<h4>	
						Sede :	{task.petplace}</h4>
					</span>
				
				<div className="d-flex gap-2 ">
					
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
