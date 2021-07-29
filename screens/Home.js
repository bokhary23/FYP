import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
} from "react-native";
import Header from "../components/Header";
import { ScrollView } from "react-native-gesture-handler";
import Cards from "../components/Cards";
import ItemRows from "../components/ItemRows";
import Colors from "../constants/colors";
const Home = (props) => {
  const url = "https://api.covid19api.com/summary";
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchCovidData = async () => {
      setIsloading(true);
      try {
        const result = await fetch(url);
        const response = await result.json();
        setData(response);
        setIsloading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCovidData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.covidHeading}>COVPAK DASHBOARD</Text>
      <View style={styles.cards}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 170 }}
        >
          <Cards
            icon="md-heart"
            title="Total Cases"
            bg="f5f5dc"
            number={data ? data.Global.TotalConfirmed : 0}
          />

          <Cards
            icon="medkit"
            title="Recovered"
            bg="#00fa9a"
            number={data ? data.Global.TotalRecovered : 0}
          />

          <Cards
            icon="nuclear"
            title="Deaths"
            bg="#D93B4A"
            number={data ? data.Global.TotalDeaths : 0}
          />
        </ScrollView>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.casesHeading}>Covid Cases by region</Text>
        </View>
      </View>
      <View style={styles.flatList}>
        <FlatList
          data={data && data.Countries ? data.Countries : 0}
          renderItem={({ item }) => <ItemRows item={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#191970",
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
  },
  covidHeading: {
    color: "black",
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 50,
  },
  cards: {
    marginTop: -90,
  },
  casesHeading: {
    color: "#FFF",
    fontSize: 15,
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 30,
  },
  flatList: {
    marginTop: 10,
  },
});

export default Home;
