import { canonicalUrl, SITE_URL, AUTHOR_NAME, OG_IMAGE_PATH, SITE_NAME } from '@/constants/seo';
import en from '@/data/en.json';
import BlogListingClient from './BlogListingClient';

const url = canonicalUrl('/blog');

export const metadata = {
  title: 'Blog — Articles on Web Development, EdTech & UI/UX Design',
  description: `Read the latest articles and insights from ${AUTHOR_NAME} (أسامة المشد) on frontend development, educational technology, UI/UX design, React, Next.js, and entrepreneurship.`,
  keywords: [
    'Osama Almashad blog',
    'أسامة المشد مدونة',
    'web development blog',
    'frontend development articles',
    'EdTech insights',
    'UI/UX design tutorials',
    'React articles',
    'Next.js tutorials',
  ],
  authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_EG',
    url,
    title: `Blog — ${SITE_NAME}`,
    description: `Insights, tutorials, and thought pieces by ${AUTHOR_NAME} on web development, UI/UX, EdTech, and entrepreneurship.`,
    siteName: `${SITE_NAME} | أسامة المشد`,
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Blog`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Blog — ${SITE_NAME}`,
    description: `Latest articles on web development, EdTech, and UI/UX design by ${AUTHOR_NAME}.`,
    images: [OG_IMAGE_PATH],
    creator: '@osamaalmashad',
  },
};

// Build CollectionPage + ItemList JSON-LD for blog listing
function getBlogListingJsonLd() {
  const publishedPosts = en.blog.items.filter(item => item.content);

  const itemListElements = publishedPosts.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: canonicalUrl(`/blog/${post.slug}`),
    name: post.title,
  }));

  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${url}/#collection`,
      name: `${SITE_NAME} Blog`,
      description: `Articles and insights by ${AUTHOR_NAME} on web development, EdTech, and design.`,
      url,
      isPartOf: {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
      },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: publishedPosts.length,
        itemListElement: itemListElements,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: url },
      ],
    },
  ];
}

export default function BlogPage() {
  const schemas = getBlogListingJsonLd();

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
        />
      ))}
      <BlogListingClient />
    </>
  );
}
