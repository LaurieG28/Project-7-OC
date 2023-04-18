import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import '@fontsource/montserrat';
import AppRouting from './router/app-routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppRouting/>
    </React.StrictMode>
);