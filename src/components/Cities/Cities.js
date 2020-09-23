import React from "react";
import FavouriteCity from "../FavouriteCity/FavouriteCity";
import "./Cities.css";

function Cities(props) {
  
  const { degrees, unit } = props;

  const cities = [
    {id: 1, name: 'Madrid' },
    {id: 2, name: 'Busan' },
    {id: 3, name: 'New York' },
    {id: 4, name: 'Copenhagen' },
  ];

  return (
    <div className="cities-section">
      <h4 className="cities-title">myCities</h4>
      <div className="card-group">
        { cities.map( (city) => 
          <div className="cards" key={city.id}>
            <FavouriteCity name={city.name} degrees={degrees} unit={unit} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Cities;