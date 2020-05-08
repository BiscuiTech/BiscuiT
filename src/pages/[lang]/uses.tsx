import React from 'react';
import Layout from '../../components/Layout';
import Uses from '../../components/Uses';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { LanguageProvider, getLocalizationProps } from '../../context/LanguageContext';
import { Localization } from '../../translations/types';

const UsesPage: NextPage<{ localization: Localization }> = ({ localization }) => (
  <LanguageProvider localization={localization}>
    <Layout
      title="Biscui.Tech"
      description="Biscui.Tech Home page"
    >
      <Uses />
    </Layout>
  </LanguageProvider>
);

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, 'uses');
  return {
    props: {
      localization,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ["en", "fr"].map((lang) => ({ params: { lang } })),
    fallback: false,
  };
};

export default UsesPage;
