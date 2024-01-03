// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getAnalytics  from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCFuq44KuvfYfvUWb3Gh66dBHPR2sLLMgI',
  authDomain: 'neltflixgpt.firebaseapp.com',
  projectId: 'neltflixgpt',
  storageBucket: 'neltflixgpt.appspot.com',
  messagingSenderId: '103275160747',
  appId: '1:103275160747:web:3dc76077c2c70ef41a03ee',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
