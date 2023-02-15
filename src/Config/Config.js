import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCgX_GNVhSCi1WmdVc243nHAh2BUUUHTpM",
  authDomain: "pashmina365-32998.firebaseapp.com",
  projectId: "pashmina365-32998",
  storageBucket: "pashmina365-32998.appspot.com",
  messagingSenderId: "270366482685",
  appId: "1:270366482685:web:d8e2e169a1ffe5ecbade94"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}