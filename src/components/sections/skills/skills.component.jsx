import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import SkillsGroup from "../../skills-group/skills-group.component"

import "./skills.styles.scss"

const Skills = () => {
  const data = useStaticQuery(graphql`
    query Skills {
      allMarkdownRemark(
        filter: { frontmatter: { section: { eq: "skills" } } }
        sort: { fields: frontmatter___skill_priority, order: ASC }
      ) {
        nodes {
          frontmatter {
            group
            skill_icon_pairs
          }
        }
      }
    }
  `)

  const { nodes } = data.allMarkdownRemark

  return (
    <section className="skills-section-container" id="skills">
      <div className="skills-content-container">
        <h1>Skills</h1>
        {nodes.map(({ frontmatter: { group, skill_icon_pairs } }) => (
          <SkillsGroup
            group={group}
            skillIconPairs={skill_icon_pairs}
            key={group}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills
