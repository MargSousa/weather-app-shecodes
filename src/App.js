import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Location from "./Location";
import Cities from "./Cities";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Location />
        <Cities />
      </div>
    );
  }
}
