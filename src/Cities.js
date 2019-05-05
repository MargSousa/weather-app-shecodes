import React, { Component } from "react";
import "./Cities.css";

export default class Cities extends Component {
  render() {
    return (
      <div className="cities-section">
        <h4 className="cities-title">myCities</h4>
        <div className="cities-section">
          <div className="row">
            <div className="col-sm city-box">
              <p>City One</p>
              <br />
            </div>
            <div className="col-sm city-box">
              <p>City Two</p>
              <br />
            </div>
            <div className="col-sm city-box">
              <p>City Three</p>
              <br />
            </div>
            <div className="col-sm city-box">
              <p>Add new favourite</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    )
  }
}