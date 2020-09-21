import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Span = styled.span`
  display: block;
  color: grey;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h2>
          <Span>Defining </Span>Value Discovery
        </h2>
        <h2>
          <Span>Creating </Span>Innovation Culture
        </h2>
        <h2>
          <Span>Transforming </Span>Product Development
        </h2>
      </div>
    </div>
  </Layout>
)

export default IndexPage
