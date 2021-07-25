import * as React from "react"
import { Layout } from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

export const query = graphql`
query{
  imageSharp(original: {src: {regex: "/nebula/"}}) {
    gatsbyImageData(
       placeholder: BLURRED
       formats: [AUTO, WEBP, AVIF]
     )
  }
}
`

const IndexPage = ({ data }) => {
  const image = getImage(data.imageSharp)
  return (
    <Layout>
        <div className="home-header">
          <GatsbyImage image={image} alt="stars" className="hero-image"/>
        </div>
    </Layout>
  )
}

export default IndexPage
