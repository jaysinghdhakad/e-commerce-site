import "./productDiscription-display.css";
import { useState, useEffect } from "react";

// import { useProductDisplay } from "../../contexts/productDisplay-context";
import axios from "axios";
import { useCart } from "../../contexts/cart-context";
import {useWishList} from "../../contexts/wishlist-context"
import { useParams } from "react-router-dom";
import data from "../../datafile";
function ProductDiscriptionDisplay() {
  const [imageNum, setImageNum] = useState("image1");
  const [loader, setLoader] = useState(false);
  const { id } = useParams();

  const [product, setProduct] = useState();
  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
      
        const data = await axios.get(
          `https://murmuring-cliffs-55053.herokuapp.com/catigories/001/products/${id}`
        );
     
      
  setProduct(data.data.Product[0])
        setLoader(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const { state: cartList, dispatch: cartDispatch } = useCart();
  const {state: wishList , dispatch : wishDispatch} = useWishList();
  function checkItemInArray(input = {}, Array = []) {
    const itemInArray = Array?.some(
      (item) => item.product_id === input.product_id
    );
    console.log("this is working");
    console.log(itemInArray);
    if (itemInArray) {
      return true;
    } else {
      return false;
    }
  }
  return loader ? (
    <div class="loader"></div>
  ) : (
    <div className="product-discription">
      <div className="description">
        <div className="heading">
          {product?.brand}'s {product?.name}
        </div>
        <div className="content">{product?.description}</div>
        <div className="image-array">
          <img
            class="choice"
            src={product?.images?.image1}
            onClick={() => setImageNum("image1")}
          />
          <img
            class="choice"
            src={product?.images?.image2}
            onClick={() => setImageNum("image2")}
          />
          <img
            class="choice"
            src={product?.images?.image3}
            onClick={() => setImageNum("image3")}
          />
        </div>
      </div>
      <div className="main-image">
        <img className="center-image" src={product?.images[imageNum]} />
      </div>
      <div className="rattings">
        <div className="rating">rating: {product?.rating}/5 </div>
        <div className="user-exp">{product?.features}</div>
        {checkItemInArray(product, cartList) ? (
          <button className="add-to-cart ">Added to cart</button>
        ) : (
          <button
            className="add-to-cart"
            onClick={async () => {
              const cartObject = {
                product_id: product.product_id,
                brand: product.brand,
                name: product.name,
                price: product.price,
                discription: product.description,
                features: product.features,
                image: product.images.image1,
                Quantity: 1,
              };
              try {
                const savedProduct = await axios.post(
                  "https://murmuring-cliffs-55053.herokuapp.com/cart",
                  cartObject
                );
                cartDispatch({ type: "add", payload: savedProduct.data.cart });
              } catch (err) {
                console.log(err);
              }
            }}
          >
            Add To Cart
          </button>
        )}
        {checkItemInArray(product, wishList) ? (
          <button className="add-to-cart ">Added to wish</button>
        ) : (
          <button
            className="add-to-cart"
            onClick={async () => {
              const wishObject = {
                product_id: product.product_id,
                brand: product.brand,
                name: product.name,
                price:product.price,
                discription: product.description,
                features: product.features,
                image: product.images.image1,
               
              };
              try {
                const savedWish = await axios.post(
                  "https://murmuring-cliffs-55053.herokuapp.com/wish-list",
                  wishObject
                );
               
                wishDispatch({ type: "add", payload: savedWish.data.updatedProduct });

              } catch (err) {
                console.log(err);
              }
            }}
          >
            Add To Wish
          </button>
        )}
      </div>
    </div>
  );
}
export default ProductDiscriptionDisplay;
