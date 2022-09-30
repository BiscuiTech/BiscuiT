import posts from './_posts';

export function get() {
  return {
    body: posts,
  };
}