import React, { Component } from "react";
import "./Location.css";
import WeeklyForecast from "./WeeklyForecast";
import SunRain from "./images/weather_icons/SunRain.png";
import SunsetIcon from "./images/weather_icons/Sunset.png";
import SunriseIcon from "./images/weather_icons/Sunrise.png";
import PrecipitationIcon from "./images/weather_icons/precipitation2.png";
import WindIcon from "./images/weather_icons/wind.png";

export default class Location extends Component {
  constructor(props) {
   super(props);
   this.state = {
     loaded: true
   };

  // let key = `e4e4d6ef596a82924b1c141ba55e4e37`;
  // let url = `https://api.openweathermap.org/data/2.5`;
  // let path = `weather?q=${props.name}&appid=${key}&units=metric`;

  // Axios.get(`${url}/${path}`).then(function(response) {
  //   this.setState({
  //     loaded: true,
  //     name: response.data.name,
  //     description: response.data.weather[0].main,
  //     icon: 'Rainy Icon'
  //   });
  // });
  }

  render() {
    if (this.state.loaded) {
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
                    <img id="location-icon-s" src={SunRain} alt="Current Weather Icon"/>
                    <div id="location-temperature-s">22ºC</div>
                    <div id="location-description-s">Sunny</div>
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
                    <img id="location-icon-l" src={SunRain} alt="Current Weather Icon"/>
                    <div id="location-temperature-l">10ºC</div>
                    <div id="location-description-l">Moderate Rain</div>
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
    } else {
      return (
        <div className="location-section">
          <div className="location-box">
            Loading...
          </div>
        </div>  
      )  
    }
  }
}