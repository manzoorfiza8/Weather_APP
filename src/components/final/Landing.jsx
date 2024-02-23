import React from 'react'
import Home from "./Home"
import "./Landing.css"
import Card from '../card/Card'
import CardDetails from "../card/CardDetails"

 const Landing= () => {
  return (
    <>
      <Home />
      < br />
      < br />
   <div  className='pkg-header'>    <h2> Our Exclusive Packages</h2>
    <h1> 
      <span>“</span> Seamless Travel Booking with Travelperk <span>”</span>
    </h1>
    <p>
    Experience pure joy and bliss on your travels with us, your ultimate adventure companion!
    </p>
    </div>
      < br />    
       <div className="App">  
         <div className="card-container">   
      <Card
            imageSrc="https://images.unsplash.com/photo-1595507205672-ae65e9fda540?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2thcmR1fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            category="Northern Areas"
            title="5 Days Tour to Skardu Valley"
            description={
              <>
                <p style={{ padding: '10px 0' }}>
                  Embark on a 5-day journey of wonder and awe<br/>in Skardu,
                where you'll discover  landscapes.  
                </p>
              </>
            }
                calendarLogoSrc="calendar.png" // Replace with the path to your calendar logo
            calendarText="October 10, 2023" // Replace with your calendar text
            priceText={
              <p>
                <span style={{ fontSize: '10px' }}>Starting from</span>&nbsp;
                <strong style={{ fontSize: '15px' }}>Rs. 12,000</strong>
              </p>
            }
      />
      <Card
            imageSrc="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600
            "
            category="northern areas"
            title="Skardu Valley"
            description={
              <>
                <p style={{ padding: '10px 0' }}>
                  Embark on a 5-day journey of wonder and awe<br/>in Skardu,
                where you'll discover  landscapes.  
                </p>
              </>
            }            calendarLogoSrc="calendar.png" // Replace with the path to your calendar logo
            calendarText="October 10, 2023" // Replace with your calendar text
            priceText={
              <p>
                <span style={{ fontSize: '10px' }}>Starting from</span>
                <strong style={{ fontSize: '15px' }}>Rs. 12,000</strong>
              </p>
            }
            
            buttonText="Tour Details"
      />
      <Card
            imageSrc="https://images.pexels.com/photos/4077641/pexels-photo-4077641.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Skardu Valley"
            category="Beach "

            description={
              <>
                <p style={{ padding: '10px 0' }}>
                  Embark on a 5-day journey of wonder and awe<br/>in Skardu,
                where you'll discover  landscapes.  
                </p>
              </>
            }            calendarLogoSrc="calendar.png" // Replace with the path to your calendar logo
            calendarText="October 10, 2023" // Replace with your calendar text
            buttonText="Tour Details"
      />
      </div>
      
      <div className="card-container">
          <Card
          imageSrc="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsJTIwaW4lMjBub3J0aGVybiUyMGFyZWFzJTIwaGQlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          title="Skardu Valley"
          category=" Meadows"

          description={
            <>
              <p style={{ padding: '10px 0' }}>
                Embark on a 5-day journey of wonder and awe<br/>in Skardu,
              where you'll discover  landscapes.  
              </p>
            </>
          }             buttonText="Learn More"
          calendarLogoSrc="calendar.png" // Replace with the path to your calendar logo
          calendarText="October 15, 2023" 
          priceText={
            <p>
              <span style={{ fontSize: '10px' }}>Starting from</span>
              <strong style={{ fontSize: '15px' }}>Rs. 12,000</strong>
            </p>
          }// Replace with your calendar text
        />
        <Card
          imageSrc="https://images.unsplash.com/photo-1595507205672-ae65e9fda540?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2thcmR1fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="Skardu Valley"

          description={
            <>
              <p style={{ padding: '10px 0' }}>
                Embark on a 5-day journey of wonder and awe<br/>in Skardu,
              where you'll discover  landscapes.  
              </p>
            </>
          }            
          calendarLogoSrc="calendar.png" // Replace with the path to your calendar logo
          calendarText="October 15, 2023" // Replace with your calendar text
          priceText={
            <p>
              <span style={{ fontSize: '10px' }}>Starting from</span>
              <strong style={{ fontSize: '15px' }}>Rs. 12,000</strong>
            </p>
          }
        />
        <Card
          imageSrc="https://images.unsplash.com/photo-1595507205672-ae65e9fda540?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2thcmR1fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="Skardu Valley"
          category="Northern Areas"

          description={
            <>
              <p style={{ padding: '10px 0' }}>
                Embark on a 5-day journey of wonder and awe<br/>in Skardu,
              where you'll discover  landscapes.  
              </p>
            </>
          }            
          calendarLogoSrc="calendar.png" // Replace with the path to your calendar logo
          calendarText=" October 15, 2023" // Replace with your calendar text
          priceText={
            <p>
              <span style={{ fontSize: '10px' }}>Starting from</span>
              <strong style={{ fontSize: '15px' }}>Rs. 12,000</strong>
            </p>
          }
        />
        </div>
        </div>
        </>
      );
    }
    export default Landing;
 

