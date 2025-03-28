import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";

export default function TestPage() {
  const testFirebase = async () => {
    try {
      await signInWithEmailAndPassword(auth, "test@test.com", "123456");
      console.log("Authentication successful!");
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  // Call the function when component mounts
  useEffect(() => {
    testFirebase();
  }, []);

  return <div>Testing Firebase Authentication...</div>;
}