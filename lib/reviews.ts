import type { GoogleReviews } from "./types";

/**
 * Master Google Reviews data. Manually curated, never scraped at runtime.
 * Do not invent review content, reviewer names, ratings, or counts.
 *
 * BE STRONG FITNESS CLUB GYM — rating/reviewCount are PUBLICLY_REPORTED
 * (Google Business Profile evidence described in docs/Gym-research.md
 * REVIEWS: 4.3 / 233 reviews). The research supplies no calendar date for
 * that observation (`rating_read_on` NOT_FOUND).
 *
 * REVIEW-COUNT CONFLICT (preserved, not resolved): other directories list 229
 * (Nears.me) and 101 (Magicpin). The research recommends the Google Business
 * Profile figure as primary, so 233 is used. Owner / operator should re-read
 * the live Google count and date before launch.
 *
 * REVIEW TEXT: only ONE entry is a verbatim individual review — the Justdial
 * quote in REVIEWS.selected_reviews, reproduced exactly. The research gives
 * the reviewer as "Unnamed user (via Justdial)" and says not to attribute a
 * full reviewer name, so the label below is generic. It carries no star
 * rating (none supplied) and is NOT converted into a quantitative claim.
 * PERMISSION / CONSENT CHECK REQUIRED before prominent testimonial use, and
 * the owner must confirm the trainer name inside the quote may be published.
 * The other two research entries (Magicpin, Nears.me) are AGGREGATED
 * SUMMARIES, not verbatim customer reviews — the research says not to
 * present them as direct testimonials, so they are intentionally not used.
 * Negative review themes in the sentiment summary are allegations and are
 * not reproduced on the site.
 *
 * `tagline` restates the research's positive review themes (equipment
 * condition, trainer guidance, cleanliness) without quoting or naming
 * anyone, and without audited-condition claims.
 *
 * REVIEWS.google_profile_url is NOT_FOUND — no direct Google Business
 * Profile URL exists. Never invent one and never substitute a Justdial or
 * Magicpin URL for the Google review CTA. googleBusinessProfileUrl uses a
 * Google Maps search-by-name-and-address query (the same safe fallback
 * pattern as lib/business.ts mapUrl). No Place ID or profile slug is
 * invented.
 */
export const googleReviews: GoogleReviews = {
  rating: 4.3,
  reviewCount: 233,
  tagline:
    "Members' reviews mention trainer guidance, equipment condition and cleanliness.",
  googleBusinessProfileUrl:
    "https://www.google.com/maps/search/?api=1&query=Be+Strong+Fitness+Club+Gym+Talla+Gadda+Rd+Haridas+Nagar+Gayatri+Nagar+Gudimalkapur+Hyderabad+500006",
  // Fill these two once the owner supplies the Google "write a review" link
  // (Google Business Profile -> Get more reviews -> share link). The footer
  // trust card then adds a "Write a review" link and, if reviewQrSrc points at
  // a QR image of that link, the scan-to-review QR. Left unset = not rendered.
  reviewUrl: undefined,
  reviewQrSrc: undefined,
  reviews: [
    {
      name: "Sriram Anushka",
      text: "Such a good platform to pump up your body in being healthy and physically fit. I feel that there is no other gym like this in my locality. Very early you can find your results if you follow the diet plan accordingly. There are also the certificated trainers in this gym. The maintainance of the gym is well and good.",
    },
    {
      name: "Vishal M",
      text: "Loved it, Amazing place to workout , good Equipments , Peacefull area ,Sound system was amazing ..Well Maintained Place ..",
    },
    {
      name: "Basant Basawaraj",
      text: "Very nice gym and super maintenance owner also very polite person I'm very happy for joining this gym thank you.. Narsing Anna😎",
    },
    {
      name: "Navneeth Tallamraju",
      text: "Staff very friendly, nice equipments also available. Professional service guaranteed!!",
    },
  ],
};
