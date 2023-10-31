import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ImageDisplay from '../../Informacion/ImageDisplay';

const baseURL = 'http://localhost:8000/informacion'

const ModificarPost = () => {

    const [informacion, setInformacion] = useState([])
    
    const [seccion, setSeccion] = useState ('')

    const [registro, setRegistro] = useState(null);

    const [guardarImg, setMostrarImg] = useState(null)

    useEffect (() => {

        getInformacion ()

    }, [])


    const getInformacion = async () => {
        try {
          const response = await axios.get(baseURL);
          
          const reversedData = response.data.slice().reverse();

          setInformacion(reversedData);                
        } catch (error) {
          console.error('Error al obtener la información:', error)
        }
    }

    
    const eliminarRegistro = async (key) => {        
        try {
            await axios.delete(`${baseURL}/${key}`);
            alert('REGISTRO BORRADO CORRECTAMENTE')
        getInformacion();
        } catch (error) {
            console.error('Error al eliminar el registro:', error);
        }
    };

    const modificaciones = (registro) => {
        setSeccion ('modificaciones')
        setRegistro (registro)
    }

    const guardarModificacion = async () => {
        try {
            await axios.put(`${baseURL}/${registro.id}`, registro);
            getInformacion();
            setSeccion('');
            setRegistro(null);
        } catch (error) {
          console.error('Error al guardar la modificación:', error);
        }
    };

    const mostrarImg = (img) =>{
        setMostrarImg (img)
        setSeccion('mostrarImg')

    }


    return (
        <div className='seccion'>
            
            {seccion === '' && (
                <div>
                    <h1>AdministracionPost </h1>

                    <table className='modificarPost'>
                        <thead>
                            <tr>
                            <th>Titulo</th>
                            <th>Descripcion</th>
                            <th>Link</th>
                            <th>Imagen</th>
                            <th>Firma</th>
                            <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {informacion.map ( (item) => (
                                <tr key={item.id}>
                                <td>{item.titulo}</td>
                                <td>{item.descripcion}</td>
                                <td>{item.link}</td>
                                <td> {
                                    item.img && item.img.data && item.img.data.length > 0 && (
                                        <button onClick={() => mostrarImg(item.img)} >Ver Imagen</button>
                                    )
                                }
                                </td>
                                <td>{item.finalI}</td>
                                <td>
                                    <button onClick={ () => modificaciones (item)}>Modificar</button>

                                    <button onClick={ () => {
                                        const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este registro?')
                                        if (confirmacion){
                                            eliminarRegistro (item.id)
                                        }
                                        }                                 
                                    }
                                    >Borrar</button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
            </div>)}

            {seccion === 'modificaciones' && registro && (
                    <div className="bodylogin2">
                    <div className="centrado">
                        <h1>Modificación de Registro</h1>
                        <form>
                            <label>Título:</label>
                            <div className='boxinput'>    
                                <input
                                type='text'
                                className="controls"
                                value={registro.titulo}
                                onChange={(e) => {
                                    const nuevoRegistro = { registro, titulo: e.target.value };
                                    setRegistro(nuevoRegistro);
                                }}
                                />
                            </div>
                                
                            <label>Descripción:</label>
                            <div className='boxinput'>    
                                <input
                                type='text'
                                className="controls"
                                value={registro.descripcion}
                                onChange={(e) => {
                                    const nuevoRegistro = { registro, descripcion: e.target.value };
                                    setRegistro(nuevoRegistro);
                                }}
                                />
                            </div>
                                
                            <label>Link:</label>
                            <div className='boxinput'>
                                <input
                                type='text'
                                className="controls"
                                value={registro.link}
                                onChange={(e) => {
                                    const nuevoRegistro = { registro, link: e.target.value };
                                    setRegistro(nuevoRegistro);
                                }}
                                />
                            </div>

                            <label>Firma:</label>
                            <div className='boxinput'>
                                <input
                                type='text'
                                className="controls"
                                value={registro.finalI}
                                onChange={(e) => {
                                    const nuevoRegistro = { registro, finalI: e.target.value };
                                    setRegistro(nuevoRegistro);
                                }}
                                />
                            </div>

                            <div className='boxinput'>
                                <button type='submit' onClick={guardarModificacion}>
                                    Guardar Modificación
                                </button>
                            </div>
                            <div className='boxinput'>
                                <button type='submit' onClick={() => {setSeccion ('')}}>
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div></div>
            )}

            {seccion === 'mostrarImg' && (
                <div className='frame'> 
                    <ImageDisplay imagen={guardarImg}/>
                    <div >
                        <button className='volverModificaciones' onClick={ () => {
                            setSeccion('');
                        }}>Volver</button>
                    </div>
                
                </div>
            )}

             


        </div>
    );
}

export default ModificarPost;
