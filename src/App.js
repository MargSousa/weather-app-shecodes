import React, { Component } from 'react';
import Header from './components/Header/Header';
import Location from './components/Location/Location';
import Cities from './components/Cities/Cities';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      unit: 'metric',
      degrees: '°C'
    };
  }

  getNewData = (data) => {
    console.log("city", data)
    this.setState({ location: data })
  }

  handleChange = (unit) => {
    console.log("change unit")
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
  
  render() {
    const { location, degrees, unit } = this.state;

    console.log(location, degrees, unit)

    return (
      <div className="app">
        <Header getData={this.getNewData} temperatureButton={this.handleChange}/>
        <Location location={location} degrees={degrees} unit={unit} />
        <Cities degrees={degrees} unit={unit} />
      </div>
    );
  }
}


export default App;