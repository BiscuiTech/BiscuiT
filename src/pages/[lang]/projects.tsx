import React from 'react';
import Layout from '../../components/Layout';
import Projects from '../../components/ProjectList'
import { GetStaticProps, GetStaticPaths } from 'next';
import { getLocalizationProps } from '../../context/LanguageContext';

const ProjectsPage = () => (
  <Layout
    title="Biscui.Tech"
    description="Biscui.Tech Home page"
  >
    <Projects />
  </Layout>
);

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, 'projects');
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

export default ProjectsPage;
