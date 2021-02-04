import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

export const query = graphql`{
    prismic {
      allContact_pages {
        edges {
          node {
            form_fields {
              field_name
              field_type
              required
            }
          }
        }
      }
    }
  }`

const Form = styled.form`
  padding: 10px;
  background: #eee;
  margin-top: 10px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

const Button = styled.button`
  background: orange;
  color: white;
  cursor: pointer;
  padding: 4px 8px;
  box-shadow: none;
  border-radius: 4px;
`

const ContactUs = (props) => {
  console.log(props)
  return (
    <Layout>
      <Form
        name="contact-us"
        method="POST"
        data-netlify="true"
        action="/contact-success"
        onSubmit={e => e.preventDefault()}>
        <input type="hidden" name="form-name" value="contact-us" />
        {props.data.prismic.allContact_pages.edges[0].node.form_fields.map((field, i) => {
          if (field.field_type === 'textarea') {
            return (
              <div key={i}>
                <textarea
                  required={field.required === 'Yes'}
                  placeholder={field.field_name} />
              </div>
            )
          } else {
            return (
              <div key={i}>
                <input
                  required={field.required === 'Yes'}
                  type={field.field_type}
                  placeholder={field.field_name}
                />
              </div>
            )
          }
        })}
        <Button type="submiit">Submit</Button>
      </Form>
    </Layout>
  )
}

export default ContactUs