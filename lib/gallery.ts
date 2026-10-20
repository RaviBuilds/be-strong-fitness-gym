import type { GalleryItem } from "./types";

/**
 * Master gallery data. This array is authoritative for display order —
 * filename order is not a data dependency. Every item requires alt text
 * describing the actual image.
 *
 * BE STRONG FITNESS CLUB GYM — operator-supplied facility photographs in
 * public/assets/gallery/, renamed to the asset-contract convention
 * (be-strong-fitness-gudimalkapur-gallery-<subject>.jpg). Alt text describes
 * only what is visible in each frame. Not listed (files kept on disk):
 * fff.jpg (shows another gym's "Max Body Fitness Pro" signage) and w.jpg
 * (personal mirror selfie of an identifiable member — consent unverified).
 *
 * ORDER is editorial: arrival and reception, training and strength floor,
 * cardio, functional space, then the overall interior.
 *
 * No claim, count, award or superlative is encoded here.
 */
const GALLERY = "/assets/gallery/be-strong-fitness-gudimalkapur-gallery";

export const galleryItems: GalleryItem[] = [
  {
    src: `${GALLERY}-reception-desk.jpg`,
    alt: "Reception desk with the Be Strong Fitness Club sign at Be Strong Fitness Club Gym, Gudimalkapur",
  },
  {
    src: `${GALLERY}-entrance.jpg`,
    alt: "Glass entrance and reception at Be Strong Fitness Club Gym, Gudimalkapur",
  },
  {
    src: `${GALLERY}-reception-lounge.jpg`,
    alt: "Reception desk and seating area at Be Strong Fitness Club Gym, Gudimalkapur",
  },
  {
    src: `${GALLERY}-training-floor.jpg`,
    alt: "Training floor with machines and a wall graphic at Be Strong Fitness Club Gym, Gudimalkapur",
  },
  {
    src: `${GALLERY}-machine-floor.jpg`,
    alt: "Strength machines on a wood-finish floor at Be Strong Fitness Club Gym, Gudimalkapur",
  },
  {
    src: `${GALLERY}-free-weights-bench-area.jpg`,
    alt: "Benches and racks in the free-weight area at Be Strong Fitness Club Gym, Gudimalkapur",
  },
  {
    src: `${GALLERY}-dumbbell-rack.jpg`,
    alt: "Dumbbell rack and mirror at Be Strong Fitness Club Gym, Gudimalkapur",
  },
  {
    src: `${GALLERY}-bench-area.jpg`,
    alt: "Benches on the coloured gym floor at Be Strong Fitness Club Gym, Gudimalkapur",
  },
  {
    src: `${GALLERY}-bench-exercise.jpg`,
    alt: "Member exercising on a bench station at Be Strong Fitness Club Gym, Gudimalkapur",
  },
  {
    src: `${GALLERY}-elliptical-trainers.jpg`,
    alt: "Elliptical cross-trainers at Be Strong Fitness Club Gym, Gudimalkapur",
  },
  {
    src: `${GALLERY}-treadmills.jpg`,
    alt: "Row of treadmills at Be Strong Fitness Club Gym, Gudimalkapur",
  },
  {
    src: `${GALLERY}-cardio-floor.jpg`,
    alt: "Treadmills and elliptical trainers in the cardio area at Be Strong Fitness Club Gym, Gudimalkapur",
  },
  {
    src: `${GALLERY}-cardio-area.jpg`,
    alt: "Cardio equipment area at Be Strong Fitness Club Gym, Gudimalkapur",
  },
  {
    src: `${GALLERY}-cardio-spin-bikes.jpg`,
    alt: "Spin bikes and treadmills on the coloured floor at Be Strong Fitness Club Gym, Gudimalkapur",
  },
  {
    src: `${GALLERY}-spin-bikes.jpg`,
    alt: "Row of spin bikes at Be Strong Fitness Club Gym, Gudimalkapur",
  },
  {
    src: `${GALLERY}-spin-bike-view.jpg`,
    alt: "View from a spin bike at Be Strong Fitness Club Gym, Gudimalkapur",
  },
  {
    src: `${GALLERY}-functional-area.jpg`,
    alt: "Functional training area with a tyre and plyo boxes at Be Strong Fitness Club Gym, Gudimalkapur",
  },
  {
    src: `${GALLERY}-functional-plyo-boxes.jpg`,
    alt: "Plyo boxes, kettlebells and a tyre on the functional floor at Be Strong Fitness Club Gym, Gudimalkapur",
  },
  {
    src: `${GALLERY}-functional-equipment.jpg`,
    alt: "Medicine balls, kettlebells and a punching bag at Be Strong Fitness Club Gym, Gudimalkapur",
  },
  {
    src: `${GALLERY}-punching-bag-area.jpg`,
    alt: "Punching bag, spin bikes and treadmills at Be Strong Fitness Club Gym, Gudimalkapur",
  },
  {
    src: "/assets/gallery/be-strong-fitness-gudimalkapur-about-gym-interior.jpg",
    alt: "Be Strong Fitness Club Gym interior with a red-walled training floor, Gudimalkapur",
  },
];

