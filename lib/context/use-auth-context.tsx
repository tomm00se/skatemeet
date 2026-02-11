import { Session } from "@supabase/supabase-js";
import { createContext, useContext } from "react";

export type AuthData = {
  session?: Session | null;
  profile?: any | null;
  isLoadingAuthContext: boolean;
  isLoggedIn: boolean;
};

export const AuthContext = createContext<AuthData>({
  session: undefined,
  profile: undefined,
  isLoadingAuthContext: true,
  isLoggedIn: false,
});

export const useAuthContext = () => useContext(AuthContext);
