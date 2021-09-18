import React from "react"

import "./project-cover.styles.scss"

const ProjectCover = ({ frontmatter, ...otherProps }) => {
  return (
    <a
      className={`project-cover-container ${
        otherProps.featured ? "featured" : ""
      } ${otherProps.fun ? "fun" : ""}`}
      href={frontmatter.github}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${frontmatter.cover.publicURL})`,
        }}
      />
    </a>
  )
}

export default ProjectCover
