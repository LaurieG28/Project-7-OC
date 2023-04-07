import './accordion.scss';
import imageArrow from '../../assets/images/arrow_back_ios-24px 2.png';
import {useState} from 'react';

function Accordion({title, content, isSmall}) {
    const [isOpen, setOpen] = useState(false);
    const toggleAccordion = () => {
        setOpen(!isOpen);
    };

    let accordionOpenClose;
    let small;

    if (isOpen) {
        accordionOpenClose = ' accordion-open';
    } else {
        accordionOpenClose = ' accordion-close';
    }

    if (isSmall) {
        small = ' small';
    } else {
        small = '';
    }

    return (
        <div
            className={'accordion' + accordionOpenClose + small}>
            <div className="header" onClick={toggleAccordion}>
                <div className="title">{title}</div>
                <img className="arrow" src={imageArrow}></img>
            </div>
            <div className="content">
                {content}
            </div>
        </div>
    )
}

export default Accordion;
