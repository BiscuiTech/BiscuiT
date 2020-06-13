import React from "react";
import Layout from "../../../components/Layout";
import BlogPost from "../../../components/BlogPost";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { locales } from "../../../translations/config";
import {
  getLocalizationProps,
  LanguageProvider,
} from "../../../context/LanguageContext";
import { getAllPosts, getPostBySlug } from "../../../lib/api";
import ErrorPage from "next/error";
import useOpenGraph from "../../../lib/useOpenGraph";
import Head from "next/head";
import { Locale } from "../../../translations/types";

const BlogPostPage = ({ localization, post, morePosts, preview }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <LanguageProvider localization={localization}>
      <Layout
        title="Biscui.Tech"
        description="Biscui.Tech Home page"
        //TODO: add og:image prop
        preview={preview}
        og={useOpenGraph()}
        fullPage
      >
        <Head>
          <meta name="monetization" content="$ilp.uphold.com/dhwUDqyeRbeN" />
        </Head>
        <BlogPost pid={router.query.pid} post={post} morePosts={morePosts} />
      </Layout>
    </LanguageProvider>
  );
};

export const getStaticProps: GetStaticProps = async ({ ...ctx }) => {
  const localization = getLocalizationProps(ctx, "blogPost");
  const post = getPostBySlug(
    ctx.params.pid,
    [
      "slug",
      "published",
      "title",
      "author",
      "date",
      "excerpt",
      "coverImage",
      "content",
      "cannonical",
    ]);
  return {
    props: {
      localization,
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(["slug"], ["en", "fr"]);
  const paths = posts.flatMap((el: { slug: string }) => {
    return locales.flatMap((locale) => {
      return { params: { lang: locale, pid: el.slug } };
    });
  });
  return {
    paths,
    fallback: false,
  };
};

export default BlogPostPage;

/**
 * Localized selector for blogPosts:
 * If a slug is in english, and the locale is in en, return post.
 * if a slug is in english and the locale is in fr,
 * return the fr post **if it exists**.
 * if it doesnt exist, return en post and display alert.
 *
 */
