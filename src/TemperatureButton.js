import React, { Component } from "react";
import "./TemperatureButton.css";

export default class TemperatureButton extends Component {

  activeButton = () => {
    let buttonOne = document.getElementById("button-one");
    let buttonTwo = document.getElementById("button-two");
    let wind = document.getElementById("wind");
    let tempLarge = document.getElementById("location-temperature-l");
    let tempSmall = document.getElementById("location-temperature-s");
    let temp1max = document.getElementById("max-temp1");
    let temp2max = document.getElementById("max-temp2");
    let temp3max = document.getElementById("max-temp3");
    let temp4max = document.getElementById("max-temp4");
    let temp5max = document.getElementById("max-temp5");
    let temp1min = document.getElementById("min-temp1");
    let temp2min = document.getElementById("min-temp2");
    let temp3min = document.getElementById("min-temp3");
    let temp4min = document.getElementById("min-temp4");
    let temp5min = document.getElementById("min-temp5");
    let cards = document.querySelectorAll("#city-temp");

    if (buttonOne.classList.contains("active")) {
      buttonOne.classList.replace("active","non-active");
      buttonTwo.classList.replace("non-active","active");
      let getWind = wind.innerHTML;
      let temp0L = tempLarge.innerHTML;
      let temp0S = tempSmall.innerHTML;
      let temp1X = temp1max.innerHTML;
      let temp2X = temp2max.innerHTML;
      let temp3X = temp3max.innerHTML;
      let temp4X = temp4max.innerHTML;
      let temp5X = temp5max.innerHTML;
      let temp6X = temp1min.innerHTML;
      let temp7X = temp2min.innerHTML;
      let temp8X = temp3min.innerHTML;
      let temp9X = temp4min.innerHTML;
      let temp10X = temp5min.innerHTML;
      let cardOne = cards[0].innerHTML;
      let cardTwo = cards[1].innerHTML;
      let cardThree = cards[2].innerHTML;
      let cardFour = cards[3].innerHTML;
      let windValue = getWind.substring(0, 2);
      let temperature0S = temp0S.substring(0, 2);
      let temperature0L = temp0L.substring(0, 2);
      let temperature1 = temp1X.substring(0, 2);
      let temperature2 = temp2X.substring(0, 2);
      let temperature3 = temp3X.substring(0, 2);
      let temperature4 = temp4X.substring(0, 2);
      let temperature5 = temp5X.substring(0, 2);
      let temperature6 = temp6X.substring(5, 2);
      let temperature7 = temp7X.substring(5, 2);
      let temperature8 = temp8X.substring(5, 2);
      let temperature9 = temp9X.substring(5, 2);
      let temperature10 =temp10X.substring(5, 2);
      let cardTemp1 = cardOne.substring(0, 2);
      let cardTemp2 = cardTwo.substring(0, 2);
      let cardTemp3 = cardThree.substring(0, 2);
      let cardTemp4 = cardFour.substring(0, 2);
      let windUs = Math.round(windValue * 3.6);
      let temp0LF = Math.round(temperature0L  * (9/5) + 32);
      let temp0SF = Math.round(temperature0S  * (9/5) + 32);
      let temp1F = Math.round(temperature1  * (9/5) + 32);
      let temp2F = Math.round(temperature2  * (9/5) + 32);
      let temp3F = Math.round(temperature3  * (9/5) + 32);
      let temp4F = Math.round(temperature4  * (9/5) + 32);
      let temp5F = Math.round(temperature5  * (9/5) + 32);
      let temp6F = Math.round(temperature6  * (9/5) + 32);
      let temp7F = Math.round(temperature7  * (9/5) + 32);
      let temp8F = Math.round(temperature8  * (9/5) + 32);
      let temp9F = Math.round(temperature9  * (9/5) + 32);
      let temp10F = Math.round(temperature10  * (9/5) + 32);
      let cardsF1 = Math.round(cardTemp1  * (9/5) + 32);
      let cardsF2 = Math.round(cardTemp2  * (9/5) + 32);
      let cardsF3 = Math.round(cardTemp3  * (9/5) + 32);
      let cardsF4 = Math.round(cardTemp4  * (9/5) + 32);
      wind.innerHTML = `${windUs} mph`;
      tempLarge.innerHTML = `${temp0LF}°F`;
      tempSmall.innerHTML = `${temp0SF}°F`;
      temp1max.innerHTML = `${temp1F}°`;
      temp2max.innerHTML = `${temp2F}°`;
      temp3max.innerHTML = `${temp3F}°`;
      temp4max.innerHTML = `${temp4F}°`;
      temp5max.innerHTML = `${temp5F}°`;
      temp1min.innerHTML = ` / ${temp6F}°F`;
      temp2min.innerHTML = ` / ${temp7F}°F`;
      temp3min.innerHTML = ` / ${temp8F}°F`;
      temp4min.innerHTML = ` / ${temp9F}°F`;
      temp5min.innerHTML = ` / ${temp10F}°F`;
      cards[0].innerHTML = `${cardsF1}°F`;
      cards[1].innerHTML = `${cardsF2}°F`;
      cards[2].innerHTML = `${cardsF3}°F`;
      cards[3].innerHTML = `${cardsF4}°F`;

    } else {
      buttonOne.classList.replace("non-active","active");
      buttonTwo.classList.replace("active","non-active");
      let getWind = wind.innerHTML;
      let temp0L = tempLarge.innerHTML;
      let temp0S = tempSmall.innerHTML;
      let temp1X = temp1max.innerHTML;
      let temp2X = temp2max.innerHTML;
      let temp3X = temp3max.innerHTML;
      let temp4X = temp4max.innerHTML;
      let temp5X = temp5max.innerHTML;
      let temp6X = temp1min.innerHTML;
      let temp7X = temp2min.innerHTML;
      let temp8X = temp3min.innerHTML;
      let temp9X = temp4min.innerHTML;
      let temp10X = temp5min.innerHTML;
      let cardOne = cards[0].innerHTML;
      let cardTwo = cards[1].innerHTML;
      let cardThree = cards[2].innerHTML;
      let cardFour = cards[3].innerHTML;
      let windValue = getWind.substring(0, 2);
      let temperature0L = temp0L.substring(0, 2);
      let temperature0S = temp0S.substring(0, 2);
      let temperature1 = temp1X.substring(0, 2);
      let temperature2 = temp2X.substring(0, 2);
      let temperature3 = temp3X.substring(0, 2);
      let temperature4 = temp4X.substring(0, 2);
      let temperature5 = temp5X.substring(0, 2);
      let temperature6 = temp6X.substring(5, 2);
      let temperature7 = temp7X.substring(5, 2);
      let temperature8 = temp8X.substring(5, 2);
      let temperature9 = temp9X.substring(5, 2);
      let temperature10 = temp10X.substring(5, 2);
      let cardTemp1 = cardOne.substring(0, 2);
      let cardTemp2 = cardTwo.substring(0, 2);
      let cardTemp3 = cardThree.substring(0, 2);
      let cardTemp4 = cardFour.substring(0, 2);
      let windEU = Math.round(windValue / 3.6);
      let temp0LF = Math.round((temperature0L - 32)/(9/5));
      let temp0SF = Math.round((temperature0S - 32)/(9/5));
      let temp1F = Math.round((temperature1 - 32)/(9/5));
      let temp2F = Math.round((temperature2 - 32)/(9/5));
      let temp3F = Math.round((temperature3 - 32)/(9/5));
      let temp4F = Math.round((temperature4 - 32)/(9/5));
      let temp5F = Math.round((temperature5 - 32)/(9/5));
      let temp6F = Math.round((temperature6 - 32)/(9/5));
      let temp7F = Math.round((temperature7 - 32)/(9/5));
      let temp8F = Math.round((temperature8 - 32)/(9/5));
      let temp9F = Math.round((temperature9 - 32)/(9/5));
      let temp10F = Math.round((temperature10 - 32)/(9/5));
      let cardsF1 = Math.round((cardTemp1 - 32)/(9/5));
      let cardsF2 = Math.round((cardTemp2 - 32)/(9/5));
      let cardsF3 = Math.round((cardTemp3 - 32)/(9/5));
      let cardsF4 = Math.round((cardTemp4 - 32)/(9/5));
      wind.innerHTML = `${windEU} km/h`;
      tempLarge.innerHTML = `${temp0LF}°C`;
      tempSmall.innerHTML = `${temp0SF}°C`;
      temp1max.innerHTML = `${temp1F}°`;
      temp2max.innerHTML = `${temp2F}°`;
      temp3max.innerHTML = `${temp3F}°`;
      temp4max.innerHTML = `${temp4F}°`;
      temp5max.innerHTML = `${temp5F}°`;
      temp1min.innerHTML = ` / ${temp6F}°C`;
      temp2min.innerHTML = ` / ${temp7F}°C`;
      temp3min.innerHTML = ` / ${temp8F}°C`;
      temp4min.innerHTML = ` / ${temp9F}°C`;
      temp5min.innerHTML = ` / ${temp10F}°C`;
      cards[0].innerHTML = `${cardsF1}°C`;
      cards[1].innerHTML = `${cardsF2}°C`;
      cards[2].innerHTML = `${cardsF3}°C`;
      cards[3].innerHTML = `${cardsF4}°C`;
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