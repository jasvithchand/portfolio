import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./blogNav.css"

export default function BlogNav() {
  return (
    <div className="navContainer">
        <div className="navLinks">
            <NavLink to="/" className="navLink" activeClassName="activeLink">PORTFOLIO</NavLink>
            <NavLink to="/blog" className="navLink" activeClassName="activeLink">BLOG</NavLink>
            <NavLink to="/about" className="navLink" activeClassName="activeLink">ABOUT</NavLink>
        </div>
    </div>
  )
}
