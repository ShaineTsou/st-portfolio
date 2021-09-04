import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./navbar.styles.scss"

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="icon-container">
        <StaticImage
          src="../../images/icon.png"
          alt="website icon"
          placeholder="blurred"
          layout="fixed"
          width={60}
          height={60}
        />
      </div>
      <div className="options-container">
        <div className="option">About</div>
        <div className="option">Projects</div>
        <div className="option">Contact</div>
        <button className="resume-btn">Resume</button>
      </div>
    </nav>
  )
}

export default Navbar
