import React, { useState } from 'react';
import "./weather.css"

function Weatherinfo(props) {
    const { weather } = props;

    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let currentTime = hour + ":" 
            + min + ":" + sec ;
     const [setTime , setUpdateTime] = useState(currentTime);

     function updateTimes (){
          setUpdateTime(currentTime);
    }

    setInterval(updateTimes,1000);

 
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }

    return (

        <>
            <div className="wrap-weather">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="weather-info">
                                <p id="city">{`${weather?.name}, ${weather?.sys?.country}`}</p>
                                <div className="temp-data-align">
                                    <p id="weather-temp">{`${Math.floor(weather?.main?.temp_min - 273)}°`}<span>C</span></p>
                                    <div id="weather-time">
                                        <p>{
                                            setTime
                                        }
                                        </p>
                                        <p>{
                                            new Date().toDateString()
                                        }
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="weather-data">
                                <div id="weather-img">
                                   { <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Antu_weather-many-clouds.svg/512px-Antu_weather-many-clouds.svg.png"} alt="" />}

                                </div>
                                <p className="weather-type"><span className="weather-right">{`${weather?.weather[0]?.main}`}</span></p>
                                <hr id="type-hr" />
                                <div className="weather-align">

                                    <span className="data">Humidity</span>
                                    <img src="https://image.flaticon.com/icons/png/512/219/219816.png" alt="" srcset="" />
                                    <span className="data-1">{`${weather?.main?.humidity}`}</span>
                                    <div className="clear"></div>
                                    <hr />
                                </div>
                                <div className="weather-align">
                                    <span className="data">Wind Speed</span>
                                    <img src="https://svgsilh.com/svg/1314955.svg" alt="" srcset="" />
                                    <span className="data-1">{`${weather?.wind?.speed}`}</span>
                                    <div className="clear"></div>
                                    <hr />
                                </div>
                                <div className="weather-align">
                                    <span className="data">Pressure</span>
                                    <img src="https://svgsilh.com/svg/481813.svg" alt="" srcset="" />
                                    <span className="data-1">{`${weather?.main?.pressure}`}</span>
                                    <div className="clear"></div>
                                    <hr />
                                </div>
                                <div className="weather-align">
                                    <span className="data">Surise</span>
                                    <img src="https://svgsilh.com/svg/41191.svg" alt="" srcset="" />
                                    <span className="data-1">{`${getTime(weather?.sys?.sunrise)} A.M`}</span>
                                    <div className="clear"></div>
                                    <hr />
                                </div>
                                <div className="weather-align">
                                    <span className="data">Suset</span>
                                    <img src="https://svgsilh.com/svg/309821.svg" alt="" srcset="" />
                                    <span className="data-1">{`${getTime(weather?.sys?.sunset)} P.M`}</span>
                                    <div className="clear"></div>
                                    <hr />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Weatherinfo;