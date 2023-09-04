import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Menu from './Menus/Menu'
import Inicio from './Menus/Inicio'
import Alumnos from './Menus/Alumnos'
import Biblioteca from './Menus/Bibllioteca'
import AcuerdosEscolares from './Menus/Acuerdos Escolares'
import Docentes from './Menus/Docentes'
import Footerr from './Footerr'

class IndexPrincipal extends Component {
    render() {
        return (
            <div>
                <Menu/>


                <Routes>
                    <Route path='/' element={<Inicio/>}/>
                    <Route path='/alumno' element={<Alumnos/>}/>
                    <Route path='/biblioteca' element={<Biblioteca/>}/>
                    <Route path='/acuerdos-escolares' element={<AcuerdosEscolares/>}/>
                    <Route path='/docentes' element={<Docentes/>}/>
                </Routes>


                <Footerr/>



            </div>
        );
    }
}

export default IndexPrincipal;
