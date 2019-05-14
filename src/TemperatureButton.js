import React, { Component } from "react";
import "./TemperatureButton.css";

export default class TemperatureButton extends Component {
  constructor(props) {
    super(props);
  }  

  activeButton = () => {
    let buttonOne = document.getElementById("button-one");
    let buttonTwo = document.getElementById("button-two");

    if (buttonOne.classList.contains("active")) {
      buttonOne.classList.replace("active","non-active");
      buttonTwo.classList.replace("non-active","active");
      console.log(`I'm Farhneit`);
    } else {
      buttonOne.classList.replace("non-active","active");
      buttonTwo.classList.replace("active","non-active");
      console.log(`I'm Celsius`);
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