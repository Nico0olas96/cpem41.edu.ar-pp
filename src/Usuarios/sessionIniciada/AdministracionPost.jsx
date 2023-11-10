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
            const response = await axios.get(baseURL)
            
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
            setSeccion('modificaciones');
            alert('Modificaciones Realizadas con Exito')
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
        <div>
            
            {seccion === '' && (
                <div>
                    <h1> Modificar Publicacion </h1>
                    <h4>(No se pueden modificar las Imagenes)</h4>

                <div className='contenedor-tablas'>
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
                                <td>{
                                    !item.img || item.img.data.length === 0 &&  (
                                        <button onClick={ () => modificaciones (item)}>Modificar</button>
                                    )}
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
                </div>
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
                                    setRegistro({ ...registro, titulo: e.target.value });
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
                                    setRegistro({ ...registro, descripcion: e.target.value });
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
                                    setRegistro({ ...registro, link: e.target.value });
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
                                    setRegistro({ ...registro, finalI: e.target.value });
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
