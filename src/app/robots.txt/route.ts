export const dynamic = "force-static";

export async function GET() {
  const robots = `
User-agent: *
Allow: /

Sitemap: https://anishvarma.com/sitemap.xml
`.trim();

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
