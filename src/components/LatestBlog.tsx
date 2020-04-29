import React from 'react'
import styled from 'styled-components'
import StyledAnchor from './styles/StyledAnchor'
import useTranslation from '../hooks/useTranslation'
import Link from 'next/link';

const LatestBlogStyles = styled.div`
  max-width: 600px;
 /*  margin: auto; */
  margin-top: 60px;
  overflow: auto;
  h2 {
    margin: 6px auto;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.2em;
    padding-left: 6px;
    color: hsl(0, 0%, 85%);
  }
  .toRight {
    margin-right: 6px;
    float: right;
  }
`;

export const LatestBlog = ({ pid }) => {
  const { locale, t } = useTranslation()
  const fetchLatestBlog = () => {
    return null;
  }
  const blogInfo = fetchLatestBlog()
  return (
    <LatestBlogStyles>
      <h2>{t('latestBlog')}</h2>
      {blogInfo
        ?
        <>
          <p>How to create an internationalized website with Next.js</p>
          <Link href="/[lang]/blog/[pid]" as={`/${locale}/blog/${pid}`} >
            <StyledAnchor className="toRight">{t('viewBlog')}</StyledAnchor>
          </Link>
        </>
        : <em>{t('common')['error_noBlogs']}</em>
      }
    </LatestBlogStyles>
  )
}
