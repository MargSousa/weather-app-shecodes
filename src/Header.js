import React, { Component } from "react";
import "./Header.css";
import Axios from "axios";

export default class Header extends Component {
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
          <button type="button" className="btn btn-secondary btn-sm clearfix float-left">Current Location</button>
        </div>
      </div>  
    )
  }
}