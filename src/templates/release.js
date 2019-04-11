import React, { Component} from 'react'
import { graphql } from 'gatsby'

const Release = ({data: {airtable: {data: {
  Info,
  Name,
  Notation,
  SoundCloud,
  Release,
  Video
}}}}) => (
  <>
    <h1>{Name}</h1>
    <div>{Info}</div>
    <p>{SoundCloud}</p>
  </>
)

export default Release

export const pageQuery = graphql`
  query releaseItemQuery($slug: String!) {
    airtable(table: {eq: "Releases"}, data: {Release: {eq: $slug}}) {
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
`