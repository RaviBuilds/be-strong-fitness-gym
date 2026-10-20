import type { Business } from "./types";

/**
 * Master business data. Public business information only — never put API
 * keys, tokens, or server credentials here.
 *
 * BE STRONG FITNESS CLUB GYM (Gudimalkapur, Hyderabad) — populated from
 * docs/Gym-research.md. VERIFIED_OFFICIAL: name, address line, locality,
 * city, state. PUBLICLY_REPORTED (owner verification required before
 * final-client production): phone, WhatsApp number, postal code, hours,
 * description.
 *
 * TAGLINE: the research found no tagline (BUSINESS.tagline NOT_FOUND). The
 * template requires a string (Footer, Final CTA headline, kinetic strip), so
 * the line below is a plain factual statement of reported services and the
 * verified locality — not a claim, ranking or superlative. Replace if the
 * owner supplies a real tagline.
 *
 * HOURS: Mon–Sat 05:00 AM – 11:00 PM and Sunday 06:00 AM – 01:00 PM, as
 * reported (Nears.me / Justdial, with the 11:00 PM closing corroborated by
 * the Google Business Profile). No source conflict is documented, but the
 * research snapshot has no date — owner confirmation recommended.
 *
 * WHATSAPP: CONTACT.whatsapp (+91 8796576868) is a separate number from the
 * main phone (+91 93982 27763). Both are PUBLICLY_REPORTED.
 *
 * EMAIL / WEBSITE: not found. `email` is omitted. bestrongfitness.in belongs
 * to an unrelated gym in Kerala and must never be linked here.
 *
 * LANDMARK: not found — omitted.
 *
 * mapUrl: no verified Google Maps / Place URL was found in research
 * (LOCATION.map_url NOT_FOUND). This is a standard Google Maps
 * search-by-name-and-address URL built from the VERIFIED_OFFICIAL address
 * text. No latitude, longitude or Place ID has been invented.
 */
export const business: Business = {
  name: "Be Strong Fitness Club Gym",
  tagline: "Strength and cardio training in Gudimalkapur.",
  description:
    "Be Strong Fitness Club Gym is a neighbourhood gym in Gudimalkapur, Hyderabad, with strength and cardio equipment, personal training, Zumba, functional training, diet guidance and a steam bath.",
  phone: "+919398227763",
  whatsapp: {
    number: "+918796576868",
    message: "Hi, I'd like to know more about membership and training at Be Strong Fitness Club Gym, Gudimalkapur.",
  },
  email: undefined,
  address: {
    addressLine: "Talla Gadda Rd, Haridas Nagar, Gayatri Nagar",
    locality: "Gudimalkapur",
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "500006",
    landmark: undefined,
  },
  hours: [
    { day: "Monday", open: "05:00 AM", close: "11:00 PM" },
    { day: "Tuesday", open: "05:00 AM", close: "11:00 PM" },
    { day: "Wednesday", open: "05:00 AM", close: "11:00 PM" },
    { day: "Thursday", open: "05:00 AM", close: "11:00 PM" },
    { day: "Friday", open: "05:00 AM", close: "11:00 PM" },
    { day: "Saturday", open: "05:00 AM", close: "11:00 PM" },
    { day: "Sunday", open: "06:00 AM", close: "01:00 PM" },
  ],
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Be+Strong+Fitness+Club+Gym+Talla+Gadda+Rd+Haridas+Nagar+Gayatri+Nagar+Gudimalkapur+Hyderabad+500006",
  // Prompt A — PRIMARY brand colour "Electric Mint Green" #32E6B5
  // (logo-extracted). The authentic hex is entered here exactly once and is
  // never altered; app/globals.css derives the UI fill/hover/active/soft/
  // border variants from it, and lib/color.ts picks the dark foreground for
  // fills because white on this light mint fails WCAG AA.
  accentColor: "#32E6B5",
  // Prompt A — SECONDARY brand colour "Athletic Amber" #FFC247 (recommended
  // support colour: eyebrows, metadata, technical marks, focus). Safe as
  // small text on the near-black base; fills carry dark text
  // (--brand-secondary-foreground); light surfaces use the derived ink
  // variant — never this value raw.
  secondaryColor: "#FFC247",
};
