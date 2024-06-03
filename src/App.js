import './App.css';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
import Weather from "./components/Weather/Weather";
import React from 'react';


function App() {
  return (
     <Weather />

  //   <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Landing/>}/>
  //     <Route path="/cardDetails" element={<CardDetails/>}/>
      
      
      
  //   </Routes>
  // </BrowserRouter>   
   );
}
export default App;