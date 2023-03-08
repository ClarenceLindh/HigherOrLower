import { Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

import Title from "../components/ui/Title";
import Colors from "../utils/colors";

function GameOverScreen({roundsNum, userNum, onRestart}) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlighting}>{roundsNum}</Text> rounds to
        guess the number
        <Text style={styles.highlighting}> {userNum}</Text>
      </Text>
      <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 1500,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary3,
    overflow: 'hidden',
    margin: 36,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlighting: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary3,
  },
});
