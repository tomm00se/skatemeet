import Header from "@/components/ui/Header";
import { DiscordSignIn } from "@/lib/auth/DiscordSignIn";
import { supabase } from "@/lib/supabaseClient";
import { linkTo } from "expo-router/build/global-state/routing";
import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, TextInput, View } from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      setLoading(true);
      await supabase.auth.signInWithPassword({ email, password });
      setLoading(false);
      linkTo("/Home");
    } catch (error: any) {
      setLoading(false);
      alert(error.message || "Error logging in");
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Header title="Login" />
      </View>
      <View style={styles.container}>
        <TextInput
          style={[styles.input]}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor={"#000"}
        />
        <TextInput
          style={[styles.input]}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={"#000"}
        />
        <View style={styles.buttonContainer}>
          <Button
            title={loading ? "Logging in..." : "Login"}
            onPress={() => {
              handleSignIn();
            }}
            disabled={loading}
          />
          <Button title="Sign Up" onPress={() => linkTo("/SignUp")} />
          <Button title="Discord" onPress={DiscordSignIn} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    paddingTop: 200,
    alignItems: "center",
  },
  container: {
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
