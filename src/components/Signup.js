import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";
import firebase from "../fireBase";

const Signup = ({ history }) => {
  const handleSignup = useCallback(
    async event => {
      event.preventDefault();
      // here we get value of fields by the elements of form.
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Passwword" />
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default withRouter(Signup);
