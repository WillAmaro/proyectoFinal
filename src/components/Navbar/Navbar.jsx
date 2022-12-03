
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import { Link,Navigate } from 'react-router-dom'
import { Box, Button, TextField,  } from "@mui/material";
import "./index.css"




function Navbar() {

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
          <Button className="nav-link active text-white font-weight-bold" aria-current="page" component={Link} t to="/login"       onClick={logout}><h4>Cerrar sesión</h4></Button>
        </li>
        <li className="nav-item dropdown">
          
        </li>
       
      </ul>
   
    </div>
  </div>
</nav>
    
 
      
      </div>

  )
}

export default Navbar

const NavContainer = styled.nav`
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
     
    }
  }
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
      
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
