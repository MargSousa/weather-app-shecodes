import React, { Component } from "react";
import "./Header.css";
import Axios from "axios";
import TemperatureButton from "./TemperatureButton";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      location: {latitude: 38.7, longitude: -9.16},
      unit: "metric",
      temperature: 22
    };
  }

  //console.log(coords);

  //this.setState({
  //  location: coords,
  //  temperature: tempInfo
  //});

  getCurrentLocation = (event) => {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(function(position) {
      let getlatitude = position.coords.latitude;
      let getlongitude = position.coords.longitude;
      let coords = {latitude: getlatitude, longitude: getlongitude};

      let key = `e4e4d6ef596a82924b1c141ba55e4e37`;
      let url = `https://api.openweathermap.org/data/2.5`;
      let path = `weather?lat=${getlatitude}&lon=${getlongitude}&appid=${key}&units=metric`;
      
      console.log(coords);      
      console.log(`${url}/${path}`);

      let buttonTemp = document.getElementById("button-one");
      let sunriseInfo = document.getElementById('sunrise');
      let sunsetInfo = document.getElementById('sunset');
      let windInfo = document.getElementById('wind');
      let tempInfo = document.getElementById('location-temperature');
      let descriptionInfo = document.getElementById('location-description');
      let cityCountryInfo = document.getElementById('location');
      
      Axios.get(`${url}/${path}`).then(function(response) {
          let isoCountries = {
            'AF' : 'Afghanistan',
            'AX' : 'Aland Islands',
            'AL' : 'Albania',
            'DZ' : 'Algeria',
            'AS' : 'American Samoa',
            'AD' : 'Andorra',
            'AO' : 'Angola',
            'AI' : 'Anguilla',
            'AQ' : 'Antarctica',
            'AG' : 'Antigua And Barbuda',
            'AR' : 'Argentina',
            'AM' : 'Armenia',
            'AW' : 'Aruba',
            'AU' : 'Australia',
            'AT' : 'Austria',
            'AZ' : 'Azerbaijan',
            'BS' : 'Bahamas',
            'BH' : 'Bahrain',
            'BD' : 'Bangladesh',
            'BB' : 'Barbados',
            'BY' : 'Belarus',
            'BE' : 'Belgium',
            'BZ' : 'Belize',
            'BJ' : 'Benin',
            'BM' : 'Bermuda',
            'BT' : 'Bhutan',
            'BO' : 'Bolivia',
            'BA' : 'Bosnia And Herzegovina',
            'BW' : 'Botswana',
            'BV' : 'Bouvet Island',
            'BR' : 'Brazil',
            'IO' : 'British Indian Ocean Territory',
            'BN' : 'Brunei Darussalam',
            'BG' : 'Bulgaria',
            'BF' : 'Burkina Faso',
            'BI' : 'Burundi',
            'KH' : 'Cambodia',
            'CM' : 'Cameroon',
            'CA' : 'Canada',
            'CV' : 'Cape Verde',
            'KY' : 'Cayman Islands',
            'CF' : 'Central African Republic',
            'TD' : 'Chad',
            'CL' : 'Chile',
            'CN' : 'China',
            'CX' : 'Christmas Island',
            'CC' : 'Cocos (Keeling) Islands',
            'CO' : 'Colombia',
            'KM' : 'Comoros',
            'CG' : 'Congo',
            'CD' : 'Congo, Democratic Republic',
            'CK' : 'Cook Islands',
            'CR' : 'Costa Rica',
            'CI' : 'Cote D\'Ivoire',
            'HR' : 'Croatia',
            'CU' : 'Cuba',
            'CY' : 'Cyprus',
            'CZ' : 'Czech Republic',
            'DK' : 'Denmark',
            'DJ' : 'Djibouti',
            'DM' : 'Dominica',
            'DO' : 'Dominican Republic',
            'EC' : 'Ecuador',
            'EG' : 'Egypt',
            'SV' : 'El Salvador',
            'GQ' : 'Equatorial Guinea',
            'ER' : 'Eritrea',
            'EE' : 'Estonia',
            'ET' : 'Ethiopia',
            'FK' : 'Falkland Islands (Malvinas)',
            'FO' : 'Faroe Islands',
            'FJ' : 'Fiji',
            'FI' : 'Finland',
            'FR' : 'France',
            'GF' : 'French Guiana',
            'PF' : 'French Polynesia',
            'TF' : 'French Southern Territories',
            'GA' : 'Gabon',
            'GM' : 'Gambia',
            'GE' : 'Georgia',
            'DE' : 'Germany',
            'GH' : 'Ghana',
            'GI' : 'Gibraltar',
            'GR' : 'Greece',
            'GL' : 'Greenland',
            'GD' : 'Grenada',
            'GP' : 'Guadeloupe',
            'GU' : 'Guam',
            'GT' : 'Guatemala',
            'GG' : 'Guernsey',
            'GN' : 'Guinea',
            'GW' : 'Guinea-Bissau',
            'GY' : 'Guyana',
            'HT' : 'Haiti',
            'HM' : 'Heard Island & Mcdonald Islands',
            'VA' : 'Holy See (Vatican City State)',
            'HN' : 'Honduras',
            'HK' : 'Hong Kong',
            'HU' : 'Hungary',
            'IS' : 'Iceland',
            'IN' : 'India',
            'ID' : 'Indonesia',
            'IR' : 'Iran, Islamic Republic Of',
            'IQ' : 'Iraq',
            'IE' : 'Ireland',
            'IM' : 'Isle Of Man',
            'IL' : 'Israel',
            'IT' : 'Italy',
            'JM' : 'Jamaica',
            'JP' : 'Japan',
            'JE' : 'Jersey',
            'JO' : 'Jordan',
            'KZ' : 'Kazakhstan',
            'KE' : 'Kenya',
            'KI' : 'Kiribati',
            'KR' : 'Korea',
            'KW' : 'Kuwait',
            'KG' : 'Kyrgyzstan',
            'LA' : 'Lao People\'s Democratic Republic',
            'LV' : 'Latvia',
            'LB' : 'Lebanon',
            'LS' : 'Lesotho',
            'LR' : 'Liberia',
            'LY' : 'Libyan Arab Jamahiriya',
            'LI' : 'Liechtenstein',
            'LT' : 'Lithuania',
            'LU' : 'Luxembourg',
            'MO' : 'Macao',
            'MK' : 'Macedonia',
            'MG' : 'Madagascar',
            'MW' : 'Malawi',
            'MY' : 'Malaysia',
            'MV' : 'Maldives',
            'ML' : 'Mali',
            'MT' : 'Malta',
            'MH' : 'Marshall Islands',
            'MQ' : 'Martinique',
            'MR' : 'Mauritania',
            'MU' : 'Mauritius',
            'YT' : 'Mayotte',
            'MX' : 'Mexico',
            'FM' : 'Micronesia, Federated States Of',
            'MD' : 'Moldova',
            'MC' : 'Monaco',
            'MN' : 'Mongolia',
            'ME' : 'Montenegro',
            'MS' : 'Montserrat',
            'MA' : 'Morocco',
            'MZ' : 'Mozambique',
            'MM' : 'Myanmar',
            'NA' : 'Namibia',
            'NR' : 'Nauru',
            'NP' : 'Nepal',
            'NL' : 'Netherlands',
            'AN' : 'Netherlands Antilles',
            'NC' : 'New Caledonia',
            'NZ' : 'New Zealand',
            'NI' : 'Nicaragua',
            'NE' : 'Niger',
            'NG' : 'Nigeria',
            'NU' : 'Niue',
            'NF' : 'Norfolk Island',
            'MP' : 'Northern Mariana Islands',
            'NO' : 'Norway',
            'OM' : 'Oman',
            'PK' : 'Pakistan',
            'PW' : 'Palau',
            'PS' : 'Palestinian Territory, Occupied',
            'PA' : 'Panama',
            'PG' : 'Papua New Guinea',
            'PY' : 'Paraguay',
            'PE' : 'Peru',
            'PH' : 'Philippines',
            'PN' : 'Pitcairn',
            'PL' : 'Poland',
            'PT' : 'Portugal',
            'PR' : 'Puerto Rico',
            'QA' : 'Qatar',
            'RE' : 'Reunion',
            'RO' : 'Romania',
            'RU' : 'Russian Federation',
            'RW' : 'Rwanda',
            'BL' : 'Saint Barthelemy',
            'SH' : 'Saint Helena',
            'KN' : 'Saint Kitts And Nevis',
            'LC' : 'Saint Lucia',
            'MF' : 'Saint Martin',
            'PM' : 'Saint Pierre And Miquelon',
            'VC' : 'Saint Vincent And Grenadines',
            'WS' : 'Samoa',
            'SM' : 'San Marino',
            'ST' : 'Sao Tome And Principe',
            'SA' : 'Saudi Arabia',
            'SN' : 'Senegal',
            'RS' : 'Serbia',
            'SC' : 'Seychelles',
            'SL' : 'Sierra Leone',
            'SG' : 'Singapore',
            'SK' : 'Slovakia',
            'SI' : 'Slovenia',
            'SB' : 'Solomon Islands',
            'SO' : 'Somalia',
            'ZA' : 'South Africa',
            'GS' : 'South Georgia And Sandwich Isl.',
            'ES' : 'Spain',
            'LK' : 'Sri Lanka',
            'SD' : 'Sudan',
            'SR' : 'Suriname',
            'SJ' : 'Svalbard And Jan Mayen',
            'SZ' : 'Swaziland',
            'SE' : 'Sweden',
            'CH' : 'Switzerland',
            'SY' : 'Syrian Arab Republic',
            'TW' : 'Taiwan',
            'TJ' : 'Tajikistan',
            'TZ' : 'Tanzania',
            'TH' : 'Thailand',
            'TL' : 'Timor-Leste',
            'TG' : 'Togo',
            'TK' : 'Tokelau',
            'TO' : 'Tonga',
            'TT' : 'Trinidad And Tobago',
            'TN' : 'Tunisia',
            'TR' : 'Turkey',
            'TM' : 'Turkmenistan',
            'TC' : 'Turks And Caicos Islands',
            'TV' : 'Tuvalu',
            'UG' : 'Uganda',
            'UA' : 'Ukraine',
            'AE' : 'United Arab Emirates',
            'GB' : 'United Kingdom',
            'US' : 'United States',
            'UM' : 'United States Outlying Islands',
            'UY' : 'Uruguay',
            'UK' : 'United Kingdom',
            'UZ' : 'Uzbekistan',
            'VU' : 'Vanuatu',
            'VE' : 'Venezuela',
            'VN' : 'Viet Nam',
            'VG' : 'Virgin Islands, British',
            'VI' : 'Virgin Islands, U.S.',
            'WF' : 'Wallis And Futuna',
            'EH' : 'Western Sahara',
            'YE' : 'Yemen',
            'ZM' : 'Zambia',
            'ZW' : 'Zimbabwe'
        };
        
        let countryCode = response.data.sys.country;
        let country = response.data.sys.country;
        
        if (isoCountries.hasOwnProperty(countryCode)) {
          country = isoCountries[countryCode];
        }          
        console.log(country);

        let city = response.data.name;
        let description = (response.data.weather[0].description);
        let icon = response.data.weather[0].icon;
        let temperature = Math.round(response.data.main.temp);
        let temperatureFahr = Math.round(temperature * (9/5) + 32);
        let wind = response.data.wind.speed;
        let sunriseHex = response.data.sys.sunrise;
        let sunsetHex = response.data.sys.sunset;
        let sunrise = new Date(sunriseHex * 1000);
        let sunset = new Date(sunsetHex * 1000);
        let sunriseHours = sunrise.getHours();
        let sunriseMinutes = sunrise.getMinutes();
        let sunsetHours = sunset.getHours();
        let sunsetMinutes = sunset.getMinutes();

        if (sunriseHours < 10) {
          sunriseHours = `0${sunriseHours}`
        };
        if (sunriseMinutes < 10) {
          sunriseMinutes = `0${sunriseMinutes}`
        };
        if (sunsetHours < 10) {
          sunsetHours = `0${sunsetHours}`
        };
        if (sunsetMinutes < 10) {
          sunsetMinutes = `0${sunsetMinutes}`
        };

        let sunriseTime = `${sunriseHours}:${sunriseMinutes}`;
        let sunsetTime = `${sunsetHours}:${sunsetMinutes}`;
        
        sunriseInfo.innerHTML = `${sunriseTime}`;
        sunsetInfo.innerHTML = `${sunsetTime}`;
        windInfo.innerHTML = `${wind} km/h`;
        descriptionInfo.innerHTML = `${description}`;
        tempInfo.innerHTML = `${temperature}`;
        cityCountryInfo.innerHTML = `${city}, ${country}`;

        if (buttonTemp.classList.contains("active")) {
        //if (this.state.unit === "celsius") {
          tempInfo.innerHTML = `${temperature}°C`;
        } else {
          tempInfo.innerHTML = `${temperatureFahr}°F`;
        }
      });
    });

    let now = this.state.date;

    let getTime = document.getElementById('location-time');
    let weekDays = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let getWeekDay = weekDays[now.getDay()];
    let getHours = now.getHours();
    let getMinutes = now.getMinutes();
    let getClock = "";
  
    if (getMinutes < 10) {
      getMinutes = `0${getMinutes}`;
    }
    if (getHours < 10) {
      getHours= `0${getHours}`;
    }

    if (getHours < 12 ) {
      getClock = `AM`;
    } else {
      getClock = `PM`;
    }

    let time = `${getWeekDay}, ${getHours}:${getMinutes} ${getClock}`;
    getTime.innerHTML = `${time}`;
  };

  render() {
    return (
      <div className="main-header">
        <div className="clearfix">
          <div className="clearfix float-left main-title">myWeather</div>
          <form className="clearfix float-left"> 
            <div className="form-group float-left">
              <input type="text" placeholder="Enter a location" className="search-input form-control"></input>
            </div>
            <input type="submit" value="Search" className="btn btn-info btn-sm clearfix float-left"></input>
          </form>
          <button type="button" className="btn btn-secondary btn-sm clearfix float-left" onClick={this.getCurrentLocation}>Current Location</button>
          <TemperatureButton />
        </div>
      </div>  
    )
  }
}