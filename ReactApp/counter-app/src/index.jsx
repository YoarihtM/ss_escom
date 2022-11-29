import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { Fragmento } from './Fragmen';

import { HelloWorldApp } from './HelloWorldApp';

import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <HelloWorldApp />
        <FirstApp title="Hola, Soy Goku" subTitle="123"/>
        <Fragmento />
    </React.StrictMode>
)