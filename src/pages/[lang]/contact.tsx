import React from "react";
import Layout from "../../components/Layout";
import Contact from "../../components/Contact";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { Localization } from "../../translations/types";
import { getLocalizationProps } from "../../context/LanguageContext";
import useOpenGraph from "../../lib/useOpenGraph";

const ContactPage: NextPage<{ localization: Localization }> = ({
  localization,
}) => (
  <Layout
    title="Biscui.Tech"
    description="Biscui.Tech Home page"
    og={useOpenGraph()}
  >
    <Contact />
  </Layout>
);

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, "contact");
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

export default ContactPage;
