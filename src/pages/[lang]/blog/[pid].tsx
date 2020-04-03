import React from 'react'
import Layout from '../../../components/Layout'
import BlogPost from '../../../components/BlogPost'
import { useRouter } from 'next/router'

const BlogPostPage = () => {
  const router = useRouter()
  const { pid } = router.query
  return (
    <Layout title="Biscui.Tech"
      description="Biscui.Tech Home page">
      <BlogPost pid={pid} />
    </Layout>
  )
}

export default BlogPostPage