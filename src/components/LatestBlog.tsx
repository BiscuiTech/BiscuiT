import React from 'react'
import styled from 'styled-components'
import StyledAnchor from './styles/StyledAnchor'
import useTranslation from '../hooks/useTranslation'
import Link from 'next/link';
import { ListItem } from './BlogList'
const LatestBlogStyles = styled.div`
  max-width: 600px;
 /*  margin: auto; */
  margin-top: 60px;
  overflow: auto;
`;

export const LatestBlog = ({ post }) => {
  const { locale, t } = useTranslation()
  return (
    <LatestBlogStyles>
      <h2>{t('latestBlog')}</h2>
      {post.slug
        ?
        <ListItem date={post.date} excerpt={post[`excerpt_${locale}`]} locale={locale} path={post.slug} t={t} title={post.title} />

        : <em>{t('common')['error_noBlogs']}</em>
      }
    </LatestBlogStyles>
  )
}
