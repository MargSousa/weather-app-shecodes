import React, { useEffect, useState } from 'react';
import { isoCountries } from '../../assets/data/CountriesData';
import { iconCodes, rainData, weekDays } from '../../assets/data/IconCodes';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import WeeklyForecast from '../WeeklyForecast/WeeklyForecast';
import SunsetIcon from '../../assets/weather_icons/Sunset.png';
import SunriseIcon from '../../assets/weather_icons/Sunrise.png';
import PrecipitationIcon from '../../assets/weather_icons/Precipitation.png';
import WindIcon from '../../assets/weather_icons/Wind.png';
import './Location.css';

function Location(props) {

    const { location, degrees, unit } = props;

    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [time, setTime] = useState('')
    const [wind, setWind] = useState('')
    const [sunrise, setSunrise] = useState('')
    const [sunset, setSunset] = useState('')
    const [precipitation, setPrecipitation] = useState('')
    const [currentIcon, setCurrentIcon] = useState('')
    const [description, setDescription] = useState('')
    const [temperature, setTemperature] = useState('')
    const [weekForecast, setWeekForecast] = useState('')
    const [loaded, setLoaded] = useState(false)

  const unixTimeConverter = (unix) => {
    let time = new Date(unix*1000);
    let hours = time.getHours();
    let minutes = time.getMinutes();
    return `${hours}:${minutes}`;
  }

  const getLocationData = (input) => {
    navigator.geolocation.getCurrentPosition(position => {
      let getlatitude = position.coords.latitude;
      let getlongitude = position.coords.longitude;
      const key = 'e4e4d6ef596a82924b1c141ba55e4e37';
      const url = 'https://api.openweathermap.org/data/2.5';
      let pathData = "";
      let pathForecast = "";

      if (input) {
        pathData = `weather?q=${input}&appid=${key}&units=${unit}`;
        pathForecast = `forecast/daily?q=${input}&cnt=3&appid=${key}`
      } else {
        pathData = `weather?lat=${getlatitude}&lon=${getlongitude}&appid=${key}&units=${unit}`;
        pathForecast = `onecall?lat=${getlatitude}&lon=${getlongitude}&appid=${key}&units=${unit}`;
      }

      axios.get(`${url}/${pathData}`)
        .then(res => {
          const results = res.data;
          const country = isoCountries[results.sys.country];
          const temperatureNow = Math.round(results.main.temp);
          let wind = `${Math.round(results.wind.speed * 3.6)} km/h`;
          if (unit === "imperial") {
            wind = `${Math.round(results.wind.speed * 3.6 * 0.62)} mph`;
          }
          const description = results.weather[0].description;
          const iconCode = results.weather[0].icon;
          const precipitation = rainData[iconCode];
          const weatherCode = iconCodes[iconCode];
        
          let weatherIcon = `http://openweathermap.org/img/w/${iconCode}.png`;
          if (weatherCode) {
            weatherIcon = require(`../../assets/weather_icons/${weatherCode}.png`)
          } 

          const date = new Date();
          let getWeekDay = weekDays[date.getDay()];
          let time = `${getWeekDay}, ${date.getHours()}:${date.getMinutes()} AM`;
          if (date.getHours() > 18 ) {
           time = `${getWeekDay}, ${date.getHours()}:${date.getMinutes()} PM`
          }
          let sunrise = unixTimeConverter(res.data.sys.sunrise);
          let sunset = unixTimeConverter(res.data.sys.sunset);


          const cityID = results.id;
          console.log(cityID)

          setCity(results.name);
          setCountry(country);
          setTime(time);
          setWind(wind);
          setPrecipitation(precipitation);
          setDescription(description);
          setTemperature(temperatureNow);
          setSunrise(sunrise);
          setSunset(sunset);
          setCurrentIcon(weatherIcon);
        })

      axios.get(`${url}/${pathForecast}`)
        .then(res => {
          console.log(res)
          if(!input) {
            const nextDays = res.data.daily.slice(1,6);
            setWeekForecast(nextDays)
          }
        })
         .then(setLoaded(true))
    })
  }

  useEffect(() => {
    getLocationData(location);
  }, [location, unit])

    if (loaded) {
      return (
      <div className="location-section">
        <div className="location-box">
            <div className="row">
              <div className="col-sm">
                <div className="row location">{city}, {country}</div>
                <div className="row time" >{time}</div>
                <div className="row">
                  <div className="col-sm location-main" id="small-screen">
                    <img id="location-icon-s" src={currentIcon} alt="Weather Icon"/>
                    <div id="location-temperature-s">{temperature}{degrees}</div>
                    <div id="location-description-s">{description}</div>
                  </div>
                  <div className="col-sm location-sun">
                    <div>
                      <img className="sunrise-icon" src={SunriseIcon} alt="Sunrise Icon"/>
                      {sunrise}
                    </div>
                    <div>
                      <img className="sunset-icon" src={SunsetIcon} alt="Sunset Icon"/>
                      {sunset}
                    </div>
                    <div className="location-details">
                      <div>
                        <img className="drop-icon" src={PrecipitationIcon} alt="Precipitation Icon"/> 
                        {precipitation}
                      </div>
                      <div>
                        <img className="wind-icon" src={WindIcon} alt="Wind Icon"/>
                        {wind}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm location-main" id="large-screen">
                    <img id="location-icon-l" src={currentIcon} alt="Current Weather Icon"/>
                    <div id="location-temperature-l">{temperature}{degrees}</div>
                    <div id="location-description-l">{description}</div>
                  </div>
                </div>
              </div>
              <div className="col-sm week">
                <WeeklyForecast forecast={weekForecast} degrees={degrees} />
              </div>
            </div>
        </div>   
      </div>
    )
    } else {
      return (
        <div className="location-section">
          <div className="location-box">
          <Loader type="Circles" color="#18A2B8" height={40} width={40} />
          </div>
        </div>  
      )  
    }
}

export default Location;