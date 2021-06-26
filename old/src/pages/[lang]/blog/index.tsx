import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import BlogList from '../../../components/BlogList'
import Layout from '../../../components/Layout'
import { getLocalizationProps } from '../../../context/LanguageContext'
import { getAllPosts } from '../../../lib/api'
import publishedPosts from '../../../lib/publishedPosts'
import useOpenGraph from '../../../lib/useOpenGraph'
import { Localization } from '../../../translations/types'

const BlogIndexPage: NextPage<{
  localization: Localization
  posts: any
  preview: boolean
}> = ({ posts, preview = false }) => (
  <Layout
    title="Biscui.Tech"
    description="Biscui.Tech Home page"
    og={useOpenGraph()}
  >
    <BlogList posts={preview ? posts : publishedPosts(posts)} />
  </Layout>
)

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = getAllPosts(['title', 'date', 'published', 'slug', 'excerpt'])
  const localization = getLocalizationProps(ctx, 'blog')
  return {
    props: {
      posts,
      localization,
      preview: process.env.NODE_ENV === 'development',
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: ['en', 'fr'].map((lang) => ({ params: { lang } })),
  fallback: false,
})

export default BlogIndexPage
