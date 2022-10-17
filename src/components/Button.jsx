import React from "react";
import assets from "../assets";

const Button = () => {
  return (
    <div className="custom-btn" onClick={()=> window.open("https://expo.dev/@emmanuelhln/crypto-app?serviceType=classic&distribution=expo-go")}>
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
