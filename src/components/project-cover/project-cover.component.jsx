import React from "react"

import "./project-cover.styles.scss"

const ProjectCover = ({ frontmatter, ...otherProps }) => {
  return (
    <div
      className={`project-cover-container ${
        otherProps.featured ? "featured" : ""
      } ${otherProps.fun ? "fun" : ""}`}
    >
      <a href={frontmatter.github} target="_blank" rel="noopener noreferrer">
        <img
          className="cover-image"
          src={frontmatter.cover.publicURL}
          alt={`${frontmatter.title}`}
        />
      </a>
    </div>
  )
}

export default ProjectCover
