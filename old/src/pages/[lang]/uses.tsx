import React from 'react'
import Layout from '../../components/Layout'
import Uses from '../../components/Uses'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { getLocalizationProps } from '../../context/LanguageContext'
import useOpenGraph from '../../lib/useOpenGraph'

const UsesPage: NextPage = () => (
  <Layout
    title="Biscui.Tech"
    description="Biscui.Tech Home page"
    og={useOpenGraph()}
  >
    <Uses />
  </Layout>
)

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, 'uses')
  return {
    props: {
      localization,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: ['en', 'fr'].map((lang) => ({ params: { lang } })),
  fallback: false,
})

export default UsesPage
