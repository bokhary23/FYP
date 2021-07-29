import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import TextContainer from "../components/TextContainer";
import MainButton from "../components/MainButton";
import Card from "../components/Card";
import { Ionicons } from "@expo/vector-icons";

const generateRandomBetween = (min, max, exclude) => {};

const GameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Cases Reported Are As Follows: </Text>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={() => {}}>Weekly</MainButton>
        <MainButton onPress={() => {}}>Monthly</MainButton>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
