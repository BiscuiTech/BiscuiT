import React from 'react'
import Layout from '../../../components/Layout'
import BlogPost from '../../../components/BlogPost'
import { useRouter } from 'next/router'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps } from 'next'
import { locales } from '../../../translations/config'
import { getLocalizationProps } from '../../../context/LanguageContext'

const BlogPostPage = ({ frontmatter, markdownBody }) => {
  if (!frontmatter) return <></>

  const router = useRouter()
  const { pid } = router.query
  return (
    <Layout title="Biscui.Tech"
      description="Biscui.Tech Home page">
      <BlogPost pid={pid} frontmatter={frontmatter} markdownBody={markdownBody} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ ...ctx }) => {
  const localization = getLocalizationProps(ctx, 'blogPost');
  const { pid } = ctx.params
  const content = await import(`../../../blog/${pid}.md`)
  const data = matter(content.default)

  return {
    props: {
      localization,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

      return slug
    })
    return data
    //@ts-ignore
  })(require.context('../../../blog', true, /\.md$/))

  const paths = blogSlugs.flatMap((slug) => {
    return locales.flatMap((locale) => {
      return { params: { lang: locale, pid: slug } }
    })
  })
  console.log(paths)
  return {
    paths,
    fallback: false,
  }
}

export default BlogPostPage