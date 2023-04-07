import '../slideshow/slideshow.scss';
import arrowRight from '../../assets/images/arrowRightCarousel.svg';
import arrowLeft from '../../assets/images/arrowLeftCarousel.svg';
import {useEffect, useState} from 'react';

function Slideshow({pictures}) {
    let [currentPicture, setCurrentPicture] = useState(0);
    const onClickRight = () => {
        setCurrentPicture(currentPicture + 1);
    };

    const onClickLeft = () => {
        setCurrentPicture(currentPicture - 1);
    };

    useEffect(() => {
        if (currentPicture === pictures.length) {
            setCurrentPicture(0);
        } else if (currentPicture < 0) {
            setCurrentPicture(pictures.length - 1);
        }
    }, [currentPicture]);

    return (
        <div className="slideshow">
            <div className="left-arrow" onClick={onClickLeft}>
                <img id="image" alt="Image précédente" src={arrowLeft}></img>
            </div>
            <div className="pictures">
                <img src={pictures[currentPicture]}></img>
            </div>
            <div className="bullet-point">{(currentPicture + 1) + '/' + pictures.length}</div>
            <div className="right-arrow" onClick={onClickRight}>
                <img id="image" alt="Image suivante" src={arrowRight}></img>
            </div>
        </div>
    )
}

export default Slideshow;