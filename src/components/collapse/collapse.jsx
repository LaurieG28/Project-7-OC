import './collapse.scss';
import imageArrow from '../../assets/images/arrow_back_ios-24px 2.png';
import {useState} from 'react';

function Collapse({title, content}) {
    const [isOpen, setOpen] = useState(false);
    const toggleAccordion = () => {
        setOpen(!isOpen);
    };

    return (
        <div className={isOpen ? 'accordion accordion-open' : 'accordion accordion-close'}>
            <div className="header" onClick={toggleAccordion}>
                <div className="title">{title}</div>
                <img className="arrow" src={imageArrow}></img>
            </div>
            <div className="content">
                <span>{content}</span>
            </div>
        </div>
    )
}

export default Collapse;
