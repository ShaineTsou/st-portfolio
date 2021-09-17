import React from "react"

import * as SimpleIcons from "react-icons/si"

import "./skill-box.styles.scss"

const SkillBox = ({ skillName, skillIcon }) => {
  const Icon = SimpleIcons[skillIcon]
  return (
    <div className="skill-box">
      <div className="skill-icon-container">
        <Icon className="skill-icon" />
      </div>
      <span className="skill-title">{skillName}</span>
    </div>
  )
}

export default SkillBox
