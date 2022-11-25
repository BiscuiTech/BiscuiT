
import { getPosts } from '$lib/Blog/api';
// import { evaluate } from '@mdx-js/mdx'
// import {
//   jsx,
//   Fragment,
//   jsxs
// } from 'svelte-jsx'

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET({ params }) {
  console.log('params', params);

  try {
    const posts = getPosts();
    console.log(posts);

    const post = posts.find(el => el.slug === params.slug)
    console.log(post);

    // // before returning post, compile and evaluate the code
    // const { default: Content } = await evaluate(post.html, {
    //   jsx,
    //   Fragment,
    //   jsxs,
    // })
    // console.log('Content', Content);

    // Suggestion (check for correctness before using):
    return new Response(JSON.stringify({
      body: {
        ...post,
      }
    }));
  } catch (error) {
    return new Response(undefined, { status: 404 })
  };
}