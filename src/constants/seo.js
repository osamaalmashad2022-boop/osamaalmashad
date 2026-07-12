// ═══════════════════════════════════════════════════════════════
// SEO Constants — Single Source of Truth
// ═══════════════════════════════════════════════════════════════

// ─── Site Identity ───────────────────────────────────────────
export const SITE_URL = "https://osamaalmashad.tech";
export const SITE_NAME = "Osama Almashad";
export const SITE_NAME_AR = "أسامة المشد";
export const SITE_LOCALE = "en_US";
export const SITE_LOCALE_AR = "ar_EG";

// ─── Author ──────────────────────────────────────────────────
export const AUTHOR_NAME = "Osama Ayman Almashad";
export const AUTHOR_NAME_AR = "أسامة أيمن المشد";
export const AUTHOR_EMAIL = "osamaalmashad2022@gmail.com";

// ─── Title & Description ────────────────────────────────────
export const SITE_TITLE_DEFAULT =
  "Osama Almashad | أسامة المشد — Frontend Developer & UI/UX Expert";
export const SITE_TITLE_TEMPLATE = "%s | Osama Almashad - أسامة المشد";
export const SITE_DESCRIPTION =
  "Official portfolio of Osama Ayman Almashad (أسامة أيمن المشد) — Frontend Developer, UI/UX Expert, EdTech Specialist & Entrepreneur. Founder of Donatella. Building stunning digital experiences with React & Next.js. الموقع الرسمي لأسامة أيمن المشد — مطور واجهات أمامية وخبير تجربة مستخدم ومتخصص تكنولوجيا تعليم.";
export const SITE_DESCRIPTION_AR =
  "الموقع الرسمي لأسامة أيمن المشد — مطور واجهات أمامية، خبير تصميم تجربة المستخدم، متخصص تكنولوجيا تعليم ورائد أعمال. مؤسس دوناتيلا. أبني تجارب رقمية مبهرة باستخدام React و Next.js.";

// ─── Keywords (Arabic + English — comprehensive for search) ──
export const SITE_KEYWORDS = [
  // English name variations
  "Osama Almashad",
  "Osama Ayman Almashad",
  "Osama Ayman",
  "Almashad",
  "Osama",
  "Osama Al Mashad",
  "Osama El Mashad",
  "Osama Elmashad",
  // Arabic name variations
  "أسامة المشد",
  "أسامة أيمن المشد",
  "أسامة أيمن",
  "أسامة",
  "المشد",
  "اسامة المشد",
  "اسامة ايمن المشد",
  "اسامة ايمن",
  // Professional keywords
  "frontend developer",
  "UI/UX designer",
  "web developer",
  "React developer",
  "Next.js developer",
  "EdTech specialist",
  "مطور واجهات أمامية",
  "مطور مواقع",
  "مصمم تجربة مستخدم",
  "تكنولوجيا تعليم",
  // Brand
  "Donatella",
  "دوناتيلا",
  "portfolio",
  "بورتفوليو",
  // Location
  "Egypt",
  "مصر",
  "Damietta University",
  "جامعة دمياط",
];

// ─── Social Links ────────────────────────────────────────────
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/osama-almashad-9324b3340",
  facebook: "https://www.facebook.com/share/1E4cRWegwP/",
  youtube: "https://youtube.com/@osospiracy5468",
  whatsapp: "https://wa.me/201011868045",
  // behance: "", // Will be added later
};

// Array for JSON-LD sameAs
export const SAME_AS_LINKS = [
  SOCIAL_LINKS.linkedin,
  SOCIAL_LINKS.facebook,
  SOCIAL_LINKS.youtube,
];

// ─── OG Image ────────────────────────────────────────────────
export const OG_IMAGE_PATH = "/images/og-image.png";
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const OG_IMAGE_ALT =
  "Osama Almashad — أسامة المشد | Frontend Developer & UI/UX Expert";

// ─── Google Verification ─────────────────────────────────────
// Replace with your actual Google Search Console verification token
export const GOOGLE_SITE_VERIFICATION = "YOUR_GOOGLE_VERIFICATION_TOKEN";

// ─── Canonical URL Helper ────────────────────────────────────
export function canonicalUrl(path) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return SITE_URL;
  const withoutTrailing = normalized.endsWith("/")
    ? normalized.slice(0, -1)
    : normalized;
  return `${SITE_URL}${withoutTrailing}`;
}
