const catPicture = '/static/cat.jpg'

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        allPageHeaders: [`Link: <${catPicture}>; rel=preload; as=image;`],
      },
    },
  ],
}
