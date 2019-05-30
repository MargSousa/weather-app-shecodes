import React, { Component } from "react";
import "./Cities.css";
import FavouriteCity from "./FavouriteCity";

export default class Cities extends Component {
  render = () => {
    return (
      <div className="cities-section">
        <h4 className="cities-title">myCities</h4>
        <div className="card-group">
          <div className="cards">
            <FavouriteCity name="Madrid"/>
          </div>
          <div className="cards">
            <FavouriteCity name="Coventry"/>
          </div>
          <div className="cards">
            <FavouriteCity name="Belfast"/>
          </div>
          <div className="cards">
            <FavouriteCity name="Copenhagen"/>
          </div>
        </div>
      </div>
    )
  }
}