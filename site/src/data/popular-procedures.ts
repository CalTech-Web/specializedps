export interface PopularProcedure {
  id: string;
  name: string;
  tabLabel: string;
  description: string;
  image: string;
  href: string;
}

export const popularProcedures: PopularProcedure[] = [
  {
    id: "breast-augmentation",
    name: "Breast Augmentation",
    tabLabel: "Breast Augmentation",
    description:
      "Breast augmentation at Specialized Plastic Surgery enhances the size, shape, and symmetry of your breasts using silicone or saline implants tailored to your body and goals. Whether you are looking for a subtle enhancement or a more dramatic transformation, our board-certified surgeons use advanced techniques to deliver natural, beautiful results with minimal downtime.",
    image: "/images/procedures/breast-augmentation-tab.jpg",
    href: "/services/aesthetic-breast/augmentation",
  },
  {
    id: "breast-reduction",
    name: "Breast Reduction",
    tabLabel: "Breast Reduction",
    description:
      "A breast reduction at Specialized Plastic Surgery removes excess breast tissue, fat, and skin to achieve a more proportionate figure and relieve discomfort. Our surgeons specialize in techniques that reduce size while maintaining a natural, lifted appearance, helping you feel more comfortable and confident in your body.",
    image: "/images/procedures/breast-reduction-tab.jpg",
    href: "/services/aesthetic-breast/reduction",
  },
  {
    id: "mommy-makeover",
    name: "Mommy Makeover",
    tabLabel: "Mommy Makeover",
    description:
      "A mommy makeover at Specialized Plastic Surgery combines multiple procedures, typically a tummy tuck, breast lift or augmentation, and liposuction, to restore your pre-pregnancy body. Our surgeons create a customized plan to address your unique concerns, helping you reclaim your confidence and shape in a single surgical session.",
    image: "/images/procedures/mommy-makeover-tab.webp",
    href: "/services/body/mommy-makeover",
  },
  {
    id: "tummy-tuck",
    name: "Tummy Tuck",
    tabLabel: "Tummy Tuck",
    description:
      "A tummy tuck at Specialized Plastic Surgery removes excess skin, tightens abdominal muscles, and reshapes your midsection for a firmer, flatter appearance. Ideal for addressing changes caused by pregnancy or weight fluctuations, this transformative procedure helps you achieve a more toned and confident look.",
    image: "/images/procedures/tummy-tuck-tab.webp",
    href: "/services/body/tummy-tuck",
  },
  {
    id: "liposuction",
    name: "Liposuction",
    tabLabel: "Liposuction",
    description:
      "Liposuction at Specialized Plastic Surgery targets and removes stubborn fat deposits to sculpt and contour your body. Using advanced techniques, our skilled surgeons help refine areas such as the abdomen, hips, thighs, and more, giving you a smoother, more balanced silhouette and renewed confidence.",
    image: "/images/procedures/liposuction-tab.jpg",
    href: "/services/body/liposuction",
  },
  {
    id: "blepharoplasty",
    name: "Blepharoplasty",
    tabLabel: "Blepharoplasty",
    description:
      "Blepharoplasty at Specialized Plastic Surgery rejuvenates the appearance of your eyes by removing excess skin, fat, and muscle from the upper or lower eyelids. This procedure restores a youthful, refreshed look, reduces puffiness, and can even improve your field of vision for a more alert, vibrant appearance.",
    image: "/images/procedures/blepharoplasty-tab.jpg",
    href: "/services/face/blepharoplasty",
  },
];
