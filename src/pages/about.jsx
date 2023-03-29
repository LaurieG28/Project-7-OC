import Banner from '../components/banner/banner';
import imageSrc from '../assets/images/mountain-banner.png';

function About() {
    return (
        <div id="about" className="page">
            <header className="about-header">
            </header>
            <Banner imageSrc={imageSrc} imageAlt="Montagne"/>
        </div>
    );
}

export default About;