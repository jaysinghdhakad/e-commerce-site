import WishListDisplay from "../page-by-page-components/wishlist-components/wishlist-display"
import BackBannerWishList from "../page-by-page-components/wishlist-components/back-banner-wishlist"


function WishListPage (){
    return(
        <>
        <BackBannerWishList/>
        <WishListDisplay/>
        </>
    )
}

export default WishListPage;