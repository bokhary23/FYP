import CartScreen from "../../screens/plasma_shop/CartScreen";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (plasma) => {
  return { type: ADD_TO_CART, plasma: plasma };
};

export const removeFromCart = (plasmaId) => {
  return { type: REMOVE_FROM_CART, pid: plasmaId };
};
