import React, { Component } from 'react';

import SecccionInformacion from './SeccionInformacion'
import InformacionJson from './InformacionJson';

class Informacion extends Component {

    constructor (props){
        super(props);
        this.state = {
            informacion : InformacionJson,

            informacionVisible : 4

        }
    }
















    render() {





        return (
            <div>
                <div className='informacion container'>



                    <SecccionInformacion/>




                </div>
                
            </div>
        );
    }
}

export default Informacion;
