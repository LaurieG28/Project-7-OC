import Banner from "../components/banner/banner";
import imageSrc from "../assets/images/banner.png";

function Home() {
    return (
        <>
            <Banner imageSrc={imageSrc} imageText="Chez vous, partout et ailleurs" imageAlt="Bord de mer"/>
        </>
    );
}

export default Home;
