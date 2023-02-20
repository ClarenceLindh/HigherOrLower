import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
    return (
        <LinearGradient
            colors={["#af1b1b", "#daad1c"]}
            style={styles.rootScreen}
        >
            <ImageBackground
                source={require("./assets/images/background.png")}
                resizeMode="cover"
				style={styles.rootScreen}
				imageStyle={styles.imageStyle}
            >
                <StartGameScreen />
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
	imageStyle: {
		opacity: 0.10,
	},
});
