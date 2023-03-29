import '../banner/banner.scss';

function Banner({imageAlt, imageSrc, imageText}) {
    return (
        <section id="banner-section">
            <div>
                <div id="image-container">
                    <img id="image" alt={imageAlt} src={imageSrc}></img>
                    <div id="mask"></div>
                </div>
                <div id="image-texte">
                    <span>{imageText}</span>
                </div>
            </div>
        </section>
    );
}

export default Banner;