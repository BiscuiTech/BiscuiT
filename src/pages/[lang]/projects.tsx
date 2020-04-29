import React from 'react';
import Layout from '../../components/Layout';
import Projects from '../../components/ProjectList'
import { GetStaticProps, GetStaticPaths } from 'next';
import locales from '../../translations/locales';

const ProjectsPage = () => (
  <Layout
    title="Biscui.Tech"
    description="Biscui.Tech Home page"
  >
    <Projects />
  </Layout>
);

export const getStaticProps: GetStaticProps = async (ctx) => {
  const lang: any = ctx.params?.lang || "fr";
  const namespace = "projects";
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

export default ProjectsPage;
