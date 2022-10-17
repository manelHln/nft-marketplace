import React from 'react';
import assets from '../assets';

const Download = () => {
  return (
    <div className="container">
      <div className="subsection">
        <div>
          <h1 className="text-h1 black-text">Download the Source Code</h1>
          <p className="text-p black-text">Get the full source code on GitHub</p>
        </div>
        <button className="download-btn" onClick={()=> window.open("https://github.com/manelHln/crypto-app")}>Source Code</button>
        <div className="center">
          <img 
            src={assets.scene}
            alt="download_png"
            className="download-img"
          />
        </div>
      </div>
    </div>
  )
}

export default Download