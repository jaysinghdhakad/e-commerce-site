import "./back-banner-landing-page.css"
import {faShoePrints } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
function  BackBannerLandingPage(){
    return (
      
 <div className="back-banner-landing-page">
  
      
        <div class="introduction-firstline">LOOKING FOR NEW SHOES!!!!!</div>
        <div class="introduction-secondline">YOU ARE AT THE RIGHT PLACE</div>
        <div class="introduction-thirdline">Welcome To <FontAwesomeIcon icon={faShoePrints} />shoeHub</div>



</div>
)
}
export default BackBannerLandingPage;