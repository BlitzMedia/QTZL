/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  
  const ReleaseTemplate = path.resolve('./src/templates/release.js')
  const ArtistTemplate = path.resolve('./src/templates/artist.js')

  const releases = graphql(`
    {
      allAirtable(filter: {table: {eq: "Releases"}}) {
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
  `).then(result => {
    if (result.errors) Promise.reject(result.errors)
    const { edges } = result.data.allAirtable

    edges.forEach(({ node: { data: {
      Info,
      Name,
      Notation,
      SoundCloud,
      Release,
      Video
    }}}) => {
      createPage ({
        path: Release,
        component: ReleaseTemplate,
        context: { slug: Release }
      })
    })
  })

  const artists = graphql(`
    {
      allAirtable(filter: {table: {eq: "Artists"}}) {
        edges {
          node {
            data {
              Name
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) Promise.reject(result.errors)
    const { edges } = result.data.allAirtable

    edges.forEach(({ node: { data: {
      Name,
    }}}) => {
      createPage ({
        path: Name,
        component: ArtistTemplate,
        context: { Name }
      })
    })
  })

  return Promise.all([releases, artists])
}

/* return new Promise((resolve, reject) => {
  const ReleaseTemplate = path.resolve('./src/templates/release.js')
  const ArtistTemplate = path.resolve('./src/templates/artist.js')

  resolve(
    graphql(`
      {
        allAirtable(filter: {table: {eq: "YOUR_TABLE_NAME"}) {
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
    `).then(result => {
      if (result.errors) reject(result.errors)
      const { edges } = result.data.allAirtable
      
      edges.forEach(({
        node: {
          data: {
            Info,
            Name,
            Notation,
            SoundCloud,
            Release,
            Video
          }
        }
      }) => {
        createPage ({
          path: Release,
          component: ReleaseTemplate,
          context: { slug: Release }
        })
      })
    })
  )
}) */