import React from "react"
import { postMedicalConsultation } from "../../services";


 class Form extends React.Component{

    constructor ( props ) {
        super (props);
        this.state ={
            id:"",
            createdAt:"",
            name:"",
            email:"",
            fecha:"",
            hora:"",
            petname:"",
            petplace:"",
            especialidad:"",
        }
    }

 
    handleChange = (event) => {
        console.log(event.target)
        this.setState({
            [event.target.name]  :event.target.value,
        
        })
    }

    

  
    handleSubmit = async (event) => {
       
        await postMedicalConsultation(this.state)
     
      

    }
    render () {
        return(


            <form onSubmit ={this.handleSubmit}>
                <br></br>
                 
                 <h3>Reserva de cita</h3>

                <input placeholder="Nombre"
                name="name"
                onChange={this.handleChange}
                required
                
                ></input>

                <input placeholder="Email"
                name="email"
                onChange={this.handleChange}
                required

                ></input>
                <input placeholder="Fecha"
                name="fecha"
                onChange={this.handleChange}
                required

                ></input>
                <input placeholder=" Hora"
                name="hora"
                onChange={this.handleChange}
                required

                ></input>
                <input   
                placeholder="Mascota" 
                name="petname"          
                onChange={this.handleChange}
                required
                ></input>


                <input placeholder="Sede"
                name="petplace"
                 onChange={this.handleChange}
                 required
                 ></input>


                <input placeholder="Especialidad"
                name="especialidad"
                 onChange={this.handleChange}
                 required
                 ></input>

            <button className="btn btn-primary" type="submit" >Agregar</button>
            </form>
        )
    }
}

export default Form;