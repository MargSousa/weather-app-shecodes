import React, { Component } from 'react';
import Header from './components/Header/Header';
import Location from './components/Location/Location';
import Cities from './components/Cities/Cities';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      unit: 'metric',
      degrees: '°C',
      latitude: 0,
      longitude: 0,
    };
  }

  getCoordinates = (data) => {

    if (data !== undefined && data !== "") {
      let geoCoords = `https://api.opencagedata.com/geocode/v1/json?q=${data}&key=d44cb1f52a7a49e08eca8c5b5e4c7e01`;
      axios.get(geoCoords)
      .then(res => {
        this.setState({
          longitude: res.data.results[0].geometry.lng,
          latitude: res.data.results[0].geometry.lat,
          location: data
        });
      }).catch(err => alert(`Please enter another city.`))
    } else {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
          location: data
        });
      })
    }
  }

  getNewData = (data) => {
    this.getCoordinates(data);
  }

  handleChange = (unit) => {
    if (unit === "celsius") {
      this.setState({
        unit: 'metric',
        degrees: '°C'
      })
    } else {
      this.setState({
        unit: 'imperial',
        degrees: '°F'
      })
    }
  }

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      });
    })
    this.getCoordinates(this.state.location);
  }
  
  render() {
    const { location, degrees, unit, latitude, longitude} = this.state;

    console.log(location, degrees, unit, latitude, longitude)

    return (
      <div className="app">
        <Header getData={this.getNewData} temperatureButton={this.handleChange}/>
        <Location location={location} degrees={degrees} unit={unit} latitude={latitude} longitude={longitude} />
        <Cities degrees={degrees} unit={unit} getInfo={this.getNewData} />
      </div>
    );
  }
}


export default App;