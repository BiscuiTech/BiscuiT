import React from "react";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import CoverImage from "./md/CoverImage";
import { MDXProvider } from '@mdx-js/react'

// renderers
import { Code } from './md/renderers'
const components = {
  pre: props => <div {...props} />,
  code: props => <pre style={{ color: 'tomato' }} {...props} />
}

const BlogPost = ({ pid, post, morePosts }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <MDXProvider components={components}>
      <article>
        <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
          <CoverImage title={post.title} src={post.coverImage} slug={post.slug} />
        </div>
        <main>
          {post.content}
        </main>
      </article>
    </MDXProvider>
  );
};

export default BlogPost;
