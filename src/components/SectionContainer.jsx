import React from "react";
import Button from "./Button";

const SectionContainer = ({
  title,
  desc,
  showBtn,
  banner,
  mockupImg,
  reverse,
}) => {
  return (
    <div
      className={`container ${banner} ${reverse ? "bg-white" : "bg-primary"}`}
    >
      <div className={`section ${reverse ? "section-reverse" : null}`}>
        <div
          className={`section-content ${reverse ? "text-right" : null} ${
            reverse ? " fadeRightMini" : " fadeLeftMini"
          }`}
        >
          <h1 className={`text-h1 ${reverse ? "black-text" : "white-text"}`}>
            {title}
          </h1>
          <p className={`text-p ${reverse ? "black-text" : "white-text"}`}>
            {desc}
          </p>
          {showBtn ? <Button /> : null}
        </div>
        <div className="section-img">
          <img
            src={mockupImg}
            alt="banner"
            className={`
           ${reverse ? " fadeLeftMini" : " fadeRightMini"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionContainer;
