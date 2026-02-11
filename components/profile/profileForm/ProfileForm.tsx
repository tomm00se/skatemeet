import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface ProfileFormProps {
  initialName?: string;
  onSubmit: (data: { displayName: string }) => void;
  isLoading: boolean;
}

export const ProfileForm = ({
  initialName = "",
  onSubmit,
  isLoading,
}: ProfileFormProps) => {
  const [displayName, setDisplayName] = useState(initialName);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>What should we call you?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your skate name..."
        value={displayName}
        onChangeText={setDisplayName}
        autoFocus
      />
      <TouchableOpacity
        style={[styles.button, isLoading && styles.buttonDisabled]}
        onPress={() => onSubmit({ displayName })}
        disabled={isLoading || !displayName.trim()}
      >
        <Text style={styles.buttonText}>
          {isLoading ? "Saving..." : "Let's Go!"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, width: "100%" },
  label: { fontSize: 18, marginBottom: 10, fontWeight: "bold" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonDisabled: { opacity: 0.5 },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
