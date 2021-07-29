import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Platform, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import PlasmaOverviewScreen from "../screens/plasma_shop/PlasmaOverviewScreen";
import PlasmaDetailScreen from "../screens/plasma_shop/PlasmaDetailScreen";
import CartScreen from "../screens/plasma_shop/CartScreen";
import OrdersScreen from "../screens/plasma_shop/OrdersScreen";
import AuthScreen from "../screens/user/AuthScreen";
import Colors from "../constants/colors";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {},
  headerBackTitleStyle: {},
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const PlasmasNavigator = createStackNavigator(
  {
    Auth: AuthScreen,

    PlasmasOverview: PlasmaOverviewScreen,
    Home: Home,
    PlasmaDetail: PlasmaDetailScreen,
    Cart: CartScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

const OrdersNavigator = createStackNavigator(
  {
    Orders: OrdersScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-list" : "ios-list"}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

//const PlasmaShopNavigator = createDrawerNavigator();
//   {
//     Plasmas: PlasmasNavigator,
//     Orders: OrdersNavigator,
//   },
//   {
//     navigationOptions: {
//       activeTintColor: Colors.primary,
//     },
//   }
// );

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen,
    PlasmasOverview: PlasmaOverviewScreen,
    Cart: CartScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);
const MainNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    //plasmashop: PlasmaShopNavigator,
    Home: Home,
    PlasmasOverview: PlasmaOverviewScreen,
    PlasmaDetail: PlasmaDetailScreen,
    Cart: CartScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);
export default createAppContainer(PlasmasNavigator);
