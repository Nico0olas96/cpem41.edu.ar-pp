import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/informacion'

const CrearPost = () => {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [img, setImg] = useState(null);
    const [link, setLink] = useState("");
    const [finalI, setFinalI] = useState("");
    const navigate = useNavigate();

    const guardadoI = async (e) => {
        e.preventDefault();

        try {
            await axios.post(URI, {
                titulo: titulo,
                descripcion: descripcion,
                link: link,
                finalI: finalI
            });
            
            //esto es para subir la img a la base 
            
            /*const formdata = new FormData()
            formdata.append('img', img)

            fetch(URI, {    
                method:'POST',
                body: formdata
            })*/ 

            
            alert('Informacion Cargada con exito')

            // Limpiar los campos del formulario
            setTitulo('');
            setDescripcion('');
            setImg(null);
            document.getElementById('img').value = null
            setLink('');
            setFinalI('');
            

            navigate('/Usuarios/PanelPrincipal');

        } catch (error) {

            alert('Error al agregar el post:', error);
        }
    };

    const handleImageChange = (e) => {
        setImg (e.target.files[0])

    };



    return (
        <div>
            <h3>Create Post</h3>
            <form onSubmit={guardadoI} encType="multipart/form-data">
                <label htmlFor="titulo">Título</label>
                <input
                    type="text"
                    id="titulo"
                    name="titulo"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />

                <label htmlFor="descripcion">Descripción</label>
                <input
                    type="text"
                    id="descripcion"
                    name="descripcion"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />

                <label htmlFor="link">Link</label>
                <input
                    type="text"
                    id="link"
                    name="link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />

                <label htmlFor="finalI">FIRMA</label>
                <input
                    type="text"
                    id="finalI"
                    name="finalI"
                    value={finalI}
                    onChange={(e) => setFinalI(e.target.value)}
                />
                <label htmlFor="imagen">Imagen</label>
                    <input
                        type="file"
                        id="img"
                        name="imagen"
                        accept="image/*"
                        onChange={handleImageChange}
                />

                <button type="submit">Agregar Post</button>
            </form>

        </div>
    );
}

export default CrearPost;
