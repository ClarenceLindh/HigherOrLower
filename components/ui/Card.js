import { View, StyleSheet } from "react-native";

import Colors from "../../utils/colors";

function Card({children}) {
  return (
    <View style={styles.inputContainer}>
      {children}
    </View>
  )
}

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary3,
    elevation: 8, // for android
    shadowColor: "black", // for iOs
    shadowOffset: { width: 2, height: 2 }, // for iOs
    shadowRadius: 6, // for iOs
    shadowOpacity: 0.26, // for iOs
  },
});