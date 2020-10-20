import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      {/* Product Id, title,price,image */}
      <div className="home_row">
        <Product
          id={12345}
          title="Women's Saree"
          price={1000}
          image="https://images-na.ssl-images-amazon.com/images/I/71b5JqOaJcL._UY550_.jpg"
        />
        <Product
          id={22345}
          title="Women's Saree"
          price={1000}
          image="https://www.grabandpack.com/media/catalog/product/cache/1/image/705x/9df78eab33525d08d6e5fb8d27136e95/s/o/soft-silk-saree-in-green-with-rich-pallu-silk-sarees-online-gnp005405.jpg"
        />
        <Product
          id={32345}
          title="Men's Shirt"
          price={800}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQh9RjxmbUAb2ynn1fV2ESIIx4AQo7ZumMlqrFt4DnB4PPt1AzwdJm7qWEuBS5drVP2o7wQTf5m&usqp=CAc"
        />
      </div>
      <div className="home_row">
        <Product
          id={42345}
          title="Kurti"
          price={1500}
          image="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2389776/2018/4/19/11524127369994-Jaipur-Kurti-Women-Green-Solid-A-Line-Kurta-6011524127369842-1.jpg"
        />
        <Product
          id={52345}
          title="Frock"
          price={500}
          image="https://www.dhresource.com/0x0/f2/albu/g1/M01/50/03/rBVaGVn3IgiAaRYsAAQKRGdPyK0750.jpg"
        />
        <Product
          id={62345}
          title="Boy's Dress"
          price={800}
          image="https://theglamtrend.com/wp-content/uploads/2019/07/711jJwlVIL._UL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
