import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { DateBanner } from "../components/blog/DateBanner"
import { ArticleRow } from "../components/blog/ArticleRow"

export const query = graphql`
query{
    allSanityArticle(sort: {fields: publishDate, order: DESC}) {
        edges {
          node {
            title
            image {
              asset {
                gatsbyImageData
              }
            }
            slug {
              current
            }
            publishDate
            _rawBody
          }
        }
    }
}
`

const MONTHS = {
  '01': 'january',
  '02': 'february',
  '03': 'march',
  '04': 'april',
  '05': 'may',
  '06': 'june',
  '07': 'july',
  '08': 'august',
  '09': 'september',
  10: 'october',
  11: 'november',
  12: 'december'
}

const BlogPage = ({ data }) => {
    const articles = data.allSanityArticle.edges
    console.log(articles[0].node._rawBody)
    return (
        <Layout>
            <div className="blog-feed">
                {/* <DateBanner dateString={dateString}/> */}
                {articles.map((article, index) => {
                  const rowDate = article.node.publishDate
                  const parts = rowDate.split(`-`)
                  const year = parts[0]
                  const month = parts[1]
                  console.log(month)
                  console.log(MONTHS)
                  let currentDateString = `${MONTHS[month].toUpperCase()} - ${year}`
                  let addDateBanner = false
                  if (index > 0) {
                    const prevRowDate = articles[index - 1].node.publishDate
                    const prevDateParts = prevRowDate.split(`-`)
                    const prevYear = prevDateParts[0]
                    const prevMonth = prevDateParts[1]
                    const prevDateString = `${MONTHS[prevMonth].toUpperCase()} - ${prevYear}`
                    if (prevDateString !== currentDateString) {
                      addDateBanner = true
                    }
                  } else {
                    addDateBanner = true
                  }
                  let jsx: JSX.Element
                  if (addDateBanner) {
                    jsx = (
                      <div>
                        <DateBanner dateString={currentDateString}/>
                        <ArticleRow 
                          title={article.node.title}
                          publishDate={article.node.publishDate}
                          // Only pass the first paragraph for "preview"
                          previewText={article.node._rawBody[0]}
                          image={article.node.image.asset.gatsbyImageData}
                          slug={article.node.slug.current}
                        />
                      </div>
                    )
                  } else {
                    jsx = (
                      <ArticleRow 
                        title={article.node.title}
                        publishDate={article.node.publishDate}
                        // Only pass the first paragraph for "preview"
                        previewText={article.node._rawBody[0]}
                        image={article.node.image.asset.gatsbyImageData}
                        slug={article.node.slug.current}
                      />
                    )
                  }
                  return jsx
                })}
            </div>
        </Layout>
    )
}

export default BlogPage
