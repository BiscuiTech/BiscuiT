import React from "react";
import Layout from "../../components/Layout";
import Home from "../../components/Home";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getLocalizationProps } from "../../context/LanguageContext";
import { Localization, Locale } from "../../translations/types";
import useOpenGraph from "../../lib/useOpenGraph";
import { getAllPosts } from "../../lib/api";

const IndexPage: NextPage<{
  localization: Localization;
  posts: any;
  preview: boolean;
}> = ({ localization, posts, preview = false }) => {
  const publishedPost = (arr) => {
    return arr.filter((el) => {
      const keys = Object.keys(el);
      const check = keys.flatMap((key) => {
        return el[key].published;
      });
      return check.reduce((tally, bool) => (bool == true ? true : false));
    });
  };

  return (
    <Layout
      title="Biscui.Tech"
      description="Biscui.Tech Home page"
      og={useOpenGraph()}
    >
      <Home post={preview ? posts[0] : publishedPost(posts)[0]} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = getAllPosts([
    "title",
    "publishedOn",
    "published",
    "slug",
    "excerpt",
  ]);
  const localization = getLocalizationProps(ctx, "home");
  return {
    props: {
      posts: posts,
      localization,
      preview: process.env.NODE_ENV === "development",
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
