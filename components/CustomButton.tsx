import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type loginFormProps = {
  errors: {
    identifier?: string;
    password?: string;
  };
  setErrors: (errors: { identifier?: string; password?: string }) => void;
  validate: () => boolean | object;
  identifier?: string;
  setIdentifier: (value: string) => void;
  password?: string;
  setPassword: (value: string) => void;
};

const CustomButton = ({
  errors,
  validate,
  identifier,
  password,
  setErrors,
  setIdentifier,
  setPassword,
}: loginFormProps) => {
  // console.log(errors, "sdksjdksjdk", validate);
  const router = useRouter();
  const handleNavigateToHome = () => {
    const isValid = validate();
    console.log("pressed");
    if (isValid) {
      router.push("/HomeScreen");
    }
  };

  const handleCancelButton = () => {
    setIdentifier("");
    setPassword("");
    setErrors({});
  };
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={handleCancelButton}>
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
