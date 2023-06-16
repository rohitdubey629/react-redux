import React from "react";
import image from "../images/download.jpeg";
import image2 from "../images/OIP.jpeg";

const Home = () => {
  return (
    <div>
      <div className="add-To-Cart">
        <img src={image2} alt="" />
      </div>
      <h1>Home component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src={image} alt="" />
        </div>
        <div className="text-wrapper item">
          <span>IPhone</span>
          <br />
          <span>Price:$1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
