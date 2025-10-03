import React, { useEffect, useState } from "react";
import logo from "/icons/LOGO.png"; 
import "./splashScreen.css";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1500); 
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash">
      <img src={logo} alt="Logo" className="splash-logo" />
      <div className="loader"></div> 
    </div>
  );
}





