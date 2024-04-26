
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDf7fstXBgi9Hys9oqk0gDAN_ExKX9OPzE",
  authDomain: "art-and-craft-authentaction.firebaseapp.com",
  projectId: "art-and-craft-authentaction",
  storageBucket: "art-and-craft-authentaction.appspot.com",
  messagingSenderId: "376628681773",
  appId: "1:376628681773:web:bf90d8fa943dc9e94c2ca4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;