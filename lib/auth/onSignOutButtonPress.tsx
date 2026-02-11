import { supabase } from "@/lib/supabaseClient";
import { linkTo } from "expo-router/build/global-state/routing";

export const onSignOutButtonPress = async () => {
  const { error } = await supabase.auth.signOut();
  linkTo("/Login");
  if (error) {
    console.error("Error signing out:", error);
  }
};
