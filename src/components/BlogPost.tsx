import React from 'react'

import ReactMarkdown from 'react-markdown'
const BlogPost = ({ pid, frontmatter, markdownBody }) => {
  return (
    <article>
      <span>view pid {pid}</span>
      <h1>{frontmatter.title}</h1>
      <p>By {frontmatter.author}</p>
      <div>
        <ReactMarkdown source={markdownBody} />
      </div>
    </article>
  )
}

export default BlogPost