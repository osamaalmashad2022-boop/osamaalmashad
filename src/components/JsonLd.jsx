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
  NAME_VARIATIONS_EN,
  NAME_VARIATIONS_AR,
} from "@/constants/seo";

// Person Schema — connects all name variations to one identity
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: AUTHOR_NAME,
  alternateName: [
    ...NAME_VARIATIONS_EN.filter((n) => n !== AUTHOR_NAME),
    AUTHOR_NAME_AR,
    ...NAME_VARIATIONS_AR,
  ],
  url: SITE_URL,
  image: `${SITE_URL}${OG_IMAGE_PATH}`,
  sameAs: SAME_AS_LINKS,
  email: "osamaalmashad2022@gmail.com",
  jobTitle: "Entrepreneur & Web Developer",
  description: SITE_DESCRIPTION,
  knowsAbout: [
    "Frontend Development",
    "UI/UX Design",
    "React",
    "Next.js",
    "JavaScript",
    "Educational Technology",
    "Web Design",
    "E-Commerce",
    "Entrepreneurship",
    "تطوير واجهات أمامية",
    "تصميم تجربة المستخدم",
    "تكنولوجيا التعليم",
    "ريادة الأعمال",
    "تطوير مواقع الويب",
  ],
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "Frontend Developer",
      occupationLocation: {
        "@type": "Country",
        name: "Egypt",
      },
      skills: [
        "React",
        "Next.js",
        "JavaScript",
        "HTML",
        "CSS",
        "UI/UX Design",
        "Responsive Design",
      ],
    },
    {
      "@type": "Occupation",
      name: "Entrepreneur",
      description: "Founder of Donatella",
    },
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Damietta University",
    alternateName: "جامعة دمياط",
    url: "https://www.du.edu.eg",
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
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "ICDL-Base (International Computer Driving License)",
      credentialCategory: "certification",
      dateCreated: "2022-09-18",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Educational Technology Specialization",
      credentialCategory: "certification",
      recognizedBy: {
        "@type": "Organization",
        name: "Edraak",
        alternateName: "إدراك",
      },
      dateCreated: "2025-01-26",
    },
  ],
  worksFor: {
    "@id": `${SITE_URL}/#donatella`,
  },
};

// Organization Schema for Donatella — connects brand to person
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#donatella`,
  name: "Donatella",
  alternateName: "دوناتيلا",
  founder: { "@id": `${SITE_URL}/#person` },
  description:
    "A brand founded by Osama Ayman Almashad, delivering quality products with entrepreneurial spirit.",
};

// WebSite Schema with SearchAction
const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_TITLE_DEFAULT,
  alternateName: [
    `${SITE_NAME_AR} | رائد أعمال ومطور ويب`,
    `${SITE_NAME} Portfolio`,
    "Osama Almashad Portfolio",
    "أسامة المشد بورتفوليو",
    "Osama Elmeshad Portfolio",
  ],
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#person` },
  inLanguage: ["en", "ar"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
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
  dateCreated: "2025-01-01",
  dateModified: new Date().toISOString().split("T")[0],
};

// CreativeWork Schema for Nexora (featured graduation project)
const nexoraSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Nexora Platform",
  alternateName: "منصة نيكسورا",
  description:
    "An innovative learning platform for digital resource production, powered by an AI Agent to guide and provide personalized interactive support to learners.",
  creator: { "@id": `${SITE_URL}/#person` },
  url: "https://www.youtube.com/watch?v=TVRpTSB3bqc",
  dateCreated: "2026",
  keywords: [
    "Nexora",
    "AI Education",
    "EdTech Platform",
    "Digital Resource Production",
  ],
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
  const schemas = [
    personSchema,
    organizationSchema,
    webSiteSchema,
    homePageSchema,
    profilePageSchema,
    nexoraSchema,
    breadcrumbSchema,
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
