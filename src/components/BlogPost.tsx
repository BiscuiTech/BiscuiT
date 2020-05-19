import React from "react";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import CoverImage from "./md/CoverImage";
import MDX from "@mdx-js/runtime";
import { Code, H1, H2, H3, Img } from "./md/renderers";
import styled from "styled-components";
import useTranslation from "../hooks/useTranslation";
import DateFormater from "./DateFormat";

const BlogHeader = styled.header`
  background-color: hsl(200,100%,4%);
`;

const BlogContent = styled.section`
  font-family: Inter;

  code {
    padding: 2px 4px;
    margin: 0 2px;
    background: hsl(0, 0%, 20%);
    color: hsl(0, 0%, 90%);
    color: hsl(42,93.2%, 46.1%);
    border-radius: 2px;
    font-family: "Lucida Console", Monaco, monospace;
    font-size: 1em;
    line-height: 1em;
  }
  p {
    margin: 0 0 1.2em 0px;
  }
`;

const BlogPost = ({ pid, post, morePosts }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const { t } = useTranslation()
  return (
    <article className="relative">
      <BlogHeader className="border-b border-yellow-400 p-4">
        <CoverImage
          title={post.title}
          src={post.coverImage}
          slug={post.slug}
          accreditation={post.imageAccreditation}
        />
        <H1>{post.title}</H1>
        <div className="text-base text-gray-300 -mt-2">
          {`${t('blogBy')} ${post.author} | `}{DateFormater({ dateString: post.date })}
        </div>
      </BlogHeader>
      <BlogContent className="text-lg">
        <MDX components={{ code: Code, h1: H1, h2: H2, h3: H3, img: Img }}>
          {post.content}
        </MDX>
      </BlogContent>
    </article>
  );
};

export default BlogPost;
