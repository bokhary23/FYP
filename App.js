import React, { useState } from "react";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import plasmasReducer from "./store/reducers/plasmas";
import PlasmaShopNavigator from "./navigations/PlasmaShopNavigator";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import ReduxThunk from "redux-thunk";

import cartReducer from "./store/reducers/cart";
import ordersReducer from "./store/reducers/orders";
import authReducer from "./store/reducers/auth";
//import PlasmaShopNavigator from "./navigations/PlasmaShopNavigator";

const rootReducer = combineReducers({
  plasmas: plasmasReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlasmaShopNavigator />
    </Provider>
  );
}
