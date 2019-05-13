import React, { Component } from "react";
import "./TemperatureButton.css";

export default class TemperatureButton extends Component {
  constructor(props) {
    super(props);
  }  

  activeCelsius = () => {
    let buttonOne = document.getElementById("button-one");
    let buttonTwo = document.getElementById("button-two");
    let changeText = document.getElementById("celsius");
    
    if (buttonOne.classList.contains("active")) {
      buttonOne.classList.replace("non-active","active");
      buttonTwo.classList.replace("active","non-active");
    } else {
      buttonOne.classList.replace("non-active","active");
      buttonTwo.classList.replace("active","non-active");
      changeText.innerHTML = `I'm Celsius`;
    }
  };
  
  activeFahrenheit = () => {
    let buttonOne = document.getElementById("button-one");
    let buttonTwo = document.getElementById("button-two");
    let changeText = document.getElementById("celsius");

    if (buttonTwo.classList.contains("non-active")) {
      buttonOne.classList.replace("active","non-active");
      buttonTwo.classList.replace("non-active","active");
      changeText.innerHTML = `I'm Farhneit`;
    }
  };
  
  render() {
    return (
      <div className="button-group">
        <div className="temperature-button">
          <button type="button" id="button-one" className="button-one active" onClick={this.activeCelsius}>°C</button>
          <button type="button" id="button-two" className="button-two non-active" onClick={this.activeFahrenheit}>°F</button>
        </div>
        <br/>
        <div><h2 id="celsius">Temperature</h2></div>
      </div>  
    )
  }
}