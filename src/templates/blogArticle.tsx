import React from 'react'
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { GatsbyImage } from 'gatsby-plugin-image'
import BlockContent from '@sanity/block-content-to-react'
import serializers from '../serializers'

export const query = graphql`
query($slug: String!){
    sanityArticle(slug: {current: {eq: $slug}}) {
        title
        image {
            asset {
            gatsbyImageData
            }
        }
        publishDate
        _rawBody
        categories {
            title
        }
    }
}
`

const BlogArticle = ({ pageContext, data }) => {
    const { slug } = pageContext
    const {
        title,
        image,
        publishDate,
        _rawBody,
        categories
    } = data.sanityArticle
    return (
        <Layout>
            <div className="hero-image-container">
                <GatsbyImage image={image.asset.gatsbyImageData} alt="stars" className="hero-image"/>
            </div>
            <div className="article">
                <div className="article-detail">
                    <h1>{title}</h1>
                    <p>{publishDate}</p>
                </div>
                <div className="article-body">
                    <BlockContent blocks={_rawBody} serializers={serializers}/>
                </div>
            </div>
        </Layout>
    )
}

export default BlogArticle
