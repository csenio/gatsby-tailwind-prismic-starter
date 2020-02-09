import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 class="text-4xl font-bold text-center text-blue-500">Hi people</h1>
    <h2 className="font-bold text-3xl">aaa</h2>
    <p>Now go build something great.</p>
    <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
