import { ProfileForm } from "@/components/profile/profileForm/ProfileForm";
import { useAuthContext } from "@/lib/context/use-auth-context";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export const Onboarding = () => {
  const { session } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async (data: { displayName: string }) => {
    if (!session?.user) return;

    setLoading(true);
    const { error } = await supabase
      .from("profiles")
      .update({
        display_name: data.displayName,
        onboarding_completed: true,
      })
      .eq("profile_id", session.user.id);

    if (error) {
      alert("Error updating profile: " + error.message);
      setLoading(false);
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to SK8:Meet!</Text>
        <ProfileForm onSubmit={handleUpdateProfile} isLoading={loading} />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
