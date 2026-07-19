import { SITE_URL, canonicalUrl } from "@/constants/seo";
import en from "@/data/en.json";

export default function sitemap() {
  // Static routes with hreflang alternates
  const alternates = {
    languages: {
      en: undefined, // Will be set per-route
      ar: undefined,
      "x-default": undefined,
    },
  };

  const staticRoutes = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          en: SITE_URL,
          ar: SITE_URL,
          "x-default": SITE_URL,
        },
      },
    },
    {
      url: canonicalUrl("/blog"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: canonicalUrl("/blog"),
          ar: canonicalUrl("/blog"),
          "x-default": canonicalUrl("/blog"),
        },
      },
    },
  ];

  // Blog posts
  const blogRoutes = en.blog.items
    .filter((item) => item.content) // Only include posts with content
    .map((post) => {
      const url = canonicalUrl(`/blog/${post.slug}`);
      return {
        url,
        lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: {
          languages: {
            en: url,
            ar: url,
            "x-default": url,
          },
        },
      };
    });

  // Section anchors — helps Google understand page sections
  const sectionRoutes = [
    "about",
    "services",
    "projects",
    "skills",
    "certifications",
    "contact",
  ].map((section) => ({
    url: `${SITE_URL}/#${section}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes, ...sectionRoutes];
}
