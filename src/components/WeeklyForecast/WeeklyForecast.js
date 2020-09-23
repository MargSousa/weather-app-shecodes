import React from "react";
import { weekDays, iconCodes } from '../../assets/data/IconCodes';
import "./WeeklyForecast.css";

function WeeklyForecast(props) {

    const { forecast, degrees } = props;
    
    const handleWeekDay = (input) => {
      let day = new Date(input*1000);
      let weekDay = weekDays[day.getDay()];
      return weekDay.slice(0,3).toLocaleUpperCase();
    }

    const handleIcon = (input) => {
      const weatherCode = iconCodes[input];
      const icon = require(`../../assets/weather_icons/${weatherCode}.png`);
      return icon;
    }

    const handleTemperature = (input) => {
      return Math.round(input);
    }

    return (
      <div className="week-table">
        <div className="week-title">Weekly Forecast</div>
        { forecast && forecast.map((day,index) => (
          <div className="week-day" key={index}>
            <div>{handleWeekDay(day.dt)}</div>
            <div><img className="week-icon" src={handleIcon(day.weather[0].icon)} alt="Weather Icon"/></div>
            <div>{handleTemperature(day.temp.min)}° / <span className="week-min">{handleTemperature(day.temp.min)}{degrees}</span></div>
          </div>
        ))}
        <div className="week-footer">
          <a className="link-info" href="https://www.weatherbug.com/weather-forecast/now/lisboa-lisboa-po?center=51.89,-8.49,7" target="_blank" rel="noopener noreferrer">Click here for more information</a>
        </div>
      </div>
    )
}


export default WeeklyForecast;