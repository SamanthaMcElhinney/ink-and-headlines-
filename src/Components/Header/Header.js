import "./Header.css"
import logo1 from '../../assets/logo.png'

import React from 'react'

export default function Header() {
  return (
    <div className="image-container">
      <img className="image-header"src={logo1} alt="Logo Ink & Headlines"/>
    </div>
  )
}
