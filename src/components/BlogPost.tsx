import React from "react";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import CoverImage from "./md/CoverImage";
import MDX from "@mdx-js/runtime";
import { Code, H1, H2, H3, Img } from "./md/renderers";
import styled from "styled-components";

const Main = styled.main`
  code {
    padding: 0 4px;
    margin: 0 2px;
    background: hsl(0, 0%, 20%);
    color: hsl(0, 0%, 90%);
    border-radius: 2px;
    font-family: monospace;
    font-size: 1em;
  }
  p {
    margin: 2em 0px;
  }
`;

const BlogPost = ({ pid, post, morePosts }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <article className="relative">
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={post.title} src={post.coverImage} slug={post.slug} />
      </div>
      <Main className="text-lg">
        <MDX components={{ code: Code, h1: H1, h2: H2, h3: H3, img: Img }}>
          {post.content}
        </MDX>
      </Main>
    </article>
  );
};

export default BlogPost;
