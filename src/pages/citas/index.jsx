
import { useState, useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import {
	Container,
	CssBaseline,
	Box,
	Avatar,
	Typography,
	Grid,
	TextField,
	Button,
  } from "@mui/material";
  
  import { Link } from "react-router-dom";
  
  import PetsIcon from "@mui/icons-material/Pets";
  import { MedicalModel } from "../../models/MedicalModel";
  import { postMedicalConsultation } from "../../services";
  import { useNavigate } from "react-router-dom";

  import {Form} from "../../components"



  
  
  function Registercite () {
	const history = useNavigate();
	const { cites } = useContext(AuthContext);	


	const [user, setUser] = useState({
	
	  	name: "",
		email: "",
		fecha: "",
		hora:"",
		petname : "",
		petplace :"",
		especialidad : "",
	
	  });

	 
	
	return (
	  <Container component="main" maxWidth="xs">
		<CssBaseline />
		


		<Form/>
	  </Container>
	);
  }
  
  export default Registercite;
  