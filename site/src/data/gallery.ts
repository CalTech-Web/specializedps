export interface GalleryItem {
  id: string;
  category: string;
  procedureLabel: string;
  before: string;
  after: string;
  caseGroup?: string;
  doctor?: string;
  patientAge?: number;
  procedureDetail?: string;
}

export interface GalleryCategory {
  slug: string;
  label: string;
  group: string;
  description: string;
  thumbnail: string;
}

export const galleryCategories: GalleryCategory[] = [
  // Face
  {
    slug: "otoplasty",
    label: "Otoplasty",
    group: "Face",
    description:
      "Ear reshaping surgery to correct protruding or asymmetrical ears, creating a more balanced and natural appearance.",
    thumbnail: "/images/gallery/facelift/otoplasty-case1-after.jpg",
  },
  {
    slug: "blepharoplasty",
    label: "Blepharoplasty",
    group: "Face",
    description:
      "Eyelid surgery to remove excess skin and fat, restoring a refreshed and youthful look to the eyes.",
    thumbnail: "/images/gallery/facelift/bleph-case1-after.jpg",
  },
  // Body
  {
    slug: "tummy-tuck",
    label: "Tummy Tuck",
    group: "Body",
    description:
      "Abdominoplasty to remove excess skin, eliminate stubborn fat, and tighten weakened muscles for a flatter, more toned abdomen.",
    thumbnail: "/images/gallery/tummy-tuck/case1-after.jpg",
  },
  {
    slug: "liposuction",
    label: "Liposuction",
    group: "Body",
    description:
      "Precision fat removal to sculpt and refine body contours, including traditional liposuction, Lipo 360, and chin liposuction.",
    thumbnail: "/images/gallery/liposuction/case1-after.jpg",
  },
  {
    slug: "bbl",
    label: "Brazilian Butt Lift",
    group: "Body",
    description:
      "Buttock enhancement using your own fat transfer for a fuller, more sculpted, and natural looking result.",
    thumbnail: "/images/gallery/bbl/case1-after.jpg",
  },
  // Aesthetic Breast
  {
    slug: "breast-augmentation",
    label: "Breast Augmentation",
    group: "Aesthetic Breast",
    description:
      "Enhance your breast size, shape, and symmetry with saline, silicone, or gummy bear implants tailored to your goals.",
    thumbnail: "/images/gallery/breast-augmentation/case1-front-after.jpg",
  },
  {
    slug: "breast-lift",
    label: "Breast Lift",
    group: "Aesthetic Breast",
    description:
      "Mastopexy to elevate and reshape sagging breasts, restoring a more youthful and lifted contour.",
    thumbnail: "/images/gallery/breast-lift/case1-after.jpg",
  },
  {
    slug: "breast-reduction",
    label: "Breast Reduction",
    group: "Aesthetic Breast",
    description:
      "Reduce breast volume and reshape for improved proportions, comfort, and relief from back and neck pain.",
    thumbnail: "/images/gallery/breast-reduction/case1-after.jpg",
  },
  // Breast Reconstruction
  {
    slug: "diep-flap",
    label: "DIEP Flap",
    group: "Breast Reconstruction",
    description:
      "Advanced microsurgical breast reconstruction using your own abdominal tissue, preserving muscle for a natural result and faster recovery.",
    thumbnail:
      "/images/gallery/breast-reconstruction/diep-case1-front-after.jpg",
  },
  {
    slug: "oncoplastic-reduction",
    label: "Oncoplastic Reduction",
    group: "Breast Reconstruction",
    description:
      "Combining cancer surgery with breast reduction techniques to achieve both oncologic safety and improved breast shape.",
    thumbnail: "/images/gallery/breast-reconstruction/onco-case1-after.jpg",
  },
  {
    slug: "implant-reconstruction",
    label: "Implant Reconstruction",
    group: "Breast Reconstruction",
    description:
      "Prosthetic breast reconstruction using tissue expanders and implants, offering a reliable option for breast restoration after mastectomy.",
    thumbnail:
      "/images/gallery/breast-reconstruction/implant-case1-after.jpg",
  },
  {
    slug: "tdap-flap",
    label: "TDAP Flap",
    group: "Breast Reconstruction",
    description:
      "Thoracodorsal artery perforator flap reconstruction, an advanced technique using back tissue to restore breast volume and shape.",
    thumbnail: "/images/gallery/breast-reconstruction/tdap-case1-after.jpg",
  },
  {
    slug: "male-breast-reconstruction",
    label: "Male Breast Reconstruction",
    group: "Breast Reconstruction",
    description:
      "Specialized reconstruction for male breast cancer patients, restoring chest contour and confidence after mastectomy.",
    thumbnail:
      "/images/gallery/breast-reconstruction/male-bc-case1-after.jpg",
  },
];

export const galleryItems: GalleryItem[] = [
  // === Breast Augmentation ===
  {
    id: "ba-1",
    category: "breast-augmentation",
    procedureLabel: "Breast Augmentation with Motiva, Front View",
    before: "/images/gallery/breast-augmentation/case1-front-before.jpg",
    after: "/images/gallery/breast-augmentation/case1-front-after.jpg",
    caseGroup: "ba-case1",
    patientAge: 48,
    procedureDetail: "Breast augmentation with Motiva implants",
  },
  {
    id: "ba-1s",
    category: "breast-augmentation",
    procedureLabel: "Breast Augmentation with Motiva, Side View",
    before: "/images/gallery/breast-augmentation/case1-side-before.jpg",
    after: "/images/gallery/breast-augmentation/case1-side-after.jpg",
    caseGroup: "ba-case1",
    patientAge: 48,
    procedureDetail: "Breast augmentation with Motiva implants",
  },
  {
    id: "ba-2",
    category: "breast-augmentation",
    procedureLabel: "Breast Augmentation with Motiva, Front View",
    before: "/images/gallery/breast-augmentation/case2-front-before.jpg",
    after: "/images/gallery/breast-augmentation/case2-front-after.jpg",
    caseGroup: "ba-case2",
    patientAge: 28,
    procedureDetail: "Breast augmentation with Motiva implants",
  },
  {
    id: "ba-2s",
    category: "breast-augmentation",
    procedureLabel: "Breast Augmentation with Motiva, Side View",
    before: "/images/gallery/breast-augmentation/case2-side-before.jpg",
    after: "/images/gallery/breast-augmentation/case2-side-after.jpg",
    caseGroup: "ba-case2",
    patientAge: 28,
    procedureDetail: "Breast augmentation with Motiva implants",
  },
  {
    id: "ba-3",
    category: "breast-augmentation",
    procedureLabel: "Breast Augmentation with Motiva",
    before: "/images/gallery/breast-augmentation/case3-front-before.jpg",
    after: "/images/gallery/breast-augmentation/case3-front-after.jpg",
    patientAge: 35,
    procedureDetail: "Breast augmentation with Motiva implants",
  },
  {
    id: "ba-4",
    category: "breast-augmentation",
    procedureLabel: "Breast Augmentation with Silicone Implants",
    before: "/images/gallery/breast-augmentation/case4-side-before.jpg",
    after: "/images/gallery/breast-augmentation/case4-side-after.jpg",
    patientAge: 26,
    procedureDetail: "Primary breast augmentation with silicone implants",
  },
  {
    id: "ba-5",
    category: "breast-augmentation",
    procedureLabel: "Explantation and Revision Mastopexy",
    before: "/images/gallery/breast-augmentation/case5-front-before.jpg",
    after: "/images/gallery/breast-augmentation/case5-front-after.jpg",
    patientAge: 59,
    procedureDetail: "Explantation, revision mastopexy, and exchange of silicone implants",
  },
  {
    id: "ba-6",
    category: "breast-augmentation",
    procedureLabel: "Subpectoral Breast Augmentation and Mastopexy",
    before: "/images/gallery/breast-augmentation/case6-before.jpg",
    after: "/images/gallery/breast-augmentation/case6-after.jpg",
    patientAge: 27,
    procedureDetail: "Primary subpectoral breast augmentation and mastopexy",
  },
  {
    id: "ba-7",
    category: "breast-augmentation",
    procedureLabel: "Mastopexy (Breast Lift)",
    before: "/images/gallery/breast-augmentation/case7-before.jpg",
    after: "/images/gallery/breast-augmentation/case7-after.jpg",
    procedureDetail: "Mastopexy (breast lift)",
  },
  {
    id: "ba-ft",
    category: "breast-augmentation",
    procedureLabel: "Breast Augmentation with Fat Transfer",
    before: "/images/gallery/breast-augmentation/fat-transfer-before.jpg",
    after: "/images/gallery/breast-augmentation/fat-transfer-after.jpg",
    procedureDetail: "Breast augmentation with fat transfer",
  },

  // === Breast Lift ===
  {
    id: "bl-1",
    category: "breast-lift",
    procedureLabel: "Breast Lift (Mastopexy), Case 1",
    before: "/images/gallery/breast-lift/case1-before.jpg",
    after: "/images/gallery/breast-lift/case1-after.jpg",
    procedureDetail: "Breast implant removal (explant) with breast lift and fat grafting for volume restoration",
  },
  {
    id: "bl-2",
    category: "breast-lift",
    procedureLabel: "Breast Lift (Mastopexy), Case 2",
    before: "/images/gallery/breast-lift/case2-before.jpg",
    after: "/images/gallery/breast-lift/case2-after.jpg",
    patientAge: 29,
    procedureDetail: "Subglandular augmentation and mastopexy",
  },
  {
    id: "bl-3",
    category: "breast-lift",
    procedureLabel: "Breast Lift, Case 3",
    before: "/images/gallery/breast-lift/case3-before.jpg",
    after: "/images/gallery/breast-lift/case3-after.jpg",
  },
  {
    id: "bl-4",
    category: "breast-lift",
    procedureLabel: "Breast Lift, Case 4",
    before: "/images/gallery/breast-lift/case4-before.jpg",
    after: "/images/gallery/breast-lift/case4-after.jpg",
  },
  {
    id: "bl-5",
    category: "breast-lift",
    procedureLabel: "Breast Lift, Case 5",
    before: "/images/gallery/breast-lift/case5-before.jpg",
    after: "/images/gallery/breast-lift/case5-after.jpg",
  },
  {
    id: "bl-am1",
    category: "breast-lift",
    procedureLabel: "Breast Augmentation with Lift",
    before: "/images/gallery/breast-lift/aug-masto-case1-before.jpg",
    after: "/images/gallery/breast-lift/aug-masto-case1-after.jpg",
    procedureDetail: "Breast implant removal (explant) with breast lift and fat grafting",
  },
  {
    id: "bl-am2",
    category: "breast-lift",
    procedureLabel: "Breast Augmentation with Lift, Case 2",
    before: "/images/gallery/breast-lift/aug-masto-case2-before.jpg",
    after: "/images/gallery/breast-lift/aug-masto-case2-after.jpg",
    patientAge: 29,
    procedureDetail: "Subglandular augmentation with mastopexy",
  },

  // === Breast Reduction ===
  {
    id: "br-1",
    category: "breast-reduction",
    procedureLabel: "Breast Reduction, Case 1",
    before: "/images/gallery/breast-reduction/case1-before.jpg",
    after: "/images/gallery/breast-reduction/case1-after.jpg",
  },
  {
    id: "br-2",
    category: "breast-reduction",
    procedureLabel: "Breast Reduction, Case 2",
    before: "/images/gallery/breast-reduction/case2-before.jpg",
    after: "/images/gallery/breast-reduction/case2-after.jpg",
  },
  {
    id: "br-3",
    category: "breast-reduction",
    procedureLabel: "Breast Reduction, Case 3",
    before: "/images/gallery/breast-reduction/case3-before.jpg",
    after: "/images/gallery/breast-reduction/case3-after.jpg",
  },
  {
    id: "br-4",
    category: "breast-reduction",
    procedureLabel: "Breast Reduction, Case 4",
    before: "/images/gallery/breast-reduction/case4-before.jpg",
    after: "/images/gallery/breast-reduction/case4-after.jpg",
  },
  {
    id: "br-5",
    category: "breast-reduction",
    procedureLabel: "Bilateral Breast Reduction, Case 5",
    before: "/images/gallery/breast-reduction/case5-before.jpg",
    after: "/images/gallery/breast-reduction/case5-after.jpg",
  },
  {
    id: "br-6",
    category: "breast-reduction",
    procedureLabel: "Bilateral Breast Reduction, Case 6",
    before: "/images/gallery/breast-reduction/case6-before.jpg",
    after: "/images/gallery/breast-reduction/case6-after.jpg",
  },
  {
    id: "br-7",
    category: "breast-reduction",
    procedureLabel: "Bilateral Breast Reduction, Case 7",
    before: "/images/gallery/breast-reduction/case7-before.jpg",
    after: "/images/gallery/breast-reduction/case7-after.jpg",
  },
  {
    id: "br-8",
    category: "breast-reduction",
    procedureLabel: "Bilateral Breast Reduction, Case 8",
    before: "/images/gallery/breast-reduction/case8-before.jpg",
    after: "/images/gallery/breast-reduction/case8-after.jpg",
  },
  {
    id: "br-9",
    category: "breast-reduction",
    procedureLabel: "Bilateral Breast Reduction, Case 9",
    before: "/images/gallery/breast-reduction/case9-before.jpg",
    after: "/images/gallery/breast-reduction/case9-after.jpg",
  },
  {
    id: "br-10",
    category: "breast-reduction",
    procedureLabel: "Bilateral Breast Reduction, Case 10",
    before: "/images/gallery/breast-reduction/case10-before.jpg",
    after: "/images/gallery/breast-reduction/case10-after.jpg",
  },

  // === Breast Reconstruction: DIEP Flap ===
  {
    id: "recon-d1",
    category: "diep-flap",
    procedureLabel: "DIEP Flap Reconstruction, Front View",
    before: "/images/gallery/breast-reconstruction/diep-case1-front-before.jpg",
    after: "/images/gallery/breast-reconstruction/diep-case1-front-after.jpg",
    caseGroup: "diep-case1",
    patientAge: 43,
    procedureDetail: "Bilateral nipple sparing mastectomy and DIEP flap reconstruction",
  },
  {
    id: "recon-d1s",
    category: "diep-flap",
    procedureLabel: "DIEP Flap Reconstruction, Side View",
    before: "/images/gallery/breast-reconstruction/diep-case1-side-before.jpg",
    after: "/images/gallery/breast-reconstruction/diep-case1-side-after.jpg",
    caseGroup: "diep-case1",
    patientAge: 43,
    procedureDetail: "Bilateral nipple sparing mastectomy and DIEP flap reconstruction",
  },
  {
    id: "recon-d2",
    category: "diep-flap",
    procedureLabel: "DIEP Flap Reconstruction, Case 2",
    before: "/images/gallery/breast-reconstruction/diep-case2-before.jpg",
    after: "/images/gallery/breast-reconstruction/diep-case2-after.jpg",
    patientAge: 38,
    procedureDetail: "DIEP flap reconstruction with high-definition liposuction, body contouring, and nipple/areolar medical tattooing",
  },
  {
    id: "recon-d3",
    category: "diep-flap",
    procedureLabel: "DIEP Flap Reconstruction, Case 3",
    before: "/images/gallery/breast-reconstruction/diep-case3-before.jpg",
    after: "/images/gallery/breast-reconstruction/diep-case3-after.jpg",
    patientAge: 38,
    procedureDetail: "Bilateral nipple sparing mastectomy with staged reconstruction, tissue expander placement, radiation, then autologous reconstruction",
  },
  {
    id: "recon-d4",
    category: "diep-flap",
    procedureLabel: "DIEP Flap Reconstruction, Case 4",
    before: "/images/gallery/breast-reconstruction/diep-case4-before.jpg",
    after: "/images/gallery/breast-reconstruction/diep-case4-after.jpg",
    patientAge: 45,
    procedureDetail: "Bilateral nipple sparing mastectomy and DIEP flap reconstruction",
  },
  {
    id: "recon-d5",
    category: "diep-flap",
    procedureLabel: "DIEP Flap Reconstruction, Case 5",
    before: "/images/gallery/breast-reconstruction/diep-case5-before.jpg",
    after: "/images/gallery/breast-reconstruction/diep-case5-after.jpg",
    patientAge: 47,
    procedureDetail: "Bilateral nipple sparing mastectomy with staged reconstruction, tissue expander placement, DIEP flap, HD liposuction and abdominal contouring",
  },
  {
    id: "recon-d6",
    category: "diep-flap",
    procedureLabel: "DIEP Flap Reconstruction, Case 6",
    before: "/images/gallery/breast-reconstruction/diep-case6-before.jpg",
    after: "/images/gallery/breast-reconstruction/diep-case6-after.jpg",
    patientAge: 41,
    procedureDetail: "Bilateral non-nipple sparing mastectomy and immediate DIEP flap reconstruction",
  },
  {
    id: "recon-d7",
    category: "diep-flap",
    procedureLabel: "DIEP Flap Reconstruction, Front View",
    before:
      "/images/gallery/breast-reconstruction/diep-case7-front-before.jpg",
    after: "/images/gallery/breast-reconstruction/diep-case7-front-after.jpg",
    patientAge: 41,
    procedureDetail: "Bilateral nipple sparing mastectomy with staged reconstruction, tissue expander placement, DIEP flap, HD liposuction and abdominal contouring",
  },
  {
    id: "recon-d8",
    category: "diep-flap",
    procedureLabel: "DIEP Flap Reconstruction, Case 8",
    before: "/images/gallery/breast-reconstruction/diep-case8-before.jpg",
    after: "/images/gallery/breast-reconstruction/diep-case8-after.jpg",
    patientAge: 38,
    procedureDetail: "Bilateral non-nipple sparing mastectomy and immediate DIEP flap reconstruction",
  },
  {
    id: "recon-d9",
    category: "diep-flap",
    procedureLabel: "DIEP Flap Reconstruction, Case 9",
    before: "/images/gallery/breast-reconstruction/diep-case9-before.jpg",
    after: "/images/gallery/breast-reconstruction/diep-case9-after.jpg",
    patientAge: 30,
    procedureDetail: "Bilateral nipple sparing mastectomy and immediate DIEP flap reconstruction",
  },
  {
    id: "recon-d10",
    category: "diep-flap",
    procedureLabel: "DIEP Flap Reconstruction, Case 10",
    before:
      "/images/gallery/breast-reconstruction/diep-case10-v1-before.jpg",
    after: "/images/gallery/breast-reconstruction/diep-case10-v1-after.jpg",
    patientAge: 41,
    procedureDetail: "Bilateral nipple sparing mastectomy and immediate DIEP flap reconstruction",
  },
  {
    id: "recon-d11",
    category: "diep-flap",
    procedureLabel: "DIEP Flap Reconstruction, Case 11",
    before: "/images/gallery/breast-reconstruction/diep-case11-before.jpg",
    after: "/images/gallery/breast-reconstruction/diep-case11-after.jpg",
    patientAge: 60,
    procedureDetail: "Left side nipple sparing mastectomy with staged autologous DIEP flap reconstruction, right side matching mastopexy, nipple reconstruction using autologous skin graft",
  },
  {
    id: "recon-d12",
    category: "diep-flap",
    procedureLabel: "DIEP Flap Reconstruction, Case 12",
    before:
      "/images/gallery/breast-reconstruction/diep-case12-v1-before.jpg",
    after: "/images/gallery/breast-reconstruction/diep-case12-v1-after.jpg",
    procedureDetail: "Bilateral nipple sparing mastectomy and DIEP flap reconstruction",
  },
  {
    id: "recon-d13",
    category: "diep-flap",
    procedureLabel: "DIEP Flap Reconstruction, Case 13",
    before: "/images/gallery/breast-reconstruction/diep-case13-before.jpg",
    after: "/images/gallery/breast-reconstruction/diep-case13-after.jpg",
    patientAge: 49,
    procedureDetail: "Bilateral nipple sparing mastectomy and DIEP flap reconstruction",
  },
  {
    id: "recon-d14",
    category: "diep-flap",
    procedureLabel: "DIEP Flap Reconstruction, Case 14",
    before:
      "/images/gallery/breast-reconstruction/diep-case14-front-before.jpg",
    after:
      "/images/gallery/breast-reconstruction/diep-case14-front-after.jpg",
    procedureDetail: "DIEP flap reconstruction",
  },

  // === Breast Reconstruction: Oncoplastic ===
  {
    id: "recon-o1",
    category: "oncoplastic-reduction",
    procedureLabel: "Oncoplastic Reduction, Case 1",
    before: "/images/gallery/breast-reconstruction/onco-case1-before.jpg",
    after: "/images/gallery/breast-reconstruction/onco-case1-after.jpg",
    patientAge: 66,
    procedureDetail: "Oncoplastic reduction with liposuction and fat grafting to the breast",
  },
  {
    id: "recon-o2",
    category: "oncoplastic-reduction",
    procedureLabel: "Oncoplastic Reduction, Case 2",
    before: "/images/gallery/breast-reconstruction/onco-case2-before.jpg",
    after: "/images/gallery/breast-reconstruction/onco-case2-after.jpg",
    procedureDetail: "Lumpectomy, oncoplastic reduction and matching procedure",
  },
  {
    id: "recon-o3",
    category: "oncoplastic-reduction",
    procedureLabel: "Oncoplastic Reduction, Case 3",
    before: "/images/gallery/breast-reconstruction/onco-case3-before.jpg",
    after: "/images/gallery/breast-reconstruction/onco-case3-after.jpg",
    patientAge: 53,
    procedureDetail: "Lumpectomy, oncoplastic reduction and matching procedure",
  },
  {
    id: "recon-o5",
    category: "oncoplastic-reduction",
    procedureLabel: "Oncoplastic Reduction, Case 5",
    before: "/images/gallery/breast-reconstruction/onco-case5-before.jpg",
    after: "/images/gallery/breast-reconstruction/onco-case5-after.jpg",
    procedureDetail: "Oncoplastic reduction",
  },
  {
    id: "recon-o6",
    category: "oncoplastic-reduction",
    procedureLabel: "Oncoplastic Reduction, Case 6",
    before: "/images/gallery/breast-reconstruction/onco-case6-before.jpg",
    after: "/images/gallery/breast-reconstruction/onco-case6-after.jpg",
    procedureDetail: "Oncoplastic reduction",
  },
  {
    id: "recon-o7",
    category: "oncoplastic-reduction",
    procedureLabel: "Oncoplastic Reduction, Case 7",
    before: "/images/gallery/breast-reconstruction/onco-case7-before.jpg",
    after: "/images/gallery/breast-reconstruction/onco-case7-after.jpg",
    procedureDetail: "Oncoplastic reduction",
  },
  {
    id: "recon-o8",
    category: "oncoplastic-reduction",
    procedureLabel: "Oncoplastic Reduction, Front View",
    before:
      "/images/gallery/breast-reconstruction/onco-case8-front-before.jpg",
    after:
      "/images/gallery/breast-reconstruction/onco-case8-front-after.jpg",
    procedureDetail: "Oncoplastic reduction",
  },

  // === Breast Reconstruction: Implant-Based ===
  {
    id: "recon-i1",
    category: "implant-reconstruction",
    procedureLabel: "Implant-Based Reconstruction, Case 1",
    before: "/images/gallery/breast-reconstruction/implant-case1-before.jpg",
    after: "/images/gallery/breast-reconstruction/implant-case1-after.jpg",
    patientAge: 45,
    procedureDetail: "Implant-based reconstruction",
  },
  {
    id: "recon-i2",
    category: "implant-reconstruction",
    procedureLabel: "Implant-Based Reconstruction, Case 2",
    before: "/images/gallery/breast-reconstruction/implant-case2-before.jpg",
    after: "/images/gallery/breast-reconstruction/implant-case2-after.jpg",
    patientAge: 44,
    procedureDetail: "Bilateral nipple sparing mastectomy and 2-staged expander/implant reconstruction",
  },
  {
    id: "recon-i3",
    category: "implant-reconstruction",
    procedureLabel: "Implant-Based Reconstruction, Side View",
    before:
      "/images/gallery/breast-reconstruction/implant-case3-side-before.jpg",
    after:
      "/images/gallery/breast-reconstruction/implant-case3-side-after.jpg",
    patientAge: 47,
    procedureDetail: "Bilateral nipple and nerve sparing mastectomy with immediate/direct to implant reconstruction with high profile silicone implants",
  },
  {
    id: "recon-i4",
    category: "implant-reconstruction",
    procedureLabel: "Implant-Based Reconstruction, Front View",
    before:
      "/images/gallery/breast-reconstruction/implant-case4-front-before.jpg",
    after:
      "/images/gallery/breast-reconstruction/implant-case4-front-after.jpg",
    patientAge: 50,
    procedureDetail: "Bilateral nipple sparing mastectomy with direct-to-implant reconstruction",
  },

  // === Breast Reconstruction: TDAP ===
  {
    id: "recon-t1",
    category: "tdap-flap",
    procedureLabel: "TDAP Flap Reconstruction, Case 1",
    before: "/images/gallery/breast-reconstruction/tdap-case1-before.jpg",
    after: "/images/gallery/breast-reconstruction/tdap-case1-after.jpg",
    procedureDetail: "Autologous reconstruction with TDAP flaps",
  },
  {
    id: "recon-t2",
    category: "tdap-flap",
    procedureLabel: "TDAP Flap Reconstruction, Case 2",
    before: "/images/gallery/breast-reconstruction/tdap-case2-before.jpg",
    after: "/images/gallery/breast-reconstruction/tdap-case2-after.jpg",
    procedureDetail: "Autologous reconstruction with TDAP flaps",
  },

  // === Breast Reconstruction: Delayed ===
  {
    id: "recon-del1",
    category: "diep-flap",
    procedureLabel: "Delayed Breast Reconstruction",
    before: "/images/gallery/breast-reconstruction/delayed-case1-before.jpg",
    after: "/images/gallery/breast-reconstruction/delayed-case1-after.jpg",
    procedureDetail: "Delayed breast reconstruction with DIEP flap",
  },

  // === Breast Reconstruction: Male ===
  {
    id: "recon-mbc",
    category: "male-breast-reconstruction",
    procedureLabel: "Male Breast Cancer Reconstruction",
    before: "/images/gallery/breast-reconstruction/male-bc-case1-before.jpg",
    after: "/images/gallery/breast-reconstruction/male-bc-case1-after.jpg",
    procedureDetail: "Mastectomy and contouring of the chest with liposuction and fat grafting",
  },

  // === Tummy Tuck ===
  {
    id: "tt-1",
    category: "tummy-tuck",
    procedureLabel: "Abdominoplasty, Case 1",
    before: "/images/gallery/tummy-tuck/case1-before.jpg",
    after: "/images/gallery/tummy-tuck/case1-after.jpg",
    procedureDetail: "Abdominoplasty",
  },
  {
    id: "tt-2",
    category: "tummy-tuck",
    procedureLabel: "Abdominoplasty, Case 2",
    before: "/images/gallery/tummy-tuck/case2-before.jpg",
    after: "/images/gallery/tummy-tuck/case2-after.jpg",
    patientAge: 46,
    procedureDetail: "Abdominoplasty",
  },
  {
    id: "tt-3",
    category: "tummy-tuck",
    procedureLabel: "Abdominoplasty, Case 3",
    before: "/images/gallery/tummy-tuck/case3-before.jpg",
    after: "/images/gallery/tummy-tuck/case3-after.jpg",
    procedureDetail: "Abdominoplasty",
  },
  {
    id: "tt-4",
    category: "tummy-tuck",
    procedureLabel: "Abdominoplasty, Case 4",
    before: "/images/gallery/tummy-tuck/case4-before.jpg",
    after: "/images/gallery/tummy-tuck/case4-after.jpg",
    procedureDetail: "Abdominoplasty",
  },
  {
    id: "tt-5",
    category: "tummy-tuck",
    procedureLabel: "Mini Abdominoplasty, Case 5",
    before: "/images/gallery/tummy-tuck/case5-before.jpg",
    after: "/images/gallery/tummy-tuck/case5-after.jpg",
    patientAge: 45,
    procedureDetail: "Mini abdominoplasty",
  },
  {
    id: "tt-6",
    category: "tummy-tuck",
    procedureLabel: "Abdominoplasty, Case 6",
    before: "/images/gallery/tummy-tuck/case6-before.jpg",
    after: "/images/gallery/tummy-tuck/case6-after.jpg",
    procedureDetail: "Abdominoplasty",
  },

  // === Liposuction ===
  {
    id: "lipo-1",
    category: "liposuction",
    procedureLabel: "Liposuction, Case 1",
    before: "/images/gallery/liposuction/case1-before.jpg",
    after: "/images/gallery/liposuction/case1-after.jpg",
    patientAge: 58,
    procedureDetail: "Bilateral excision with liposuction",
  },
  {
    id: "lipo-chin1",
    category: "liposuction",
    procedureLabel: "Chin Liposuction, Case 1",
    before: "/images/gallery/liposuction/chin-case1-before.jpg",
    after: "/images/gallery/liposuction/chin-case1-after.jpg",
    patientAge: 48,
    procedureDetail: "Submental liposuction",
  },
  {
    id: "lipo-chin2",
    category: "liposuction",
    procedureLabel: "Chin Liposuction, Case 2",
    before: "/images/gallery/liposuction/chin-case2-before.jpg",
    after: "/images/gallery/liposuction/chin-case2-after.jpg",
    doctor: "Dr. Michael Sosin",
    procedureDetail: "Submental liposuction with cervicodorsal junction treatment",
  },
  {
    id: "lipo-chinr",
    category: "liposuction",
    procedureLabel: "Chin Liposuction with Rhinoplasty",
    before: "/images/gallery/liposuction/chin-rhino-before.jpg",
    after: "/images/gallery/liposuction/chin-rhino-after.jpg",
  },
  {
    id: "lipo-360",
    category: "liposuction",
    procedureLabel: "Lipo 360",
    before: "/images/gallery/liposuction/lipo360-before.jpg",
    after: "/images/gallery/liposuction/lipo360-after.jpg",
    patientAge: 44,
    procedureDetail: "Flanks liposuction with fat grafting and Renuvion skin tightening",
  },

  // === BBL ===
  {
    id: "bbl-1",
    category: "bbl",
    procedureLabel: "Brazilian Butt Lift, Case 1",
    before: "/images/gallery/bbl/case1-before.jpg",
    after: "/images/gallery/bbl/case1-after.jpg",
    patientAge: 44,
    procedureDetail: "Liposuction of the flanks with fat grafting to hips/buttocks and Renuvion skin tightening",
  },
  {
    id: "bbl-2",
    category: "bbl",
    procedureLabel: "Brazilian Butt Lift, Case 2",
    before: "/images/gallery/bbl/case2-before.jpg",
    after: "/images/gallery/bbl/case2-after.jpg",
    procedureDetail: "Brazilian butt lift",
  },
  {
    id: "bbl-3",
    category: "bbl",
    procedureLabel: "Brazilian Butt Lift, Case 3",
    before: "/images/gallery/bbl/case3-before.jpg",
    after: "/images/gallery/bbl/case3-after.jpg",
    procedureDetail: "Brazilian butt lift",
  },

  // === Face ===
  {
    id: "face-oto",
    category: "otoplasty",
    procedureLabel: "Otoplasty",
    before: "/images/gallery/facelift/otoplasty-case1-before.jpg",
    after: "/images/gallery/facelift/otoplasty-case1-after.jpg",
  },
  {
    id: "face-bleph",
    category: "blepharoplasty",
    procedureLabel: "Blepharoplasty",
    before: "/images/gallery/facelift/bleph-case1-before.jpg",
    after: "/images/gallery/facelift/bleph-case1-after.jpg",
    patientAge: 58,
    procedureDetail: "Lower blepharoplasty (eyelid surgery)",
  },
];

export function getGalleryByCategory(slug: string): GalleryItem[] {
  return galleryItems.filter((item) => item.category === slug);
}

export function getGalleryCategory(slug: string) {
  return galleryCategories.find((cat) => cat.slug === slug);
}

export const galleryGroups = [
  "Face",
  "Body",
  "Aesthetic Breast",
  "Breast Reconstruction",
] as const;

export const DEFAULT_DOCTOR = "Dr. Chris Devulapalli";

/** Groups gallery items by case. Multi-view items (front/side) are grouped together. */
export function getGalleryCases(slug: string): GalleryItem[][] {
  const items = galleryItems.filter((item) => item.category === slug);
  const groups = new Map<string, GalleryItem[]>();

  for (const item of items) {
    const key = item.caseGroup ?? item.id;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(item);
  }

  return Array.from(groups.values());
}
