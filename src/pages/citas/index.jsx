
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
  
  import { Form, Link } from "react-router-dom";
  
  import PetsIcon from "@mui/icons-material/Pets";
  import { MedicalModel } from "../../models/MedicalModel";
  import { postMedicalConsultation } from "../../services";
  import { useNavigate } from "react-router-dom";

  
  
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


	  const handleInputChange = (e) => {
		setUser({
		  ...user,
		  [e.target.name]: e.target.value,
		});
	  };


	const handleSubmit = async (event) => {
	  event.preventDefault();
	  const data = new FormData(event.currentTarget);
	  const newUser = new MedicalModel(
		data.get("name"),
		data.get("email"),
		data.get("fecha"),
		data.get("hora"),
		data.get("petname"),
		data.get("petplace"),
		data.get("especialidad"),
        
	  );
	  await postMedicalConsultation(newUser);

	  const inicio = cites(user.name);
	  console.log(cites)
	  history("/home")
	 
	};
	return (
	  <Container component="main" maxWidth="xs">
		<CssBaseline />
		<Box
		  sx={{
			marginTop: 8,
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		  }}
		>
		  <Avatar sx={{ m: 1, bgcolor: "warning.main" }}>
			<PetsIcon />
		  </Avatar>
		  <Typography component="h1" variant="h5">
				Reserva de citas
		  </Typography>
		  <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
			<Grid container spacing={2}>
			  <Grid item xs={12} >
				<TextField
				  autoComplete="given-name"
				  name="name"
				  required
				  fullWidth
				  id="name"
				  label="Nombres"
				  autoFocus
				  onChange={handleInputChange}
				/>
			  </Grid>
			  <Grid item xs={12} >
				<TextField
				  autoComplete="given-name"
				  name="email"
				  required
				  fullWidth
				  id="email"
				  label="E-mail"
				  autoFocus
				  onChange={handleInputChange}
				/>
			  </Grid>
  
			  <Grid item xs={12} >
				<TextField
				  required
				  fullWidth
				  id="fecha"
				  label="Fecha requerida de atención"
				  name="fecha"
				  autoComplete="family-name"
				  onChange={handleInputChange}
				/>
			  </Grid>

			  
			  <Grid item xs={12} >
				<TextField
				  required
				  fullWidth
				  id="hora"
				  label="Hora requerida de atención"
				  name="hora"
				  autoComplete="family-name"
				  onChange={handleInputChange}
				/>
			  </Grid>

  
			  <Grid item xs={12}>
				<TextField
				  required
				  fullWidth
				  id="petname"
				  label="Nombre de tu mascota"
				  name="petname"
				  autoComplete="given-name"
				  onChange={handleInputChange}
				/>
			  </Grid>
  
			  <Grid item xs={12}>
				<TextField
				  required
				  fullWidth
				  id="petplace"
				  label="Lugar de atencion"
				  name="petplace"
				  autoComplete="given-name"
				  onChange={handleInputChange}
				/>
			  </Grid>
  
			  <Grid item xs={12}>
				<TextField
				  required
				  fullWidth
				  id="especialidad"
				  label="Servicio requerido"
				  name="especialidad"
				  autoComplete="given-name"
				  onChange={handleInputChange}
				/>
			  </Grid>
  
  
			</Grid>
			<Button
			  type="submit"
			  fullWidth
			  variant="contained"
			  sx={{ mt: 3, mb: 2 }}
			>
			  Registrar
			</Button>
		
		  </Box>
		</Box>
	  </Container>
	);
  }
  
  export default Registercite;
  