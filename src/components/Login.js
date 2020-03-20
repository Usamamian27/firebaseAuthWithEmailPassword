import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router-dom";
import firebase from "../fireBase";
import { AuthContext } from "../auth/auth";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      // here we get value of fields by the elements of form.
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Passwword" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default withRouter(Login);
