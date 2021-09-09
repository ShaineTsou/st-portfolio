import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import InfoCard from "../../info-card/info-card.component"
import ProjectTile from "../../project-tile/project-tile.component"

import "./featured-projects.styles.scss"

const FeaturedProjects = () => {
  const data = useStaticQuery(graphql`
    query FeaturedProjects {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "featured-projects" } } }
        sort: { fields: frontmatter___priority, order: ASC }
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
          }
        }
      }
    }
  `)

  const { nodes } = data.allMarkdownRemark

  return (
    <div className="featured-projects-section-container" id="projects">
      <h1>Featured Projects</h1>
      <div className="featured-projects-content-container">
        {nodes.map(({ frontmatter, html, id }) => (
          <ProjectTile frontmatter={frontmatter} html={html} key={id} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProjects
