import React from 'react'
import styled from 'styled-components'
import useTranslation from '../hooks/useTranslation'
import { ListItem } from './BlogList'

const LatestBlogStyles = styled.div`
  margin-top: 60px;
  overflow: auto;
  background: hsl(200, 100%, 4.5%);
  padding: 0.6em 1em;
`

export const LatestBlog = ({ post }) => {
  const { t } = useTranslation()
  return (
    <LatestBlogStyles>
      <h2>{t('latestBlog')}</h2>
      {post && Object.keys(post).length > 0 ? (
        <ListItem post={post} />
      ) : (
        <em>{t('common')['error_noBlogs']}</em>
      )}
    </LatestBlogStyles>
  )
}
