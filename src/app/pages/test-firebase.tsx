import { auth, db } from "@/lib/firebase";
import { signInWithEmailAndPassword, doc, setDoc } from "firebase/auth";
import { useState } from "react";

export default function TestFirebase() {
  const [loading, setLoading] = useState(false);

  const testFirebase = async () => {
    setLoading(true);
    try {
      // Auth test
      await signInWithEmailAndPassword(auth, "test@test.com", "123456");
      
      // Firestore test
      await setDoc(doc(db, "test", "123"), { hello: "world" });
      alert("Firebase works!");
    } catch (error) {
      alert(`Error: ${error.message}`);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Firebase Test</h1>
      <button onClick={testFirebase} disabled={loading}>
        {loading ? "Testing..." : "Test Firebase"}
      </button>
    </div>
  );
}