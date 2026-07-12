import { SITE_URL, canonicalUrl } from "@/constants/seo";
import en from "@/data/en.json";

export default function sitemap() {
  // Static routes
  const staticRoutes = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: canonicalUrl("/blog"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Blog posts
  const blogRoutes = en.blog.items
    .filter((item) => item.content) // Only include posts with content
    .map((post) => ({
      url: canonicalUrl(`/blog/${post.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  return [...staticRoutes, ...blogRoutes];
}
