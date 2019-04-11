import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Release = ({node: { data: {
  Name,
  Notation
}}}) => (
  <>
    <p>{Name}</p>
    <p>{Notation}</p>
  </>
)

const IndexPage = ({data: {allAirtable: {edges}}}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi</h1>
    
    {edges.map(edge => <Release node={edge.node} />)}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
	query pageQuery {
		allAirtable {
			edges {
				node {
					data {
            Info
            Name
            Notation
            SoundCloud
            Release
            Video
          }
				}
			}
    }
	}
`
