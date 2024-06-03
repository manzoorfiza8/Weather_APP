import React from 'react'
import "./description.css"
// import { getFormatedWeatherData } from "./WeatherService" ;
import { FaArrowDown ,FaArrowUp,FaWind} from "react-icons/fa"
// import { BiHappy } from "react-icons/bi";
// import {Mdcompress,MdOutlineWaterDrop}


const description = ({weather,units}) => {
  const tempUnit = units ==='metric' ? '°C': '°F'
  const windUnit =units  ==='metric' ? 'm/s': 'm/h'

  const cards = [
    {
      id:1,
      icon : <FaArrowDown />,
      title: "min",
      data : weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id:2,
      icon: <FaArrowUp />,
      title: "max",
      data : weather.temp_max.toFixed(),
      unit: tempUnit,
    },
    {
      id:3,
      icon: <FaArrowDown />,
      title: "Feels Like",
      data : weather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id:4,
      icon: <FaArrowDown />,
      title: "Pressure",
      data : weather.pressure,
      unit: "hPa",
    },
 {
      id:5,
      icon: <FaArrowDown />,
      title: "Humidity",
      data : weather.humidity,
      unit: "%",
    },{
      id:6,
      icon: <FaWind />,
      title: "wind Speed",
      data : weather.speed.toFixed(),
      unit: windUnit,
    }
  ];
  return (
   <div className="section section__description">
      {cards.map(({id,icon,title,data,unit}) => (
        <div  key={id} className="card">
        <div className="description__card-icon">
        {/* icon */}
        <small>{title}</small>
        </div>
        <h2> {`${data} ${unit}`}</h2>
      
    </div>  
      ))}  
   </div>
  )
}

export default description

