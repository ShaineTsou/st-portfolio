import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import "./about.styles.scss"

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutAvatar {
      file(relativePath: { eq: "about-avatar.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  `)

  const { gatsbyImageData } = data.file.childImageSharp

  return (
    <div className="about-section-container">
      <h1>About Me</h1>
      <div className="about-content-container">
        <div className="introduction">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          luctus at sem quis varius. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Cras ultrices
          hendrerit nisl. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Maecenas luctus at sem quis varius.
        </div>
        <div className="avatar-container">
          <GatsbyImage image={gatsbyImageData} alt="avatar" />
        </div>
      </div>
    </div>
  )
}

export default About
