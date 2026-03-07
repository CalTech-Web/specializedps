export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Doctors",
    children: [
      { label: "Dr. Chris Devulapalli", href: "/doctors/chris-devulapalli" },
      { label: "Dr. Michael Sosin", href: "/doctors/michael-sosin" },
    ],
  },
  {
    label: "Locations",
    children: [
      { label: "New Jersey", href: "/locations#nj" },
      { label: "New York", href: "/locations#ny" },
    ],
  },
  {
    label: "About Us",
    children: [
      { label: "Our Team", href: "/team" },
      { label: "Financing", href: "/financing" },
      { label: "Insurance", href: "/insurance" },
      { label: "ERAS Protocol", href: "/eras" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Services",
    children: [
      {
        label: "Face",
        href: "/services/face",
        children: [
          { label: "Facelift", href: "/services/face/facelift" },
          { label: "Neck Lift", href: "/services/face/neck-lift" },
          { label: "Rhinoplasty", href: "/services/face/rhinoplasty" },
          { label: "Blepharoplasty", href: "/services/face/blepharoplasty" },
          { label: "Otoplasty", href: "/services/face/otoplasty" },
          { label: "Chin Liposuction", href: "/services/face/chin-liposuction" },
        ],
      },
      {
        label: "Aesthetic Breast",
        href: "/services/aesthetic-breast",
        children: [
          { label: "Breast Augmentation", href: "/services/aesthetic-breast/augmentation" },
          { label: "Breast Lift", href: "/services/aesthetic-breast/lift" },
          { label: "Breast Reduction", href: "/services/aesthetic-breast/reduction" },
          { label: "Implant Removal", href: "/services/aesthetic-breast/implant-removal" },
          { label: "Gynecomastia", href: "/services/aesthetic-breast/gynecomastia" },
        ],
      },
      {
        label: "Breast Reconstruction",
        href: "/services/breast-reconstruction",
        children: [
          { label: "Natural Tissue Flap", href: "/services/breast-reconstruction/natural-tissue-flap" },
          { label: "Implant-Based", href: "/services/breast-reconstruction/implant-based" },
          { label: "Oncoplastic", href: "/services/breast-reconstruction/oncoplastic" },
          { label: "Resensation", href: "/services/breast-reconstruction/resensation" },
          { label: "Revision", href: "/services/breast-reconstruction/revision" },
          { label: "Specialized", href: "/services/breast-reconstruction/specialized" },
        ],
      },
      {
        label: "Body",
        href: "/services/body",
        children: [
          { label: "Liposuction", href: "/services/body/liposuction" },
          { label: "Lipo 360", href: "/services/body/lipo-360" },
          { label: "Brazilian Butt Lift", href: "/services/body/bbl" },
          { label: "Tummy Tuck", href: "/services/body/tummy-tuck" },
          { label: "Mommy Makeover", href: "/services/body/mommy-makeover" },
          { label: "Body Lift", href: "/services/body/body-lift" },
          { label: "Thigh Lift", href: "/services/body/thigh-lift" },
          { label: "Arm Lift", href: "/services/body/arm-lift" },
        ],
      },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];
