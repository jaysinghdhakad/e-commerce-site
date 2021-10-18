import "./footer.css"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoePrints } from '@fortawesome/free-solid-svg-icons';
function Footer(){
    return (<div className="footer">
        <a class="link" href="/">GitHub</a>
        
        <div class="name"><FontAwesomeIcon icon={faShoePrints} />ShoeHub</div>
        <a class="link" href="/">Instagram</a>
    </div>)
}

export default Footer;