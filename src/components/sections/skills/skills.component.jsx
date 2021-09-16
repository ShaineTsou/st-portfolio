import React from "react"

import SkillsGroup from "../../skills-group/skills-group.component"

import "./skills.styles.scss"

const Skills = () => {
  return (
    <section className="skills-section-container" id="skills">
      <div className="skills-content-container">
        <h1>Skills</h1>
        <SkillsGroup group="Programming Languages" />
      </div>
    </section>
  )
}

export default Skills
