import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    // This stop refresh

    e.preventDefault();
    //do the login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in and go to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (e) => {
    // This stop refresh

    e.preventDefault();
    //do the login
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in and go to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        {" "}
        <img src={require("./logo.png")} className="login_logo" alt="logo" />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>ID</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="emailid"
            required
          />
          <h5>Password</h5>
          <input
            value={password}
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button type="submit" onClick={login}>
            Signin
          </button>
          {/* <button type="submit" onClick={register}>
            Create
          </button> */}
        </form>

        <p>In case of Forgot Password.. Please call Admin</p>
      </div>
    </div>
  );
}

export default Login;
