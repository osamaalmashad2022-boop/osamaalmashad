import { notFound } from "next/navigation";
import en from "@/data/en.json";
import { SITE_URL, canonicalUrl, AUTHOR_NAME, OG_IMAGE_PATH } from "@/constants/seo";
import BlogPostClient from "./BlogPostClient";

export const dynamicParams = false;

// Generate static params for all blog posts with content
export async function generateStaticParams() {
  return en.blog.items
    .filter((item) => item.content)
    .map((item) => ({ slug: item.slug }));
}

// Server-side metadata generation for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = en.blog.items.find((item) => item.slug === slug);

  if (!article || !article.content) {
    notFound();
  }

  const url = canonicalUrl(`/blog/${slug}`);

  return {
    title: article.title,
    description: article.excerpt,
    authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "en_US",
      alternateLocale: "ar_EG",
      url,
      title: article.title,
      description: article.excerpt,
      siteName: "Osama Almashad | أسامة المشد",
      images: [
        {
          url: article.image || OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      publishedTime: article.publishedAt || "2026-07-09T03:00:00+03:00",
      authors: [AUTHOR_NAME],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image || OG_IMAGE_PATH],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  // Build JSON-LD on the server with correct URLs
  const article = en.blog.items.find((item) => item.slug === slug);

  if (!article || !article.content) {
    notFound();
  }

  const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: article.title,
        description: article.excerpt,
        datePublished: article.publishedAt || "2026-07-09T03:00:00+03:00",
        author: {
          "@type": "Person",
          "@id": `${SITE_URL}/#person`,
          name: AUTHOR_NAME,
          url: SITE_URL,
        },
        image: article.image
          ? `${SITE_URL}${article.image}`
          : `${SITE_URL}${OG_IMAGE_PATH}`,
        publisher: {
          "@type": "Person",
          "@id": `${SITE_URL}/#person`,
          name: AUTHOR_NAME,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl(`/blog/${slug}`),
        },
        url: canonicalUrl(`/blog/${slug}`),
        keywords: article.category,
      };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: canonicalUrl("/blog"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: canonicalUrl(`/blog/${slug}`),
      },
    ],
  };

  return (
    <>
      {/* Server-rendered JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd).replace(/</g, '\\u003c') }}
      />
      {/* Client-side interactive blog post */}
      <BlogPostClient slug={slug} />
    </>
  );
}
