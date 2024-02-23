import React from 'react';
import './card.css'; // Create this CSS file for styling
import { Link } from 'react-router-dom'; // Import Link
import CardDetails from "./CardDetails"
import {FaRegHeart} from 'react-icons/fa'
import {LuCalendarRange} from 'react-icons/lu'

const Card = ({ imageSrc, title, description, category,priceText,buttonText ,calendarText}) => {
  return (
    <div className="card">
      
      <img src={imageSrc} alt={title} className="card-image" />
      
    <div className="chip-content">
      <p className='chip'>{category}</p>
      </div>

      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        </div>
        <div className="desc-content">
        <p className="card-description">{description}</p>
        </div>
        <div className="calendar-info">
        <LuCalendarRange />
          <p className="calendar-text">{calendarText}</p>
        </div>
        <div className="price-info">
          <p className="price-text">{priceText}</p>
        </div>
        {/* <button className="card-button">
        <Link to="/">
          {buttonText}</Link>
      </button>       */}
       <div className="card-bottom">
      <div className="icon">
        <FaRegHeart />
      </div>
      <div className="button">
        <Link to="/CardDetails">
          <button className='card-button'>Tour Details</button>
        </Link>
      </div>
    </div>
      </div>
  );
};

export default Card;
