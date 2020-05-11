import React from "react";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import CoverImage from "./md/CoverImage";
import moduleName from "react-markdown";
import ReactMarkdown from "react-markdown";
import markdownToHtml from "../../lib/markdownToHtml";

const BlogPost = ({ pid, post, morePosts }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <article>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={post.title} src={post.coverImage} slug={post.slug} />
      </div>
      <main>
        <ReactMarkdown source={post.content} />
      </main>
    </article>
  );
};

export default BlogPost;
