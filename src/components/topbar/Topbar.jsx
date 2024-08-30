import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './topbar.css';

export default function Topbar() {

  return (
    <div>
      <div className="topbarContainer">
        <div className="topLeft">
          <NavLink to="/" className="myName" activeClassName="activeLink">
            <img src="/assets/logo.png" alt="" className="logo" />Jasvith Chand Anne
          </NavLink>
        </div>
        <div className="topMid"></div>
        <div className="topRight">
          <div className="topRightlinks">
            <NavLink to="/" className="topRightlinkItem" activeClassName="activeLink">PORTFOLIO</NavLink>
            <NavLink to="/blog" className="topRightlinkItem" activeClassName="activeLink">BLOG</NavLink>
            <NavLink to="/about" className="topRightlinkItem" activeClassName="activeLink">ABOUT</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
