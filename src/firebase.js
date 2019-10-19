import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBU1PvHTYJga5qW_hLUz-DVpcBYtrCCexI",
  authDomain: "authentication-21164.firebaseapp.com",
  databaseURL: "https://authentication-21164.firebaseio.com",
  projectId: "authentication-21164",
  storageBucket: "",
  messagingSenderId: "821743352009",
  appId: "1:821743352009:web:8cfd3002c5baea219f3518"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
