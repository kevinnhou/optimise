export const site = {
  author: {
    links: "https://github.com/kevinnhou",
    name: "Kevin Hou",
    tag: "kevinnhou",
  },
  category: "SoftwareApplication",
  datePublished: "",
  description: "Tokenisation Engine",
  keywords: [],
  links: {
    repo: "https://github.com/kevinnhou/optimise",
    url:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : `http://${process.env.VERCEL_PROJECT_PRODUCTION_URL || ""}`,
  },
  name: "Optimise",
  operatingSystem: "iOS, macOS, Linux, Android, Windows",
  rating: {
    bestRating: 0,
    ratingCount: 0,
    ratingValue: 0,
    worstRating: 0,
  },
  type: "UtilitiesApplication",
};
