import {
  SITE_URL,
  SITE_NAME,
  SITE_NAME_AR,
  AUTHOR_NAME,
  AUTHOR_NAME_AR,
  SITE_TITLE_DEFAULT,
  SITE_DESCRIPTION,
  SAME_AS_LINKS,
  OG_IMAGE_PATH,
} from "@/constants/seo";

// Person Schema — connects all name variations to one identity
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: AUTHOR_NAME,
  alternateName: [
    AUTHOR_NAME_AR,        // أسامة أيمن المشد
    SITE_NAME,             // Osama Almashad
    SITE_NAME_AR,          // أسامة المشد
    "Osama Ayman",         // أسامة أيمن
    "أسامة أيمن",
    "أسامة",
    "المشد",
    "Almashad",
    "Osama",
    "Osama Al Mashad",
    "Osama El Mashad",
    "اسامة المشد",
    "اسامة ايمن المشد",
    "اسامة ايمن",
  ],
  url: SITE_URL,
  image: `${SITE_URL}${OG_IMAGE_PATH}`,
  sameAs: SAME_AS_LINKS,
  jobTitle: "Entrepreneur & Web Developer",
  description: SITE_DESCRIPTION,
  knowsAbout: [
    "Frontend Development",
    "UI/UX Design",
    "React",
    "Next.js",
    "Educational Technology",
    "Web Design",
    "تطوير واجهات أمامية",
    "تصميم تجربة المستخدم",
    "تكنولوجيا التعليم",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Damietta University",
    alternateName: "جامعة دمياط",
    department: {
      "@type": "Organization",
      name: "Faculty of Education — Educational Technology",
      alternateName: "كلية التربية — تكنولوجيا التعليم",
    },
  },
  nationality: {
    "@type": "Country",
    name: "Egypt",
    alternateName: "مصر",
  },
  knowsLanguage: [
    { "@type": "Language", name: "Arabic", alternateName: "العربية" },
    { "@type": "Language", name: "English", alternateName: "الإنجليزية" },
  ],
};

// WebSite Schema
const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_TITLE_DEFAULT,
  alternateName: [
    `${SITE_NAME_AR} | رائد أعمال ومطور ويب`,
    `${SITE_NAME} Portfolio`,
  ],
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#person` },
  inLanguage: ["en", "ar"],
};

// WebPage Schema for the home page
const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: SITE_TITLE_DEFAULT,
  description: SITE_DESCRIPTION,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#person` },
  inLanguage: "en",
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${SITE_URL}${OG_IMAGE_PATH}`,
  },
};

// ProfilePage Schema — tells Google this is a person's profile
const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#profilepage`,
  url: SITE_URL,
  name: SITE_TITLE_DEFAULT,
  mainEntity: { "@id": `${SITE_URL}/#person` },
};

// BreadcrumbList
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ],
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />
    </>
  );
}
