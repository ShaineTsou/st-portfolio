import React from "react"

import "./custom-btn.styles.scss"

const CustomBtn = ({ children, hero, ...otherProps }) => {
  return (
    <button
      className={`${hero ? "hero" : ""} custom-btn-container`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomBtn
