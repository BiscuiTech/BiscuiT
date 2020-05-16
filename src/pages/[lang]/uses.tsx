import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Uses from "../../components/Uses";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import {
  LanguageProvider,
  getLocalizationProps,
} from "../../context/LanguageContext";
import { Localization } from "../../translations/types";
import useOpenGraph from "../../lib/useOpenGraph";
import useTranslation from "../../hooks/useTranslation";
const UsesPage: NextPage<{ localization: Localization }> = ({
  localization,
}) => {
  const { t, locale } = useTranslation();
  const router = useRouter();
  return (
    <LanguageProvider localization={localization}>
      <Layout
        title="Biscui.Tech"
        description="Biscui.Tech Home page"
        og={useOpenGraph({, locale, router)}
      >
        <Uses />
      </Layout>
    </LanguageProvider>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, "uses");
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
