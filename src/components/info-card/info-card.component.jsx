import React from "react"
import { FaGithub } from "react-icons/fa"
import { FaExternalLinkAlt } from "react-icons/fa"

import "./info-card.styles.scss"

const InfoCard = () => {
  return (
    <div className="info-card-container fun">
      <div className="card-header">
        <h2>CRWN Clothing</h2>
        <div className="links-container">
          <a className="link" href="" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a className="link" href="" target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
      <div className="card-content">
        <span className="lang">JS</span>
        <span className="lang">CSS3</span>
        <span className="lang">HTML5</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat modi
          voluptatibus, ex laboriosam tenetur, dolorum assumenda blanditiis
          adipisci error earum tempore officiis nemo nobis exercitationem
          voluptates perspiciatis velit ullam culpa?
        </p>
      </div>
      <div className="card-tag-container">
        <span className="card-tag">React</span>
        <span className="card-tag">CSS-in-JS</span>
        <span className="card-tag">Firebase</span>
      </div>
    </div>
  )
}

export default InfoCard
