import React from 'react'
import Layout from '../../components/Layout'
import Home from '../../components/Home'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getLocalizationProps } from '../../context/LanguageContext'
import { Localization } from '../../translations/types'
import useOpenGraph from '../../lib/useOpenGraph'
import { getAllPosts } from '../../lib/api'
import publishedPosts from '../../lib/publishedPosts'

const IndexPage: NextPage<{
  localization: Localization
  posts: any
  preview: boolean
}> = ({ localization, posts, preview = false }) => (
  <Layout
    title="Biscui.Tech"
    description="Biscui.Tech Home page"
    og={useOpenGraph()}
  >
    <Home post={preview ? posts[0] : publishedPosts(posts)[0]} />
  </Layout>
)

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = getAllPosts([
    'title',
    'publishedOn',
    'published',
    'slug',
    'excerpt',
  ])
  const localization = getLocalizationProps(ctx, 'home')
  return {
    props: {
      posts: posts,
      localization,
      preview: process.env.NODE_ENV === 'development',
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: ['en', 'fr'].map((lang) => ({ params: { lang } })),
  fallback: false,
})

export default IndexPage
