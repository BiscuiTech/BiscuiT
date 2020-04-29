import React from 'react';
import Layout from '../../components/Layout';
// import Contact from '../../components/Contact';
import Contact from '../../components/Contact'
import locales from '../../translations/locales';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { Localization } from '../../translations/types';
import { LanguageProvider } from '../../context/LanguageContext';

const ContactPage: NextPage<{ localization: Localization }> = ({ localization }) => (
  <LanguageProvider localization={localization}>
    <Layout
      title="Biscui.Tech"
      description="Biscui.Tech Home page">
      <Contact />
    </Layout>
  </LanguageProvider>
);

export const getStaticProps: GetStaticProps = async (ctx) => {
  const lang: any = ctx.params?.lang || "fr";
  const namespace = "contact";
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

export default ContactPage;
