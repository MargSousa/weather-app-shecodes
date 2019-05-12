import React, { Component } from "react";

export default class TemperatureButton extends Component {
  constructor(props) {
    super(props);
  }

  active = () => {
    
  }

  render() {
    return (
      <div className="temperature-button">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-secondary btn-sm">°C</button>
          <button type="button" className="btn btn-secondary btn-sm">°F</button>
        </div>
      </div>  
    )
  }
}