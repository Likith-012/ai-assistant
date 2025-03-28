// src/app/signup/signupFunction.ts
import { auth } from '../../../lib/firebase';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const handleSignup = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Update user profile with display name
    await updateProfile(userCredential.user, {
      displayName: name
    });

    return { success: true, user: userCredential.user };
  } catch (error: unknown) {
    console.error('Signup failed:', error);

    let errorMessage = 'Signup failed'; // Default error message

    // Handle specific Firebase errors
    if (error instanceof Error && 'code' in error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "Email already in use";
          break;
        case "auth/weak-password":
          errorMessage = "Password should be at least 6 characters";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address";
          break;
      }
    }

    return { success: false, error: errorMessage };
  }
};