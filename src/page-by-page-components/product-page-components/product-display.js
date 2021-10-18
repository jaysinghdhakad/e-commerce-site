import "./product-display.css";
import { useEffect, useState } from "react";
import { useCart } from "../../contexts/cart-context";
import { useWishList } from "../../contexts/wishlist-context";
import { useNavigate } from "react-router-dom";
import { useSortAndFilter } from "../../contexts/sortAndFilters-context";
import { useProductDisplay } from "../../contexts/productDisplay-context";

import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";
function ProductDisplay() {
  const [loader, setLoader] = useState(false);
  const [response, setResponse] = useState([]);
  const { state } = useLocation();
  const Navigate = useNavigate();
  console.log("this is state", state);
  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const data = await axios.get(
          `https://murmuring-cliffs-55053.herokuapp.com/catigories/${state.id}/products`
        );
        console.log("this is happening");
        setLoader(false);
        setResponse(data.data.products);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const productData = [...response];
  const { state: cartState, dispatch: cartDispatch } = useCart();
  const {state: wishState, dispatch: wishDispatch } = useWishList();
  const {
    state: { showInStalk, showFastDelivery, sortHighToLow, sortLowToHigh,brandFilter,brandName },
  } = useSortAndFilter();
  const { setProduct } = useProductDisplay();

  function getSortedData(array, { sortHighToLow, sortLowToHigh }) {
    if (sortHighToLow) {
      return array.sort((a, b) => b.price - a.price);
    }
    if (sortLowToHigh) {
      return array.sort((a, b) => a.price - b.price);
    }

    return array;
  }

  function getFilteredData(data, { showInStalk, showFastDelivery }) {
    return data
      .filter((item) => (showInStalk ? item.out_of_stalk === true : !null))
      .filter((item) =>
        showFastDelivery ? item.fastdelivery === true : !null
      ).filter((item) => brandFilter? item.brand === brandName : !null);
  }

  const sortedData = getSortedData(productData, {
    sortHighToLow,
    sortLowToHigh,
  });
  const filteredData = getFilteredData(sortedData, {
    showInStalk,
    showFastDelivery,
  });

  console.log("this is cart");
  function checkItemInArray(input, Array) {
    const itemInArray = Array.some((item) => item.product_id === input.product_id);
    if (itemInArray) {
      return true;
    } else {
      return false;
    }
  }
  return loader ? (
    <div class="loader"></div>
  ) : (
    <div className="product-display">
      {filteredData.map((item) => (
        <div className="product-card">
          
          <img
            className="shoe-image"
            src={item.images.image1}
            onClick={() => {
              setProduct(item);
              Navigate(`/products/${item._id}`);
            }}
          />
          <div className="info">
            <div>
              {item.brand}'s {item.name}`
            </div>
            <div>Price: rs {item.price}</div>
          </div>
          <div className="button-area">
          {checkItemInArray(item, cartState) ? (
            <button className="add-to-cart">Added to cart</button>
          ) : (
            <button
              className="add-to-cart"
              onClick={async () => {
                const cartObject = {
                  product_id: item.product_id,
                  brand: item.brand,
                  name: item.name,
                  price: item.price,
                  discription: item.description,
                  features: item.features,
                  image: item.images.image1,
                  Quantity: 1,
                };
                try {
                  const savedProduct = await axios.post(
                    "https://murmuring-cliffs-55053.herokuapp.com/cart",
                    cartObject
                  );
                  cartDispatch({ type: "add", payload: savedProduct.data.cart });
                  console.log("this is response ", savedProduct);
                } catch (err) {
                  console.log(err);
                }
               

              }}
            >
              {" "}
              Add To Cart
            </button>
          )}
          {checkItemInArray(item, wishState)? <button className="add-to-cart" >Added to Wish</button> : <button className="add-to-cart"  onClick={async () => {
              const wishObject = {
                product_id: item.product_id,
                brand: item.brand,
                name: item.name,
                price: item.price,
                discription: item.description,
                features: item.features,
                image: item.images.image1,
                
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

             
            }}> Add to Wish</button>

          }
          </div>
        </div>
      ))}
    </div>
  );
}
export default ProductDisplay;
