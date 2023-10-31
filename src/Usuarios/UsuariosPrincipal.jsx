import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const inicioSession = async () => {

    try {
      const response = await axios.post('http://localhost:8000/login', credentials);
      const token = response.data.token; // Obtener el token de la respuesta
      
      const tiempoSession = Date.now()
      const finTiempoSession = tiempoSession + 600000

      // Almacenar el token en localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('finTiempoSession', finTiempoSession)

      // Utiliza el componente Link para redirigir al usuario
      window.location.href = '/Usuarios/PanelPrincipal';


    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('complete los campos')
    }
  };




  return (
    <div className='bodylogin'>
      <div className='centrado'>
        <h1>Iniciar sesión</h1>

        <div className='boxinput'>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          />
        </div>
        <div className='boxinput'>

          <input 
            type="password"
            placeholder="Contraseña"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            
          />
          
        </div>
        <div className='boxinput'>
          <button onClick={inicioSession} type='submit'>Iniciar sesión</button>
        </div>

      </div>


      
    </div>
  );
};

export default Login;
