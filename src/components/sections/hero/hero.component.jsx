import React from "react"
import { navigate } from "@reach/router"
import SocialBtns from "../../social-btns/social-btns.component"
import CustomBtn from "../../custom-btn/custom-btn.component"

import "./hero.styles.scss"

const Hero = () => {
  return (
    <section className="hero-section-container">
      <div className="hero-content-container">
        <h3>Hellooo! I am</h3>
        <h1>Shaine Tsou</h1>
        <h2>I Build Web Apps</h2>
        <div className="summary">
          I'm a front-end developer with hands-on experience in JavaScript,
          React, and Python areas with eagerness to continuously learn and
          master web technologies
        </div>
        <div className="connection-container">
          <SocialBtns hero />
          <CustomBtn hero onClick={() => navigate("#contact")}>
            Let's Talk
          </CustomBtn>
        </div>
      </div>
    </section>
  )
}

export default Hero
