import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectCover from "../../project-cover/project-cover.component"
import InfoCard from "../../info-card/info-card.component"

import "./fun-projects.styles.scss"

const FunProjects = () => {
  const data = useStaticQuery(graphql`
    query FunProjects {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "fun-projects" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          id
          html
          frontmatter {
            title
            tech
            language
            github
            external
            cover {
              publicURL
            }
          }
        }
      }
    }
  `)

  const { nodes } = data.allMarkdownRemark

  return (
    <section className="fun-projects-section-container">
      <h1>Fun Projects</h1>
      <div className="fun-projects-content-container">
        {nodes.map(({ frontmatter, html, id }) => (
          <div className="fun-project-tile" key={id}>
            <ProjectCover fun frontmatter={frontmatter} />
            <InfoCard fun frontmatter={frontmatter} html={html} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default FunProjects
