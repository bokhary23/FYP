import React from "react";
import { FlatList, Platform, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderButton } from "../../components/UI/HeaderButton";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import PlasmaItem from "../../components/plasma_shop/PlasmaItem";
import Home from "../Home";
import * as cartActions from "../../store/actions/cart";
import Colors from "../../constants/colors";

const PlasmaOverviewScreen = (props) => {
  const plasmas = useSelector((state) => state.plasmas.availablePlasmas);
  const dispatch = useDispatch();

  const selectItemHandler = (id, title) => {
    props.navigation.navigate("PlasmaDetail", {
      plasmaId: id,
      plasmaTitle: title,
    });
  };
  return (
    <FlatList
      data={plasmas}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <PlasmaItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            selectItemHandler(itemData.item.id, itemData.item.title);
          }}
        >
          <Button
            color={Colors.primary1}
            title="View Details"
            onPress={() => {
              selectItemHandler(itemData.item.id, itemData.item.title);
            }}
          />
          <Button
            color={Colors.primary1}
            title="To Cart"
            onPress={() => {
              dispatch(cartActions.addToCart(itemData.item));
            }}
          />
        </PlasmaItem>
      )}
    />
  );
};
PlasmaOverviewScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "HOME",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cases"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.navigate("Home");
          }}
        />
      </HeaderButtons>
    ),

    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          onPress={() => {
            navData.navigation.navigate("Cart");
          }}
        />
      </HeaderButtons>
    ),
  };
};
export default PlasmaOverviewScreen;
