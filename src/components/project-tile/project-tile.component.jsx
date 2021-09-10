import React from "react"
import InfoCard from "../info-card/info-card.component"

import "./project-tile.styles.scss"

const ProjectTile = ({ frontmatter, html }) => {
  return (
    <div className="project-tile-container">
      <div className="image-container">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${frontmatter.cover.publicURL})`,
          }}
        />
      </div>
      <InfoCard frontmatter={frontmatter} html={html} />
    </div>
  )
}

export default ProjectTile
