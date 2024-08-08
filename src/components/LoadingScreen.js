// src/components/LoadingScreen.js
import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="matrix">
        <div className="matrix-content">
          <div className="matrix-line"></div>
          <div className="matrix-line"></div>
          <div className="matrix-line"></div>
          <div className="matrix-line"></div>
          <div className="matrix-line"></div>
          <div className="matrix-line"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
