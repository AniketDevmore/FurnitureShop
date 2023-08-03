import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LandingPage from "./components/landingPage/LandingPage";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
