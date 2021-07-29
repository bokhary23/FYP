import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Image,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import MainButton from "../components/MainButton";
import TextContainer from "../components/TextContainer";
import { Picker } from "@react-native-picker/picker";

const StartCovidUpdates = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState("false");
  const [pickerValue, setPickerValue] = useState("Lahore");
  const [selectedText, setSelectedText] = useState();
  const InputValueHandler = (inputText) => {
    setEnteredValue(
      inputText.replace(
        /[^'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']/g,
        ""
      )
    );
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenText = enteredValue;
    if (chosenText === "chicago") {
      Alert.alert(
        "Invalid Entry!', 'Enter a city of Pakistan' , [{text: 'Okay', style: 'destructive', onPress:resetInputHandler}]"
      );
      return;
    }
    setConfirmed(true);
    setSelectedText(enteredValue);
    setEnteredValue("");
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text style={styles.selected}>You Selected!</Text>
        <TextContainer>{pickerValue}</TextContainer>
        <MainButton onPress={() => props.onStartGame(pickerValue)}>
          Get Updates
        </MainButton>
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        {/* <Text style={styles.title}>The COVID Updates Screen</Text> */}
        <Image source={require("../assets/covid.jpeg")} style={styles.image} />
        <Card style={styles.inputContainer}>
          <Text style={styles.selected}>Select a City!</Text>

          <View style={styles.container}>
            <Picker
              style={styles.picker}
              selectedValue={pickerValue}
              onValueChange={(itemValue) => setPickerValue(itemValue)}
            >
              <Picker.Item label="Lahore" value="Lahore" style={styles.val} />
              <Picker.Item label="Karachi" value="Karachi" style={styles.val} />
              <Picker.Item
                label="Islamabad"
                value="Islamabad"
                style={styles.val}
              />
              <Picker.Item
                label="Peshawar"
                value="Peshawar"
                style={styles.val}
              />
              <Picker.Item label="Quetta" value="Quetta" style={styles.val} />
              <Picker.Item
                label="Faisalabad"
                value="Faisalabad"
                style={styles.val}
              />
            </Picker>
          </View>
          {/* <Input */}
          {/* style={styles.input} */}
          {/* blurOnSubmit */}
          {/* autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            onChangeText={InputValueHandler}
            value={enteredValue}
          /> */}
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 0,
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    marginVertical: 0,
    //fontFamily: "open-sans-bold",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  selected: {
    fontWeight: "bold",
  },
  summaryContainer: {
    marginTop: 0,
    alignItems: "center",
  },
  image: {
    marginTop: 0,
    width: "120%",
    height: 300,
    padding: 0,
  },
  picker: {
    width: 400,
    height: 100,
    borderColor: "maroon",
    backgroundColor: "red",

    borderWidth: 1,
  },
  val: {
    marginVertical: 10,
    padding: 10,
    marginTop: 10,
    fontWeight: "bold",
  },
});
export default StartCovidUpdates;
