import { notFound } from "next/navigation";
import en from "@/data/en.json";
import { SITE_URL, canonicalUrl, AUTHOR_NAME, OG_IMAGE_PATH, SITE_NAME } from "@/constants/seo";
import BlogPostClient from "./BlogPostClient";

// Estimate word count from content blocks
function getWordCount(article) {
  if (!article.content) return 0;
  return article.content.reduce((count, block) => {
    if (block.text) return count + block.text.split(/\s+/).length;
    if (block.items) return count + block.items.join(' ').split(/\s+/).length;
    return count;
  }, 0);
}

// Extract key quotes from content for FAQ schema
function extractQuotes(article) {
  if (!article.content) return [];
  return article.content
    .filter(block => block.type === 'quote')
    .map(block => block.text);
}

// Extract headings for FAQ-style schema
function extractHeadings(article) {
  if (!article.content) return [];
  return article.content
    .filter(block => block.type === 'heading')
    .map(block => block.text);
}

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
  const publishedTime = article.publishedAt || "2026-07-09T03:00:00+03:00";
  const modifiedTime = article.modifiedAt || publishedTime;

  // Build category-based keywords for this article
  const articleKeywords = [
    article.category,
    AUTHOR_NAME,
    "Osama Almashad",
    "أسامة المشد",
    ...article.title.split(/[:\-–|,]/).map(s => s.trim()).filter(Boolean),
  ];

  return {
    title: article.title,
    description: article.excerpt,
    authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
    keywords: articleKeywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "en_US",
      alternateLocale: "ar_EG",
      url,
      title: article.title,
      description: article.excerpt,
      siteName: `${SITE_NAME} | أسامة المشد`,
      images: [
        {
          url: article.image || OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      publishedTime,
      modifiedTime,
      section: article.category,
      tags: articleKeywords,
      authors: [AUTHOR_NAME],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image || OG_IMAGE_PATH],
      creator: "@osamaalmashad",
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

  const publishedTime = article.publishedAt || "2026-07-09T03:00:00+03:00";
  const modifiedTime = article.modifiedAt || publishedTime;
  const wordCount = getWordCount(article);
  const headings = extractHeadings(article);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    alternativeHeadline: article.excerpt,
    description: article.excerpt,
    datePublished: publishedTime,
    dateModified: modifiedTime,
    wordCount,
    articleSection: article.category,
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: AUTHOR_NAME,
      url: SITE_URL,
      jobTitle: "Frontend Developer & EdTech Specialist",
    },
    image: {
      "@type": "ImageObject",
      url: article.image
        ? `${SITE_URL}${article.image}`
        : `${SITE_URL}${OG_IMAGE_PATH}`,
      width: 1200,
      height: 630,
    },
    publisher: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl(`/blog/${slug}`),
    },
    url: canonicalUrl(`/blog/${slug}`),
    keywords: [
      article.category,
      ...article.title.split(/[:\-–|,]/).map(s => s.trim()).filter(Boolean),
    ],
    isPartOf: {
      "@type": "Blog",
      "@id": `${canonicalUrl("/blog")}/#blog`,
      name: `${SITE_NAME} Blog`,
      url: canonicalUrl("/blog"),
    },
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

  // Build FAQ schema from heading+paragraph pairs for rich snippets
  const faqItems = [];
  if (article.content) {
    for (let i = 0; i < article.content.length; i++) {
      const block = article.content[i];
      if (block.type === 'heading' && article.content[i + 1]?.type === 'paragraph') {
        faqItems.push({
          "@type": "Question",
          name: block.text.replace(/^\d+\.\s*/, ''),
          acceptedAnswer: {
            "@type": "Answer",
            text: article.content[i + 1].text.replace(/\*\*/g, ''),
          },
        });
      }
    }
  }

  const faqLd = faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems,
  } : null;

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
      {/* FAQ structured data for rich snippets */}
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, '\\u003c') }}
        />
      )}
      {/* Client-side interactive blog post */}
      <BlogPostClient slug={slug} />
    </>
  );
}
