import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomButton = () => {
  const handleNavigateToHome = () => {
    console.log("pressed");
  };
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity>
        <Text style={styles.cancelButton}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNavigateToHome}>
        <Text style={styles.signupButton}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonName: {
    // color: "white",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  cancelButton: {
    color: "white",
    fontWeight: "bold",
    width: 100,
    backgroundColor: "#8338ec",
    padding: 10,
    textAlign: "center",
    borderRadius: 5,
  },
  signupButton: {
    color: "white",
    fontWeight: "bold",
    width: 100,
    backgroundColor: "#06d6a0",
    padding: 10,
    textAlign: "center",
    borderRadius: 5,
  },
});
export default CustomButton;
