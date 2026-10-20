import type { Service } from "./types";

/**
 * Master services data. Only services with verified:true render on the live
 * site. A service can exist here and remain disabled — this is the direct
 * mechanism that prevents an unverified/discontinued program from silently
 * appearing on a gym website.
 *
 * BE STRONG FITNESS CLUB GYM — the 7 programs documented in
 * docs/Gym-research.md (PROGRAMS.*). Every entry is PUBLICLY_REPORTED;
 * owner verification of current availability is required before
 * final-client production. Descriptions stay within what the research
 * reports: no schedule, trainer, credential, outcome or health claim is added.
 *
 * NOT PUBLISHED: CrossFit. PROGRAMS.crossfit is NOT_FOUND (an uncorroborated,
 * low-confidence directory mention) and the research says not to publish it,
 * so there is deliberately no CrossFit entry — even `verified: false` — in
 * this file.
 *
 * STABLE IDs: `strength-training`, `conditioning` and `personal-training`
 * are cross-referenced by id from the frozen educational module
 * lib/training-intelligence.ts (`programId`, see
 * components/sections/trainingLoadout.ts). These three ids must not be
 * renamed even though the gym-facing program name differs. Here
 * `conditioning` is carried by "Functional training" (the research's
 * conditioning-category program).
 *
 * Images are placeholders occupying their final filenames
 * (docs/MASTER-GYM-ASSET-CONTRACT.md); the operator replaces the files
 * in place with real, operator-approved Be Strong Fitness Club Gym
 * photography — no code change.
 */
const ASSET = "/assets/programs/be-strong-fitness-gudimalkapur-program";

export const services: Service[] = [
  {
    id: "strength-training",
    name: "Strength Training",
    description:
      "Strength workouts using free weights and resistance machines.",
    icon: "strength",
    image: `${ASSET}-strength-training.jpg`,
    verified: true,
    ctaLabel: "Ask about strength training",
    ctaHref: undefined,
  },
  {
    id: "personal-training",
    name: "Personal Training",
    description:
      "Personal training with individualized workout guidance.",
    icon: "coaching",
    image: `${ASSET}-personal-training.jpg`,
    verified: true,
    ctaLabel: "Ask about personal training",
    ctaHref: undefined,
  },
  {
    id: "conditioning",
    name: "Functional Training",
    description: "Functional training sessions.",
    icon: "equipment",
    image: `${ASSET}-functional-training.jpg`,
    verified: true,
    ctaLabel: "Ask about functional training",
    ctaHref: undefined,
  },
  {
    id: "zumba",
    name: "Zumba",
    description: "Dance-fitness Zumba classes.",
    icon: "cardio",
    image: `${ASSET}-zumba.jpg`,
    verified: true,
    ctaLabel: "Ask about Zumba",
    ctaHref: undefined,
  },
  {
    id: "cardio-training",
    name: "Cardio Training",
    description: "Cardio equipment, including treadmills.",
    icon: "cardio",
    image: `${ASSET}-cardio-training.jpg`,
    verified: true,
    ctaLabel: "Ask about cardio training",
    ctaHref: undefined,
  },
  {
    id: "diet-guidance",
    name: "Diet Guidance",
    description: "Diet guidance and custom diet plans.",
    icon: "coaching",
    image: `${ASSET}-diet-guidance.jpg`,
    verified: true,
    ctaLabel: "Ask about diet guidance",
    ctaHref: undefined,
  },
  {
    id: "steam-bath",
    name: "Steam Bath",
    description: "A steam bath facility on site.",
    icon: "floor",
    image: `${ASSET}-steam-bath.jpg`,
    verified: true,
    ctaLabel: "Ask about the steam bath",
    ctaHref: undefined,
  },
];
