import React from "react"
import { FaEnvelope } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

import "./social-btns.styles.scss"

const SocialBtns = ({ ...otherProps }) => {
  return (
    <div
      className={`${otherProps.hero ? "hero" : ""} ${
        otherProps.footer ? "footer" : ""
      } social-container`}
    >
      <a className="social-btn" href="mailto:shaineagro06@gmail.com">
        <FaEnvelope />
      </a>
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
        href="https://www.linkedin.com/in/shainetsou/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        className="social-btn"
        href="https://twitter.com/ShaineTsou"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
    </div>
  )
}

export default SocialBtns
