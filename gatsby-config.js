module.exports = {
  siteMetadata: {
    title: "Darka Agency",
    description: "Darka Agency was founded in 1977 by founder, Ismail Doe. DA continues to be at the forefront of art by establishing the careers of our talents on a holistic level -- and setting trends within the industry.",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * De volledige URL van je Headless WordPress site's GraphQL API.
         * Voorbeeld : "https://www.example-site.com/graphql"
         */
        url: "http://darka-agency.local/graphql"
        
      },
    },
  ],  
};
