import React from 'react'
import Layout from '../../../components/Layout'
import withAPILocale from '../../../hocs/withAPILocale'
import Blog from '../../../components/Blog'

const BlogIndexPage = () => {
  return (
    <Layout
      title="Biscui.Tech"
      description="Biscui.Tech Home page"
    >
      <Blog />
    </Layout>
  )
}

export default withAPILocale('blog')(BlogIndexPage)