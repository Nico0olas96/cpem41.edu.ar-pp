import React, { Component } from 'react';

import Noticias from '../Noticias/Noticias'

import NewInformacionDb from '../Informacion/NewInformacionDb';

class Inicio extends Component {
    render() {
        return (
            <div>

                <Noticias/>

                <NewInformacionDb/>

            </div>
        );
    }
}

export default Inicio;
