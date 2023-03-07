import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from '../../utils/colors'

function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={onPress}
                android_ripple={{ color: Colors.primary2 }} // for android
                style={({ pressed }) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 30,
        margin: 4,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary1,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2, // for android
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
    },
    pressed: {
        // for iOs
        opacity: 0.75,
        backgroundColor: Colors.primary1,
    },
});
