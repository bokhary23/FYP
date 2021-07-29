import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import { ADD_ORDER } from "../actions/orders";
import CartItem from "../../models/cart-item";
import { DELETE_PLASMA } from "../actions/plasmas";

const initialState = {
  items: [],
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedPlasma = action.plasma;
      const prodPrice = addedPlasma.price;
      const prodTitle = addedPlasma.title;

      let updatedOrNewCartItem;
      if (state.items[addedPlasma.id]) {
        updatedOrNewCartItem = new CartItem(
          state.items[addedPlasma.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedPlasma.id].sum + prodPrice
        );
      } else {
        updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
      }
      return {
        ...state,
        items: { ...state.items, [addedPlasma.id]: updatedOrNewCartItem },
        totalAmount: state.totalAmount + prodPrice,
      };
    case REMOVE_FROM_CART:
      const selectedCartItem = state.items[action.pid];
      const currentQty = selectedCartItem.quantity;
      let updatedCartItems;
      if (currentQty > 1) {
        updatedCartItems = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.plasmaPrice,
          selectedCartItem.plasmaTitle,
          selectedCartItem.sum - selectedCartItem.plasmaPrice
        );
        updatedCartItems = { ...state.items, [action.pid]: updatedCartItems };
      } else {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[action.pid];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.plasmaPrice,
      };
    case ADD_ORDER:
      return initialState;
    case DELETE_PLASMA:
      if (!state.items[action.pid]) {
        return state;
      }
      const updatedItems = { ...state.items };
      const itemTotal = state.items[action.pid].sum;
      delete updatedItems[actions.pid];
      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount - itemTotal,
      };
  }
  return state;
};
