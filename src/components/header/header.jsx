import {Link} from 'react-router-dom';
import './header.scss';
import logo from '../../assets/images/logo-kasa.svg'

function Header() {
    return (
        <header id="header">
            <img src={logo} alt="logo-kasa"/>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
                {/*<Link to="/playground">Playground</Link>*/}
            </nav>
        </header>
    )
}

export default Header;
