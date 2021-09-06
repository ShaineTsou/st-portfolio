import React from "react"
import Layout from "../components/layout/layout.component"
import Seo from "../components/seo"
import "../styles/global.scss"

import Hero from "../components/sections/hero/hero.component"
import About from "../components/sections/about/about.component"
import Contact from "../components/sections/contact/contact.component"

export default function Home() {
  return (
    <Layout>
      <Seo title="Portfolio" />
      <Hero />
      <About />
      <Contact />
    </Layout>
  )
}
