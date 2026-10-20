import type { AboutConfiguration, BusinessHours } from "./types";

/**
 * Section 01 — facility / training-floor story content.
 *
 * Customizable per gym (labels, image, attributes, headline). The narrative
 * paragraph is deliberately NOT duplicated here: Section 01 renders
 * `business.description`, so the facility description has exactly one source
 * of truth.
 *
 * Source-First rules that apply to this file:
 * - A zone or attribute with `verified: false` does not render. Leave it in
 *   the file as documentation of what was checked and found absent.
 * - Never add a claim, statistic, equipment count, award or superlative here
 *   to make the section look fuller. The composition carries the density.
 *
 * BE STRONG FITNESS CLUB GYM — populated from docs/Gym-research.md
 * (ABOUT.zones, ABOUT.attributes). Everything rendered below is
 * PUBLICLY_REPORTED (directory listings / Google Business Profile evidence
 * summarized in the research); owner verification is required before
 * final-client production. The research supplies NO station counts, floor
 * counts or equipment brands, so no metric is carried here.
 *
 * Not rendered (checked, not verifiable) — kept with `verified: false`:
 *   - "air-conditioning": CONFLICTING_SOURCES (AC reported present, with
 *     repeated complaints about performance). Do not advertise until the
 *     owner confirms current condition.
 *   - "clean": review sentiment, not an audited facility fact.
 *   - "changing-rooms" / "lockers": NOT_FOUND in the research.
 */
export const aboutConfiguration: AboutConfiguration = {
  index: "01",
  eyebrow: "About the gym",
  headlineLines: ["The floor behind", "the brand."],
  accentLastLine: true,
  image: {
    src: "/assets/about/be-strong-fitness-gudimalkapur-about-gym-interior.jpg",
    alt: "Be Strong Fitness Club Gym training floor in Gudimalkapur, Hyderabad",
  },
  imageLabel: "Training floor",
  frameLabel: "Facility",
  zonesLabel: "Training environment",
  attributesLabel: "Floor & support",
  scheduleLabel: "Opening schedule",
  zones: [
    {
      id: "strength",
      label: "Strength training",
      detail: "Free weights and resistance machines.",
      icon: "strength",
      verified: true,
    },
    {
      id: "cardio",
      label: "Cardio area",
      detail: "Cardio equipment, including treadmills.",
      icon: "cardio",
      verified: true,
    },
    {
      id: "group-training",
      label: "Group training",
      detail: "Zumba classes.",
      icon: "floor",
      verified: true,
    },
    {
      id: "functional-training",
      label: "Functional training",
      detail: "Functional training sessions.",
      icon: "equipment",
      verified: true,
    },
    {
      id: "steam-bath",
      label: "Steam bath",
      detail: "On-site steam bath facility.",
      icon: "floor",
      verified: true,
    },
  ],
  attributes: [
    { id: "accessibility", label: "Wheelchair-accessible entrance", verified: true },
    { id: "parking", label: "Car parking", verified: true },
    { id: "wifi", label: "Complimentary Wi-Fi", verified: true },
    { id: "reception", label: "Reception desk", verified: true },
    { id: "nutrition-consultation", label: "Diet guidance and custom diet plans", verified: true },
    // CONFLICTING_SOURCES / INFERRED / NOT_FOUND — kept as the record of what
    // was checked, never rendered.
    { id: "air-conditioning", label: "Air-conditioned training environment", verified: false },
    { id: "clean", label: "Clean, well-maintained gym", verified: false },
    { id: "changing-rooms", label: "Changing rooms and showers", verified: false },
    { id: "lockers", label: "Secure lockers", verified: false },
  ],
  showSchedule: true,
};

/** One grouped opening window, e.g. `Mon–Fri / 05:00 AM – 11:00 PM`. */
export interface ScheduleWindow {
  label: string;
  value: string;
}

/**
 * Beyond this many distinct windows the readout stops being a compact
 * technical module and starts being a timetable, so Section 01 renders
 * nothing and the full hours stay with the location section instead.
 */
const MAX_SCHEDULE_GROUPS = 3;

function shortDay(day: string): string {
  return day.trim().slice(0, 3);
}

/**
 * Collapse a week of opening hours into consecutive day ranges that share the
 * same open/close window. Derived, never authored: the caller passes
 * `business.hours`, so Section 01 can only ever show hours that already exist
 * in lib/business.ts (and therefore in the LocalBusiness structured data) —
 * it cannot invent a schedule. Hours are taken as an explicit argument rather
 * than imported here so this module stays pure and directly testable.
 */
export function scheduleWindows(hours: BusinessHours[]): ScheduleWindow[] {
  if (hours.length === 0) return [];

  const groups: { days: string[]; open: string; close: string }[] = [];

  for (const entry of hours) {
    if (!entry.day || !entry.open || !entry.close) return [];
    const current = groups[groups.length - 1];
    if (current && current.open === entry.open && current.close === entry.close) {
      current.days.push(entry.day);
    } else {
      groups.push({ days: [entry.day], open: entry.open, close: entry.close });
    }
  }

  if (groups.length > MAX_SCHEDULE_GROUPS) return [];

  return groups.map((group) => ({
    label:
      group.days.length === 1
        ? shortDay(group.days[0])
        : `${shortDay(group.days[0])}\u2013${shortDay(group.days[group.days.length - 1])}`,
    value: `${group.open} \u2013 ${group.close}`,
  }));
}
