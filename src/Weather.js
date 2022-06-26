import React from "react";
import "./Weather.css";
export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 30,
    date: "Tuesday 12:12 PM",
    description: "Rainy",
    imgURL: "https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png",
    humidity: 80,
    windSpeed: 10,
  };
  return (
    <div className="Weather">
      <div className="Weather">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autocomplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>Last updated: {weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgURL}
                alt={weatherData.description}
                class="float-left"
              />
              <div className="float-left">
                <strong>{weatherData.temperature}</strong>
                <span className="units">
                  <a href="/">°C</a> |<a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.windSpeed}mph</li>
            </ul>
          </div>
        </div>
      </div>
      <small>
        <a
          href="https://github.com/Moremirmir/Vanilla2-Weather-App"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        by Miriam DaSilva
      </small>
    </div>
  );
}
