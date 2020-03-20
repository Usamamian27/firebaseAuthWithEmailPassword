import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import fire from "./fireBase";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { AuthProvider } from "./auth/auth";
import PrivateRoute from "./auth/PrivateRoute";
const db = fire.firestore();
db.settings({ timestampsInSnapshots: true });

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Router>
    </AuthProvider>
  );
};
// function App() {
//   const [name, changeName] = useState("");
//   useEffect(() => {
//     //real time data
//     // db.collection("products")
//     //   .where("qty", ">", 10)
//     //   .onSnapshot(snapShot => {
//     //     let changes = snapShot.docChanges();
//     //     changes.forEach(result => {
//     //       console.log(result.doc.data());
//     //     });
//     //   });

//     // db.collection("products")
//     //   .where("qty", ">", 10)
//     //   .get()
//     //   .then(snap => {
//     //     snap.docs.forEach(doc => console.log(doc.data()));
//     //   })
//     //   .catch(error => console.log("error", error));
//   });

//   function deleteproduct() {
//     db.collection("products")
//       .doc("7ekIAMl6pIhkyku4a3mC")
//       .delete();
//   }
//   function handleSubmit() {
//     db.collection("products").add({
//       name: name,
//       qty: 12
//     });
//     // let messageRef = fire
//     //   .database()
//     //   .ref("object")
//     //   .orderByKey()
//     //   .limitToLast(100);
//     // fire
//     //   .database()
//     //   .ref("message")
//     //   .push()
//     //   .set({
//     //     date_of_birth: "June 23, 1912",
//     //     full_name: [
//     //       {
//     //         first: name,
//     //         last: name
//     //       },
//     //       {
//     //         first: name,
//     //         last: name
//     //       },
//     //       {
//     //         first: name,
//     //         last: name
//     //       }
//     //     ]
//     //   });
//   }
//   return (
//     <div>
//       <ul></ul>
//       <input
//         name="name"
//         value={name}
//         onChange={e => changeName(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Submit</button>
//       <button onClick={deleteproduct}>delete</button>
//     </div>
//   );
// }

export default App;
