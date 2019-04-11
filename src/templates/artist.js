import React, { Component} from 'react'
import { graphql } from 'gatsby'

const Artist = ({data: {airtable: {data: {
  Name,
  BIO,
  Gallery,
}}}}) => (
  <>
    <h1>{Name}</h1>
    <div>{BIO}</div>
  </>
)

export default Artist

export const pageQuery = graphql`
  query artistItemQuery($Name: String!) {
    airtable(table: {eq: "Artists"}, data: {Name: {eq: $Name}}) {
      data {
        Name
        BIO
        Gallery {
          url
          thumbnails {
            small { url }
            large { url }
            full { url }
          }
        }
      }
    }
  }
`