import './card.scss';

function Card({title, cover}) {
    return (
        <>
            <div className="housing-card">
                <img className="housing-image" src={cover} alt={title}/>
                <div className="housing-image-mask"></div>
                <span className="housing-title">{title}</span>
            </div>

        </>
    );
}

export default Card;