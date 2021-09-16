import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
          }
        }
      }
    }
  `)

  const { nodes } = data.allMarkdownRemark

  return (
    <section className="fun-projects-section-container">
      <h1>Just For Fun</h1>
      <div className="fun-projects-content-container">
        {nodes.map(({ frontmatter, html, id }) => (
          <InfoCard frontmatter={frontmatter} html={html} key={id} />
        ))}
      </div>
    </section>
  )
}

export default FunProjects
