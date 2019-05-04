import React, { Component } from "react";
import "./Header.css";
import Axios from "axios";

export default class Header extends Component {
  render() {
    return (
      <div className="main-header">
        <div className="main-title">myWeather</div>
        <div className="search-section">
          <div className="clearfix">
            <form className="clearfix float-left"> 
              <div className="form-group float-left">
                <input className="search-input" placeholder="Enter a location"></input>
              </div>
              <button type="button" className="btn btn-info btn-sm clearfix float-right">Search</button>
            </form>
            <button type="button" className="btn btn-secondary btn-sm clearfix float-left">Current Location</button>
          </div>
        </div>  
        <div className="search-time">Friday 15:17 PM</div>
      </div>
    )
  }
}