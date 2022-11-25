import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import "./Components/Home.css";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Home />
    </div>
  );
}
