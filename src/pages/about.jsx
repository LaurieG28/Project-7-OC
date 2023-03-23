import Banner from "../components/banner/banner";
import imageSrc from "../assets/images/mountain-banner.svg";

function About() {
    return (
        <>
            <div className="About">
                <header className="About-header">
                </header>
                <Banner imageSrc={imageSrc} imageAlt="Montagne"/>
            </div>
        </>
    );
}

export default About;