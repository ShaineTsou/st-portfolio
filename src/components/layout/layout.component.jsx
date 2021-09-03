import React from "react"
import Navbar from "../navbar/navbar.component"
import Footer from "../footer/footer.component"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
