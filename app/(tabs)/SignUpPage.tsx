import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React, { useState } from "react";
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomCheckBox from "../../components/CustomCheckBox";

type errorFields = {
  identifier?: string;
  password?: string;
};
export default function SignUpPage() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<errorFields>({});

  const handleidentifierText = (text: string) => {
    console.log(text);
    setIdentifier(text);
  };

  const handlePassword = (text: string) => {
    console.log(text);
    setPassword(text);
  };

  const validate = () => {
    console.log("validate function called");
    const errorField: errorFields = {};
    console.log(errors, "errororororororos", errorField);
    if (!identifier.trim() || !password) {
      Alert.alert("Erroy", "Please fill all fields");
      return false;
    }
    console.log("validate function called");

    const emailRegex = /^[^\s@]+@[^s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s'-]+$/;
    const passwordRegex = /^[0-9]{6,}$/;

    if (!emailRegex.test(identifier) && !nameRegex.test(identifier)) {
      errorField.identifier = "Please enter a valid email or name";
    }

    if (!passwordRegex.test(password)) {
      errorField.password = "Password must be atleast 6 digits";
    }

    setErrors(errorField);
    return Object.keys(errorField).length === 0;
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Welcome To The Home Page!</Text>
        <View style={styles.inputsContainer}>
          <View style={styles.userInfoContainer1}>
            <View>
              <Text style={styles.nameText}>identifier or Email</Text>
              <TextInput
                placeholder="Enter your name or email"
                maxLength={10}
                style={styles.inputField}
                value={identifier || ""}
                onChangeText={(text) => handleidentifierText(text)}
              />
            </View>
            {errors?.identifier && (
              <Text style={{ color: "red" }}>{errors?.identifier}</Text>
            )}
          </View>
          <View style={styles.userInfoContainer1}>
            <View>
              <Text style={styles.nameText}>Password</Text>
              <TextInput
                placeholder="Enter your password"
                maxLength={6}
                style={styles.inputField}
                value={password || ""}
                onChangeText={(text) => handlePassword(text)}
              />
            </View>
            {errors?.password && (
              <Text style={{ color: "red" }}>{errors?.password}</Text>
            )}
          </View>
          <View style={styles.rememberCon}>
            <CustomCheckBox />
          </View>
        </View>
        <CustomButton errors={errors} validate={validate} />
        <View style={styles.vectorIconsContainer}>
          <AntDesign
            name="google"
            size={30}
            color="black"
            style={styles.icon}
          />
          <AntDesign
            name="facebook-square"
            size={30}
            color={"black"}
            style={styles.icon}
          />
          <FontAwesome6
            name="x-twitter"
            size={30}
            color="black"
            style={styles.icon}
          />
        </View>
      </View>
      <StatusBar animated={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#bde0fe",
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    width: 380,
    height: 450,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 15,
  },
  userInfoContainer1: {},
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#a8dadc",
    borderRadius: 5,
    padding: 8,
    marginTop: 10,
  },
  inputsContainer: {
    gap: 20,
  },
  rememberCon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  vectorIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    marginTop: 25,
  },
  icon: {
    cursor: "pointer",
  },
});
