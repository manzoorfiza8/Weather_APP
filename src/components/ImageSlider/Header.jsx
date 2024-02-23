import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <header className='home-header'>
        <div class="search-container">
         <input type="text" class="search-bar" placeholder="Search..." />
  <button class="search-button">Search</button>
</div>
    </header>
    
  )
}
