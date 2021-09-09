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
            backgroundImage: `url(https://unsplash.com/photos/Gi3iUJ1FwxI/download?force=true&w=640)`,
          }}
        />
      </div>
      <InfoCard frontmatter={frontmatter} html={html} />
    </div>
  )
}

export default ProjectTile
