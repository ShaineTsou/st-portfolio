import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./about.styles.scss"

const About = () => {
  return (
    <section className="about-section-container" id="about">
      <h1>About Me</h1>
      <div className="about-content-container">
        <div className="introduction">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          luctus at sem quis varius. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Cras ultrices
          hendrerit nisl. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Maecenas luctus at sem quis varius.
        </div>
        <div className="avatar-container">
          <StaticImage
            className="navbar-icon"
            src="../../../images/about-avatar.png"
            alt="avatar"
            placeholder="blurred"
          />
        </div>
      </div>
    </section>
  )
}

export default About
