export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
  // fetch posts
  const res = await fetch('/blog.json')
  const json = await res.json();
  const latest = json.body[0];

  return { post: latest }
}