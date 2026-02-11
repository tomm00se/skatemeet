import { SignOutButton } from "@/components/auth-buttons/SignOutButton";
import { useAuthContext } from "@/lib/context/use-auth-context";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const HomeScreen = () => {
  const { profile } = useAuthContext();
  const [loading, setLoading] = useState(false);

  console.log("Profile:", profile);

  return (
    <View style={styles.container}>
      <SignOutButton />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingTop: 200,
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
  },
});
