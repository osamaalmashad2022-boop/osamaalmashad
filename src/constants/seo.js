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
  // ── Full name forms ──
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
  "Usama El Mashad",
  "Usama Elmashad",
  "Usama Al-Mashad",
  // Lowercase / search-friendly (no-space, common Google queries)
  "osamaalmashad",
  "osama almashad",
  "osama al mashad",
  "osama el mashad",
  "osama elmeshad",
  "usama almashad",

  // ── Partial / Incomplete fragments (autocomplete catches) ──
  "osam almashad",
  "osama almas",
  "osama almash",
  "osama mashad",
  "osama mshad",
  "osama meshad",
  "osama lmashad",
  "osama alm",
  "almashd",
  "elmeshd",
  "elmashd",
  "almashadd",
  "almashad osama",
  "mashad osama",
  "meshad osama",

  // ── Common misspellings & phonetic variations ──
  "Osamah Almashad",
  "Osamah Elmeshad",
  "Osamma Almashad",
  "Ossama Almashad",
  "Ossama Elmeshad",
  "Osama Almashadd",
  "Osama Almshad",
  "Osama Almeshad",
  "Osama Almashhad",
  "Osama Elmashhad",
  "Osama Almashd",
  "Osama Elmashd",
  "Osama Elmeshd",
  "Osama Almchad",
  "Osama Almashad tech",

  // ── Franco-Arabic / Arabizi (how Egyptians type in Latin) ──
  "osama el mash2d",
  "osama el mesh2d",
  "osama el mashad",
  "osama el meshad",
  "osama ayman el mashad",
  "osama ayman el meshad",
];

export const NAME_VARIATIONS_AR = [
  // ── Standard spelling ──
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

  // ── Extra Arabic partial & typo combos ──
  "أسامة ايمن المشد",       // mix of hamza & no-hamza
  "أسامه ايمن المشد",       // ه + no-hamza ايمن
  "اسامة أيمن المشد",       // no-hamza on first name only
  "اسامه أيمن المشد",       // ه on first + hamza middle
  "أسامة المشّد",           // with shadda (some people add it)
  "اسامة المشّد",
  "أسامه المشّد",
  "اسامه المشّد",
  "أُسامة المشد",           // with damma on alef
  "أسامة المُشد",           // with damma on meem
  "المشد أسامة",            // reversed order
  "المشد اسامة",
  "المشد أسامة أيمن",
  "أسامة م",               // very short partial
  "أسامة المش",             // partial family name
  "اسامة الم",
  "اسامه الم",
  "اسامة المش",
  "اسامه المش",
  "مشد أسامة",             // without ال
  "مشد اسامة",
  "أسامة مشد",
  "اسامة مشد",
];

// ─── Keywords (Arabic + English — comprehensive for search) ──
export const SITE_KEYWORDS = [
  // ═══ All name variations ═══
  ...NAME_VARIATIONS_EN,
  ...NAME_VARIATIONS_AR,

  // ═══ Professional keywords — English ═══
  "frontend developer",
  "front end developer",
  "front-end developer",
  "UI/UX designer",
  "UI UX designer",
  "web developer",
  "React developer",
  "Next.js developer",
  "nextjs developer",
  "EdTech specialist",
  "edtech specialist",
  "web designer",
  "JavaScript developer",
  "JS developer",
  "HTML CSS developer",
  "freelance web developer",
  "freelance frontend developer",
  "freelance React developer",
  "portfolio developer",
  "creative developer",
  "fullstack developer",

  // ═══ Professional + Location keywords ═══
  "frontend developer Egypt",
  "front end developer Egypt",
  "web developer Egypt",
  "web developer Damietta",
  "web developer Domyat",
  "React developer Egypt",
  "React developer Damietta",
  "Next.js developer Egypt",
  "freelance developer Egypt",
  "freelance web developer Egypt",
  "freelance developer Damietta",
  "UI UX designer Egypt",
  "web designer Egypt",
  "web designer Damietta",
  "EdTech Egypt",
  "edtech specialist Egypt",
  "مطور ويب مصري",
  "مطور مواقع مصر",
  "مطور مواقع مصري",
  "مطور ويب دمياط",
  "مطور مواقع دمياط",
  "مبرمج مواقع مصري",
  "مبرمج مواقع دمياط",
  "مصمم مواقع مصري",
  "مصمم مواقع دمياط",
  "مصمم مواقع مصر",

  // ═══ Professional keywords — Arabic ═══
  "مطور واجهات أمامية",
  "مطور واجهات امامية",
  "مطور فرونت اند",
  "مطور مواقع",
  "مطور ويب",
  "مصمم تجربة مستخدم",
  "مصمم مواقع",
  "تكنولوجيا تعليم",
  "تكنولوجيا التعليم",
  "تكنولوجيا التعليم مصر",
  "تكنولوجيا التعليم دمياط",
  "مبرمج مواقع",
  "مبرمج ويب",
  "مبرمج واجهات",
  "مصمم واجهات",
  "مصمم UI",
  "مصمم UX",
  "مطور React",
  "مطور ريأكت",
  "مطور ريأكت مصري",
  "مطور نكست جي اس",
  "مطور Next.js",

  // ═══ Skill-specific keywords ═══
  "React portfolio",
  "Next.js portfolio",
  "TailwindCSS developer",
  "Three.js developer",
  "Unity 3D developer",
  "responsive web design",
  "mobile-first developer",
  "interactive web developer",
  "modern web developer",
  "creative web design",

  // ═══ Brand ═══
  "Donatella",
  "donatella",
  "دوناتيلا",
  "دوناتلا",            // common Arabic misspelling
  "دونتيلا",            // another Arabic misspelling
  "donatela",            // common English misspelling
  "donatlla",
  "Nexora",
  "Nexora Platform",
  "nexora platform",
  "nexora",
  "نيكسورا",
  "نكسورا",             // without ي
  "نيكسوره",            // with ه
  "neksoura",            // phonetic
  "neksora",
  "zednyskill",
  "zednyskill.app",
  "portfolio",
  "بورتفوليو",
  "بورتفليو",           // common Arabic misspelling
  "osama almashad portfolio",
  "osama portfolio",
  "osama elmeshad portfolio",
  "أسامة المشد بورتفوليو",
  "موقع أسامة المشد",

  // ═══ Location ═══
  "Egypt",
  "مصر",
  "Damietta",
  "Dumyat",
  "Domyat",
  "Dimyat",
  "دمياط",
  "دميط",               // common typo
  "Damietta University",
  "Damietta university",
  "جامعة دمياط",
  "جامعه دمياط",         // with ه
  "كلية التربية دمياط",
  "كلية التربية جامعة دمياط",
  "كليه التربيه دمياط",   // with ه
  "تكنولوجيا التعليم جامعة دمياط",

  // ═══ Search-intent keywords (what people actually type) ═══
  "osama almashad website",
  "osama almashad site",
  "osama almashad tech",
  "osama almashad blog",
  "osama almashad projects",
  "osama almashad contact",
  "osama almashad cv",
  "osama almashad resume",
  "osama almashad linkedin",
  "osama almashad facebook",
  "osama almashad youtube",
  "osama elmeshad website",
  "osama elmeshad portfolio",
  "osama elmeshad tech",
  "موقع أسامة المشد",
  "موقع اسامة المشد",
  "موقع أسامه المشد",
  "بورتفوليو أسامة المشد",
  "بورتفوليو اسامة المشد",
  "سي في أسامة المشد",
  "أسامة المشد مطور",
  "اسامة المشد مطور",
  "أسامة المشد مبرمج",
  "اسامة المشد مبرمج",
  "أسامة المشد دوناتيلا",
  "اسامة المشد دوناتيلا",
  "أسامة المشد نيكسورا",
  "who is osama almashad",
  "hire osama almashad",
  "osama almashad freelance",
  "osama almashad developer",
  "osama almashad web developer",
  "osama almashad frontend",
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
