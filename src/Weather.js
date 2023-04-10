import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Seacrh for a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1> Naples</h1>
      <ul>
        <li>Monday 10.04 14:33</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            alt="sunny"
          />{" "}
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>💧80%</li>
            <li>🌬️10 Km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
