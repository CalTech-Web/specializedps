export interface Hotspot {
  id: string;
  label: string;
  x: number;
  y: number;
  href: string;
}

export const bodyHotspots: Hotspot[] = [
  {
    id: "injectables",
    label: "Injectables",
    x: 52,
    y: 4,
    href: "/services/face",
  },
  {
    id: "brachioplasty",
    label: "Brachioplasty",
    x: 20,
    y: 42,
    href: "/services/body/arm-lift",
  },
  {
    id: "breast-augmentation",
    label: "Breast Augmentation",
    x: 45,
    y: 27,
    href: "/services/aesthetic-breast/augmentation",
  },
  {
    id: "tummy-tuck",
    label: "Tummy Tuck",
    x: 58,
    y: 58,
    href: "/services/body/tummy-tuck",
  },
  {
    id: "liposuction",
    label: "Liposuction",
    x: 42,
    y: 82,
    href: "/services/body/liposuction",
  },
];
