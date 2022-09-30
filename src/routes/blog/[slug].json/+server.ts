import posts from './../_posts';

export function get({ params }) {
  try {
    const post = posts.find(el => el.slug === params.slug)
    return {
      body: post,
    };
  } catch (error) {
    return {
      status: 404,
    }
  };
}