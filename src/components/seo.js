import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          siteUrl: url
          defaultImage: image
          twitterUsername
        }
      }
    }
  `)

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${defaultTitle}`}
      defaultTitle={defaultTitle}
    >
      <html lang="en" />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="640" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:creator" content={twitterUsername} />
      <meta property="twitter:image" content={seo.image} />
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  descript: PropTypes.string,
  image: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
}
