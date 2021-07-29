import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/colors";
import * as cartActions from "../../store/actions/cart";

const PlasmaDetailScreen = (props) => {
  const plasmaId = props.navigation.getParam("plasmaId");
  const selectedPlasma = useSelector((state) =>
    state.plasmas.availablePlasmas.find((prod) => prod.id === plasmaId)
  );
  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedPlasma.imageUrl }} />
      <View style={styles.actions}>
        <Button
          color={Colors.primary1}
          title="Add to Cart"
          onPress={() => {
            dispatch(cartActions.addToCart(selectedPlasma));
          }}
        />
      </View>
      <Text style={styles.price}>Rs.{selectedPlasma.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedPlasma.description}</Text>
    </ScrollView>
  );
};

PlasmaDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("plasmaTitle"),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  actions: {
    marginVertical: 10,
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
  },
});

export default PlasmaDetailScreen;
