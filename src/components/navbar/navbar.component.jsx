import React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { navigate } from "@reach/router"
import { StaticImage } from "gatsby-plugin-image"
import CustomBtn from "../custom-btn/custom-btn.component"
import { FaBars } from "react-icons/fa"
import "./navbar.styles.scss"

const Navbar = () => {
  const [optionsHidden, toggleOptionsHidden] = useState(true)

  const toggleOptions = () => {
    toggleOptionsHidden(!optionsHidden)
  }

  return (
    <nav className={`navbar-container ${!optionsHidden ? "responsive" : ""}`}>
      <div className="icon-container">
        <Link to="/">
          <StaticImage
            src="../../images/icon.png"
            alt="website icon"
            placeholder="blurred"
            layout="fixed"
            height={50}
          />
        </Link>
      </div>
      <div className="bars" onClick={toggleOptions}>
        <FaBars />
      </div>
      <div className="options-container">
        <Link to="/" className="option">
          Home
        </Link>
        <div className="option" onClick={() => navigate("#about")}>
          About
        </div>
        <div className="option" onClick={() => navigate("#skills")}>
          Skills
        </div>
        <div className="option" onClick={() => navigate("#projects")}>
          Projects
        </div>
        <div className="option" onClick={() => navigate("#contact")}>
          Contact
        </div>
        <CustomBtn>Resume</CustomBtn>
      </div>
    </nav>
  )
}

export default Navbar
