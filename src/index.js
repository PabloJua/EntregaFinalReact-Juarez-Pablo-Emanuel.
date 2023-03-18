import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwzOwI8_1CRA51V4B3B-WGIQz7BiFS6Rw",
  authDomain: "comision45095.firebaseapp.com",
  projectId: "comision45095",
  storageBucket: "comision45095.appspot.com",
  messagingSenderId: "1083751953547",
  appId: "1:1083751953547:web:6621bfa7de93853dac508e"
};

// Initialize Firebase
initializeApp(firebaseConfig);