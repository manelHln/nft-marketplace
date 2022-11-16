import React from "react";
import {react, javascript} from "../assets";


const FeatureCard = ({ iconUrl, iconText }) =>  (
    <div className="feature-card">
      <img src={iconUrl} alt="icon" className="feature-img" />
      <p className="feature-text">{iconText}</p>
    </div>
  )

const Feature = () => {
  return (
    <div className="container bg-primary banner03">
      <div className="subsection">
        <div>
          <h1 className="white-text text-h1">Technologies</h1>
          <p className="white-text text-p">
            ProNef has been developed using a cross-platform technology, React
            Native.<br />It's written in JavaScript-rendered with native code.
          </p>
        </div>
        <div className="feature-cards">
          <FeatureCard iconUrl={react} iconText="React Native" />
          <FeatureCard iconUrl={javascript} iconText="JavaScript" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
