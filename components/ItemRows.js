import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ItemRows = ({ item }) => {
  console.log(item, "item");
  return (
    <View style={styles.rows}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View>
          <Image
            source={{
              uri: `https://www.countryflags.io/${item.CountryCode}/flat/64.png`,
            }}
            style={styles.flag}
          />
        </View>
        <View style={{ marginRight: 100, marginTop: 5 }}>
          <Text style={styles.countryName}>{item.Country}</Text>
        </View>
        <View>
          <Text style={styles.totalCases}>{item.TotalConfirmed}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rows: {
    width: "100%",
    marginTop: 10,
    marginBottom: 8,
    padding: 10,
  },
  countryName: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  totalCases: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    color: "black",
  },
  flag: {
    height: 30,
    width: 40,
    padding: 10,
    borderRadius: 1000,
  },
});

export default ItemRows;
