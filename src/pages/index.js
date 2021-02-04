import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SliceZone from "../components/sliceZone"

export const query = graphql`
{
  prismic {
    allHomepages {
      edges {
        node {
          body {
            ... on PRISMIC_HomepageBodyHero2 {
              type
              primary {
                hero_content
                hero_title
                background_image
              }
            }
            ... on PRISMIC_HomepageBodyCall_to_action_grid2 {
              type
              primary {
                section_title
              }
              fields {
                button_destination {
                  ... on PRISMIC_Page {
                    page_title
                    content
                    _meta {
                      uid
                    }
                  }
                }
                button_label
                call_to_action_title
                content
                featured_image
              }
            }

            ... on PRISMIC_HomepageBodyPrice_list2 {
              type
              primary {
                title
              }
              fields {
                price_list_description
                price_list_title
                price_per_month
                price_type
              }
            }

            
          }
        }
      }
    }
  }
}
`

const IndexPage = (props) => {
  console.log(props)
  return(
  <Layout>

<SliceZone body={props.data.prismic.allHomepages.edges[0].node.body}/>







    {/* <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)}

export default IndexPage
