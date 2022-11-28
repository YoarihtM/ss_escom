import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { Fragmento } from './Fragmen';

import { HelloWorldApp } from './HelloWorldApp';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <HelloWorldApp />
        <FirstApp />
        <Fragmento />
    </React.StrictMode>
)