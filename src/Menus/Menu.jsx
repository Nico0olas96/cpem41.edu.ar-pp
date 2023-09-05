import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import menuIcono from '../Imagenes/menu.png'


class Menu extends Component {
    render() {
        return (
            <div>
                <div className='menu container'>

                    <Link to="/" className="logo" alt="Logo-Cpem41">Cpem41</Link>

                    <label className='menu'>
                        <img src={menuIcono} className='menu_icono' alt=''/>
                    </label>

                    <nav className='nav_menu'>

                        <ul>

                            <li> <Link to="/"> Inicio </Link> </li>
                            <li> <Link to="https://www.facebook.com/profile.php?id=100063963467679" rel="noopener noreferrer" target="_blank"> Facebook </Link> </li>
                            <li> <Link to="/alumno"> Alumno </Link> </li>
                            <li> <Link to="/biblioteca"> Biblioteca </Link> </li>
                            <li> <Link to="/acuerdos-escolares"> Acuerdos Escolares </Link> </li>
                            <li> <Link to="/docentes"> Docentes </Link> </li>
                            
                        </ul>

                    </nav>


                </div>
            </div>
        );
    }
}

export default Menu;
