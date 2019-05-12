import React, { Component } from "react";

export default class TemperatureButton extends Component {
  constructor(props) {
    super(props);
  }  

  activeCelsius = () => {
    alert("I'm Celsius");
  }

  activeFahrenheit = () => {
    alert("I'm Fahrenheit");
  }
  
  render() {
    return (
      <div className="temperature-button">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-secondary btn-sm ative" onClick={this.activeCelsius}>°C</button>
          <button type="button" className="btn btn-secondary btn-sm" onClick={this.activeFahrenheit}>°F</button>
        </div>
      </div>  
    )
  }
}