import '../styles/error.scss';
import {Link} from 'react-router-dom';

function NotFound() {
    return (
        <div id="error" className="error-page">
            <span className="number">404</span>
            <span className="content">Oups ! La page que vous demandez n'éxiste pas.</span>
            <Link className="link" to="/">Retourner sur la page d'accueil</Link>
        </div>
    );
}

export default NotFound;