import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Alumnos extends Component {
    render() {
        return (
            <div className='seccion_menu'>
                <div className='seccion'>
                    <h2>Alumnos</h2>


                    <Link to='/Alumno/TD/TurnoDiurno' className='btn'> Turno Diurno </Link>
                    <Link to='/TurnoVespertino' className='btn'> Turno Vespertino </Link>


                </div>

                
            </div>
        );
    }
}

export default Alumnos;
