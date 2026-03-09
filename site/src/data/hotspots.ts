export interface Hotspot {
  id: string;
  label: string;
  x: number;
  y: number;
  href: string;
}

export const bodyHotspots: Hotspot[] = [
  { id: "face", label: "Face", x: 50, y: 10, href: "/services/face" },
  {
    id: "breast",
    label: "Breast",
    x: 46,
    y: 28,
    href: "/services/aesthetic-breast",
  },
  {
    id: "arms",
    label: "Arms",
    x: 26,
    y: 34,
    href: "/services/body/arm-lift",
  },
  {
    id: "abdomen",
    label: "Abdomen",
    x: 50,
    y: 42,
    href: "/services/body/tummy-tuck",
  },
  {
    id: "buttocks",
    label: "Buttocks",
    x: 56,
    y: 52,
    href: "/services/body/bbl",
  },
  {
    id: "thighs",
    label: "Thighs",
    x: 42,
    y: 65,
    href: "/services/body/thigh-lift",
  },
];
