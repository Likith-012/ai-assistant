import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const handleLogin = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};