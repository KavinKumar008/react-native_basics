import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

const HomeScreen = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Welcome TO HomeScreen</Text>
      <Button
        title="Go TO Details"
        onPress={() => router.push("/DetailsScreen")}
      ></Button>
    </View>
  );
};

export default HomeScreen;
