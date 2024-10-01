import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        // ... existing navigation items ...
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}


document.getElementById('menu-icon').addEventListener('click', function () {
  var navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
});

export default Navbar;