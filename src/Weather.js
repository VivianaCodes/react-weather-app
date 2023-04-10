import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Seacrh for a city"
              className="form-control"
              autoFocus="on"
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
      <h1> Naples</h1>
      <ul>
        <li>Monday 10.04 14:33</li>
        <li>Sunny</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            alt="sunny"
          />
          <span className="temperature">6</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity💧80%</li>
            <li>Wind🌬️10 Km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
