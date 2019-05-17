import React, { Component } from "react";
import "./Header.css";
import Axios from "axios";
import TemperatureButton from "./TemperatureButton";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      location: {latitude: 38.7, longitude: -9.16},
      unit: "metric",
      temperature: 22
    };
  }

  //console.log(coords);

  //this.setState({
  //  location: coords,
  //  temperature: tempInfo
  //});

  getCurrentLocation = (event) => {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(function(position) {
      let getlatitude = position.coords.latitude;
      let getlongitude = position.coords.longitude;
      let coords = {latitude: getlatitude, longitude: getlongitude};

      let key = `e4e4d6ef596a82924b1c141ba55e4e37`;
      let url = `https://api.openweathermap.org/data/2.5`;
      let path = `weather?lat=${getlatitude}&lon=${getlongitude}&appid=${key}&units=metric`;
      
      console.log(coords);      
      console.log(`${url}/${path}`)

      let buttonTemp = document.getElementById("button-one");
      let sunriseInfo = document.getElementById('sunrise');
      let sunsetInfo = document.getElementById('sunset');
      let windInfo = document.getElementById('wind');
      let tempInfo = document.getElementById('location-temperature');
      let descriptionInfo = document.getElementById('location-description');
      let cityCountryInfo = document.getElementById('location');

      Axios.get(`${url}/${path}`).then(function(response) {
        let description = (response.data.weather[0].description);
        let icon = response.data.weather[0].icon;
        let city = response.data.name;
        let country = response.data.sys.country;
        let temperature = Math.round(response.data.main.temp);
        let temperatureFahr = Math.round(temperature * (9/5) + 32);
        let wind = response.data.wind.speed;
        let sunriseHex = response.data.sys.sunrise;
        let sunsetHex = response.data.sys.sunset;
        let sunrise = new Date(sunriseHex * 1000);
        let sunset = new Date(sunsetHex * 1000);
        let sunriseHours = sunrise.getHours();
        let sunriseMinutes = sunrise.getMinutes();
        let sunsetHours = sunset.getHours();
        let sunsetMinutes = sunset.getMinutes();

        if (sunriseHours < 10) {
          sunriseHours = `0${sunriseHours}`
        };
        if (sunriseMinutes < 10) {
          sunriseMinutes = `0${sunriseMinutes}`
        };
        if (sunsetHours < 10) {
          sunsetHours = `0${sunsetHours}`
        };
        if (sunsetMinutes < 10) {
          sunsetMinutes = `0${sunsetMinutes}`
        };

        let sunriseTime = `${sunriseHours}:${sunriseMinutes}`;
        let sunsetTime = `${sunsetHours}:${sunsetMinutes}`;
        
        sunriseInfo.innerHTML = `${sunriseTime}`;
        sunsetInfo.innerHTML = `${sunsetTime}`;
        windInfo.innerHTML = `${wind} km/h`;
        descriptionInfo.innerHTML = `${description}`;
        tempInfo.innerHTML = `${temperature}`;
        cityCountryInfo.innerHTML = `${city}, ${country}`;

        if (buttonTemp.classList.contains("active")) {
        //if (this.state.unit === "celsius") {
          tempInfo.innerHTML = `${temperature}°C`;
        } else {
          tempInfo.innerHTML = `${temperatureFahr}°F`;
        }


        let isoCountries = {
          'PT': 'Portugal',
          'UK': 'United Kingdom'
        }

        //let countryWhat = response.data.sys.country;

        //isoCountries(function(element){ 
        //  let nowCountry = element[countryWhat];
        //  console.log(nowCountry);
        //});

        //let country1 = isoCountries.map(function(element) { return element[countryWhat] })
        //console.log(country1);

      });
    });

    let now = this.state.date;

    console.log(now.getDay());
    let getTime = document.getElementById('location-time');
    let weekDays = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let getWeekDay = weekDays[now.getDay()];
    let getHours = now.getHours();
    let getMinutes = now.getMinutes();
    let getClock = "";
  
    if (getMinutes < 10) {
      getMinutes = `0${getMinutes}`;
    }
    if (getHours < 10) {
      getHours= `0${getHours}`;
    }

    if (getHours < 12 ) {
      getClock = `AM`;
    } else {
      getClock = `PM`;
    }

    let time = `${getWeekDay}, ${getHours}:${getMinutes} ${getClock}`;
    getTime.innerHTML = `${time}`;
  };

  render() {
    return (
      <div className="main-header">
        <div className="clearfix">
          <div className="clearfix float-left main-title">myWeather</div>
          <form className="clearfix float-left"> 
            <div className="form-group float-left">
              <input type="text" placeholder="Enter a location" className="search-input form-control"></input>
            </div>
            <input type="submit" value="Search" className="btn btn-info btn-sm clearfix float-left"></input>
          </form>
          <button type="button" className="btn btn-secondary btn-sm clearfix float-left" onClick={this.getCurrentLocation}>Current Location</button>
          <TemperatureButton />
        </div>
      </div>  
    )
  }
}