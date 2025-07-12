import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomCheckBox = () => {
  const [isSelectedCheckBox, setSelectedCheckBox] = useState(false);
  return (
    <View style={styles.checkBoxContainer}>
      <TouchableOpacity
        onPress={() => setSelectedCheckBox(!isSelectedCheckBox)}
      >
        <View style={styles.tickCon}>
          <Text style={styles.checkMark}>{isSelectedCheckBox ? "✔" : ""}</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.label}>Remember Me!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  tickCon: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  checkMark: {
    color: "#8338ec",
    fontWeight: "bold",
    fontSize: 16,
  },
  label: {
    fontSize: 16,
  },
});

export default CustomCheckBox;
