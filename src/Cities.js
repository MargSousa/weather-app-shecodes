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
              <FavouriteCity name="Madrid"/>
            </div>
            <div className="col-sm city-box">
              <FavouriteCity name="Coventry"/> 
            </div>
            <div className="col-sm city-box">
              <FavouriteCity name="Auckland"/>
            </div>
            <div className="col-sm city-box">
              <FavouriteCity name="San Francisco"/> 
            </div>
          </div>
        </div>
      </div>
    )
  }
}