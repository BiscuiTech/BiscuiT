import React from 'react';
import Layout from '../../components/Layout';
import Home from '../../components/Home';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { LanguageProvider, getLocalizationProps } from '../../context/LanguageContext';
import { Localization } from '../../translations/types';
import useOpenGraph from '../../lib/useOpenGraph';
import { getAllPosts } from '../../lib/api';

const IndexPage: NextPage<{ localization: Localization, post: any, preview: boolean }> = ({ localization, post, preview = false }) => {
  const publishedPost = (arr) =>
    arr.filter((el) => el.published == "true");
  return (
    <LanguageProvider localization={localization}>
      <Layout
        title="Biscui.Tech"
        description="Biscui.Tech Home page"
        og={useOpenGraph()}
      >
        <Home post={preview ? post : publishedPost} />
      </Layout>
    </LanguageProvider>
  );
};



export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "excerpt_fr",
    "excerpt_en",
  ]);
  const localization = getLocalizationProps(ctx, "home");
  return {
    props: {
      post: posts[0],
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

export default IndexPage;
