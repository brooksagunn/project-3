import './Nav.css';

import handleCollapse from '../../utils/collapse';
import EcoIcon from '@material-ui/icons/Eco';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import PaletteIcon from '@material-ui/icons/Palette';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import PersonIcon from '@material-ui/icons/Person';

export default function Nav() {

    return(
        
    <nav className="banner">
        <div className="mini-nav">
            <p>Fall Sale starts 9/17! Free Shipping on Domestic Orders 0ver $100</p>
        </div>
        <div className="navbar">
            <ul className="menu">
                <li>
                    <a id="accessories" href="#accessories"><span className="left"><PaletteIcon /></span> accessories</a>
                </li>
                <li>
                    <a id="seasons" href="#seasons"><span className="left"><EcoIcon /></span> seasons</a>
                </li>
                {/* <li>
                    <a id="more" href="#more"><span className="left"><ExpandMoreIcon /></span> more</a>
                </li> */}
            </ul>
            <div className="logo-text">
                enCapsulate
            </div>
            <ul className="menu">
                {/* <li><a id="search" href="#clothes">🔎︎ Search</a></li> */}
                <li><a id="bag" href="#bag"><span className="left"><LocalMallIcon /></span> bag (0)</a></li>
                <li><a id="login" href="#login"><span className="left"><PersonIcon /></span> login</a></li>
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