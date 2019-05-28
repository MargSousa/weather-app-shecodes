import React, { Component } from "react";
import "./WeeklyForecast.css";

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
              <td><span id="week-day1"></span></td>
              <td><img id="week-icon1" src="#" alt="Weather Icon"/></td>
              <td><span id="max-temp1"></span><span id="min-temp1"> </span></td>
            </tr>
            <tr>
              <td><span id="week-day2"></span></td>
              <td><img id="week-icon2" src="#" alt="Weather Icon"/></td>
              <td><span id="max-temp2"></span><span id="min-temp2"></span></td>
            </tr>
            <tr>
              <td><span id="week-day3"></span></td>
              <td><img id="week-icon3" src="#" alt="Weather Icon"/></td>
              <td><span id="max-temp3"></span><span id="min-temp3"></span></td>
            </tr>
            <tr>
              <td><span id="week-day4"></span></td>
              <td><img id="week-icon4" src="#" alt="Weather Icon"/></td>
              <td><span id="max-temp4"></span><span id="min-temp4"></span></td>
            </tr>
            <tr>
              <td><span id="week-day5"></span></td>
              <td><img id="week-icon5" src="#" alt="Weather Icon"/></td>
              <td><span id="max-temp5"></span><span id="min-temp5"></span></td>
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