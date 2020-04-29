import React from 'react';
import Layout from '../../components/Layout';
import Home from '../../components/Home';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import locales from "../../translations/locales";
import { LanguageProvider } from '../../context/LanguageContext';
import { Localization } from '../../translations/types';

const IndexPage: NextPage<{ localization: Localization }> = ({ localization }) => {
  return (
    <LanguageProvider localization={localization}>
      <Layout
        title="Biscui.Tech"
        description="Biscui.Tech Home page"
      >
        {/*
        TODO: add an SSG api to fetch blogposts
        and populate `pid` with the id
      */}
        <Home pid={null} />
      </Layout>
    </LanguageProvider>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const lang: any = ctx.params?.lang || "fr";
  const namespace = "home";
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

export default IndexPage;
