import  "./nav.css";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart,faMapMarker,faShoePrints } from '@fortawesome/free-solid-svg-icons';
import {useCart} from "../contexts/cart-context";
import { useWishList} from "../contexts/wishlist-context"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useLogin} from "../contexts/login.context"
import { NavLink} from "react-router-dom"
function Header(){
  const {state : cartList} = useCart();
  const {state : wishList}  = useWishList();
    const {userLogin,setUserLogin} = useLogin();
    function logout(){
      localStorage?.removeItem("login");
      setUserLogin(false)
    }
    function ArrayCheck(inputArray = []){
      console.log(inputArray)
       const newArray = inputArray
      const length = newArray.length;
      if(length){
        return true;
      }
      else{
        return false;
      }
    }
    return (
        <nav className="top-navigation">
          <div className="logo"> <NavLink to="/" className="inactive" activeClassName="active"><FontAwesomeIcon icon={faShoePrints} />ShoeHub</NavLink></div>
       <div className="center-menu"> </div>
     
       
        <div className="cart"><NavLink to="/cart" className="inactive" activeClassName="active" ><FontAwesomeIcon icon={faShoppingCart} />{ArrayCheck(cartList)?<FontAwesomeIcon className="notification" icon={faMapMarker} />: null}</NavLink><NavLink to="/Wish-List" className="inactive" activeClassName="active"><FontAwesomeIcon icon={faHeart} />{ArrayCheck(wishList)?<FontAwesomeIcon className="notification" icon={faMapMarker} />: null}</NavLink>{userLogin?<button className="logout" onClick={()=>logout()}>Logout</button>:null}</div>
      </nav>
    )
}
export default  Header