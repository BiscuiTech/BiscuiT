import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Home from '../../components/Home'
import Layout from '../../components/Layout'
import { getLocalizationProps } from '../../context/LanguageContext'
import { getAllPosts } from '../../lib/api'
import publishedPosts from '../../lib/publishedPosts'
import useOpenGraph from '../../lib/useOpenGraph'
import { Localization } from '../../translations/types'

const IndexPage: NextPage<{
  localization: Localization
  posts: any
  preview: boolean
}> = ({ posts, preview = false }) => (
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
