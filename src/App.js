import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Weather from "./components/Weather/Weather";
import React from 'react';
import Card from "./components/card/Card";
import Navbar from './components/card/Navbar';
// import Home from"./components/HomePkgs/Home";
import ImageSlider from './components/ImageSlider/ImageSlider';
import Landing from "./components/final/Landing"
import CardDetails from './components/card/CardDetails';

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