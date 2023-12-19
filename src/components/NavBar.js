import React, { useState } from "react";
import logo from './logo.png'
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const styleLogo = {
        width:50,
        height:50
    }
    return (
      <nav>
        <Link to="/" className="title">
          <img style={styleLogo} src={logo} />
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul class="item-container" className={menuOpen ? "open" : ""}>
          <li className="nav-item">
            <NavLink to="/home">Accueil</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about">À propos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/service">Nos Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact">Contacts</NavLink>
          </li>
          <li className="nav-item registration">
            <NavLink to="/login">S'inscrire</NavLink>
          </li>
        </ul>
      </nav>
    );
}

export default NavBar