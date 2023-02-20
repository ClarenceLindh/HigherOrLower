import { StyleSheet, View, Text } from "react-native";

function GameScreen() {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Opponent's Guess</Text>
            <View>
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
        color: "#daad1c",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "#daad1c",
        padding: 12,
    }
});