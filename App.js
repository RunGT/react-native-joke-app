import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";

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
      <Button style={styles.purpleButton} title='Tell me another'/>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFE7BC",
    alignItems: "center",
    justifyContent: "center",
  },

  purpleButton:{
    

  },

  jokeText: {
    backgroundColor: "#E7F2F8",
    borderRadius: 20,
  },

  santaXmasTree: {
    height: 210,
    width: 330,
  },
});
