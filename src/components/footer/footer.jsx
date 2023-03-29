import './footer.scss';
import logoFooter from '../../assets/images/LOGOfooter.png';
import logo2020 from '../../assets/images/© 2020 Kasa. All rights reserved.png';

function Footer() {
    return (
        <footer>
            <img className="logo" src={logoFooter} alt="logo-kasa"/>
            <img className="all-rights" src={logo2020} alt="2020-kasa-all-rights-reserved"/>
        </footer>
    )
}

export default Footer;