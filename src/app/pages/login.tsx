import { handleLogin } from "../loginFunction";

export default function LoginPage() {
  return <button onClick={() => handleLogin("test@test.com", "123456")}>Login</button>;
};

import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to dashboard on success
      window.location.href = "/dashboard";
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Sign In</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}