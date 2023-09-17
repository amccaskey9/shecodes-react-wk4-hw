import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search.js";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div class="container">
      <div class="weather-app">
        <Search />
        <div class="row">
          <div class="col-6">
            <h1 id="city">City</h1>
          </div>
          <div class="col">
            <p>
              Updated: <span id="date"></span>
            </p>
          </div>
        </div>
        <Weather />
      </div>
      <div class="weather-forecast" id="forecast"></div>
      <footer>
        <a
          href="https://www.github.com/amccaskey9/vanilla-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Aiyana McCaskey
        <div>
          Hosted on{" "}
          <a href="http://www.netlify.com" target="_blank" rel="noreferrer">
            Netlify
          </a>
        </div>
      </footer>
    </div>
  );
}
