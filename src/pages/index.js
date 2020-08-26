import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Travis McCutcheon</h1>
        <h2>Defining Value Discovery</h2>
        <h2>Creating Innovation Culture</h2>
        <h2>Transforming Product Development</h2>
        <p>This site is built with Gatsby.</p>
        <a href="articles">View Articles</a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
