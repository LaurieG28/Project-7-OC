import Banner from '../components/banner/banner';
import Card from '../components/card/card';
import '../styles/home.scss';
import imageSrc from '../assets/images/banner.png';
import housing from '../assets/housing.json';

function Home() {
    return (
        <div id="home" className="page">
            <Banner imageSrc={imageSrc} imageText="Chez vous, partout et ailleurs" imageAlt="Bord de mer"/>

            <div className="housing-gallery">
                {
                    housing[0].map((house, i) => (<Card key={i} title={house.title} cover={house.cover}/>))
                }
            </div>
        </div>
    )
}

export default Home;
