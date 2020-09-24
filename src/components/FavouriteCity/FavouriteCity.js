import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import { iconCodes } from '../../assets/data/IconCodes';
import './FavouriteCity.css'

function FavouriteCity(props) {

  const { degrees, name, unit } = props;

  const [icon, setIcon] = useState('')
  const [temperature, setTemperature] = useState('')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const key = `e4e4d6ef596a82924b1c141ba55e4e37`;
    const url = `https://api.openweathermap.org/data/2.5`;
    const path = `weather?q=${name}&appid=${key}&units=${unit}`;

    axios.get(`${url}/${path}`)
      .then(res => {
        const results = res.data;
        const temperature = Math.round(results.main.temp);
        const weatherCode = iconCodes[res.data.weather[0].icon];
        const icon = require(`../../assets/weather_icons/${weatherCode}.png`);

        setTemperature(temperature);
        setIcon(icon);
        setLoaded(true);
      })
  }, [name, unit])

  const getCityTemp = () => {
    props.showInfo(name);
  }

  if (loaded) {
    return (
      <div onClick={getCityTemp}>
        <p className="card-title">{name}</p>
        <img id="city-icon" src={icon} alt="Temperature Icon"></img>
        <p id="city-temp">{temperature}{degrees}</p>
      </div>
    )
  } else {
    return (
      <div className="loading">
        <Loader type="Circles" color="#18A2B8" height={40} width={40} />
      </div>
    )  
  }
}

export default FavouriteCity;