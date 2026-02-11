import { AuthContext } from "@/lib/context/use-auth-context";
import { supabase } from "@/lib/supabaseClient";
import type { Session } from "@supabase/supabase-js";
import { PropsWithChildren, useEffect, useState } from "react";

export default function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | undefined | null>();
  const [profile, setProfile] = useState<any>();
  const [isLoadingAuthContext, setisLoadingAuthContext] =
    useState<boolean>(true);
  // Fetch the session once, and subscribe to auth state changes
  useEffect(() => {
    const fetchSession = async () => {
      setisLoadingAuthContext(true);
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) {
        console.error("Error fetching session:", error);
      }
      setSession(session);
      setisLoadingAuthContext(false);
    };

    fetchSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("Auth state changed:", { event: _event, session });
      setSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      setisLoadingAuthContext(true);
      if (session) {
        const { data } = await supabase
          .from("profiles")
          .select("*")
          .eq("profile_id", session.user.id)
          .single();
        setProfile(data);
      } else {
        setProfile(null);
      }
      setisLoadingAuthContext(false);
    };
    fetchProfile();
  }, [session]);

  return (
    <AuthContext.Provider
      value={{
        session,
        isLoadingAuthContext,
        profile,
        isLoggedIn: session !== undefined && session !== null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
