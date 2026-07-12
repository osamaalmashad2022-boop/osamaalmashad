import en from "@/data/en.json";
import ar from "@/data/ar.json";
import { SITE_URL, canonicalUrl, AUTHOR_NAME, OG_IMAGE_PATH } from "@/constants/seo";
import BlogPostClient from "./BlogPostClient";

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
  const articleAr = ar.blog.items.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    };
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
      publishedTime: "2026-07-09T03:00:00+03:00",
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

  const jsonLd = article
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: article.title,
        description: article.excerpt,
        datePublished: "2026-07-09T03:00:00+03:00",
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
      }
    : null;

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
      ...(article
        ? [
            {
              "@type": "ListItem",
              position: 3,
              name: article.title,
              item: canonicalUrl(`/blog/${slug}`),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      {/* Server-rendered JSON-LD for SEO */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {/* Client-side interactive blog post */}
      <BlogPostClient slug={slug} />
    </>
  );
}
