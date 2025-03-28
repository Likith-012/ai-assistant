import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = { /* Paste your config from Firebase Console */ };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
