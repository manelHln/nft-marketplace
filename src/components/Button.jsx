import React from "react";
import assets from "../assets";

const Button = () => {
  return (
    <div className="custom-btn">
      <div className="icon">
        <img src={assets.expo} alt="expo_icon" />
      </div>

      <div className="btn-text">
        <p>View it on</p>
        <p>Expo store</p>
      </div>
    </div>
  );
};

export default Button;
