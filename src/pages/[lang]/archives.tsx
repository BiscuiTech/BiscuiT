import React from 'react'
import Layout from '../../components/Layout';
import PageHeader, { SubHeader } from '../../components/styles/PageHeader'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { Localization } from '../../translations/types';
import { LanguageProvider, getLocalizationProps } from '../../context/LanguageContext';
import useOpenGraph from '../../lib/useOpenGraph';

const ArchivesPage: NextPage<{ localization: Localization }> = ({ localization }) => {
  return (
    <LanguageProvider localization={localization}>
      <Layout
        title="Biscui.Tech || Archives"
        description="Biscui.Tech Archives page"
        og={useOpenGraph()}
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
  const localization = getLocalizationProps(ctx, 'archives');
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

export default ArchivesPage;