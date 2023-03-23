import '../banner/banner.scss';

function Banner(props) {
    return (
        <section id="banner-section">
            <div>
                <div id="image-container">
                    <img id="image" alt={props.imageAlt} src={props.imageSrc}></img>
                    <div id="mask"></div>
                </div>
                <div id="image-texte">
                    <span>{props.imageText}</span>
                </div>
            </div>
        </section>
    );
}

export default Banner;