import { getAllPosts } from "@/lib/markdown";

export const dynamic = "force-static";

export async function GET() {
  const posts = getAllPosts();
  const baseUrl = "https://av7danger.dev"; // User's portfolio production url

  const urls = [
    { loc: `${baseUrl}/`, priority: "1.0", changefreq: "daily" },
    { loc: `${baseUrl}/about`, priority: "0.8", changefreq: "monthly" },
    { loc: `${baseUrl}/projects`, priority: "0.8", changefreq: "monthly" },
    { loc: `${baseUrl}/writing`, priority: "0.9", changefreq: "weekly" },
    { loc: `${baseUrl}/resume`, priority: "0.8", changefreq: "monthly" },
    { loc: `${baseUrl}/research`, priority: "0.9", changefreq: "weekly" },
    { loc: `${baseUrl}/contact`, priority: "0.7", changefreq: "monthly" },
  ];

  posts.forEach((post) => {
    const subPath = post.type === "research" ? "research" : "writing";
    urls.push({
      loc: `${baseUrl}/${subPath}/${post.slug}`,
      priority: "0.7",
      changefreq: "weekly",
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
  <url>
    <loc>${url.loc}</loc>
    <priority>${url.priority}</priority>
    <changefreq>${url.changefreq}</changefreq>
  </url>`
    )
    .join("")}
</urlset>`.trim();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
