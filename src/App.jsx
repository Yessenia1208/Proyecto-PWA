import React, { useState, useEffect } from "react";
import SplashScreen from "./pages/splashScreen";
import HomeScreen from "./pages/homeScreen";
import { registerSW } from "./pages/registrarSW";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    registerSW();
  }, []);


  return showSplash ? (
    <SplashScreen onFinish={() => setShowSplash(false)} />
  ) : (
    <HomeScreen />
  );
}

export default App;






