import housing from '../assets/housing.json';
import {Navigate, useParams} from 'react-router-dom';
import '../styles/housing-sheet.scss';
import Tag from '../components/tag/tag';
import Accordion from '../components/accordion/accordion';
import Slideshow from '../components/slideshow/slideshow';
import starFilled from '../assets/images/starfilled.svg';
import emptyStar from '../assets/images/emptystar.svg';

function HousingSheet() {
    const {id} = useParams();
    const house = housing.find((housing) => housing.id === id);
    const houseRating = (rating) => {
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img key={i} src={starFilled}/>);
            } else {
                stars.push(<img key={i} src={emptyStar}/>);
            }
        }

        return stars;
    }

    if (house) {
        return (
            <div id="housing-sheet" className="housing-page">
                <div className="carousel-pictures">
                    <Slideshow pictures={house.pictures}/>
                </div>
                <div className="section-info">
                    <div className="housing-description">
                        <span>{house.title}</span>
                        <div className="location">{house.location}</div>
                        <div className="tags">
                            {
                                house.tags.map((tag, i) => (
                                    <Tag key={i} tag={tag}/>
                                ))

                            }
                        </div>
                    </div>
                    <div className="host-infos">
                        <div className="name">
                            <div className="first-last-name">
                                {
                                    house.host.name.split(' ').map((name, i) => (
                                        <span key={i}>{name}</span>
                                    ))
                                }
                            </div>
                            <div className="picture">
                                <img className="host-picture" src={house.host.picture} alt="host-picture"/>
                            </div>
                        </div>


                        <div className="star">
                            {houseRating(house.rating)}
                        </div>
                    </div>
                </div>
                <div className="housing-sheet-accordions">
                    <Accordion content={house.description} title="Description"/>
                    <Accordion content={house.equipments.map((equipment, i) => (
                        <div key={i}>{equipment}</div>))}
                               title="Équipements"/>
                </div>
            </div>
        )
    } else {
        return (<Navigate to="/*"/>);
    }

}

export default HousingSheet;