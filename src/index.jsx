import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import About from './pages/about';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Error from './pages/not-found';
import Layout from './pages/layout';
import Home from './pages/home';
import '@fontsource/montserrat';
import HousingSheet from './pages/housing-sheet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="*" element={<Error/>}/>
                    <Route path="housing-sheet/:id" element={<HousingSheet/>}/>
                    {/*<Route path='playground' element={<Playground/>}/>*/}
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
