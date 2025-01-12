import "./styles.css";
import React from "react";
import axios from "axios";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <p>
        The website in published
        <a href="https://weather-if-i.netlify.app/"> here</a>
      </p>
    </div>
  );
}
