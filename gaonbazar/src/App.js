import React, { useEffect } from "react";
import "./App.css";
import Header from "../src/Header";
import Home from "../src/Home";
import Checkout from "../src/Checkout";
import Login from "../src/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../src/Firebase";
function App() {
  const [{ user, basket }, dispatch] = useStateValue();
  //piece of code whhich runs based on a given condition
  useEffect(() => {
    localStorage.setItem("basket", basket);
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user has logged in...
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      //Any cleanup operation go in here
      unsubscribe();
    };
  }, []);
  console.log(localStorage.getItem("basket"));
  console.log(user);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            {/* Checkout page */}
            <Checkout />
          </Route>
          <Route path="/login">
            {/* Login Page */}
            <Login />
          </Route>
          <Route path="/">
            {/* Home page  */}
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
