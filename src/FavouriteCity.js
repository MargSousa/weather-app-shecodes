import React, { Component } from "react";

export default class FavouriteCity extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h6 className="cityFav">{this.props.name}</h6>
        <img scr="#"></img>
        <h6>22ºC</h6>
      </div>
    )
  }
}