import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB-2ViiYtWS72ixxI81HzcopmtzQf9mix4",
  authDomain: "gaonbazar.firebaseapp.com",
  databaseURL: "https://gaonbazar.firebaseio.com",
  projectId: "gaonbazar",
  storageBucket: "gaonbazar.appspot.com",
  messagingSenderId: "826685715111",
  appId: "1:826685715111:web:5def0bb8fc1da54f45e182",
  measurementId: "G-YFY4PL90HS",
});
const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth };
