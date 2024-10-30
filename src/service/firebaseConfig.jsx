// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_GOOGLE_FIREBASE_API_KEY,
  authDomain: "ai-trip-planner-2fa09.firebaseapp.com",
  projectId: "ai-trip-planner-2fa09",
  storageBucket: "ai-trip-planner-2fa09.appspot.com",
  messagingSenderId: "707423632922",
  appId: "1:707423632922:web:0f5e3a07deb79a52121ba3",
  measurementId: "G-3MGHTFFGWC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);