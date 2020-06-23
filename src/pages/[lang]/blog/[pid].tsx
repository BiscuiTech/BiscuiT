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
// import markdownToHtml from "../../../lib/markdownToHtml";
import MDX from "@mdx-js/runtime";
import { renderToString } from "react-dom/server";
import {
  Code,
  H1,
  H2,
  H3,
  Img,
  UL,
  LI,
} from "../../../components/md/renderers";

const BlogPostPage = ({ post, morePosts, preview }) => {
  const { locale } = useTranslation();
  const router = useRouter();
  const currentPost = getCurrentPost(post, locale);
  if (!router.isFallback && !currentPost?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout
      title={currentPost.title}
      description="Biscui.Tech Home page"
      preview={preview}
      og={useOpenGraph(currentPost)}
      fullPage
    >
      <Head>
        {process.env.NODE_ENV === "production" && (
          <meta name="monetization" content="$ilp.uphold.com/nQ6Bd32j9dUR" />
        )}
        {post.canonicalLinks?.map((el) => (
          <link rel="canonical" href={el} />
        ))}
      </Head>
      <BlogPost
        pid={router.query.pid}
        post={currentPost}
        morePosts={morePosts}
      />
    </Layout>
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
    "canonicalLinks",
  ]);
  const transpiledPost = await Object.keys(post).reduce(async (tally, el) => {
    return {
      ...tally,
      [el]: {
        ...post[el],
        content: renderToString(
          <MDX
            components={{
              code: Code,
              h1: H1,
              h2: H2,
              h3: H3,
              img: Img,
              ul: UL,
              li: LI,
            }}
          >
            {post[el].content}
          </MDX>
        ),
      },
    };
  }, {});

  return {
    props: {
      localization,
      post: transpiledPost,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);
  const paths = posts.flatMap((post: { slug: string }) => {
    return locales.flatMap((locale) => {
      return Object.keys(post).map((postLang) => {
        return { params: { lang: locale, pid: post[postLang].slug } };
      });
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
