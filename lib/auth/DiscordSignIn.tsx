import { supabase } from "../supabaseClient";

export const DiscordSignIn = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo: `http://localhost:8081/HomeScreen`,
      },
    });
    if (error) {
      const errorMessage = "Error during OAuth sign-in: " + error.message;
      throw new Error(errorMessage);
    }
    console.log("OAuth sign-in data:", data);
  } catch (error) {
    console.error("Error during OAuth sign-in:", error);
  }
};
