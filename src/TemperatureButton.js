import React, { Component } from "react";
import "./TemperatureButton.css";

export default class TemperatureButton extends Component {

  activeButton = () => {
    let buttonOne = document.getElementById("button-one");
    let buttonTwo = document.getElementById("button-two");
    let highTemperature = document.querySelectorAll('.max-temp');
    let lowTemperature = document.querySelectorAll('.min-temp');

    let highTempCel = 17;
    let lowTempCel = 11;
    let highTempFahr = Math.round(highTempCel * (9/5) + 32);
    let lowTempFahr = Math.round(lowTempCel * (9/5) + 32);

    if (buttonOne.classList.contains("active")) {
      buttonOne.classList.replace("active","non-active");
      buttonTwo.classList.replace("non-active","active");

      highTemperature.forEach(function(element) {
        element.innerHTML = `${highTempFahr}°` ;
      });
      lowTemperature.forEach(function(element) {
        element.innerHTML = ` / ${lowTempFahr}°F` ;
      });

    } else {
      buttonOne.classList.replace("non-active","active");
      buttonTwo.classList.replace("active","non-active");

      highTemperature.forEach(function(element) {
        element.innerHTML = `${highTempCel}°` ;
      });
      lowTemperature.forEach(function(element) {
        element.innerHTML = ` / ${lowTempCel}°C` ;
      });
    }
  };
  
  render() {
    return (
      <div className="button-group">
        <div className="temperature-button">
          <button type="button" id="button-one" className="button-one active" onClick={this.activeButton}>°C</button>
          <button type="button" id="button-two" className="button-two non-active" onClick={this.activeButton}>°F</button>
        </div>
        <br/>
      </div>  
    )
  }
}