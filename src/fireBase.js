import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDKY7noBo8UeR1p22Ue0hoaXHOzc8f6BWc",
  authDomain: "first-firebase-project-e4242.firebaseapp.com",
  databaseURL: "https://first-firebase-project-e4242.firebaseio.com",
  projectId: "first-firebase-project-e4242",
  storageBucket: "first-firebase-project-e4242.appspot.com",
  messagingSenderId: "955671000060",
  appId: "1:955671000060:web:0ded4eba38f8c310bc3879",
  measurementId: "G-SP8WJ9JD9M"
};
var fire = firebase.initializeApp(firebaseConfig);
export default fire;
