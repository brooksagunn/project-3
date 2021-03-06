import './Nav.css';
import handleCollapse from '../../utils/collapse';
import EcoIcon from '@material-ui/icons/Eco';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PaletteIcon from '@material-ui/icons/Palette';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import PersonIcon from '@material-ui/icons/Person';

export default function Nav() {

    return(
        
    <nav className="banner">
        <section className="mini-nav">
            <p className="fallSale">Fall Sale starts 9/17! Free Shipping to US Customers, INTL coming soon</p>
        </section>
        <div className="navbar">
            <ul className="menu">
                <li>
                    <a id="accessories" href="/accessories"><span className="left"><PaletteIcon /></span> accessories</a>
                </li>
                <li>
                    <a id="seasons" href="/seasons"><span className="left"><EcoIcon /></span> seasons</a>
                </li>
                {/* <li>
                    <a id="more" href="#more"><span className="left"><ExpandMoreIcon /></span> more</a>
                </li> */}
            </ul>
            <a href="/" className="logo-text">
                enCapsulate
            </a>
            <ul className="menu">
                {/* <li><a id="search" href="#clothes">🔎︎ Search</a></li> */}
                <li><a id="bag" href="/bag"><span className="left"><LocalMallIcon /></span>bag(0)</a></li>
                <li><a id="login" href="/login"><span className="left"><PersonIcon /></span>login</a></li>
            </ul>
            <div className="collapse" onClick={handleCollapse}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    </nav>
    
    );
}