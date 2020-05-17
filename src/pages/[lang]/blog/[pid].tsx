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

const BlogPostPage = ({ localization, post, morePosts, preview }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  console.log(post);
  return (
    <LanguageProvider localization={localization}>
      <Layout
        title="Biscui.Tech"
        description="Biscui.Tech Home page"
        //TODO: add og:image prop
        preview={preview}
        og={useOpenGraph()}
      >
        <BlogPost pid={router.query.pid} post={post} morePosts={morePosts} />
      </Layout>
    </LanguageProvider>
  );
};

export const getStaticProps: GetStaticProps = async ({ ...ctx }) => {
  const localization = getLocalizationProps(ctx, "blogPost");

  const post = getPostBySlug(ctx.params.pid, [
    "slug",
    "published",
    "title",
    "author",
    "date",
    "excerpt",
    "coverImage",
    "imageAccreditation",
    "content",
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
