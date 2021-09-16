import React from "react"

import SkillBox from "../skill-box/skill-box.component"

import "./skills-group.styles.scss"

const SkillsGroup = ({ group }) => {
  return (
    <div className="skills-group-container">
      <h2>{group}</h2>
      <div className="boxes-container">
        <SkillBox />
      </div>
    </div>
  )
}

export default SkillsGroup
