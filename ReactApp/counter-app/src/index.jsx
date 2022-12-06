import React from 'react';
import ReactDOM from 'react-dom/client';
// import { FirstApp } from './FirstApp';
// import { Fragmento } from './Fragmen';

// import { HelloWorldApp } from './HelloWorldApp';
import { CounterApp } from './CounterApp';

import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        {/* <FirstApp /> */}
        {/* <Fragmento /> */}
        <CounterApp value={ 1 }/>
    </React.StrictMode>
)