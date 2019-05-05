import React, { Component } from "react";
import "./Location.css";
import WeeklyForecast from "./WeeklyForecast";
import SunnyIcon from "./images/weather_icons/Sunny.png";
import SunsetIcon from "./images/weather_icons/Sunset.png";
import SunriseIcon from "./images/weather_icons/Sunrise.png";

export default class Location extends Component {
  render() {
    return (
      <div className="location-section">
        <h4 className="location-title">myLocation</h4>
        <div className="location-box">
          <div className="location-weather">
            <div className="row">
              <div className="col-sm">
                <div className="row">
                  <h4 class="location-name">Lisboa, Portugal</h4>
                </div>
                <div className="row">
                  <h5 className="location-time">15:15 PM</h5>
                  <div className="location-details">
                    <img className="location-icon" src={SunnyIcon} alt="Weather Icon"/>
                    <h5><b>Sunny</b></h5><br/>
                    <p>Precipitation: 1%</p>
                    <p>Wind: 5 km/h</p>
                    <div>
                      <img className="sunrise-icon" src={SunriseIcon} alt="Weather Icon"/><span>06:35  </span>
                      <img className="sunset-icon" src={SunsetIcon} alt="Weather Icon"/><span>20:35</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <WeeklyForecast />
              </div>
            </div>
          </div>
        </div>   
      </div>
    )
  }
}