import React, { Component } from 'react';
import menuIco from './img/menu.png'
import './App.css';
import { Link } from 'react-router-dom';


class Menu extends Component {
    render() {
        return (
        <div>
            <div className="menu container">

                <Link to="/" className="logo">Cpem N° 41</Link>

                <label className="menu">
                    <img src={menuIco} className="menu_icono" alt=""/>
                </label>    

                <nav className="nav_menu">

                    <ul>
                        <li> <Link to="/"> Inicio </Link> </li>                        
			            <li><a href="https://www.facebook.com/profile.php?id=100063963467679" rel="noopener noreferrer" target="_blank">Facebook</a></li>
                        <li> <Link to="/Biblioteca"> Biblioteca </Link> </li>
                        <li> <Link to="/Alumnos"> Alumnos </Link> </li>                        
                        <li> <Link to="/Acuerdos Escolares"> Acuerdos Escolares </Link> </li>
                        <li> <Link to="/Docentes"> Docentes </Link> </li>
                    </ul>

                </nav>

            </div>
            
        </div>                   
        );
    }
}



export default Menu;
