import React from "react";
import "./Weather.css";

export default function Current() {
  return (
    <div class="row">
      <div class="col">
        <ul>
          <div class="flex-row">
            <li>
              <span class="current-temp" id="current-temp"></span>
              <small class="unit">°F</small>
            </li>
            <li class="condition" id="condition"></li>
          </div>
        </ul>
      </div>
      <div class="col">
        <img
          src="#"
          class="weather-icon"
          alt="weather-icon"
          id="weather-icon"
        />
      </div>
      <div class="row">
        <ul>
          <li>
            Wind Speed: <span id="wind-speed"></span> mph
          </li>
          <li>
            Humidity: <span id="humidity"></span>%
          </li>
        </ul>
      </div>
    </div>
  );
}
