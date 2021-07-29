import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";

const AdminScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Welcome to the Admin Screen</Text>
      <Text>Doctors Registration</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
});
export default AdminScreen;
