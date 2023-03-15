import {Link, Outlet} from "react-router-dom";

function Header() {
    return (
        <>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </nav>

            <Outlet/>
        </>
    )
}

export default Header