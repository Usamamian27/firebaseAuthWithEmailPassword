import React from "react";
import firebase from "../fireBase";
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => firebase.auth().signOut()}>logout</button>
    </div>
  );
}
