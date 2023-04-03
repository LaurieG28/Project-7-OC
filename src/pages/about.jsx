import Banner from '../components/banner/banner';
import imageSrc from '../assets/images/mountain-banner.png';
import Collapse from '../components/collapse/collapse';

function About() {
    return (
        <div id="about" className="page">
            <header className="about-header">
            </header>
            <Banner imageSrc={imageSrc} imageAlt="Montagne"/>
            <Collapse
                content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                title="Fiabilité"/>
            <Collapse content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
                            comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de
                            notre
                            plateforme." title="Respect"/>
            <Collapse
                content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si ous avez la moindre question."
                title="Service"/>
            <Collapse
                content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers pour la sécurité domestique pour nos hôtes"
                title="Sécurité"/>
        </div>
    );
}

export default About;