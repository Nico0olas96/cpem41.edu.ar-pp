import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/informacion';

const CrearPost = () => {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [link, setLink] = useState("");
    const [finalI, setFinalI] = useState("");
    const [img, setImg] = useState(null)
    const navigate = useNavigate();


    const guardadoI = async (e) => {
        e.preventDefault();
        if(!titulo){
            alert('el titulo es obligatorio')
            return
        }

        try {
            const formData = new FormData();
           
            formData.append('titulo', titulo);
            formData.append('descripcion', descripcion);
            formData.append('link', link);
            formData.append('finalI', finalI);
            formData.append('imagen', img);

            axios.post(URI, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            });
            
            
            alert('Informacion Cargada con exito')

            // Limpiar los campos del formulario
            setTitulo('');
            setDescripcion('');
            setLink('');
            setFinalI('');
            setImg(null)
            

            navigate('/Usuarios/PanelPrincipal');

        } catch (error) {
            console.log("Mostrando: ",error)
            alert('Error al agregar el post:', error);
        }
    };


    return (
        <div className='seccion'>
        

            <div className="bodylogin2">
            <div className="centrado">

                <h1>Crear Publicación</h1>
                
                <form onSubmit={guardadoI}>
                    <label htmlFor="titulo">Título</label>
                    <div className='boxinput'>
                        <input
                            type="text"
                            id="titulo"
                            className="controls"
                            placeholder="Titulo / obligatorio"
                            name="titulo"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </div>

                    <label htmlFor="descripcion">Descripción</label>
                    <div className='boxinput'>
                        <textarea
                            type="text"
                            id="descripcion"
                            className="controls"
                            placeholder="Descripcion / opcional"
                            name="descripcion"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                        />
                    </div>

                    <label htmlFor="link">Link</label>
                    <div className='boxinput'>
                        <input
                            type="textarea"
                            id="link"
                            className="controls"
                            placeholder="Link / opcional"
                            name="link"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>

                    <label htmlFor='Imagen'>Imagen</label>                    
                    <div className='boxinput'>
                        <input type="file" accept="image" onChange={(e) => setImg(e.target.files[0])}/>
                    </div>

                    <label htmlFor="finalI">Firma</label>
                    <div className='boxinput'>
                        <input
                            type="text"
                            id="finalI"
                            className="controls"
                            placeholder="Firma / opcional"
                            name="finalI"
                            value={finalI}
                            onChange={(e) => setFinalI(e.target.value)}
                        />
                    </div>
                    <div className='boxinput'>
                        <button type='submit'>
                            Agregar Post
                        </button>
                    </div>
                    
                </form>
                <br/>
                <br/>

            
            </div>
        </div></div>
    );
};

export default CrearPost;