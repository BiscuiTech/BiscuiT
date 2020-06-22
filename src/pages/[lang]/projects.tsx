import React from "react";
import Layout from "../../components/Layout";
import Projects from "../../components/Projects";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import {
  LanguageProvider,
  getLocalizationProps,
} from "../../context/LanguageContext";
import { Localization } from "../../translations/types";
import useOpenGraph from "../../lib/useOpenGraph";

const ProjectsPage: NextPage<{ localization: Localization }> = ({
  localization,
}) => {
  return (
    <Layout
      title="Biscui.Tech"
      description="Biscui.Tech Home page"
      og={useOpenGraph()}
    >
      <Projects />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, "projects");
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
