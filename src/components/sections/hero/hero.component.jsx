import React from "react"
import { navigate } from "@reach/router"
import SocialBtns from "../../social-btns/social-btns.component"
import CustomBtn from "../../custom-btn/custom-btn.component"

import "./hero.styles.scss"

const Hero = () => {
  return (
    <div className="hero-section-container">
      <div className="hero-content-container">
        <h3>Hellooo! I am</h3>
        <h1>Shaine Tsou</h1>
        <h2>I Build Websites</h2>
        <div className="summary">
          Front End Developer with hands-on experience in JavaScript/ES6+,
          React, GraphQL, data structures and algorithms areas with eagerness to
          learn and master Back-end Development, Testing and TDD.
        </div>
        <div className="connection-container">
          <SocialBtns />
          <CustomBtn hero onClick={() => navigate("#contact")}>
            Let's Talk
          </CustomBtn>
        </div>
      </div>
    </div>
  )
}

export default Hero
