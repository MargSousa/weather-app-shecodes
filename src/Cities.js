import React, { Component } from "react";
import "./Cities.css";
import FavouriteCity from "./FavouriteCity";

export default class Cities extends Component {
  render = () => {
    return (
      <div className="cities-section">
        <h4 className="cities-title">myCities</h4>
        <div className="card-deck">
          <div className="card">
            <FavouriteCity name="Madrid"/>
          </div>
          <div className="card">
            <FavouriteCity name="Coventry"/>
          </div>
          <div className="card">
            <FavouriteCity name="Belfast"/>
          </div>
          <div className="card">
            <FavouriteCity name="Copenhagen"/>
          </div>
        </div>
      </div>
    )
  }
}