import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from './pages/Home';
import About from './pages/Desktop_pages/About';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Error from './pages/Desktop_pages/404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header/>}>
                    <Route index element={<Home/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='*' element={<Error/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
