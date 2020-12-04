import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  useFonts,
  GFSNeohellenic_400Regular,
} from "@expo-google-fonts/gfs-neohellenic";
import { AppLoading } from "expo";

export default function App() {
  const [randomDadJoke, setRandomDadJoke] = useState("");
  let [fontsLoaded] = useFonts({
    GFSNeohellenic_400Regular,
  });

  function getDadJoke() {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setRandomDadJoke(result.joke);
      });
  }

  useEffect(() => {
    getDadJoke();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.jokeText}>{randomDadJoke}</Text>
        <TouchableOpacity
          onPress={() => {
            getDadJoke();
          }}
        >
          <Image
            style={styles.santaXmasTree}
            source={require("./assets/images/santa_visit_loux.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.purpleButton}
          onPress={() => {
            getDadJoke();
          }}
        >
          <Text style={styles.purpleButtonText}>Tell me another</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  purpleButton: {
    backgroundColor: "#6C63FF",
    borderRadius: 8,
  },

  purpleButtonText: {
    color: "white",
  },

  jokeText: {
    color: "white",
    textAlign: "center",
    width: "80%",
    padding: 10,
    position: "absolute",
    left: "11.73%",
    right: "11.73%",
    top: "12.29%",
    bottom: "70.16%",
    backgroundColor: "#FF6584",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    fontFamily: "GFSNeohellenic_400Regular",
    fontSize: "3rem",
  },

  santaXmasTree: {
    height: 210,
    width: 330,
  },
});
