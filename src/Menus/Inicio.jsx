import React, { Component } from 'react';

import Noticias from '../Noticias/Noticias'

import NewInformacionDb from '../Informacion/NewInformacionDb';


class Inicio extends Component {

    //saque el <Noticias/> para que no aparesca solo la informacion (implementamos las noticias mas adelante)
      //          <Noticias/>


    render() {
        return (
            <div>


                <NewInformacionDb/>

            </div>
        );
    }
}

export default Inicio;
