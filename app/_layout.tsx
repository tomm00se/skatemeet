import AuthProvider from "@/providers/auth-provider";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function Layout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "index", headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          options={{ title: "Login", headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          options={{ title: "Sign Up", headerShown: false }}
        />
      </Stack>
    </AuthProvider>
  );
}
