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
              <td><span id="week-day1">SAT</span></td>
              <td><img id="week-icon1" src={CloudyIcon} alt="Weather Icon"/></td>
              <td><span id="max-temp1">22°</span><span id="min-temp1"> / 13°C</span></td>
            </tr>
            <tr>
              <td><span id="week-day2">SAT</span></td>
              <td><img id="week-icon2" src={CloudyIcon} alt="Weather Icon"/></td>
              <td><span id="max-temp2">22°</span><span id="min-temp2"> / 13°C</span></td>
            </tr>
            <tr>
              <td><span id="week-day3">SAT</span></td>
              <td><img id="week-icon3" src={SunnyIcon} alt="Weather Icon"/></td>
              <td><span id="max-temp3">22°</span><span id="min-temp3"> / 13°C</span></td>
            </tr>
            <tr>
              <td><span id="week-day4">SAT</span></td>
              <td><img id="week-icon4" src={CloudyIcon} alt="Weather Icon"/></td>
              <td><span id="max-temp4">22°</span><span id="min-temp4"> / 13°C</span></td>
            </tr>
            <tr>
              <td><span id="week-day5">SAT</span></td>
              <td><img id="week-icon5" src={SunnyIcon} alt="Weather Icon"/></td>
              <td><span id="max-temp5">22°</span><span id="min-temp5"> / 13°C</span></td>
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