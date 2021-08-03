import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

/**
 * @see https://www.sanity.io/docs/portable-text-to-react#proptypes
 */
const serializers = {
    container: ({ children }) => {
        return (
            children.map(block => {
                return (<div key={`${block.key}`}>{block}</div>)
            })
        )
    },
    types: {
        code: props => {
            const { language, code } = props.node
            return (
                <SyntaxHighlighter language={language}>{code}</SyntaxHighlighter>
            )
        },
    },
    marks: {
        highlight: ({ children }) => <span className="bg-yellow-200 p-1 rounded">{children}</span>,
        internalLink: (props) => {
            console.error(`Sanity internal links are not currently supported in GraphQL-sourced data - convert the internal link to an external link as a temporary workaround`)
            return <a href={`#`}>{props.children}</a>
          },
        link: ({ mark, children }) => {
            return (
                <a href={mark.url} target="_blank">
                    {children}
                </a>
            )
        }
    },
    // list: {

    // },
    // listItem: {

    // }
}

export default serializers
