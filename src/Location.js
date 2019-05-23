import React, { Component } from "react";
import "./Location.css";
import WeeklyForecast from "./WeeklyForecast";
import SunnyIcon from "./images/weather_icons/Sunny.png";
import SunsetIcon from "./images/weather_icons/Sunset.png";
import SunriseIcon from "./images/weather_icons/Sunrise.png";
import PrecipitationIcon from "./images/weather_icons/precipitation2.png";
import WindIcon from "./images/weather_icons/wind.png";

export default class Location extends Component {

  getLocationTemperature = () => {
    let buttonTemp = document.getElementById("button-one");
    let localTemp = document.getElementById("location-temperature");
    let temperature = 15;
    let temperatureFahrneit = Math.round(temperature * (9/5) + 32);

    if (buttonTemp.classList.contains("active")) {
      localTemp.innerHTML = `${temperature}°C`;
    } else {
      localTemp.innerHTML = `${temperatureFahrneit}°F`;
    }
  };

  render() {
    return (
      <div className="location-section">
        <div className="location-box">
          <div className="location-weather">
            <div className="row">
              <div className="col-sm">
                <div className="row">
                  <div className="location-name"><span id="location">Lisboa, Portugal</span></div>
                </div>
                <div className="row">
                  <div id="location-time">Friday, 15:15 PM</div>
                </div>
                <div className="row">
                  <div className="col-sm location-main" id="small-screen">
                    <img id="location-icon" src={SunnyIcon} alt="Current Weather Icon"/>
                    <div id="location-temperature">22ºC</div>
                    <div id="location-description">Sunny</div>
                  </div>
                  <div className="col-sm location-sun">
                    <div><img className="sunrise-icon" src={SunriseIcon} alt="Sunrise Icon"/><span id="sunrise">06:11</span></div>
                    <div><img className="sunset-icon" src={SunsetIcon} alt="Sunset Icon"/><span id="sunset">20:44</span></div>
                    <div className="location-details">
                      <div><img className="drop-icon" src={PrecipitationIcon} alt="Precipitation Icon"/> <span id="precipitation">5%</span></div>
                      <div><img className="wind-icon" src={WindIcon} alt="Wind Icon"/><span id="wind">  12 km/h</span></div>
                    </div>
                  </div>
                  <div className="col-sm location-main" id="large-screen">
                    <img id="location-icon" src={SunnyIcon} alt="Current Weather Icon"/>
                    <div id="location-temperature">22ºC</div>
                    <div id="location-description">Sunny</div>
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