import "./styles.css";
import axios from "axios";

export default function App() {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=0d035b97a9d8883de99fce56852edb02";

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
