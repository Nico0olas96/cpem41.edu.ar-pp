import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const inicioSession = async () => {

    try {
      const response = await axios.post('http://localhost:8000/login', credentials);
      const token = response.data.token; // Obtener el token de la respuesta

      // Almacenar el token en localStorage
      localStorage.setItem('token', token);

      // Utiliza el componente Link para redirigir al usuario
      window.location.href = '/Usuarios/PanelPrincipal';


    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('complete los campos')
    }
  };


  return (
    <div className='contenedorcentrado'>
      <div className='login'>
        <h1>Iniciar sesión</h1>

        <div className='loginform'>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          />

          <input 
            type="password"
            placeholder="Contraseña"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
          <button onClick={inicioSession}>Iniciar sesión</button>
        
        </div>

      </div>


      
    </div>
  );
};

export default Login;
