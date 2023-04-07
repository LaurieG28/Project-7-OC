import './card.scss';
import {Link} from 'react-router-dom';

function Card({id, title, cover}) {
    return (
        <Link to={`housing-sheet/${id}`}>
            <div className="housing-card">
                <img className="housing-image" src={cover} alt={title}/>
                <div className="housing-image-mask"></div>
                <span className="housing-title">{title}</span>
            </div>
        </Link>
    );
}

export default Card;