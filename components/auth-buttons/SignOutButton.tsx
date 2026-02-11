import React from "react";
import { Button } from "react-native";
import { onSignOutButtonPress } from "../../lib/auth/onSignOutButtonPress";

export const SignOutButton = () => {
  return <Button title="Sign out" onPress={onSignOutButtonPress} />;
};
