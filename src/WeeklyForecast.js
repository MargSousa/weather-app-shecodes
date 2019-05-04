import React, { Component } from "react";
import "./WeeklyForecast.css";

export default class WeeklyForecast extends Component {
  render() {
    return (
      <div className="weekly-box">
        <table class="table">
          <div className="weekly-title">Weekly Forecast</div>
          <tbody>
            <tr>
              <td>SAT</td>
              <td>Sunny Icon</td>
              <td>22°  / 13°C</td>
            </tr>
            <tr>
              <td>SUN</td>
              <td>Sunny Icon</td>
              <td>22° / 13°C</td>
            </tr>
            <tr>
              <td>MON</td>
              <td>Sunny Icon</td>
              <td>22° / 13°C</td>
            </tr>
            <tr>
              <td>TUE</td>
              <td>Sunny Icon</td>
              <td>22° / 13°C</td>
            </tr>
            <tr>
              <td>WED</td>
              <td>Sunny Icon</td>
              <td>22° / 13°C</td>
            </tr>
            <tr>
              <td>THU</td>
              <td>Sunny Icon</td>
              <td>22° / 13°C</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}