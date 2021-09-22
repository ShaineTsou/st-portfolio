import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import CustomBtn from "../custom-btn/custom-btn.component"

import "./not-found.styles.scss"

const NotFound = () => {
  const data = useStaticQuery(graphql`
    query NotFoundImg {
      file(relativePath: { eq: "not-found.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  `)

  const { gatsbyImageData } = data.file.childImageSharp

  return (
    <div className="not-found-container">
      <div className="not-found-content-container">
        <div className="not-found-img-container">
          <GatsbyImage image={gatsbyImageData} alt="not found image" />
        </div>
        <h1 className="notfound-maintitle">😱 404 😱</h1>
        <h2 className="notfound-subtitle">
          Caution! This page is about to crumble!
        </h2>
        <Link to="/">
          <CustomBtn>Get Me Out Of Here !</CustomBtn>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
