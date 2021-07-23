require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "CreatorsBlog",
  },
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT,
        dataset: process.env.SANITY_DATASET,
      },
    },
  ],
};
