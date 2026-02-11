import { useAuthContext } from "@/lib/context/use-auth-context";
import AuthProvider from "@/providers/auth-provider";
import { Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootNavigation = () => {
  const { session, isLoadingAuthContext, profile } = useAuthContext();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoadingAuthContext) return;

    const inAuthGroup = segments[0] === "(auth)";
    const inOnboardingGroup = segments[0] === "(onboarding)";

    if (!session && !inAuthGroup && !inOnboardingGroup) {
      //If the user is not signed in, restrict them to login and sign up
      router.replace("/Login");
    } else if (profile && !inOnboardingGroup && !profile.onboarding_completed) {
      router.replace("/(onboarding)");
    } else if (
      session &&
      (inAuthGroup || inOnboardingGroup || segments[0] === undefined)
    ) {
      router.replace("/(tabs)");
    } else if (
      session &&
      profile?.onboarding_completed && // <--- Only go to tabs if we KNOW onboarding is done
      (inAuthGroup || inOnboardingGroup || segments[0] === undefined)
    ) {
      router.replace("/(tabs)");
    }

    SplashScreen.hideAsync();
  }, [session, isLoadingAuthContext, profile, segments, router]);
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="Login" options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default function Layout() {
  return (
    <AuthProvider>
      <RootNavigation />
    </AuthProvider>
  );
}
