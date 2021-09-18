import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectCover from "../../project-cover/project-cover.component"
import InfoCard from "../../info-card/info-card.component"

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
    <section className="featured-projects-section-container" id="projects">
      <h1>Featured Projects</h1>
      <div className="featured-projects-content-container">
        {nodes.map(({ frontmatter, html, id }) => (
          <div className="featured-project-tile" key={id}>
            <ProjectCover featured frontmatter={frontmatter} />
            <InfoCard featured frontmatter={frontmatter} html={html} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects
