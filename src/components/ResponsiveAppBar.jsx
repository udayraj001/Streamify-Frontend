import React from 'react';
import Blog from '../pages/Blog';


function ResponsiveAppBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="https://i.pinimg.com/736x/21/b9/59/21b959cfb69faefe24115256e7b9db78.jpg" alt="Streamify Logo" className="logo" />
        <span className="streamify-name">STREAMIFY</span>
      </div>
      <div className="navbar-center">
        <ul className="navbar-nav">
          <li className="nav-item">
          <a href="/blog" className="nav-link">Blog</a>
           </li>
          <li className="nav-item">
            <a href="/movie" className="nav-link">Movies</a>
          </li>
          <li className="nav-item">
            <a href="webSeries" className="nav-link">Web series</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="account-info">
      <button >Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default ResponsiveAppBar;


