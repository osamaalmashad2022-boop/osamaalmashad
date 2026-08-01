import { SITE_URL, canonicalUrl, AUTHOR_NAME, SITE_NAME } from "@/constants/seo";
import en from "@/data/en.json";

export async function GET() {
  const publishedPosts = en.blog.items
    .filter((item) => item.content && item.publishedAt)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  const lastBuildDate = publishedPosts.length > 0
    ? new Date(publishedPosts[0].publishedAt).toUTCString()
    : new Date().toUTCString();

  const escapeXml = (str) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

  const rssItems = publishedPosts.map((post) => {
    const url = canonicalUrl(`/blog/${post.slug}`);
    const pubDate = new Date(post.publishedAt).toUTCString();
    const imageTag = post.image
      ? `<enclosure url="${escapeXml(`${SITE_URL}${post.image}`)}" type="image/png" length="0"/>`
      : "";

    return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${pubDate}</pubDate>
      <author>${escapeXml(AUTHOR_NAME)}</author>
      <category>${escapeXml(post.category)}</category>
      ${imageTag}
    </item>`;
  });

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(`${SITE_NAME} Blog`)}</title>
    <link>${escapeXml(canonicalUrl("/blog"))}</link>
    <description>${escapeXml(`Articles and insights by ${AUTHOR_NAME} on web development, EdTech, UI/UX design, and entrepreneurship.`)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <managingEditor>${escapeXml(AUTHOR_NAME)}</managingEditor>
    <webMaster>${escapeXml(AUTHOR_NAME)}</webMaster>
    <atom:link href="${escapeXml(`${SITE_URL}/feed.xml`)}" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_URL}/icon.png</url>
      <title>${escapeXml(`${SITE_NAME} Blog`)}</title>
      <link>${escapeXml(canonicalUrl("/blog"))}</link>
    </image>
${rssItems.join("\n")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600",
    },
  });
}
