import type { WhyChooseUsConfiguration, WhyChooseUsItem } from "./types";

/**
 * Why Choose Us reasons. Mandatory section — always present.
 *
 * CONTENT RULE: this file states REASONS — how the services connect, what
 * sits alongside the training. It never repeats facility metrics, opening
 * hours or individual program names. Those facts have an owner already:
 *   - Section 01 (lib/about.ts) owns zones, amenities and hours;
 *   - Section 02 (lib/services.ts) owns individual programs and classes.
 *
 * BE STRONG FITNESS CLUB GYM — from docs/Gym-research.md (WHY_CHOOSE_US.*).
 * Each reason is PUBLICLY_REPORTED and worded as a reported fact, never as a
 * ranking, outcome or health/recovery promise (the research explicitly warns
 * against physiological claims for the steam bath). Owner verification is
 * required before final-client production.
 *
 * Not used: the "equipment and cleanliness praised in reviews" reason is
 * review sentiment (the Reviews section owns it), and the wheelchair-
 * accessible entrance is an amenity owned by Section 01.
 */
export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: "More than one way to train",
    description:
      "Strength, cardio, coached and group training are offered together at one address.",
  },
  {
    title: "Diet guidance alongside training",
    description:
      "Diet guidance and custom diet plans are available next to your workouts.",
  },
  {
    title: "A steam bath on site",
    description: "A steam bath facility is listed among the gym's amenities.",
  },
];

/**
 * Section 03 composition data — "The Roof".
 *
 * A single accent-colour poster: the eyebrow, one headline, and the reasons
 * above as equal columns. The headline is built only from the reported
 * reasons above; it is never a superlative. A clone edits this object and the
 * array, never the composition.
 */
export const whyChooseUsConfiguration: WhyChooseUsConfiguration = {
  eyebrow: "Why choose us",
  headline: "Training, diet guidance and a steam bath. One address.",
};
