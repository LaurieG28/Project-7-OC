import './accordion.scss';
import imageArrow from '../../assets/images/arrow_back_ios-24px 2.png';
import {useState} from 'react';

function Accordion({title, content}) {
    const [isOpen, setOpen] = useState(false);
    const toggleAccordion = () => {
        setOpen(!isOpen);
    };

    let accordionOpenClose;

    if (isOpen) {
        accordionOpenClose = ' accordion-open';
    } else {
        accordionOpenClose = ' accordion-close';
    }

    return (
        <div
            className={'accordion' + accordionOpenClose}>
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
