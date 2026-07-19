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
  "Osama Almashad | أسامة المشد — Entrepreneur & Web Developer";
export const SITE_TITLE_TEMPLATE = "%s | Osama Almashad - أسامة المشد";
export const SITE_DESCRIPTION =
  "Official portfolio of Osama Ayman Almashad (أسامة أيمن المشد / Osama Ayman Elmeshad) — Entrepreneur, Frontend Developer & EdTech Specialist from Damietta University, Egypt. Founder of Donatella. Building stunning web experiences with React & Next.js.";
export const SITE_DESCRIPTION_AR =
  "الموقع الرسمي لأسامة أيمن المشد (Osama Ayman Almashad) — رائد أعمال، مطور ويب، ومتخصص تكنولوجيا تعليم من جامعة دمياط. مؤسس دوناتيلا. أبني تجارب رقمية مبهرة باستخدام React و Next.js.";

// ─── All Name Variations (used across Schema + keywords) ─────
export const NAME_VARIATIONS_EN = [
  "Osama Almashad",
  "Osama Ayman Almashad",
  "Osama Ayman",
  "Almashad",
  "Osama",
  "Osama Al Mashad",
  "Osama El Mashad",
  "Osama Elmashad",
  // Elmeshad variants (critical — requested by user)
  "Osama Ayman Elmeshad",
  "Osama Elmeshad",
  "Osama El Meshad",
  "Elmeshad",
  "Elmashad",
  // Hyphenated variants
  "Osama Al-Mashad",
  "Osama El-Mashad",
  "Osama Al-Meshad",
  "Osama El-Meshad",
  // Usama alternative transliteration
  "Usama",
  "Usama Almashad",
  "Usama Ayman Almashad",
  "Usama Elmeshad",
  "Usama Ayman Elmeshad",
  "Usama Al Mashad",
  // Lowercase / search-friendly
  "osamaalmashad",
  "osama almashad",
];

export const NAME_VARIATIONS_AR = [
  "أسامة المشد",
  "أسامة أيمن المشد",
  "أسامة أيمن",
  "أسامة",
  "المشد",
  // Without hamza (common typo in search)
  "اسامة المشد",
  "اسامة ايمن المشد",
  "اسامة ايمن",
  // With ه instead of ة (very common in search)
  "أسامه المشد",
  "أسامه أيمن المشد",
  "أسامه أيمن",
  "اسامه المشد",
  "اسامه ايمن المشد",
];

// ─── Keywords (Arabic + English — comprehensive for search) ──
export const SITE_KEYWORDS = [
  // All English name variations
  ...NAME_VARIATIONS_EN,
  // All Arabic name variations
  ...NAME_VARIATIONS_AR,
  // Professional keywords — English
  "frontend developer",
  "front end developer",
  "UI/UX designer",
  "web developer",
  "React developer",
  "Next.js developer",
  "EdTech specialist",
  "web designer",
  "JavaScript developer",
  // Professional + Location keywords
  "frontend developer Egypt",
  "web developer Egypt",
  "web developer Damietta",
  "React developer Egypt",
  "مطور ويب مصري",
  "مطور مواقع مصر",
  "EdTech Egypt",
  // Professional keywords — Arabic
  "مطور واجهات أمامية",
  "مطور مواقع",
  "مطور ويب",
  "مصمم تجربة مستخدم",
  "مصمم مواقع",
  "تكنولوجيا تعليم",
  "تكنولوجيا التعليم",
  "تكنولوجيا التعليم مصر",
  "مبرمج مواقع",
  // Brand
  "Donatella",
  "دوناتيلا",
  "Nexora",
  "Nexora Platform",
  "نيكسورا",
  "portfolio",
  "بورتفوليو",
  "osama almashad portfolio",
  "osama portfolio",
  // Location
  "Egypt",
  "مصر",
  "Damietta",
  "دمياط",
  "Damietta University",
  "جامعة دمياط",
  // Search-intent keywords
  "osama almashad website",
  "osama almashad tech",
  "موقع أسامة المشد",
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
  "Osama Almashad — أسامة المشد | Entrepreneur & Web Developer";

// ─── Google Verification ─────────────────────────────────────
// Replace with your actual Google Search Console verification token
export const GOOGLE_SITE_VERIFICATION =
  process.env.GOOGLE_SITE_VERIFICATION ||
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
  "";

// ─── Bing Verification ───────────────────────────────────────
// Replace with your actual Bing Webmaster Tools verification token
export const BING_SITE_VERIFICATION =
  process.env.BING_SITE_VERIFICATION ||
  process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ||
  "";

// ─── Canonical URL Helper ────────────────────────────────────
export function canonicalUrl(path) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return SITE_URL;
  const withoutTrailing = normalized.endsWith("/")
    ? normalized.slice(0, -1)
    : normalized;
  return `${SITE_URL}${withoutTrailing}`;
}
