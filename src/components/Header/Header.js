import React, { useState } from 'react';
import './Header.css';

function Header(props) {

  const [inputValue, setInputValue] = useState('');
  const [celsiusButton, setCelsiusButton] = useState(true);
  const [fahrenheitButton, setFahrenheitButton] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const getCityData = (event) => {
    console.log("new city")
    event.preventDefault();
    if (inputValue) {
      props.getData(inputValue);
    } else {
      props.getData(inputValue);
    }
  }

  const getCurrentData = () => {
    console.log("now")
    setInputValue('');
    props.getData();
  }

  const handleTemperature = (event) =>{
    const { id } = event.target;
    props.temperatureButton(id);

    if(id === "celsius") {
      setCelsiusButton(true);
      setFahrenheitButton(false);
    } else {
      setCelsiusButton(false);
      setFahrenheitButton(true);
    }
  }

  const celsiusColors = celsiusButton ? 'button button-cel active' : 'button button-cel non-active';
  const fahrenheitColors = fahrenheitButton ? 'button button-far active' : 'button button-far non-active'
  
  return (
    <div className="main-header">
      <div className="clearfix">
        <div className="clearfix float-left main-title">myWeather</div>
        <form className="clearfix float-left"> 
          <div className="form-group float-left">
            <input 
              type="text" 
              placeholder="Enter a location" 
              className="search-input form-control"
              name="search"
              value={inputValue} 
              onChange={handleInputChange} 
              autoComplete="off"
            />
          </div>
          <input type="submit" value="Search" onClick={getCityData} className="btn btn-info btn-sm clearfix float-left" />
        </form>
        <button type="button" onClick={getCurrentData} className="btn btn-secondary btn-sm clearfix float-left">Current Location</button>
        <div className="temperature-button">
          <button type="button" id="celsius" className={celsiusColors} onClick={handleTemperature}>°C</button>
          <button type="button" id="fahrenheit" className={fahrenheitColors} onClick={handleTemperature}>°F</button>
        </div>
      </div>
    </div>  
  )
}

export default Header;