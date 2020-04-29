import React from 'react'
import Layout from '../../components/Layout';
import PageHeader, { SubHeader } from '../../components/styles/PageHeader'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import locales from '../../translations/locales';
import { Localization } from '../../translations/types';
import { LanguageProvider } from '../../context/LanguageContext';

const ArchivesPage: NextPage<{ localization: Localization }> = ({ localization }) => {
  return (
    <LanguageProvider localization={localization}>
      <Layout
        title="Biscui.Tech || Archives"
        description="Biscui.Tech Archives page"
      >
        <PageHeader>
          Archives
      </PageHeader>
        <SubHeader>
          Page currently in development. Access past version from the repo.
      </SubHeader>
      </Layout>
    </LanguageProvider>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const lang: any = ctx.params?.lang || "fr";
  const namespace = "archives";
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

export default ArchivesPage;