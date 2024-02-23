import React from 'react'
import island from './assets/island.jpeg'
import pkgs from './assets/pkgs.jpg'
import river2 from './assets/river2.jpg'

import Navbar from '../card/Navbar'
import Header from "./Header"
import "./Home.css";

export default function Home() {
  return (
<div
  className="imageContainer"
  style={{
    backgroundImage: `url(${river2})`,
    width: "1350px", // Set your desired width here
    height: "560px", // Set your desired height here
  }}
>
            <nav className="navbar">
      <div className="navbar-left">
      <span className="logo">Travelperk</span>

      </div>
      <div className="navbar-center">
        <a href="/">Home</a>
        <a href="/about">Discover</a>
        <a href="/services">Trips</a>
        <a href="/contact">More</a>
      </div>
      <div className="navbar-right">
      <a href="/contact">More</a>
        <button className="btn-signin">Sign In</button>
      </div>
    </nav>
    <br /> 
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br /> 
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>   
<h1 className="headerTitle">
Adventure Awaits: Browse Our Premium Packages              </h1>
              <Header />
</div>  )
}
