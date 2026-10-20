import type { SEOConfiguration } from "./types";

/**
 * Master SEO configuration. Consumed once, centrally, by app/layout.tsx's
 * Metadata API. Never duplicate these values inside page/section
 * components.
 *
 * BE STRONG FITNESS CLUB GYM SEO configuration, from docs/Gym-research.md
 * (SEO.title_candidate / description_candidate / natural_location_wording —
 * INFERRED from verified business data). The description is shortened to the
 * reported services and drops the research's "confirm current schedules"
 * caveat, which is an internal note rather than public copy.
 *
 * canonical is a placeholder domain pending the client's real production
 * URL: the research found NO website for the Hyderabad gym, and
 * bestrongfitness.in belongs to an unrelated Kerala gym, so it must not be
 * used here.
 */
export const seo: SEOConfiguration = {
  title: "Be Strong Fitness Club Gym | Gym in Gudimalkapur, Hyderabad",
  description:
    "Be Strong Fitness Club Gym in Gudimalkapur, Hyderabad offers strength and cardio training, personal training, Zumba, functional training, diet guidance and a steam bath.",
  canonical: "https://example.com",
  ogImage: undefined,
  robots: "index, follow",
};
