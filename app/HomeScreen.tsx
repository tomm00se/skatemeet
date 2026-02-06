import { supabase } from "@/utils/supabaseClient";
import React from "react";
import { StyleSheet, View } from "react-native";

const HomeScreen = () => {
  const userData = supabase.auth.getUser();
  console.log("User data on HomeScreen:", userData);
  return <View style={styles.container}></View>;
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
