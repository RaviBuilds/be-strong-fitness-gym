/**
 * Instagram configuration — official embed mode.
 *
 * PURE FRONTEND TEMPLATE: no Instagram API, no OAuth, no Meta tokens.
 * This is the default manual embed mode using public Instagram Reel URLs
 * and the official Instagram embed script.
 *
 * FUTURE CLIENT WORKFLOW:
 * - Clone template
 * - Edit this file only
 * - Replace profileUrl, handle, and Reel URLs with client's content
 * - Website updated
 *
 * No component modification required for standard customization.
 */

export interface InstagramReel {
  /** Stable identifier for React keys */
  id: string;
  /** Full Instagram Reel URL for official embed */
  url: string;
  /** Content type - future-proofed for potential post support */
  type: "reel";
}

export interface InstagramConfiguration {
  /**
   * Full Instagram profile URL. OPTIONAL: when a gym's official profile has
   * not been verified, leave it unset — the profile CTA and footer link are
   * then omitted rather than pointing at an invented or wrong account.
   */
  profileUrl?: string;
  /** Display handle with @ prefix. Optional for the same reason. */
  handle?: string;
  /** Reel embeds - render all supplied items, no artificial limit */
  items: InstagramReel[];
}

/**
 * BE STRONG FITNESS CLUB GYM Instagram configuration.
 *
 * docs/Gym-research.md INSTAGRAM.profile_url, INSTAGRAM.handle and
 * CONTACT.instagram_* are all `null` / NOT_FOUND, and INSTAGRAM.items is
 * `[]`: no verified official profile, handle or Reel URL exists. The
 * research warns that the generic handle @bestrongfitnessclubofficial cannot
 * be attributed to this Hyderabad gym, so it is NOT used. Nothing is
 * invented: `profileUrl` and `handle` are unset and `items` is empty, so the
 * existing architecture omits the Instagram section and the footer Instagram
 * link (components/sections/Instagram.tsx returns null for empty `items`).
 * OWNER QUESTION: confirm the official Instagram profile URL/handle and
 * supply approved Reel URLs; add them here and the section appears with no
 * component change.
 */
export const instagramConfig: InstagramConfiguration = {
  profileUrl: undefined,
  handle: undefined,
  items: [],
};
