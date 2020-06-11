import React from "react";
import Layout from "../../components/Layout";
import About from "../../components/About";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import {
  LanguageProvider,
  getLocalizationProps,
} from "../../context/LanguageContext";
import { Localization } from "../../translations/types";
import Uses from "../../components/Uses";
import useOpenGraph from "../../lib/useOpenGraph";
import CurriculumVitae from "../../components/CurriculumVitae";
import { getCV } from "../../lib/api";

const AboutPage: NextPage<{ localization: Localization; cv: any }> = ({
  localization,
  cv,
}) => (
  <LanguageProvider localization={localization}>
    <Layout
      title="Biscui.Tech"
      description="Biscui.Tech Home page"
      og={useOpenGraph()}
    >
      <About />
      {/* <CurriculumVitae cv={cv} /> */}
    </Layout>
  </LanguageProvider>
);

export const getStaticProps: GetStaticProps = async (ctx) => {
  const cv = getCV(["content"], ctx.params.lang as string);
  const localization = getLocalizationProps(ctx, "about");
  return {
    props: {
      localization,
      preview: process.env.NODE_ENV === "development",
      cv,
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
