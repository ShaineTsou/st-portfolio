import React from "react"
import { FaGithub } from "react-icons/fa"
import { FaExternalLinkAlt } from "react-icons/fa"

import "./info-card.styles.scss"

const InfoCard = ({ frontmatter, html, ...otherProps }) => {
  const { title, language, github, external, tech } = frontmatter

  return (
    <div
      className={`info-card-container ${
        otherProps.featured ? "featured" : ""
      } ${otherProps.fun ? "fun" : ""}`}
    >
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
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
      <div className="card-languages">
        {language.map(lang => (
          <span className="card-lang" key={`${title}-${lang}`}>
            {lang}
          </span>
        ))}
      </div>
      <div
        className="card-text"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
      <div className="card-tags">
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
