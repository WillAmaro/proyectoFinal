
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

import { Link} from 'react-router-dom'
import { Button } from "@mui/material";
import "./index.css"




const Navbar =() => {

  const {isAuth , logout}= useContext(AuthContext);


  return (
    <div className='text-white'>
    <nav className="navbar navbar-expand-lg bg-dark ">
  <div  className="container-fluid px-4">

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-white">

      <li className="nav-item text-white">
      <Button id="navi" className="nav-link active text-white" aria-current="page" component={Link} to="/"><h4>Inicio</h4></Button>
        </li>
        <li className="nav-item text-white ">
          <Button className="nav-link active text-white" aria-current="page" component={Link} to="/perfil"><h4>Perfil</h4></Button>
        </li>
        <li className="nav-item text-white">
          <Button className="nav-link active text-white" aria-current="page" component={Link} to="/cites"><h4>Reserva de citas</h4></Button>
        </li>
        <li className="nav-item">
          <Button className="nav-link active text-white" aria-current="page" component={Link} to="/home"><h4>Mis citas</h4></Button>
        </li>

        <li className="nav-item">
          <Button className="nav-link active text-white" aria-current="page" component={Link} to="/login"><h4>Login</h4></Button>
        </li>

        <li className="nav-item font-weight-bold">
          <Button className="nav-link active text-white font-weight-bold" aria-current="page" component={Link}  to="/login"       onClick={logout}><h4>Cerrar sesion</h4></Button>
        </li>
    
       
      </ul>
   
    </div>
  </div>
</nav>
    
 
      
      </div>

  )
}

export default Navbar
