import React, { Component } from 'react';

import Noticias from '../Noticias/Noticias'
import Informacion from '../Informacion/Informacion'

class Inicio extends Component {
    render() {
        return (
            <div>

                <Noticias/>

                <Informacion/>

            </div>
        );
    }
}

export default Inicio;