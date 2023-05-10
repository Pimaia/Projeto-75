import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCC8zGbLGYhG0YxgxvknlocPEzfuh8jjZg",
  authDomain: "projeto-75-a0e44.firebaseapp.com",
  projectId: "projeto-75-a0e44",
  storageBucket: "projeto-75-a0e44.appspot.com",
  messagingSenderId: "1076153932331",
  appId: "1:1076153932331:web:d03fc881c370d953c7686e"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
