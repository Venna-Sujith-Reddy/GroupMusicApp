import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider , signInWithPopup , signOut } from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAtdiZHJb-6dfQrfHLXIpq9JYZbxhq6R8I",
  authDomain: "music-app-254.firebaseapp.com",
  projectId: "music-app-254",
  storageBucket: "music-app-254.appspot.com",
  messagingSenderId: "716167930153",
  appId: "1:716167930153:web:42e162bcd939e8da805738",
  measurementId: "G-QMW80LLZ2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    let result = await signInWithPopup(auth, provider);
    console.log(result);
    console.log(result.user.displayName)
}

export const logout = async () => {
    await signOut(auth)
}

