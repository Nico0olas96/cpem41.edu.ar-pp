import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'; // Asegúrate de tener las importaciones correctas

import Menu from './Menu';
import NoticiaInformacion from './NoticiaInformacion';
import Alumnos from './Alumnos.jsx';
import Biblioteca from './Biblioteca.jsx';
import AcuerdosEscolares from './Acuerdos Escolares';
import Docentes from './Docentes';

export default class IndexPrincipal extends Component {
  render() {
    return (
      <div>
        <Menu />

        <Routes>
          <Route path="/" element={<NoticiaInformacion />} />
          <Route path="/alumnos" element={<Alumnos />} />
          <Route path="/Biblioteca" element={<Biblioteca />} />
          <Route path="/Acuerdos Escolares" element={<AcuerdosEscolares />} />
          <Route path="/Docentes" element={<Docentes />} />
        </Routes>
      </div>
    );
  }
}
