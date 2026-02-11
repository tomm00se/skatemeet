import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("/Users/moose/Developer/Play/skatemeet/assets/images/logo_L.png")}
        //TODO: Fix this
        style={styles.logo}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default Header;
