import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "../src/Firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        {/*Logo  */}
        <img src={require("./logo.png")} className="header_logo" alt="logo" />

        {/* Cart with number */}
      </Link>
      <div className="header_nav">
        {/* Signin */}

        <Link to={!user && "/login"} className="header_link">
          <div onClick={login} className="header_option">
            <span className="header_option_Two">
              {user ? "Signout" : "Signin"}
            </span>
          </div>
        </Link>
        <Link to="/checkout" className="header_link">
          <div className="header_option_Basket">
            <ShoppingBasketIcon
              style={{ fontSize: 35 }}
              className="header_cart_one"
            />
            <span className="header_cart_two">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
