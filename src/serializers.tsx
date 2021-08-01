import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const serializers = {
    types: {
        code: props => {
            const { language, code } = props.node
            return (
                <SyntaxHighlighter language={language}>{code}</SyntaxHighlighter>
            )
        },
    },
    marks: {
        highlight: ({ children }) => <span className="bg-yellow-200 p-1 rounded">{children}</span>
    }
}

export default serializers
