import React, { Component } from "react";
import "./Cities.css";
import FavouriteCity from "./FavouriteCity";

export default class Cities extends Component {
  render() {
    return (
      <div className="cities-section">
        <h4 className="cities-title">myCities</h4>
        <div className="cities-section">
          <div className="row">
            <div className="col-sm city-box">
              <FavouriteCity />
            </div>
            <div className="col-sm city-box">
              <FavouriteCity /> 
            </div>
            <div className="col-sm city-box">
              <FavouriteCity />
            </div>
            <div className="col-sm city-box">
              <FavouriteCity /> 
            </div>
          </div>
        </div>
      </div>
    )
  }
}