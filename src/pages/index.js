import React from 'react'
import { Link } from 'gatsby'
import cat from '../cat.jpg'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>Here is a cat:</p>
    <img alt="A cat" src={cat} />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
