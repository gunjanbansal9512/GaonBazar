import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "../src/CheckoutProduct";
import Subtotal from "../src/Subtotal";
import CurrencyFormat from "react-currency-format";
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping cart is empty</h2>
        </div>
      ) : (
        <div>
          <h2 className="checkout_title">Your shopping cart</h2>
          {/* List of check out products */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      )}
      {basket.length > 0 && (
        <div className="subtotal">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
