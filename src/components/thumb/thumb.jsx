import './thumb.scss';

function Thumb({title, pictures}) {
    return (
        <>
            <section class="housing-gallery" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <div class="housing-card" style={{
                    width: '340px',
                    height: '340px',
                    background: 'linear-gradient(rgba(255, 0, 0, 0.5) 0%, #ff6060 100%)',
                    borderRadius: '10px',
                    marginTop: '56px',
                    marginLeft: '50px',
                    marginRight: '50px',
                    marginBottom: '50px',
                }}>
                    <img src={pictures} alt="appartement" height={80} width={80}/>
                    <span>{title}</span>
                </div>

                <div className="housing-card" style={{
                    width: '340px',
                    height: '340px',
                    background: 'linear-gradient(rgba(255, 0, 0, 0.5) 0%, #ff6060 100%)',
                    borderRadius: '10px',
                    marginTop: '56px',
                    marginLeft: '50px',
                    marginRight: '50px',
                    marginBottom: '50px',
                }}>
                    <img src={pictures} alt="appartement" height={80} width={80}/>
                    <span>{title}</span>
                </div>

                <div className="housing-card" style={{
                    width: '340px',
                    height: '340px',
                    background: 'linear-gradient(rgba(255, 0, 0, 0.5) 0%, #ff6060 100%)',
                    borderRadius: '10px',
                    marginTop: '56px',
                    marginLeft: '50px',
                    marginRight: '50px',
                    marginBottom: '50px',
                }}>
                    <img src={pictures} alt="appartement" height={80} width={80}/>
                    <span>{title}</span>
                </div>
            </section>
        </>
    );
}

export default Thumb;