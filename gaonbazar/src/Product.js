import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
function Product({ id, title, price, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //Add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
      },
    });
  };
  return (
    <div className="product">
      <Link to="ProductDetails">
        <div className="product_info">
          <p>{title}</p>
          <p className="product_price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
        </div>
        <img src={image} alt="" />
        <button onClick={addToBasket}>Add To Cart</button>
      </Link>
    </div>
  );
}

export default Product;
