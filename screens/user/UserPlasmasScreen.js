import React from "react";
import { FlatList, Button, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";
import PlasmaItem from "../../components/plasma_shop/PlasmaItem";
import Colors from "../../constants/colors";
import * as plasmasActions from "../../store/actions/plasmas";

const UserPlasmasScreen = (props) => {
  const userPlasmas = useSelector((state) => state.plasmas.userPlasmas);
  const dispatch = useDispatch();

  const editPlasmaHandler = (id) => {
    props.navigation.navigate("EditPlasma", { plasmaId: id });
  };

  return (
    <FlatList
      data={userPlasmas}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <PlasmaItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            editPlasmaHandler(itemData.item.id);
          }}
        >
          <Button
            color={Colors.primary}
            title="Edit"
            onPress={() => {
              editPlasmaHandler(itemData.item.id);
            }}
          />
          <Button
            color={Colors.primary}
            title="Delete"
            onPress={() => {
              dispatch(plasmasActions.deletePlasma(itemData.item.id));
            }}
          />
        </PlasmaItem>
      )}
    />
  );
};

UserPlasmasScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Plasmas",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add"
          iconName={Platform.OS === "android" ? "md-create" : "ios-create"}
          onPress={() => {
            navData.navigation.navigate("EditPlasmat");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default UserPlasmasScreen;
