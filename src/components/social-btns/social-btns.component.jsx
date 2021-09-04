import React from "react"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"

import "./social-btns.styles.scss"

const SocialBtns = () => {
  return (
    <div className="social-container">
      <a
        className="social-btn"
        href="https://github.com/ShaineTsou"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        className="social-btn"
        href="https://www.linkedin.com/in/shaine-tsou/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a className="social-btn" href="mailto:shaineagro06@gmail.com">
        <FaEnvelope />
      </a>
    </div>
  )
}

export default SocialBtns
