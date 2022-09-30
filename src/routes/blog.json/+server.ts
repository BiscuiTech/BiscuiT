
import posts from '../blog/_posts';

export function GET() {
  // Suggestion (check for correctness before using):
  // return json(posts);
  return new Response(JSON.stringify({
    body: posts,
  }));
}