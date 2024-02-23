import React from 'react'
import Navbar from '../Packages/Navbar';
import Card from "../card/Card"
import "./Home.css"


export default function Home() {
  return (
    //     <div className='container'>
    //   <Routes>
    //     <Route path="/Navbar" element={<Navbar/> } />
    //     </Routes>
      
    // </div>
    <> 

   {/* <Navbar /> */}
   <div className="card-container">

    <Card
    imageSrc="https://images.unsplash.com/photo-1595507205672-ae65e9fda540?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2thcmR1fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    title="Skardu Valley"
    description="
    Skardu Valley, nestled in the heart of the majestic Karakoram Range in \n
    Pakistan, is a pristine paradise of unparalleled natural beauty.
     "
     buttonText="Tour Details"
  />
  <Card
    imageSrc="https://images.unsplash.com/photo-1595507205672-ae65e9fda540?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2thcmR1fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    title="Skardu Valley"
    description="This is a description of the card."
     buttonText="Tour Details "
  />
    <Card
    imageSrc="https://images.unsplash.com/photo-1595507205672-ae65e9fda540?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2thcmR1fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    title="Skardu Valley"
    description="This is a description of the card."
     buttonText="Tour Details "
  />
  </div> 
   </>
  )
}
