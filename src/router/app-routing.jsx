import About from '../pages/about';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Error from '../pages/not-found';
import Layout from '../pages/layout';
import Home from '../pages/home';
import HousingSheet from '../pages/housing-sheet';

function AppRouting() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="*" element={<Error/>}/>
                    <Route path="housing-sheet/:id" element={<HousingSheet/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouting;