import BackBannerLandingPage from "../page-by-page-components/landing-page-components/back-banner-landing-page"
import Carousel from "../page-by-page-components/landing-page-components/carousel-landing-page"
import CatigoryMenu from "../page-by-page-components/landing-page-components/catigory-menu";

function LandingPage(){
    return (
        <>
         <BackBannerLandingPage/>
         <Carousel/>
         <CatigoryMenu/>
        </>
    )
}
export default LandingPage;