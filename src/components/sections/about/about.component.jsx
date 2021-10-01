import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./about.styles.scss"

const About = () => {
  return (
    <section className="about-section-container" id="about">
      <h1>About Me</h1>
      <div className="about-content-container">
        <p className="introduction">
          Hello! I'm Shaine.
          <br />I have a child-like ambition to learn and always strive to
          optimize solutions. So I've developed a great passion for programming.
          I enjoy solving challenging problems and creating software.
          <br />
          <br />
          My goal is to work with people much smarter than me and build tech for
          good. I look forward to learning and expanding my knowledge in web
          technologies.
          <br />
          <br />
          When I'm not coding, I enjoy language learning and sometimes
          <a
            href="https://unsplash.com/@shine_inv5"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            photography
          </a>
          .
        </p>
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
