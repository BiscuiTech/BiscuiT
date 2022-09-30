
import posts from './../_posts';

export function GET({ params }) {
  try {
    const post = posts.find(el => el.slug === params.slug)
    // Suggestion (check for correctness before using):
    // return json(post);
    return new Response(JSON.stringify({
      body: {
        ...post
      },
    }));
  } catch (error) {
    return new Response(undefined, { status: 404 })
  };
}