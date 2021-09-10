import React from "react"
import { FaGithub } from "react-icons/fa"
import { FaExternalLinkAlt } from "react-icons/fa"

import "./info-card.styles.scss"

const InfoCard = ({ frontmatter, html }) => {
  const { title, language, github, external, tech } = frontmatter

  return (
    <div className="info-card-container">
      <div className="card-header">
        <h2>{title}</h2>
        <div className="links-container">
          <a
            className="link"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="link"
            href={external}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
      <div className="card-content">
        {language.map(lang => (
          <span className="lang" key={`${title}-${lang}`}>
            {lang}
          </span>
        ))}
        <div
          className="card-text"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
      <div className="card-tag-container">
        {tech.map(tech => (
          <span className="card-tag" key={`${title}-${tech}`}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default InfoCard
