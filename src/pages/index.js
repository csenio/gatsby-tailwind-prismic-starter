import React from 'react'
import {graphql} from 'gatsby'
import {RichText} from 'prismic-reactjs'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({data}) => {
  console.log(data)
  const content = data?.prismic?._allDocuments?.edges[0]?.node
  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <h1 className="text-4xl font-bold text-gray-800">{RichText.asText(content.title)}</h1>
        <h2 className="my-4 text-xl text-gray-700">{content?.subtitle[0]?.text}</h2>
        <button className="p-3 bg-yellow-600 text-white font-bold hover:bg-yellow-700">
          {content?.button_text}
        </button>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    prismic {
      _allDocuments(lang: "en-gb") {
        edges {
          node {
            ... on PRISMIC_Landing_page {
              title
              subtitle
              button_text
            }
          }
        }
      }
    }
  }
`

export default IndexPage
