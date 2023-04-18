import '../banner/banner.scss';

function Banner({imageAlt, imageSrc, imageText}) {
    return (
        <section className="banner-section">
            <div>
                <div className="image-container">
                    <img className="image" alt={imageAlt} src={imageSrc}></img>
                    <div className="mask"></div>
                </div>
                <div className="image-texte">
                    <span>{imageText}</span>
                </div>
            </div>
        </section>
    );
}

export default Banner;