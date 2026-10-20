import type { SocialConfiguration } from "./types";

/**
 * Master social/Instagram data. Curated content only — no live authenticated
 * Instagram API dependency in Factory v1. An empty posts array is valid and
 * renders a "Follow us on Instagram" fallback CTA, never a broken widget.
 *
 * NOTE: `social` below is not currently imported by any component — the live
 * Instagram section (components/sections/Instagram.tsx) reads from
 * lib/instagram.ts. See docs/gym-customization-manifest.md §9.1
 * ("lib/social.ts is orphaned"). Left in sync with lib/instagram.ts for data
 * consistency in case a future section consumes this module; not a live
 * rendering path. `socialLinks` further down IS live (footer icons).
 *
 * BE STRONG FITNESS CLUB GYM — docs/Gym-research.md INSTAGRAM.handle and
 * INSTAGRAM.profile_url are NOT_FOUND, so both fields are empty strings here
 * (the type requires strings). See lib/instagram.ts for the full note.
 */
export const social: SocialConfiguration = {
  instagramHandle: "",
  instagramUrl: "",
  posts: [],
};

/**
 * Footer social icons (Facebook, X) shown next to Instagram.
 *
 * SOURCE-FIRST: no handle or username is invented.
 *  - Facebook: CONTACT.facebook_url is NOT_FOUND; the only result was a
 *    generic Facebook page the research could not attribute to this branch.
 *    The icon therefore keeps the network homepage until the owner confirms
 *    the official page (owner question in the research).
 *  - X: no profile supplied; network homepage.
 *  - Justdial: the research lists no Justdial listing for this gym that can
 *    be verified (the Justdial URLs in SOURCE_LOG are review-extraction pages
 *    or other businesses), so no Justdial link is configured.
 *
 * Instagram is configured separately in lib/instagram.ts (it also drives the
 * Reel embeds) and is not repeated here.
 */
export interface SocialLink {
  id: "facebook" | "justdial" | "x";
  /** Accessible name for the icon, e.g. "Facebook". */
  label: string;
  /** Profile URL. Defaults to the network homepage until the gym's own is set. */
  href: string;
}

export const socialLinks: SocialLink[] = [
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com" },
  { id: "x", label: "X", href: "https://x.com" },
];
