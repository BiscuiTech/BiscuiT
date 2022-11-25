
import { getPosts } from '$lib/Blog/api';

export function GET() {
  console.log("GETTING POSTS");
  console.log(getPosts());
  return new Response(JSON.stringify({
    body: getPosts(),
  }));
}