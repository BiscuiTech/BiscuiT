import React from 'react';
import Layout from '../../components/Layout';
import About from '../../components/About';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import locales from '../../translations/locales';
import { LanguageProvider } from '../../context/LanguageContext';
import { Localization } from '../../translations/types';

const AboutPage: NextPage<{ localization: Localization }> = ({ localization }) => (
  <LanguageProvider localization={localization}>
    <Layout
      title="Biscui.Tech"
      description="Biscui.Tech Home page"
    >
      <About />
    </Layout>
  </LanguageProvider>
);

export const getStaticProps: GetStaticProps = async (ctx) => {
  const lang: any = ctx.params?.lang || "fr";
  const namespace = "about";
  const locale: any = locales[lang] || {};
  const strings: any = locale[namespace] || {};
  const translations = {
    common: locales[lang].common,
    ...strings,
  };
  return {
    props: {
      localization: {
        locale: ctx.params?.lang || "en",
        translations: translations,
        namespace: namespace,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ["en", "fr"].map((lang) => ({ params: { lang } })),
    fallback: false,
  };
};

export default AboutPage;
