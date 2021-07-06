import React from "react";
import Search from "./component/search/Search";
import Weather from "./component/weather/Weatherinfo";
import {useState} from 'react';
import axios from 'axios';
import "./index.css"
  
function App() {
   const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();


  const fetchWeather = async (e)=>{
    e.preventDefault();
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=545c44a17c0d9c4dd35166df28a6669b
    `);
     console.log(response.data);
     updateWeather(response.data);
     console.log(response.data.weather[0].main);

  }   
 
  return (
   <>
   <Search  updateCity={updateCity} fetchWeather={fetchWeather} />
   <Weather weather={weather} city={city}/>
    </>
  );
}

export default App;
