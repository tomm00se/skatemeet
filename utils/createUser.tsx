import { supabase } from "./supabaseClient";

const createUser = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  userName: string,
) => {
  // 1. Create user in Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  const user = data.user || data?.user;
  // 2. Insert extra user data into your 'users' table (if needed)
  if (user) {
    const { error: insertError } = await supabase.from("users").insert([
      {
        id: user.id, // Use the same id as the auth user
        username: userName,
        first_name: firstName,
        last_name: lastName,
      },
    ]);
    if (insertError) {
      throw insertError;
    }
  }

  return data;
};

export default createUser;
