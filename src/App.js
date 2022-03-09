import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0d035b97a9d8883de99fce56852edb02`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter your location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Barcelona</p>
          </div>
          <div className="temp">
            <h1>Temperature</h1>
          </div>
          <div className="description">
            <p>Description</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">40</p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 MPH</p>
            <p>Wind Speed </p>
          </div>
        </div>
      </div>
    </div>
  );
}
