import { useAuthContext } from "@/lib/context/use-auth-context";
import { SplashScreen } from "expo-router";

SplashScreen.preventAutoHideAsync();

export const SplashScreenController = () => {
  const { isLoadingAuthContext } = useAuthContext();
  if (!isLoadingAuthContext) {
    SplashScreen.hideAsync();
  }
  return null;
};
