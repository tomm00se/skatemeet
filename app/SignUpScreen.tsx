import Header from "@/components/ui/atoms/header";
import createUser from "@/utils/createUser";
import { SignInOAuth } from "@/utils/SignInOAuth";
import { linkTo } from "expo-router/build/global-state/routing";
import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUsername] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    setLoading(true);
    createUser(email, password, firstName, lastName, userName)
      .then(() => {
        setLoading(false);
        linkTo("/HomeScreen");
      })
      .catch((error) => {
        setLoading(false);
        alert(error.message || "Error signing up");
      });
  };

  const handleSignInOAuth = () => {
    try {
      setLoading(true);
      SignInOAuth().then(() => {
        setLoading(false);
        linkTo("/HomeScreen");
      });
    } catch (error: any) {
      setLoading(false);
      alert(error?.message);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Header title="Sign Up" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          value={userName}
          onChangeText={setUsername}
          placeholderTextColor={"#000"}
        />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          autoCapitalize="words"
          value={firstName}
          onChangeText={setFirstName}
          placeholderTextColor={"#000"}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          autoCapitalize="words"
          value={lastName}
          onChangeText={setLastName}
          placeholderTextColor={"#000"}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor={"#000"}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={"#000"}
        />
        <View style={styles.buttonContainer}>
          <Button
            title={loading ? "Signing up..." : "Sign Up"}
            onPress={() => {
              handleSignUp();
            }}
            disabled={loading}
          />
          <Button title="Go to Login" onPress={() => linkTo("/LoginScreen")} />
          <Button title="Go to Login" onPress={() => handleSignInOAuth()} />
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    paddingTop: 200,
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  input: {
    width: "100%",
    maxWidth: 320,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 16,
    color: "#000",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },
});
