
import { getPosts } from '$lib/Blog/api';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET({ params }) {
  try {
    const posts = getPosts();
    const post = posts.find(el => el.slug === params.slug)

    return new Response(JSON.stringify({
      body: {
        ...post,
      }
    }));
  } catch (error) {
    return new Response(undefined, { status: 404 })
  };
}