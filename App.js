import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [randomDadJoke, setRandomDadJoke] = useState("");

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

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          getDadJoke();
        }}
      >
        <Text style={styles.jokeText}>{randomDadJoke}</Text>
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

  santaXmasTree: {
    height: 210,
    width: 330,
  },
});
