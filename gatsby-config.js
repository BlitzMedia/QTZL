const dotenv = require("dotenv")
const path = require('path')

if (process.env.ENVIRONMENT !== "production") dotenv.config()
const production = process.env

module.exports = {
  siteMetadata: {
    title: `Q T Z L`,
    description: `Transatlantic Musical Collective`,
    author: `@gorkamolero`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY, // may instead specify via env, see below
        tables: [
          {
            baseId: `apptg1boOr10IkCsY`,
            tableName: `Releases`,
            //tableView: `YOUR_TABLE_VIEW_NAME`, // optional
            //queryName: `OPTIONAL_NAME_TO_IDENTIFY_TABLE`, // optional
            //mapping: { `CASE_SENSITIVE_COLUMN_NAME`: `VALUE_FORMAT` }, // optional, e.g. "text/markdown", "fileNode"
            //tableLinks: [`CASE`, `SENSITIVE`, `COLUMN`, `NAMES`] // optional, for deep linking to records across tables.
          },
         /*  {
            baseId: `apptg1boOr10IkCsY`,
            tableName: `YOUR_TABLE_NAME`,
            tableView: `YOUR_TABLE_VIEW_NAME` // optional
            // can leave off queryName, mapping or tableLinks if not needed
          } */
        ]
      }
    }
  ],
}
