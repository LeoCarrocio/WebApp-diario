import React from 'react';
import ReactDom from 'react-dom';

import Main from './container/Main';

const app = <Main articulos={window.__data__}/> // se pasa por este medio los datos a mi Main

//con hydrate monta el componente en el dom que ya existe
ReactDom.hydrate(app,document.getElementById('root')); 