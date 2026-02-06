import { supabase } from "./supabaseClient";

export const SignInOAuth = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "discord",
  });
};
