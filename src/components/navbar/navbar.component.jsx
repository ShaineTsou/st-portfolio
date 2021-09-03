import React from "react"
import "./navbar.styles.scss"

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="icon-container">
        <span>Icon</span>
      </div>
      <div className="options-container">
        <div className="option">About</div>
        <div className="option">Projects</div>
        <div className="option">Contact</div>
        <button>Resume</button>
      </div>
    </nav>
  )
}

export default Navbar
