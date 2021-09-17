import React from "react"

import SkillBox from "../skill-box/skill-box.component"

import "./skills-group.styles.scss"

const SkillsGroup = ({ group, skillIconPairs }) => {
  return (
    <div className="skills-group-container">
      <h2>{group}</h2>
      <div className="boxes-container">
        {skillIconPairs.map(skillIconPair => (
          <SkillBox
            skillName={skillIconPair[0]}
            skillIcon={skillIconPair[1]}
            key={skillIconPair[0]}
          />
        ))}
      </div>
    </div>
  )
}

export default SkillsGroup
