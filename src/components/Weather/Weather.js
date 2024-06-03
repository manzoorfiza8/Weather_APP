import React, { useEffect , useState} from 'react'
import cloudy from "./assets/cloudy.jpg"
import hotbg from "./assets/hotbg.png"
import Description from "./description"
import "./weather.css";
import Navbar from "./Navbar"
import { getFormatedWeatherData } from "./WeatherService" ;

function Weather() {
  const [city ,setCity ] = useState("Multan");
  const [weather,setWeather]= useState(null); 
  const [units, setunits]= useState("imperial");
  const [bg, setbg] = useState(cloudy)
  useEffect(() => {
    const fetchWeatherData = async ()=> {
      const data =await getFormatedWeatherData(city,units);
    setWeather(data)
    console.log(data)
    const threshold = units === "metric" ? 39 :60;
    if (data.temp <= threshold) setbg(cloudy);
    else setbg(hotbg)
    };
    fetchWeatherData();
  },  [units, city ]);

  const handleUnitsClick = ( e) => {
    const button =e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit ==="C";
    button.innerText= isCelsius? " °F": "°C";
    setunits(isCelsius ? "metric" : "imperial");
}
  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
    }
  };
  return ( 
    
    <div  className='app' >
      < Navbar />
      <div className="imageContainer" style={{backgroundImage: `url(${bg})`}} >
      <div className="overlay">
        {weather && (
           <div className="container">
           <div className="section section__inputs">
             <input 
             onKeyDown={enterKeyPressed} 
             type="text"
              name ="city" 
              placeholder="Enter Location" />     
             <button onClick={(e)=> handleUnitsClick(e) }>°F</button>
           </div>
 
          <div className="section section__temperature">
            <div className="icon">
             <h3>{`${weather.name},${weather.country}`}</h3>
             <img src={hotbg.iconURL} alt='temperature'></img>
             <h3>{weather.description}</h3>
            </div>
  
           <div className="temperature">
           <h2>{`${weather.temp.toFixed()} 
           °${units==='metric'? 'C': 'F'}`}</h2>
            </div>
          </div>
         {/* bottom description */}
         <Description weather={weather } units={units} /> 
          </div>
         )}      
      </div>
      </div>
    </div>

  )}

export default Weather