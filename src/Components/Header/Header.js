import "./Header.css"
import logo1 from '../../assets/logo.png'
import { NavLink } from "react-router-dom"

import React from 'react'

export default function Header() {
  return (
    <header className="image-container">
      <NavLink to="/">
        <img className="image-header" src={logo1} alt="Logo Ink & Headlines" />
      </NavLink>
    </header>
  );
}
