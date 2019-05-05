import React, { Component } from "react";
import "./Location.css";
import WeeklyForecast from "./WeeklyForecast";
import SunnyIcon from "./images/weather_icons/Sunny.png";

export default class Location extends Component {
  render() {
    return (
      <div>
        <h4 className="location-title">myLocation</h4>
        <div className="location-box">
          <div className="location-weather">
            <div className="row">
              <div className="col-sm-7">
                <div className="row">
                  <h4>Lisboa, Portugal</h4>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <h5 id="location-hour">15:15 PM</h5>
                    <div className="sunrise-sunset">
                      <p>Sunrise: 06:50</p>
                      <p>Sunset: 20:35</p>
                    </div>
                  </div>
                  <div className="col-sm">
                    <img className="local-icon" src={SunnyIcon} alt="Weather Icon"/>
                    <p>Sunny</p>
                    <p>Precipitation: 1%</p>
                    <p>Wind: 5 km/h</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-5"><WeeklyForecast /></div>
            </div>
          </div>   
        </div>
      </div>
    )
  }
}