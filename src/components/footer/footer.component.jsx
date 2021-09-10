import React from "react"
import SocialBtns from "../social-btns/social-btns.component"

import "./footer.styles.scss"

const Footer = () => {
  return (
    <footer className="footer-container">
      <SocialBtns />
      <div className="footer-text">
        <span>
          © All rights reserved | 2021 | Designed & Built with 🌈 by
          <a
            href="https://github.com/ShaineTsou"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shaine Tsou
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
