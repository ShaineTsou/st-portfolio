import React from "react"

import "./custom-btn.styles.scss"

const CustomBtn = ({ children, ...otherProps }) => (
  <div className={`custom-btn-container ${otherProps}`}>{children}</div>
)

export default CustomBtn
