
import { getPosts } from '$lib/Blog/api';

export function GET() {
  return new Response(JSON.stringify({
    body: getPosts(),
  }));
}