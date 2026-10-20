import type { FaqItem } from "./types";

/**
 * Master FAQ data. Generated only from real, known business information.
 * If the answer to a potential question isn't actually known, don't create
 * that FAQ entry.
 *
 * BE STRONG FITNESS CLUB GYM — from docs/Gym-research.md (FAQ.*). Only the
 * entries the research answers are used. The three entries whose answer is
 * `null` (payment methods, changing rooms/showers/lockers, qualified
 * dietitian) are deliberately NOT created. No cancellation / freeze / trial /
 * joining-fee / guest / refund FAQ is added because the research supports
 * none of them, and the research's "confirm with the owner" caveats are kept
 * in the answers where they matter.
 *
 * Statuses: location is VERIFIED_OFFICIAL; everything else is
 * PUBLICLY_REPORTED, so answers are worded as "reported" and owner
 * verification is required before final-client production.
 */
export const faq: FaqItem[] = [
  {
    id: "01",
    question: "Where is Be Strong Fitness Club Gym located?",
    answer:
      "Talla Gadda Road, Haridas Nagar, Gayatri Nagar, Gudimalkapur, Hyderabad, Telangana 500006.",
  },
  {
    id: "02",
    question: "What are the gym's opening hours?",
    answer:
      "Monday to Saturday, 5:00 AM to 11:00 PM. Sunday, 6:00 AM to 1:00 PM. Confirm current hours with the gym before you visit.",
  },
  {
    id: "03",
    question: "What training services are listed?",
    answer:
      "Strength training, cardio training, personal training, Zumba, functional training and diet guidance with custom diet plans are reported. Class schedules are not published, so confirm them with the gym.",
  },
  {
    id: "04",
    question: "Does the gym have parking?",
    answer:
      "Car parking is reported. Confirm current availability and any restrictions with the gym.",
  },
  {
    id: "05",
    question: "Is the entrance wheelchair accessible?",
    answer:
      "A wheelchair-accessible entrance is reported. This does not cover every area of the gym, so confirm specifics with the team.",
  },
  {
    id: "06",
    question: "Does the gym have a steam bath?",
    answer:
      "A steam bath facility is reported. Access rules and any additional charges are not published, so ask the gym.",
  },
  {
    id: "07",
    question: "Are Zumba class timings published?",
    answer:
      "Zumba is listed, but class timings are not published. Ask the gym for the current schedule.",
  },
  {
    id: "08",
    question: "How much does membership cost?",
    answer:
      "Ask the team on WhatsApp or by phone for current plans, rates and joining fees.",
  },
];
