import Header from '../components/header/header';
import {Outlet} from 'react-router-dom';
import Footer from '../components/footer/footer';

function Layout() {
    return (
        <>
            <div className="page">
                <Header/>
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
}

export default Layout;