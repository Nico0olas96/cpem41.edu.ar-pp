import React, { Component } from 'react';

import NoticiasJson from './NoticiasJson'
import SeccionNoticias from './SeccionNoticias'

class Noticias extends Component {

    constructor (props) {
        super (props);
        this.state = {
            noticias : NoticiasJson ,

            noticiasVesibles : 4

        }
    }











    render() {




        return (
            <div>
                <div className='noticias container'>

                    <SeccionNoticias/>

                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                </div>
                
            </div>
        );
    }
}

export default Noticias;
