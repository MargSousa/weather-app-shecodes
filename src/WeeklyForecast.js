import React, { Component } from "react";
import "./WeeklyForecast.css";
import SunnyIcon from "./images/weather_icons/Sunny.png";
import CloudyIcon from "./images/weather_icons/Clouds.png";

export default class WeeklyForecast extends Component {

  render() {
    return (
      <div className="weekly-box">
        <table className="week-table table-sm w-auto">
          <tbody>
            <tr>
              <td colSpan="3" className="weekly-title">Weekly Forecast</td>
            </tr>
            <tr>
              <td><span className="week-day">SAT</span></td>
              <td><img className="weekly-icon" src={SunnyIcon} alt="Weather Icon"/></td>
              <td className="second-column"><span className="max-temp">22°</span><span className="min-temp"> / 13°C</span></td>
            </tr>
            <tr>
              <td><span className="week-day">SAT</span></td>
              <td><img className="weekly-icon" src={CloudyIcon} alt="Weather Icon"/></td>
              <td><span className="max-temp">22°</span><span className="min-temp"> / 13°C</span></td>
            </tr>
            <tr>
              <td><span className="week-day">SAT</span></td>
              <td><img className="weekly-icon" src={SunnyIcon} alt="Weather Icon"/></td>
              <td><span className="max-temp">22°</span><span className="min-temp"> / 13°C</span></td>
            </tr>
            <tr>
              <td><span className="week-day">SAT</span></td>
              <td><img className="weekly-icon" src={CloudyIcon} alt="Weather Icon"/></td>
              <td><span className="max-temp">22°</span><span className="min-temp"> / 13°C</span></td>
            </tr>
            <tr>
              <td><span className="week-day">SAT</span></td>
              <td><img className="weekly-icon" src={SunnyIcon} alt="Weather Icon"/></td>
              <td><span className="max-temp">22°</span><span className="min-temp"> / 13°C</span></td>
            </tr>
            <tr className="week-footer">
              <td colSpan="3"><a href="https://www.weatherbug.com/weather-forecast/now/lisboa-lisboa-po?center=51.89,-8.49,7" target="_blank" rel="noopener noreferrer" className="link-info">Click here for more information</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}