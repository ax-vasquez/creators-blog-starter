import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { FeaturePage } from "../components/FeaturePage"

export const query = graphql`
query{
    imageSharp(original: {src: {regex: "/guides/"}}) {
      gatsbyImageData(
         placeholder: BLURRED
         formats: [AUTO, WEBP, AVIF]
       )
    }
}
`

const GuidesPage = ({ data }) => {
    const heroImage = getImage(data.imageSharp)
    return (
        <FeaturePage heroImage={heroImage} text={`guides`}/>
    )
}

export default GuidesPage