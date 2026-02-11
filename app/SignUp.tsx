import Header from "@/components/ui/Header";
import createUser from "@/lib/auth/createUser";
import { linkTo } from "expo-router/build/global-state/routing";
import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, TextInput, View } from "react-native";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUsername] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    console.log("Attempting to sign up with:", {
      email,
      password,
      firstName,
      lastName,
      userName,
    });
    setLoading(true);
    try {
      await createUser(email, password, firstName, lastName, userName);
      setLoading(false);
      linkTo("/Home");
    } catch (error: any) {
      setLoading(false);
      alert(error.message || "Error signing up");
    }
  };

  // const handleDiscordSignIn = async () => {
  //   setLoading(true);
  //   try {
  //     await DiscordSignIn();
  //     setLoading(false);
  //     linkTo("/Home");
  //   } catch (error: any) {
  //     setLoading(false);
  //     alert(error?.message || "Error signing in with Discord");
  //   }
  // };

  return (
    <ScrollView style={{ flex: 1 }}>
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
          <Button title="Go to Login" onPress={() => linkTo("/Login")} />
          {/* <Button title="Login via Discord" onPress={handleDiscordSignIn} /> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

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
