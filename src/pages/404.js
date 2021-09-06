import React from "react"
import Layout from "../components/layout/layout.component"
import NotFound from "../components/not-found/not-found.component"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <NotFound />
  </Layout>
)

export default NotFoundPage
