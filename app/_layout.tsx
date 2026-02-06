import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "index", headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        options={{ title: "Login", headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        options={{ title: "Sign Up", headerShown: false }}
      />
    </Stack>
  );
}
