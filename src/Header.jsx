import React, { Component } from 'react';

import logoEsc from './Imagenes/Escuela/logo Cpem41.jpg'



class Header extends Component {
    
    
    
    render() {





        return (
            <div>
                <div className='conteiner_header container'>

                    <div className='txt_header'>
                    
                        <h1> <span> BIENVENIDO </span> </h1> 
                        <h2>Sitio oficial del Cpem41</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos exercitationem est non
                            voluptatem iure minus corporis maxime adipisci magnam. Possimus velit quaerat eum minima fuga
                            consectetur in adipisci id maiores.
                        </p>
                        
                    
                    </div>
                    <div className='img_header'>

                        <img src={logoEsc} alt='imagen de la escuela'/>

                    </div>

                </div>
            </div>
        );
    }
}

export default Header;
