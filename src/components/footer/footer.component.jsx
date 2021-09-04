import React from "react"
import SocialBtns from "../social-btns/social-btns.component"

import "./footer.styles.scss"

const Footer = () => {
  return (
    <footer className="footer-container">
      <SocialBtns />
      <div className="footer-text">
        <span>Designed & Built with 🌈 by Shaine Tsou</span>
      </div>
    </footer>
  )
}

export default Footer
