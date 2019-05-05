import React, { Component } from "react";
import "./WeeklyForecast.css";
import SunnyIcon from "./images/weather_icons/Sunny.png";

export default class WeeklyForecast extends Component {
  render() {
    return (
      <div className="weekly-box">
        <table className="table">
          <tbody>
            <tr>
              <td colspan="3" className="weekly-title">Weekly Forecast</td>
            </tr>
            <tr>
              <td>SAT</td>
              <td><img className="weekly-icon" src={SunnyIcon} alt="Weather Icon"/></td>
              <td>22° / 13°C</td>
            </tr>
            <tr>
              <td>SUN</td>
              <td> Icon</td>
              <td>22° / 13°C</td>
            </tr>
            <tr>
              <td>MON</td>
              <td> Icon</td>
              <td>22° / 13°C</td>
            </tr>
            <tr>
              <td>TUE</td>
              <td> Icon</td>
              <td>22° / 13°C</td>
            </tr>
            <tr>
              <td>WED</td>
              <td> Icon</td>
              <td>22° / 13°C</td>
            </tr>
            <tr>
              <td>THU</td>
              <td> Icon</td>
              <td>22° / 13°C</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}