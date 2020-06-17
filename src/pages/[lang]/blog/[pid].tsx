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
import { getAllPosts, getPostBySlug, getCurrentPost } from "../../../lib/api";
import ErrorPage from "next/error";
import useOpenGraph from "../../../lib/useOpenGraph";
import Head from "next/head";
import useTranslation from "../../../hooks/useTranslation";

const BlogPostPage = ({ localization, post, morePosts, preview }) => {
  const { locale } = useTranslation();
  const router = useRouter();
  const currentPost = getCurrentPost(post, locale);
  if (!router.isFallback && !currentPost?.slug) {
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
          <meta name="monetization" content="$ilp.uphold.com/nQ6Bd32j9dUR" />
        </Head>
        <BlogPost
          pid={router.query.pid}
          post={currentPost}
          morePosts={morePosts}
        />
      </Layout>
    </LanguageProvider>
  );
};

export const getStaticProps: GetStaticProps = async ({ ...ctx }) => {
  const localization = getLocalizationProps(ctx, "blogPost");
  const post = getPostBySlug(ctx.params.pid, [
    "slug",
    "published",
    "publishedOn",
    "lastModifiedOn",
    "title",
    "author",
    "excerpt",
    "coverImage",
    "content",
    "cannonicalLinks",
  ]);
  return {
    props: {
      localization,
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);
  const paths = posts.flatMap((post: { slug: string }) => {
    console.log(post);
    return locales.flatMap((locale) => {
      return Object.keys(post).map((postLang) => {
        return { params: { lang: locale, pid: post[postLang].slug } };
      });
    });
  });
  console.log(paths);
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
