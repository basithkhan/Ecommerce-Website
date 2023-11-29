import React, { Fragment } from "react";
import { FaScroll } from "react-icons/fa"; // Import the specific FontAwesome icon
import "./Home.css";
import Product from "./product.js";

const product = {
    name: "Blue Tshirt",
    image: [{ url: "https://i.ibb.co/DRST11n/1.webp"}],
    price: "rs.250/-",
    _id:"basith"
}

const Home = () => {
  return (
    <Fragment>
      <div className="banner">
        <p>Welcome To E-Commerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>
            Scroll <FaScroll />
          </button>
        </a>
      </div>
      <h2 className="homeheading">Featured Products</h2>
      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </Fragment>
  );
};

export default Home;
