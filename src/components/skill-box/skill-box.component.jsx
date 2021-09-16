import React from "react"

import * as SimpleIcons from "react-icons/si"

import "./skill-box.styles.scss"

const SkillBox = () => {
  return (
    <div className="skill-box">
      <div className="skill-icon-container">
        <SimpleIcons.SiJavascript className="skill-icon" />
      </div>
      <span className="skill-title">JavaScript</span>
    </div>
  )
}

export default SkillBox
