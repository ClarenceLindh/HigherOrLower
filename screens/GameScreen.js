import { useState } from 'react'
import { StyleSheet, View, Text } from "react-native";

import Title from '../components/ui/Title'
import Colors from '../utils/colors'

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min

  if(rndNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return rndNum
  }
}

function GameScreen({userNumber}) {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  return (
    <View style={styles.screen}>
      <View>
        <Title>Opponents Guess</Title>
        <Text>Higher or Lower?</Text>
      </View>
      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent1,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent1,
    padding: 12,
  },
});
