import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import About from '../../components/About'
import CurriculumVitae from '../../components/CurriculumVitae'
import Layout from '../../components/Layout'
import { getLocalizationProps } from '../../context/LanguageContext'
import { getCV } from '../../lib/api'
import useOpenGraph from '../../lib/useOpenGraph'
import { Localization } from '../../translations/types'

const AboutPage: NextPage<{ localization: Localization; cv: any }> = ({
  cv,
}) => (
  <Layout
    title="Biscui.Tech"
    description="Biscui.Tech Home page"
    og={useOpenGraph()}
  >
    <About />
    <CurriculumVitae cv={cv} />
  </Layout>
)

export const getStaticProps: GetStaticProps = async (ctx) => {
  const cv = getCV(['content'], ctx.params.lang as string)
  const localization = getLocalizationProps(ctx, 'about')
  return {
    props: {
      localization,
      preview: process.env.NODE_ENV === 'development',
      cv,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: ['en', 'fr'].map((lang) => ({ params: { lang } })),
  fallback: false,
})

export default AboutPage
