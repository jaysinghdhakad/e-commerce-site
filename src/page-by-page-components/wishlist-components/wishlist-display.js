import "./wishlist-display.css";
import react from "react";
import {useWishList} from "../../contexts/wishlist-context";
import {useCart} from "../../contexts/cart-context"
import { useEffect, useState } from "react";
import axios from "axios";
function WishListDisplay() {
  const [loader,setLoader] = useState(false)
  const {state:data,dispatch:wishDispatch} = useWishList();
  const {dispatch : cartDispatch} = useCart();
   useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const data = await axios.get(
          "https://murmuring-cliffs-55053.herokuapp.com/wish-list"
        );
        setLoader(false);
        wishDispatch({type:"populate",payload:data.data.products})
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  console.log(data)
  return ( loader ?<div class="loader"></div>:
    <div className="wishlist-display">
      {data?.map((item) => (
        <div className="product-card">
          <button className="add-to-wishlist" onClick={async()=>{
            const url = `https://murmuring-cliffs-55053.herokuapp.com/wish-list/${item._id}` 
            try {
              await axios.post(url)
            }catch(err){
              console.log(err)
            }
            wishDispatch({type:"remove",payload:item
            })}}>X</button>
      
          <img className="shoe-image" src={item?.image} />
          <div className="info">
            <div>brand:{item.name}</div>
            <div>price: rs {item.price}</div>
          </div>
          <button className="add-to-cart" onClick={async()=>{
           const cartObject= {product_id: item.product_id, brand : item.brand, name : item.name, price: item.price, discription: item.discription, features: item.features, image : item.image,Quantity : 1 }
           try
           {
           const savedProduct =   await axios.post("https://murmuring-cliffs-55053.herokuapp.com/cart",cartObject)
           cartDispatch({ type: "add", payload: savedProduct.data.cart });
            }catch(err){
              console.log(err)
            }
          }}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}
export default WishListDisplay;
