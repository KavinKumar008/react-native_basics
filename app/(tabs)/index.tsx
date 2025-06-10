import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi kavin!!!!</Text>
      <Kavin uname="react native" />
      <Kavin uname="react js" />
      <Kavin uname="express js" />
      <Kavin uname="mongodb" />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const Kavin = (props) => {
  return <Text>Hello {props.uname}!!</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
