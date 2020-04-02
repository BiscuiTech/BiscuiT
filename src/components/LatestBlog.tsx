import React from 'react'
import styled from 'styled-components'
import StyledAnchor from './styles/StyledAnchor'
import useTranslation from '../hooks/useTranslation'
import Link from 'next/link';

const LatestBlogStyles = styled.div`
  margin: auto;
  margin-top: 60px;
  overflow: auto;
  p {
    font-weight: 200;
    font-size: 16px;
    line-height: 1.2em;
    padding-left: 6px;
    color: hsl(0, 0%, 85%)
  }
  .toRight {
    margin-right: 6px;
    float: right;
  }
`;

export const LatestBlog = () => {
  const { locale, t } = useTranslation()
  return (
    <LatestBlogStyles>
      <h2>{t('latestBlog')}</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestias recusandae omnis aperiam explicabo perferendis praesentium non, numquam veniam natus? Eum in, dolorem voluptatibus sapiente non voluptatum alias ipsa aperiam.</p>
      <Link href="/blog">
        <StyledAnchor className="toRight">{t('viewBlog')}</StyledAnchor>
      </Link>
    </LatestBlogStyles>
  )
}
