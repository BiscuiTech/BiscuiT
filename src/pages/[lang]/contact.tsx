import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Contact from '../../components/Contact'
import Layout from '../../components/Layout'
import { getLocalizationProps } from '../../context/LanguageContext'
import useOpenGraph from '../../lib/useOpenGraph'
import { Localization } from '../../translations/types'

const ContactPage: NextPage<{ localization: Localization }> = () => (
  <Layout
    title="Biscui.Tech"
    description="Biscui.Tech Home page"
    og={useOpenGraph()}
  >
    <Contact />
  </Layout>
)

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, 'contact')
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

export default ContactPage
