import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Welcome to the personal webpage of Travis McCutcheon</h1>
        <p>This site is built with Gatsby.</p>
        <a href="articles">View Articles</a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
