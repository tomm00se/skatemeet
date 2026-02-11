import { supabase } from "../supabaseClient";

const createUser = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  userName: string,
) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    console.log("Supabase signUp response:", { data, error });
    if (error) {
      console.log("This is an sign up error:", error);
      throw new Error(error.message);
    }
    console.log("User created successfully:", data);
    const user = data.user || data?.user;
    if (user) {
      const { error: insertError } = await supabase.from("profiles").insert([
        {
          profile_id: user.id, // Use the same id as the auth user
          username: userName,
          first_name: firstName,
          last_name: lastName,
        },
      ]);
      if (insertError) {
        console.log("This is an insertError:", insertError);
        throw insertError;
      }
    }

    return data;
  } catch (error: any) {
    console.error("Error creating user:", error);
    throw new Error(error.message || "Error creating user");
  }
};

export default createUser;
