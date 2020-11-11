import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default function App() {
  const [ randomDadJoke,  setRandomDadJoke] = useState("")


function getDadJoke() {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: "application/json",
    }
  })
  .then((response) => response.json())
  .then((result) => {
      setRandomDadJoke(result.joke)    
  })
}

useEffect(() => {
  getDadJoke()
}, []);

  return (
    <View style={styles.container}>
      <Image style={styles.cracker} source={{ uri: 'https://cdn1.iconfinder.com/data/icons/christmas-yellow/60/009_-_Cracker-512.png' }}/>
      <TouchableOpacity style={styles.newJokeButton} onPress={ () => {getDadJoke() }}>
        <Text>Pull The Cracker</Text>
      </TouchableOpacity>
      <Text style={styles.jokeText}>{ randomDadJoke }</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFE7BC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  newJokeButton: {
    backgroundColor: '#FFA384',
    borderWidth: 0.5,
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 40,

  },

  jokeText: {
      // padding: (30, 30, 30, 30)
      backgroundColor: '#E7F2F8',
      borderRadius: 20,
      margin: 40,

  },

  cracker: {
      height: 500,
      width: 500,

  },
}); 
