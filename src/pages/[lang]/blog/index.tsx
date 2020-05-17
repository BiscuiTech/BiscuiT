import React from "react";
import Layout from "../../../components/Layout";
import BlogList from "../../../components/BlogList";
import { GetStaticProps, GetStaticPaths } from "next";
import {
  getLocalizationProps,
  LanguageProvider,
} from "../../../context/LanguageContext";

import { getAllPosts } from "../../../lib/api";
import useOpenGraph from "../../../lib/useOpenGraph";

const BlogIndexPage = ({ localization, posts, preview = false }) => {
  /**
   * TODO: Preview mode
   */
  const publishedPosts = (arr) =>
    arr.filter((el) => el.frontmatter.published == "true");
  return (
    <LanguageProvider localization={localization}>
      <Layout
        title="Biscui.Tech"
        description="Biscui.Tech Home page"
        og={useOpenGraph()}
      >
        <BlogList posts={posts} />
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
  const localization = getLocalizationProps(ctx, "blog");
  return {
    props: {
      posts,
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

export default BlogIndexPage;
