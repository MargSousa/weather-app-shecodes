import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Location from "./Location";

export default class App extends Component {
  
  render() {
    return (
      <div className="app">
        <Header />
        <Location />
      </div>
    );
  }
}
