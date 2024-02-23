import React from 'react';
import './Navbar.css'; // Import your CSS file
import SearchBar from './SearchBar';

function Navbar() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">TravelPerk</a>
      <SearchBar />
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">Deals</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;

// import React from 'react';
// import './Navbar.css'; // Create this CSS file for styling

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <a href="/">Your Logo</a>
//       </div>
//       <div className="search-bar">
//         <input type="text" placeholder="Search" />
//         <button type="submit">Search</button>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;