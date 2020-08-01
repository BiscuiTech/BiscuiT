import React from 'react'
import CoverImage from './md/CoverImage'
import { H1 } from './md/renderers'
import styled from 'styled-components'
import useTranslation from '../hooks/useTranslation'
import DateFormater from './DateFormat'

const BlogHeader = styled.header`
  background-color: hsl(200, 100%, 4%);
`

const BlogContent = styled.section`
  font-family: Inter;
  padding: 0 1em;
  pre,
  code {
    font-family: MonoLisa, Consolas, Monaco, monospace;
  }
  code {
    padding: 0.1em 0.5em;
    margin: 0 2px;
    background: hsl(0, 0%, 20%);
    color: hsl(42, 93.2%, 46.1%);
    border-radius: 2px;
    font-size: 0.9em;
    line-height: 1em;
  }
  p {
    margin: 1.5em 1em;
  }
  p + p {
    margin-top: -0.5em;
  }
  a {
    color: #fbb03b;
    position: relative;
  }
  a:after {
    content: '';
    position: absolute;
    transition: all 0.25s;
    opacity: 0;
    height: 2px;
    width: 0%;
    bottom: 0;
    left: 0;
    background: #fbb03b;
  }
  a:focus:after,
  a:hover:after {
    opacity: 1;
    width: 100%;
  }
  li > p {
    display: inline;
  }
  .highlight-line {
    background-color: hsl(231, 30%, 25%);
    border-left: 2px solid #fbb03b;
  }
  .bubble {
    display: flex;
    background: hsl(231, 33%, 30%);
    width: 80%;
    margin: 1em auto;
    padding: 4px 2em;
    padding-left: 0px;
    min-height: 4em;
    border: 2px solid #fbb03b;
    border-radius: 8px;
    p {
      padding: 0px;
      margin: 0;
      text-align: left;
      align-self: center;
    }
  }
  .bubble-question:before {
    content: '?';
    color: hsl(231, 33%, 30%);
    align-self: start;
    padding: 4px;
    margin: auto 6px;
    opacity: 0.6;
    font-size: 3.5em;
    line-height: 1em;
    text-shadow: -1px -1px 0 #fbb03b, 1px -1px 0 #fbb03b, -1px 1px 0 #fbb03b,
      1px 1px 0 #fbb03b;
  }
  .bubble-exclamation:before {
    content: '!';
    color: hsl(231, 33%, 30%);
    align-self: start;
    padding: 4px;
    margin: auto 6px;
    opacity: 0.6;
    font-size: 3.5em;
    line-height: 1em;
    text-shadow: -1px -1px 0 #fbb03b, 1px -1px 0 #fbb03b, -1px 1px 0 #fbb03b,
      1px 1px 0 #fbb03b;
  }
`

const BlogPost = ({ pid, post, morePosts }) => {
  const { t } = useTranslation()
  return (
    <article className="relative">
      <BlogHeader className="border-b border-yellow-400 p-4">
        <CoverImage
          title={post.title}
          src={post.coverImage.url}
          slug={post.slug}
          accreditation={post.coverImage.accreditation}
        />
        <H1>{post.title}</H1>
        <div className="text-base text-gray-300 mt-2">
          {`${t('blogBy')} ${post.author} | `}
          {DateFormater({ dateString: post.publishedOn })}
        </div>
      </BlogHeader>
      <BlogContent className="text-lg">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </BlogContent>
    </article>
  )
}

export default BlogPost
