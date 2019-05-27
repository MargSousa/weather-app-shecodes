import React, { Component } from "react";
import "./Header.css";
import axios from "axios";
import TemperatureButton from "./TemperatureButton";

export default class Header extends Component {
  
  getCurrentLocation = (event) => {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(function(position) {
      let getlatitude = position.coords.latitude;
      let getlongitude = position.coords.longitude;
      //let coords = {latitude: getlatitude, longitude: getlongitude};

      let key = `e4e4d6ef596a82924b1c141ba55e4e37`;
      let url = `https://api.openweathermap.org/data/2.5`;
      let pathCoords = `weather?lat=${getlatitude}&lon=${getlongitude}&appid=${key}&units=metric`;
      let pathForecast = `forecast?lat=${getlatitude}&lon=${getlongitude}&appid=${key}&units=metric`;
          
      console.log(`${url}/${pathCoords}`);

      axios.get(`${url}/${pathCoords}`).then(function(response) {
        let buttonTemp = document.getElementById("button-one");
        let cityCountryInfo = document.getElementById('location');
        let getTime = document.getElementById('location-time');
        let sunriseInfo = document.getElementById('sunrise');
        let sunsetInfo = document.getElementById('sunset');
        let rainInfo = document.getElementById('precipitation');
        let windInfo = document.getElementById('wind');
        let tempInfo1 = document.getElementById('location-temperature-s');
        let tempInfo2 = document.getElementById('location-temperature-l');
        let descriptionInfo1 = document.getElementById('location-description-s');
        let descriptionInfo2 = document.getElementById('location-description-l');
        let icon1 = document.getElementById("location-icon-s");
        let icon2 = document.getElementById("location-icon-l");

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

        let iconCodes = {
          '01n' : 'Night',
          '01d' : 'Sunny',
          '02n' : 'NightClouds',
          '02d' : 'SunClouds',
          '03n' : 'Clouds',
          '03d' : 'Clouds',
          '04n' : 'DarkClouds',
          '04d' : 'DarkClouds',
          '09n' : 'DarkCloudRain',
          '09d' : 'DarkCloudRain',
          '10n' : 'NightRain',
          '10d' : 'SunRain',
          '11n' : 'Thunder',
          '11d' : 'Thunder',
          '13d' : 'Snow',
          '13n' : 'Snow',
          '50d' : 'Mist',
          '50n' : 'Mist'
        };
        let getIcon = response.data.weather[0].icon;

        if (getIcon === '09d' || getIcon === '09n') {
          rainInfo.innerHTML = `90%`;
        } else if (getIcon === '10d' ||  getIcon === '10n') {
          rainInfo.innerHTML = `70%`;
        } else if (getIcon === '04d' ||  getIcon === '04n') {
          rainInfo.innerHTML = `50%`;
        }  else if (getIcon === '03d' ||  getIcon === '03n') {
          rainInfo.innerHTML = `10%`;
        } else {
          rainInfo.innerHTML = `0%`;
        }

        if (iconCodes.hasOwnProperty(getIcon)) {
          getIcon = iconCodes[getIcon];
          let iconUrl = `./images/weather_icons/${getIcon}.png`;
          icon1.setAttribute("src",iconUrl);
          icon2.setAttribute("src",iconUrl);
          console.log(iconUrl);
        } else {
          let getIcon = response.data.weather[0].icon;
          let iconUrl = `https://openweathermap.org/img/w/${getIcon}.png`;
          icon1.setAttribute("src",iconUrl);
          icon2.setAttribute("src",iconUrl);
        }
        
        let city = response.data.name;
        let description = (response.data.weather[0].description);
        let temperature = Math.round(response.data.main.temp);
        let temperatureFahr = Math.round(temperature * (9/5) + 32);
        let wind = Math.round(response.data.wind.speed * 3.6);
        let windUS = Math.round(response.data.wind.speed * 3.6 * 0.62);
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
        descriptionInfo1.innerHTML = `${description}`;
        descriptionInfo2.innerHTML = `${description}`;
        cityCountryInfo.innerHTML = `${city}, ${country}`;

        if (buttonTemp.classList.contains("active")) {
          tempInfo1.innerHTML = `${temperature}°C`;
          tempInfo2.innerHTML = `${temperature}°C`;
          windInfo.innerHTML = `${wind} km/h`;
        } else {
          tempInfo1.innerHTML = `${temperatureFahr}°F`;
          tempInfo2.innerHTML = `${temperatureFahr}°F`;
          windInfo.innerHTML = `${windUS} mph`;
        }
        console.log(temperature);
        console.log(temperatureFahr);
      
        let now = new Date();

        let weekDays = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
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
      });
      console.log(`${url}/${pathForecast}`);

      axios.get(`${url}/${pathForecast}`).then(function(response) {
        let buttonTemp = document.getElementById('button-one');
        let weekDay1 = document.getElementById('week-day1');
        let weekDay2 = document.getElementById('week-day2');
        let weekDay3 = document.getElementById('week-day3');
        let weekDay4 = document.getElementById('week-day4');
        let weekDay5 = document.getElementById('week-day5');
        let tempMin1 = document.getElementById('min-temp1');
        let tempMin2 = document.getElementById('min-temp2');
        let tempMin3 = document.getElementById('min-temp3');
        let tempMin4 = document.getElementById('min-temp4');
        let tempMin5 = document.getElementById('min-temp5');
        let tempMax1 = document.getElementById('max-temp1');
        let tempMax2 = document.getElementById('max-temp2');
        let tempMax3 = document.getElementById('max-temp3');
        let tempMax4 = document.getElementById('max-temp4');
        let tempMax5 = document.getElementById('max-temp5');
        let icon1 = document.getElementById('week-icon1');
        let icon2 = document.getElementById('week-icon2');
        let icon3 = document.getElementById('week-icon3');
        let icon4 = document.getElementById('week-icon4');
        let icon5 = document.getElementById('week-icon5');
        
        // Obtem dias da semana

        let now = new Date();
        let weekDays = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
        let nextDayCodes = {
          'Monday' : 'TUE',
          'Tuesday' : 'WED',
          'Wednesday' : 'THU',
          'Thursday' : 'FRI',
          'Friday' : 'SAT',
          'Saturday' : 'SUN',
          'Sunday' : 'MON'
        };
        let getWeekDay = weekDays[now.getDay()];
        let getNext1 = nextDayCodes[getWeekDay];
        let getWeekDay2 = weekDays[now.getDay()+1];
        let getNext2 = nextDayCodes[getWeekDay2];
        let getWeekDay3 = weekDays[now.getDay()+2];
        let getNext3 = nextDayCodes[getWeekDay3];
        let getWeekDay4 = weekDays[now.getDay()+3];
        let getNext4 = nextDayCodes[getWeekDay4];
        let getWeekDay5 = weekDays[now.getDay()+4];
        let getNext5 = nextDayCodes[getWeekDay5];

        weekDay1.innerHTML = `${getNext1}`;
        weekDay2.innerHTML = `${getNext2}`;
        weekDay3.innerHTML = `${getNext3}`;
        weekDay4.innerHTML = `${getNext4}`;
        weekDay5.innerHTML = `${getNext5}`;

        // Obtem Temperaturas do forecast

        let newTime = new Date();
        let hours = newTime.getHours();
        console.log(hours);

        //if (hours >= 1) 
        let index1 = 8;
        let index2 = 11;
        let index3 = 16;
        let index4 = 19;
        let index5 = 24;
        let index6 = 27;
        let index7 = 32;
        let index8 = 35;
        let index9 = 32;
        let index10 = 35;
        
        if (hours >= 22) {
          index1 = 1;
          index2 = 4;
          index3 = 9;
          index4 = 12;
          index5 = 17;
          index6 = 20;
          index7 = 25;
          index8 = 28;
          index9 = 33;
          index10 = 36;
        } else if (hours >= 19) {
          index1 = 2;
          index2 = 5;
          index3 = 10;
          index4 = 13;
          index5 = 18;
          index6 = 21;
          index7 = 26;
          index8 = 29;
          index9 = 34;
          index10 = 37;
        } else if (hours >= 16) {
          index1 = 3;
          index2 = 6;
          index3 = 11;
          index4 = 14;
          index5 = 19;
          index6 = 22;
          index7 = 27;
          index8 = 30;
          index9 = 35;
          index10 = 38;
        } else if (hours >= 13) {
          index1 = 4;
          index2 = 7;
          index3 = 12;
          index4 = 15;
          index5 = 20;
          index6 = 23;
          index7 = 28;
          index8 = 31;
          index9 = 36;
          index10 = 39;
        } else if (hours >= 10 ) {
          index1 = 5;
          index2 = 8;
          index3 = 13;
          index4 = 16;
          index5 = 21;
          index6 = 24;
          index7 = 29;
          index8 = 32;
          index9 = 37;
          index10 = 32;
        } else if (hours >= 7) {
          index1 = 6;
          index2 = 9;
          index3 = 14;
          index4 = 17;
          index5 = 22;
          index6 = 25;
          index7 = 30;
          index8 = 33;
          index9 = 38;
          index10 = 33;
        } else if (hours >= 4) {
          index1 = 7;
          index2 = 10;
          index3 = 15;
          index4 = 18;
          index5 = 23;
          index6 = 26;
          index7 = 31;
          index8 = 34;
          index9 = 39;
          index10 = 34;
        } 

        //console.log(response.data.list[index1].dt_txt);
        //console.log(response.data.list[index2].dt_txt);
        //console.log(response.data.list[index3].dt_txt);
        //console.log(response.data.list[index4].dt_txt);
        //console.log(response.data.list[index5].dt_txt);
        //console.log(response.data.list[index6].dt_txt);
        //console.log(response.data.list[index7].dt_txt);
        //console.log(response.data.list[index8].dt_txt);
        //console.log(response.data.list[index9].dt_txt);
        //console.log(response.data.list[index10].dt_txt);

        let getMinTemp1 = Math.round(response.data.list[index1].main.temp_min);
        let getMaxTemp1 = Math.round(response.data.list[index2].main.temp_max);
        let getMinTemp2 = Math.round(response.data.list[index3].main.temp_min);
        let getMaxTemp2 = Math.round(response.data.list[index4].main.temp_max);
        let getMinTemp3 = Math.round(response.data.list[index5].main.temp_min);
        let getMaxTemp3 = Math.round(response.data.list[index6].main.temp_max);
        let getMinTemp4 = Math.round(response.data.list[index7].main.temp_min);
        let getMaxTemp4 = Math.round(response.data.list[index8].main.temp_max);
        let getMinTemp5 = Math.round(response.data.list[index9].main.temp_min);
        let getMaxTemp5 = Math.round(response.data.list[index10].main.temp_max);

        let tempFahrMin1 = Math.round(getMinTemp1 * (9/5) + 32);
        let tempFahrMax1 = Math.round(getMaxTemp1 * (9/5) + 32);
        let tempFahrMin2 = Math.round(getMinTemp2 * (9/5) + 32);
        let tempFahrMax2 = Math.round(getMaxTemp2 * (9/5) + 32);
        let tempFahrMin3 = Math.round(getMinTemp3 * (9/5) + 32);
        let tempFahrMax3 = Math.round(getMaxTemp3 * (9/5) + 32);
        let tempFahrMin4 = Math.round(getMinTemp4 * (9/5) + 32);
        let tempFahrMax4 = Math.round(getMaxTemp4 * (9/5) + 32);
        let tempFahrMin5 = Math.round(getMinTemp5 * (9/5) + 32);
        let tempFahrMax5 = Math.round(getMaxTemp5 * (9/5) + 32);

        if (buttonTemp.classList.contains("active")) {
          tempMax1.innerHTML = `${getMaxTemp1}°`;
          tempMin1.innerHTML = ` / ${getMinTemp1}°C`;
          tempMax2.innerHTML = `${getMaxTemp2}°`;
          tempMin2.innerHTML = ` / ${getMinTemp2}°C`;
          tempMax3.innerHTML = `${getMaxTemp3}°`;
          tempMin3.innerHTML = ` / ${getMinTemp3}°C`;
          tempMax4.innerHTML = `${getMaxTemp4}°`;
          tempMin4.innerHTML = ` / ${getMinTemp4}°C`;
          tempMax5.innerHTML = `${getMaxTemp5}°`;
          tempMin5.innerHTML = ` / ${getMinTemp5}°C`;
        } else {
          tempMax1.innerHTML = `${tempFahrMax1}°`;
          tempMin1.innerHTML = ` / ${tempFahrMin1}°F`;
          tempMax2.innerHTML = `${tempFahrMax2}°`;
          tempMin2.innerHTML = ` / ${tempFahrMin2}°F`;
          tempMax3.innerHTML = `${tempFahrMax3}°`;
          tempMin3.innerHTML = ` / ${tempFahrMin3}°F`;
          tempMax4.innerHTML = `${tempFahrMax4}°`;
          tempMin4.innerHTML = ` / ${tempFahrMin4}°F`;
          tempMax5.innerHTML = `${tempFahrMax5}°`;
          tempMin5.innerHTML = ` / ${tempFahrMin5}°F`;
        }

        // Obtem icons da semana

        let iconCodes = {
          '01n' : 'Night',
          '01d' : 'Sunny',
          '02n' : 'NightClouds',
          '02d' : 'SunClouds',
          '03n' : 'Clouds',
          '03d' : 'Clouds',
          '04n' : 'DarkClouds',
          '04d' : 'DarkClouds',
          '09n' : 'DarkCloudRain',
          '09d' : 'DarkCloudRain',
          '10n' : 'NightRain',
          '10d' : 'SunRain',
          '11n' : 'Thunder',
          '11d' : 'Thunder',
          '13d' : 'Snow',
          '13n' : 'Snow',
          '50d' : 'Mist',
          '50n' : 'Mist'
        };
        
        let getIcon1 = response.data.list[index2].weather[0].icon;
        let getIcon2 = response.data.list[index4].weather[0].icon;
        let getIcon3 = response.data.list[index6].weather[0].icon;
        let getIcon4 = response.data.list[index8].weather[0].icon;
        let getIcon5 = response.data.list[index10].weather[0].icon;
    
        if (iconCodes.hasOwnProperty(getIcon1)) {
          getIcon1 = iconCodes[getIcon1];
          let iconUrl = `./images/weather_icons/${getIcon1}.png`;
          icon1.setAttribute("src",iconUrl);
        } else {
          let iconUrl = `https://openweathermap.org/img/w/${getIcon1}.png`;
          icon1.setAttribute("src",iconUrl);
        }

        if (iconCodes.hasOwnProperty(getIcon2)) {
          getIcon2 = iconCodes[getIcon2];
          let iconUrl = `./images/weather_icons/${getIcon2}.png`;
          icon2.setAttribute("src",iconUrl);
        } else {
          let iconUrl = `https://openweathermap.org/img/w/${getIcon2}.png`;
          icon2.setAttribute("src",iconUrl);
        }
        if (iconCodes.hasOwnProperty(getIcon3)) {
          getIcon3 = iconCodes[getIcon3];
          let iconUrl = `./images/weather_icons/${getIcon3}.png`;
          icon3.setAttribute("src",iconUrl);
        } else {
          let iconUrl = `https://openweathermap.org/img/w/${getIcon3}.png`;
          icon3.setAttribute("src",iconUrl);
        }

        if (iconCodes.hasOwnProperty(getIcon4)) {
          getIcon4 = iconCodes[getIcon4];
          let iconUrl = `./images/weather_icons/${getIcon4}.png`;
          icon4.setAttribute("src",iconUrl);
        } else {
          let iconUrl = `https://openweathermap.org/img/w/${getIcon4}.png`;
          icon4.setAttribute("src",iconUrl);
        }

        if (iconCodes.hasOwnProperty(getIcon5)) {
          getIcon5 = iconCodes[getIcon5];
          let iconUrl = `./images/weather_icons/${getIcon5}.png`;
          icon5.setAttribute("src",iconUrl);
        } else {
          let iconUrl = `https://openweathermap.org/img/w/${getIcon5}.png`;
          icon5.setAttribute("src",iconUrl);
        }
      });
    });
  };

  getSearchTemp = (event) => {
    event.preventDefault();
    let inputValue = document.getElementById('search-input').value;
    if (inputValue.length > 0) {
      console.log(inputValue);

      let key = `e4e4d6ef596a82924b1c141ba55e4e37`;
      let url = `https://api.openweathermap.org/data/2.5`;
      let pathSearch = `weather?q=${inputValue}&appid=${key}&units=metric`;
      let pathForecast = `forecast?q=${inputValue}&appid=${key}&units=metric`;
    
      console.log(`${url}/${pathSearch}`);

      axios.get(`${url}/${pathSearch}`).then(function(response) {
        let buttonTemp = document.getElementById("button-one");
        let cityCountryInfo = document.getElementById('location');
        let getTime = document.getElementById('location-time');
        let sunriseInfo = document.getElementById('sunrise');
        let sunsetInfo = document.getElementById('sunset');
        let rainInfo = document.getElementById('precipitation');
        let windInfo = document.getElementById('wind');
        let tempInfo1 = document.getElementById('location-temperature-s');
        let tempInfo2 = document.getElementById('location-temperature-l');
        let descriptionInfo1 = document.getElementById('location-description-s');
        let descriptionInfo2 = document.getElementById('location-description-l');
        let icon1 = document.getElementById("location-icon-s");
        let icon2 = document.getElementById("location-icon-l");

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

        let iconCodes = {
          '01n' : 'Night',
          '01d' : 'Sunny',
          '02n' : 'NightClouds',
          '02d' : 'SunClouds',
          '03n' : 'Clouds',
          '03d' : 'Clouds',
          '04n' : 'DarkClouds',
          '04d' : 'DarkClouds',
          '09n' : 'DarkCloudRain',
          '09d' : 'DarkCloudRain',
          '10n' : 'NightRain',
          '10d' : 'SunRain',
          '11n' : 'Thunder',
          '11d' : 'Thunder',
          '13d' : 'Snow',
          '13n' : 'Snow',
          '50d' : 'Mist',
          '50n' : 'Mist'
        };

        let getIcon = response.data.weather[0].icon;

        if (getIcon === '09d' || getIcon === '09n') {
          rainInfo.innerHTML = `90%`;
        } else if (getIcon === '10d' ||  getIcon === '10n') {
          rainInfo.innerHTML = `70%`;
        } else if (getIcon === '04d' ||  getIcon === '04n') {
          rainInfo.innerHTML = `50%`;
        }  else if (getIcon === '03d' ||  getIcon === '03n') {
          rainInfo.innerHTML = `10%`;
        } else {
          rainInfo.innerHTML = `0%`;
        }

        if (iconCodes.hasOwnProperty(getIcon)) {
          getIcon = iconCodes[getIcon];
          let iconUrl = `./images/weather_icons/${getIcon}.png`;
          icon1.setAttribute("src",iconUrl);
          icon2.setAttribute("src",iconUrl);
          console.log(iconUrl);
        } else {
          let getIcon = response.data.weather[0].icon;
          let iconUrl = `https://openweathermap.org/img/w/${getIcon}.png`;
          icon1.setAttribute("src",iconUrl);
          icon2.setAttribute("src",iconUrl);
        }

        let city = response.data.name;
        let description = (response.data.weather[0].description);
        let temperature = Math.round(response.data.main.temp);
        let temperatureFahr = Math.round(temperature * (9/5) + 32);
        let wind = Math.round(response.data.wind.speed * 3.6);
        let windUS = Math.round(response.data.wind.speed * 3.6 * 0.62);
        let daytime = new Date(response.data.dt * 1000);
      
        let weekDays = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
        let getWeekDay = weekDays[daytime.getDay()];
        let getHours = daytime.getHours();
        let getMinutes = daytime.getMinutes();
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
        descriptionInfo1.innerHTML = `${description}`;
        descriptionInfo2.innerHTML = `${description}`;
        cityCountryInfo.innerHTML = `${city}, ${country}`;
        
        if (buttonTemp.classList.contains("active")) {
          tempInfo1.innerHTML = `${temperature}°C`;
          tempInfo2.innerHTML = `${temperature}°C`;
          windInfo.innerHTML = `${wind} km/h`;
        } else {
          tempInfo1.innerHTML = `${temperatureFahr}°F`;
          tempInfo2.innerHTML = `${temperatureFahr}°F`;
          windInfo.innerHTML = `${windUS} mph`;
        }
      });

      console.log(`${url}/${pathForecast}`);

      axios.get(`${url}/${pathForecast}`).then(function(response) {
        let buttonTemp = document.getElementById('button-one');
        let weekDay1 = document.getElementById('week-day1');
        let weekDay2 = document.getElementById('week-day2');
        let weekDay3 = document.getElementById('week-day3');
        let weekDay4 = document.getElementById('week-day4');
        let weekDay5 = document.getElementById('week-day5');
        let tempMin1 = document.getElementById('min-temp1');
        let tempMin2 = document.getElementById('min-temp2');
        let tempMin3 = document.getElementById('min-temp3');
        let tempMin4 = document.getElementById('min-temp4');
        let tempMin5 = document.getElementById('min-temp5');
        let tempMax1 = document.getElementById('max-temp1');
        let tempMax2 = document.getElementById('max-temp2');
        let tempMax3 = document.getElementById('max-temp3');
        let tempMax4 = document.getElementById('max-temp4');
        let tempMax5 = document.getElementById('max-temp5');
        let icon1 = document.getElementById('week-icon1');
        let icon2 = document.getElementById('week-icon2');
        let icon3 = document.getElementById('week-icon3');
        let icon4 = document.getElementById('week-icon4');
        let icon5 = document.getElementById('week-icon5');
        
        // Obtem dias da semana
  
        let now = new Date();
        let weekDays = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
        let nextDayCodes = {
          'Monday' : 'TUE',
          'Tuesday' : 'WED',
          'Wednesday' : 'THU',
          'Thursday' : 'FRI',
          'Friday' : 'SAT',
          'Saturday' : 'SUN',
          'Sunday' : 'MON'
        };
        let getWeekDay = weekDays[now.getDay()];
        let getNext1 = nextDayCodes[getWeekDay];
        let getWeekDay2 = weekDays[now.getDay()+1];
        let getNext2 = nextDayCodes[getWeekDay2];
        let getWeekDay3 = weekDays[now.getDay()+2];
        let getNext3 = nextDayCodes[getWeekDay3];
        let getWeekDay4 = weekDays[now.getDay()+3];
        let getNext4 = nextDayCodes[getWeekDay4];
        let getWeekDay5 = weekDays[now.getDay()+4];
        let getNext5 = nextDayCodes[getWeekDay5];
  
        weekDay1.innerHTML = `${getNext1}`;
        weekDay2.innerHTML = `${getNext2}`;
        weekDay3.innerHTML = `${getNext3}`;
        weekDay4.innerHTML = `${getNext4}`;
        weekDay5.innerHTML = `${getNext5}`;
  
        // Obtem Temperaturas do forecast

        let newTime = new Date();
        let hours = newTime.getHours();
        console.log(hours);

        //if (hours >= 1) 
        let index1 = 8;
        let index2 = 11;
        let index3 = 16;
        let index4 = 19;
        let index5 = 24;
        let index6 = 27;
        let index7 = 32;
        let index8 = 35;
        let index9 = 32;
        let index10 = 35;
        
        if (hours >= 22) {
          index1 = 1;
          index2 = 4;
          index3 = 9;
          index4 = 12;
          index5 = 17;
          index6 = 20;
          index7 = 25;
          index8 = 28;
          index9 = 33;
          index10 = 36;
        } else if (hours >= 19) {
          index1 = 2;
          index2 = 5;
          index3 = 10;
          index4 = 13;
          index5 = 18;
          index6 = 21;
          index7 = 26;
          index8 = 29;
          index9 = 34;
          index10 = 37;
        } else if (hours >= 16) {
          index1 = 3;
          index2 = 6;
          index3 = 11;
          index4 = 14;
          index5 = 19;
          index6 = 22;
          index7 = 27;
          index8 = 30;
          index9 = 35;
          index10 = 38;
        } else if (hours >= 13) {
          index1 = 4;
          index2 = 7;
          index3 = 12;
          index4 = 15;
          index5 = 20;
          index6 = 23;
          index7 = 28;
          index8 = 31;
          index9 = 36;
          index10 = 39;
        } else if (hours >= 10 ) {
          index1 = 5;
          index2 = 8;
          index3 = 13;
          index4 = 16;
          index5 = 21;
          index6 = 24;
          index7 = 29;
          index8 = 32;
          index9 = 37;
          index10 = 32;
        } else if (hours >= 7) {
          index1 = 6;
          index2 = 9;
          index3 = 14;
          index4 = 17;
          index5 = 22;
          index6 = 25;
          index7 = 30;
          index8 = 33;
          index9 = 38;
          index10 = 33;
        } else if (hours >= 4) {
          index1 = 7;
          index2 = 10;
          index3 = 15;
          index4 = 18;
          index5 = 23;
          index6 = 26;
          index7 = 31;
          index8 = 34;
          index9 = 39;
          index10 = 34;
        } 

        let getMinTemp1 = Math.round(response.data.list[index1].main.temp_min);
        let getMaxTemp1 = Math.round(response.data.list[index2].main.temp_max);
        let getMinTemp2 = Math.round(response.data.list[index3].main.temp_min);
        let getMaxTemp2 = Math.round(response.data.list[index4].main.temp_max);
        let getMinTemp3 = Math.round(response.data.list[index5].main.temp_min);
        let getMaxTemp3 = Math.round(response.data.list[index6].main.temp_max);
        let getMinTemp4 = Math.round(response.data.list[index7].main.temp_min);
        let getMaxTemp4 = Math.round(response.data.list[index8].main.temp_max);
        let getMinTemp5 = Math.round(response.data.list[index9].main.temp_min);
        let getMaxTemp5 = Math.round(response.data.list[index10].main.temp_max);
    
        let tempFahrMin1 = Math.round(getMinTemp1 * (9/5) + 32);
        let tempFahrMax1 = Math.round(getMaxTemp1 * (9/5) + 32);
        let tempFahrMin2 = Math.round(getMinTemp2 * (9/5) + 32);
        let tempFahrMax2 = Math.round(getMaxTemp2 * (9/5) + 32);
        let tempFahrMin3 = Math.round(getMinTemp3 * (9/5) + 32);
        let tempFahrMax3 = Math.round(getMaxTemp3 * (9/5) + 32);
        let tempFahrMin4 = Math.round(getMinTemp4 * (9/5) + 32);
        let tempFahrMax4 = Math.round(getMaxTemp4 * (9/5) + 32);
        let tempFahrMin5 = Math.round(getMinTemp5 * (9/5) + 32);
        let tempFahrMax5 = Math.round(getMaxTemp5 * (9/5) + 32);
  
        if (buttonTemp.classList.contains("active")) {
          tempMax1.innerHTML = `${getMaxTemp1}°`;
          tempMin1.innerHTML = ` / ${getMinTemp1}°C`;
          tempMax2.innerHTML = `${getMaxTemp2}°`;
          tempMin2.innerHTML = ` / ${getMinTemp2}°C`;
          tempMax3.innerHTML = `${getMaxTemp3}°`;
          tempMin3.innerHTML = ` / ${getMinTemp3}°C`;
          tempMax4.innerHTML = `${getMaxTemp4}°`;
          tempMin4.innerHTML = ` / ${getMinTemp4}°C`;
          tempMax5.innerHTML = `${getMaxTemp5}°`;
          tempMin5.innerHTML = ` / ${getMinTemp5}°C`;
        } else {
          tempMax1.innerHTML = `${tempFahrMax1}°`;
          tempMin1.innerHTML = ` / ${tempFahrMin1}°F`;
          tempMax2.innerHTML = `${tempFahrMax2}°`;
          tempMin2.innerHTML = ` / ${tempFahrMin2}°F`;
          tempMax3.innerHTML = `${tempFahrMax3}°`;
          tempMin3.innerHTML = ` / ${tempFahrMin3}°F`;
          tempMax4.innerHTML = `${tempFahrMax4}°`;
          tempMin4.innerHTML = ` / ${tempFahrMin4}°F`;
          tempMax5.innerHTML = `${tempFahrMax5}°`;
          tempMin5.innerHTML = ` / ${tempFahrMin5}°F`;
        }
  
        // Obtem icons da semana
  
        let iconCodes = {
          '01n' : 'Night',
          '01d' : 'Sunny',
          '02n' : 'NightClouds',
          '02d' : 'SunClouds',
          '03n' : 'Clouds',
          '03d' : 'Clouds',
          '04n' : 'DarkClouds',
          '04d' : 'DarkClouds',
          '09n' : 'DarkCloudRain',
          '09d' : 'DarkCloudRain',
          '10n' : 'NightRain',
          '10d' : 'SunRain',
          '11n' : 'Thunder',
          '11d' : 'Thunder',
          '13d' : 'Snow',
          '13n' : 'Snow',
          '50d' : 'Mist',
          '50n' : 'Mist'
        };

        let getIcon1 = response.data.list[index2].weather[0].icon;
        let getIcon2 = response.data.list[index4].weather[0].icon;
        let getIcon3 = response.data.list[index6].weather[0].icon;
        let getIcon4 = response.data.list[index8].weather[0].icon;
        let getIcon5 = response.data.list[index10].weather[0].icon;
    
        if (iconCodes.hasOwnProperty(getIcon1)) {
          getIcon1 = iconCodes[getIcon1];
          let iconUrl = `./images/weather_icons/${getIcon1}.png`;
          icon1.setAttribute("src",iconUrl);
        } else {
          let iconUrl = `https://openweathermap.org/img/w/${getIcon1}.png`;
          icon1.setAttribute("src",iconUrl);
        }

        if (iconCodes.hasOwnProperty(getIcon2)) {
          getIcon2 = iconCodes[getIcon2];
          let iconUrl = `./images/weather_icons/${getIcon2}.png`;
          icon2.setAttribute("src",iconUrl);
        } else {
          let iconUrl = `https://openweathermap.org/img/w/${getIcon2}.png`;
          icon2.setAttribute("src",iconUrl);
        }

        if (iconCodes.hasOwnProperty(getIcon3)) {
          getIcon3 = iconCodes[getIcon3];
          let iconUrl = `./images/weather_icons/${getIcon3}.png`;
          icon3.setAttribute("src",iconUrl);
        } else {
          let iconUrl = `https://openweathermap.org/img/w/${getIcon3}.png`;
          icon3.setAttribute("src",iconUrl);
        }

        if (iconCodes.hasOwnProperty(getIcon4)) {
          getIcon4 = iconCodes[getIcon4];
          let iconUrl = `./images/weather_icons/${getIcon4}.png`;
          icon4.setAttribute("src",iconUrl);
        } else {
          let iconUrl = `https://openweathermap.org/img/w/${getIcon4}.png`;
          icon4.setAttribute("src",iconUrl);
        }

        if (iconCodes.hasOwnProperty(getIcon5)) {
          getIcon5 = iconCodes[getIcon5];
          let iconUrl = `./images/weather_icons/${getIcon5}.png`;
          icon5.setAttribute("src",iconUrl);
        } else {
          let iconUrl = `https://openweathermap.org/img/w/${getIcon5}.png`;
          icon5.setAttribute("src",iconUrl);
        }
    
      });
    } else {
      alert(`Please enter a city`);
    }
  }

  render = () => {
    return (
      <div className="main-header">
        <div className="clearfix">
          <div className="clearfix float-left main-title">myWeather</div>
          <form className="clearfix float-left"> 
            <div className="form-group float-left">
              <input type="text" placeholder="Enter a location" autoComplete="off" className="search-input form-control" id="search-input"></input>
            </div>
            <input type="submit" value="Search" onClick={this.getSearchTemp} className="btn btn-info btn-sm clearfix float-left"></input>
          </form>
          <button type="button" onClick={this.getCurrentLocation.bind(this)} className="btn btn-secondary btn-sm clearfix float-left">Current Location</button>
          <TemperatureButton />
        </div>
      </div>  
    )
  }
}