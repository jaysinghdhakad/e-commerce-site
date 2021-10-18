import "./cartdisplay.css";
import { useCart } from "../../contexts/cart-context.js";
import { useEffect, useState } from "react";

import axios from "axios";

function CartDisplay() {
  const [loader, setLoader] = useState(false);
  const { state: data, dispatch: cartDispatch } = useCart();
  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const data = await axios.get(
          "https://murmuring-cliffs-55053.herokuapp.com/cart"
        );
        setLoader(false);

        cartDispatch({ type: "populate", payload: data.data.cartData });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  function TotalAmount() {
    let totalAmount = 0;
    data.forEach((item) => {
      totalAmount = item.price * item.Quantity + totalAmount;
    });
    console.log("this is total amount :".totalAmount);
    return totalAmount;
  }
  console.log("this is state", data);
  return loader ? (
    <div class="loader"></div>
  ) : (
    <div class="cart-display">
      {data.map((item) => (
        <div className="item">
          <div className="item-discription">
            {" "}
            <div>
              {item.brand} {item.name}
            </div>
          </div>

          <div className="product-card">
            <img className="shoe-image" src={item.image} />
            <div className="info">
         
            </div>
            <span>
              {" "}
              <button
                class="quantity-manipulator"
                onClick={async () => {
                  cartDispatch({ type: "quantity-decrease", payload: item });
                  const url = `https://murmuring-cliffs-55053.herokuapp.com/cart/${item._id}`;
                  try {
                    await axios.post(url, { quantity: item.Quantity - 1 });
                  } catch (err) {
                    console.log(err);
                  }
                }}
              >
                -
              </button>{" "}
              {item.Quantity}
              <button
                class="quantity-manipulator"
                onClick={async () => {
                  const url = `https://murmuring-cliffs-55053.herokuapp.com/cart/${item._id}`;
                  try {
                    await axios.post(url, { quantity: item.Quantity + 1 });
                  } catch (err) {
                    console.log(err);
                  }
                  cartDispatch({ type: "quantity-increase", payload: item });
                }}
              >
                +
              </button>
            </span>
            <button
              className="add-to-cart"
              onClick={async () => {
                cartDispatch({ type: "remove", payload: item });
                const url = `https://murmuring-cliffs-55053.herokuapp.com/cart/${item._id}`;
                try {
                  await axios.delete(url);
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              Remove from cart
            </button>
          </div>
          <div className="item-price-calculation">
            <div>Price: {item.price} </div>
            <div>Quantity : {item.Quantity}</div>
            <div>Total ammout : {item.price * item.Quantity}</div>
          </div>
        </div>
      ))}
      <div className="total-ammount">
        <div>Your tatal amount is : {TotalAmount()}</div>
      </div>
    </div>
  );
}
export default CartDisplay;
