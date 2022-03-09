import "./styles.css";
import axios from "axios";

export default function App() {
  //const url = "https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=0d035b97a9d8883de99fce56852edb02";

  return (
    <div className="app">
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
            <p>Feels</p>
          </div>
          <div className="humidity">
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}
