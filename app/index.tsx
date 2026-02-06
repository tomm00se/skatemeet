import Header from "@/components/ui/atoms/header";
import { linkTo } from "expo-router/build/global-state/routing";
import { Button, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Login"
          onPress={() => {
            linkTo("/LoginScreen");
          }}
        />
        <Button
          title="Go to Sign Up"
          onPress={() => {
            linkTo("/SignUpScreen");
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 100,
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 20,
  },
});
