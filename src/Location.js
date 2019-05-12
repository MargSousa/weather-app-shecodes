import React, { Component } from "react";
import "./Location.css";
import WeeklyForecast from "./WeeklyForecast";
import SunnyIcon from "./images/weather_icons/Sunny.png";
import SunsetIcon from "./images/weather_icons/Sunset.png";
import SunriseIcon from "./images/weather_icons/Sunrise.png";
import PrecipitationIcon from "./images/weather_icons/precipitation2.png";
import WindIcon from "./images/weather_icons/wind.png";

export default class Location extends Component {
  render() {
    return (
      <div className="location-section">
        <div className="location-box">
          <div className="location-weather">
            <div className="row">
              <div className="col-sm">
                <div className="row">
                  <div class="location-name">Lisboa, Portugal</div>
                </div>
                <div className="row">
                  <div className="location-time">Friday, 15:15 PM</div>
                </div>
                <div className="row">
                  <div className="col-sm location-sun">
                    <div><img className="sunrise-icon" src={SunriseIcon} alt="Sunrise Icon"/> 06:35 </div>
                    <div><img className="sunset-icon" src={SunsetIcon} alt="Sunset Icon"/>20:35</div>
                    <div className="location-details">
                      <div><img className="drop-icon" src={PrecipitationIcon} alt="Precipitation Icon"/> 1%</div>
                      <div><img className="wind-icon" src={WindIcon} alt="Wind Icon"/> 5 km/h</div>
                    </div>
                  </div>
                  <div className="col-sm">
                    <img className="location-icon" src={SunnyIcon} alt="Current Weather Icon"/>
                    <div className="location-temperature">Sunny</div>
                    <div className="location-temperature">22ºC</div>
                  </div>
                </div>
              </div>
              <div className="col-sm week">
                <WeeklyForecast />
              </div>
            </div>
          </div>
        </div>   
      </div>
    )
  }
}