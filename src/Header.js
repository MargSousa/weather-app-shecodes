import React, { Component } from "react";
import "./Header.css";
//import Axios from "axios";
import TemperatureButton from "./TemperatureButton";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      location: {latitude: 38.7, longitude: -9.16}
    };
  }

  getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      let getlatitude = position.coords.latitude;
      let getlongitude = position.coords.longitude;
      let coords = {latitude: getlatitude, longitude: getlongitude}

      console.log(coords);

      //this.setState({
      //  location: coords
      //});
    });

    let now = this.state.date;
    let getTime = document.getElementById('location-time');
    let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
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
    console.log(time);
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