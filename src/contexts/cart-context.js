import { createContext, useContext, useReducer, useState } from "react";
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function cartReducer(state, value) {
 
  switch (value.type) {
    case "populate":
      return value.payload
    case "add":
      const addFlag = state.find((item) => item._id === value.payload._id);
      if (addFlag) {
        return state;
      } else {
        return [...state, value.payload];
      }

    case "remove":
      return state.filter((item) => item._id != value.payload._id);
    case "quantity-increase":
      return state.map((item) =>
        item._id === value.payload._id
          ? { ...item, Quantity: value.payload.Quantity + 1 }
          : item
      );
    case "quantity-decrease":
      if (value.payload.Quantity === 1) {
        return state.filter((item) => item._id != value.payload._id);
      } else {
        return state.map((item) =>
          item._id === value.payload._id
            ? { ...item, Quantity: value.payload.Quantity - 1 }
            : item
        );
      }
    default:
      break;
  }
}

export function useCart() {
  return useContext(CartContext);
}
