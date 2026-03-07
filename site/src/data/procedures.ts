export interface Procedure {
  slug: string;
  name: string;
  shortName?: string;
  category: ProcedureCategory;
  categorySlug: string;
  description: string;
  heroDescription: string;
  benefits: string[];
  candidateCriteria: string[];
  techniques?: string[];
  recoveryTimeline: string;
  procedureDuration?: string;
  insuranceCoverage?: string;
}

export type ProcedureCategory =
  | "face"
  | "body"
  | "aesthetic-breast"
  | "breast-reconstruction";

export interface ServiceCategory {
  slug: string;
  name: string;
  description: string;
  heroDescription: string;
  icon: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "face",
    name: "Face",
    description: "Facial rejuvenation and contouring procedures",
    heroDescription:
      "Restore a youthful, refreshed appearance with our comprehensive facial procedures performed by board-certified plastic surgeons.",
    icon: "Sparkles",
  },
  {
    slug: "aesthetic-breast",
    name: "Aesthetic Breast",
    description: "Breast enhancement procedures tailored to your goals",
    heroDescription:
      "Achieve your desired look with personalized breast enhancement procedures from augmentation to reduction, performed with precision and artistry.",
    icon: "Heart",
  },
  {
    slug: "breast-reconstruction",
    name: "Breast Reconstruction",
    description:
      "Comprehensive breast reconstruction for breast cancer patients",
    heroDescription:
      "Compassionate, expert breast reconstruction using advanced microsurgical techniques to restore form, function, and confidence after breast cancer surgery.",
    icon: "HandHeart",
  },
  {
    slug: "body",
    name: "Body",
    description: "Body contouring and sculpting procedures",
    heroDescription:
      "Transform your silhouette with our body contouring procedures, from liposuction and tummy tucks to comprehensive mommy makeovers.",
    icon: "User",
  },
];

export const procedures: Procedure[] = [
  // === FACE ===
  {
    slug: "facelift",
    name: "Facelift",
    shortName: "Facelift",
    category: "face",
    categorySlug: "face",
    description:
      "A facelift, also known as a rhytidectomy, is a transformative surgical procedure designed to restore a youthful, refreshed appearance by tightening the skin and underlying facial muscles.",
    heroDescription:
      "Restore a youthful, refreshed appearance by lifting and repositioning facial tissues to smooth folds, reduce sagging, and restore natural contour.",
    benefits: [
      "Smoothing of deep wrinkles and folds",
      "Improved jawline and neck contours",
      "Restoration of facial volume",
      "Long-lasting, natural-looking results",
    ],
    candidateCriteria: [
      "Moderate to severe sagging skin",
      "Deep folds or wrinkles",
      "Desire for a more youthful appearance",
      "Non-smoker",
    ],
    techniques: [
      "Traditional facelift",
      "Mini facelift",
      "SMAS facelift",
      "Combined with neck lift",
    ],
    recoveryTimeline:
      "Return to light activities in 1-2 weeks, with final results visible over several months.",
  },
  {
    slug: "neck-lift",
    name: "Neck Lift",
    category: "face",
    categorySlug: "face",
    description:
      "A neck lift improves the appearance of the neck and jawline by removing excess fat, tightening sagging skin, and eliminating vertical muscle bands.",
    heroDescription:
      "Achieve a more defined, youthful neck and jawline by removing excess fat, tightening skin, and correcting muscle bands.",
    benefits: [
      "Elimination of vertical neck bands",
      "Removal of excess fat and sagging skin",
      "Improved jawline definition",
      "Natural, rejuvenated profile",
    ],
    candidateCriteria: [
      "Visible signs of aging in the neck",
      "Excess fat or skin on the neck",
      "Vertical muscle bands",
      "Good overall health",
    ],
    recoveryTimeline:
      "Return to light activities in 1-2 weeks, full results visible over several months.",
  },
  {
    slug: "rhinoplasty",
    name: "Rhinoplasty",
    category: "face",
    categorySlug: "face",
    description:
      "Rhinoplasty is a surgical procedure designed to enhance the shape, size, and overall appearance of the nose, addressing both cosmetic and functional concerns.",
    heroDescription:
      "Enhance facial harmony by refining the shape, size, and proportions of the nose while correcting any breathing issues.",
    benefits: [
      "Enhanced facial harmony through improved proportions",
      "Corrected breathing issues from structural problems",
      "Refined nasal shape, size, and contours",
      "Permanent results",
    ],
    candidateCriteria: [
      "Age 16+ with specific nasal concerns",
      "Realistic expectations",
      "Non-smoker",
      "Good overall health",
    ],
    techniques: [
      "Closed rhinoplasty (internal incisions)",
      "Open rhinoplasty (for extensive work)",
      "Septoplasty (breathing correction)",
      "Revision rhinoplasty",
    ],
    procedureDuration: "1.5-3 hours",
    recoveryTimeline:
      "Return to light activities within 1-2 weeks, full results visible within one year as swelling subsides.",
  },
  {
    slug: "blepharoplasty",
    name: "Blepharoplasty",
    shortName: "Eyelid Surgery",
    category: "face",
    categorySlug: "face",
    description:
      "Eyelid surgery, or blepharoplasty, rejuvenates the eyes by addressing drooping eyelids, puffiness, and excess skin for a more youthful, refreshed look.",
    heroDescription:
      "Rejuvenate your appearance by correcting drooping eyelids, puffiness, and excess skin for brighter, more youthful eyes.",
    benefits: [
      "Youthful, refreshed appearance",
      "Enhanced vision by lifting obstructing skin",
      "Smooth, rejuvenated eye contours",
      "Natural-looking results",
    ],
    candidateCriteria: [
      "Drooping upper eyelids affecting appearance or vision",
      "Under-eye bags or puffiness",
      "Good overall health, non-smoker",
      "No serious eye conditions",
    ],
    techniques: [
      "Upper eyelid surgery",
      "Lower eyelid surgery",
      "Double eyelid surgery",
      "Combined upper and lower blepharoplasty",
    ],
    procedureDuration: "1-3 hours",
    recoveryTimeline:
      "Return to work and daily activities within 1-2 weeks, final results over following months.",
  },
  {
    slug: "otoplasty",
    name: "Otoplasty",
    shortName: "Ear Surgery",
    category: "face",
    categorySlug: "face",
    description:
      "Otoplasty addresses prominent or protruding ears through surgical reshaping, with natural-looking results and hidden scarring.",
    heroDescription:
      "Reshape and reposition prominent or protruding ears for a natural, balanced appearance with hidden scarring.",
    benefits: [
      "Natural ear positioning",
      "Hidden scarring behind the ear",
      "Improved facial balance",
      "Permanent correction",
    ],
    candidateCriteria: [
      "Children ages 5-7+ (ear growth complete)",
      "Adults seeking permanent correction",
      "Prominent or protruding ears",
      "Good overall health",
    ],
    techniques: [
      "Suturing technique to reshape cartilage",
      "Cartilage sculpting for excessive tissue",
    ],
    recoveryTimeline:
      "Structured recovery spanning several weeks, with initial head dressing followed by compression headbands.",
  },
  {
    slug: "chin-liposuction",
    name: "Chin Liposuction",
    category: "face",
    categorySlug: "face",
    description:
      "Chin liposuction permanently eliminates the double chin and restores jawline definition through small, discreet incisions.",
    heroDescription:
      "Permanently eliminate the double chin and restore a sharper, more defined jawline with this minimally invasive procedure.",
    benefits: [
      "Permanent fat removal",
      "Enhanced jawline definition",
      "Improved neck contour",
      "Smoother profile appearance",
      "Minimal scarring",
    ],
    candidateCriteria: [
      "Excess fat beneath the chin",
      "Desire for improved jawline definition",
      "Good skin elasticity",
      "Stable weight",
    ],
    recoveryTimeline:
      "Minimal downtime with compression garment wear for several weeks.",
  },

  // === AESTHETIC BREAST ===
  {
    slug: "augmentation",
    name: "Breast Augmentation",
    category: "aesthetic-breast",
    categorySlug: "aesthetic-breast",
    description:
      "Breast augmentation enhances breast size, shape, and symmetry through implants or fat transfer, tailored to individual aesthetic goals. Partners with Mentor, Allergan, Sientra, and Motiva.",
    heroDescription:
      "Enhance your breast size, shape, and symmetry with personalized augmentation using the latest implant technology from leading manufacturers.",
    benefits: [
      "Enhanced breast size and shape",
      "Improved symmetry",
      "Choice of saline, silicone, or gummy bear implants",
      "Natural-looking, long-lasting results",
    ],
    candidateCriteria: [
      "Women seeking enhancement of naturally smaller breasts",
      "Lost volume from pregnancy or weight loss",
      "Desire improved symmetry",
      "Good physical health with realistic expectations",
    ],
    techniques: [
      "Saline implants",
      "Silicone implants",
      "Gummy bear (cohesive gel) implants",
      "Submuscular or subglandular placement",
      "Dual plane technique",
      "Fat grafting breast augmentation",
    ],
    procedureDuration: "1-2 hours",
    recoveryTimeline:
      "Return to work within 1-2 weeks, final results visible after several months.",
  },
  {
    slug: "lift",
    name: "Breast Lift",
    shortName: "Breast Lift",
    category: "aesthetic-breast",
    categorySlug: "aesthetic-breast",
    description:
      "A breast lift (mastopexy) raises and reshapes sagging breasts by removing excess skin and tightening surrounding tissue for improved shape and firmness.",
    heroDescription:
      "Restore youthful breast contours by raising and reshaping sagging breasts with expert surgical precision.",
    benefits: [
      "Improved shape and firmness",
      "Enhanced position and projection",
      "Symmetry correction",
      "Better fit in clothing",
    ],
    candidateCriteria: [
      "Significant breast sagging",
      "Downward-pointing nipples",
      "Desire for youthful contours without size increase",
      "Non-smoker",
    ],
    procedureDuration: "2-3 hours",
    recoveryTimeline:
      "Return to work in 1-2 weeks, avoid heavy lifting for 4-6 weeks, final results within several months.",
  },
  {
    slug: "reduction",
    name: "Breast Reduction",
    category: "aesthetic-breast",
    categorySlug: "aesthetic-breast",
    description:
      "Breast reduction removes excess breast tissue, fat, and skin to reduce size and weight, relieving chronic pain and improving body proportions.",
    heroDescription:
      "Find relief from chronic pain and achieve balanced, natural proportions through expert breast reduction surgery.",
    benefits: [
      "Relief from chronic back, neck, and shoulder pain",
      "Improved mobility and fitness",
      "Enhanced body proportion and symmetry",
      "Relief from skin irritation",
    ],
    candidateCriteria: [
      "Chronic pain from breast size",
      "Breast size limiting physical activity",
      "Persistent skin irritations",
      "Good health, non-smoker",
    ],
    techniques: [
      "Liposuction reduction (minor reductions)",
      "Vertical (lollipop) reduction",
      "Anchor (inverted-T) reduction",
    ],
    procedureDuration: "3-4 hours",
    recoveryTimeline:
      "Return to work in 1-2 weeks, avoid strenuous activities for 4-6 weeks.",
    insuranceCoverage:
      "May be covered by insurance when deemed medically necessary due to chronic pain, skin irritation, or posture issues.",
  },
  {
    slug: "implant-removal",
    name: "Breast Implant Removal",
    shortName: "Explant Surgery",
    category: "aesthetic-breast",
    categorySlug: "aesthetic-breast",
    description:
      "Breast implant removal, or explant surgery, restores natural appearance by removing implants and surrounding scar tissue, with optional breast lift.",
    heroDescription:
      "Safely remove breast implants and restore your natural appearance with personalized explant procedures.",
    benefits: [
      "Restored natural appearance",
      "Relief from implant-related discomfort",
      "Address health concerns related to implants",
      "Improved comfort for active lifestyles",
    ],
    candidateCriteria: [
      "Experiencing implant-related discomfort",
      "Desire a more natural appearance",
      "Health or lifestyle concerns related to implants",
      "Previous breast implant surgery",
    ],
    techniques: [
      "Simple explantation",
      "En bloc capsulectomy",
      "Total capsulectomy",
      "Combined with breast lift",
    ],
    procedureDuration: "1-2 hours",
    recoveryTimeline:
      "Return to daily activities within 1-2 weeks, final results over several months.",
  },
  {
    slug: "gynecomastia",
    name: "Gynecomastia",
    shortName: "Male Breast Reduction",
    category: "aesthetic-breast",
    categorySlug: "aesthetic-breast",
    description:
      "Gynecomastia surgery reduces excess fat and glandular tissue in the male chest for a flatter, more masculine contour.",
    heroDescription:
      "Achieve a flatter, more masculine chest contour through expert gynecomastia surgery tailored to your anatomy.",
    benefits: [
      "Flatter, more masculine chest",
      "Improved self-confidence",
      "Permanent results",
      "Minimal scarring",
    ],
    candidateCriteria: [
      "Excess chest tissue unresponsive to diet/exercise",
      "Self-consciousness about chest appearance",
      "Good overall health and stable weight",
      "Non-smoker",
    ],
    techniques: [
      "Liposuction-only approach",
      "Excision technique",
      "Combination approach (liposuction plus excision)",
    ],
    procedureDuration: "1-3 hours",
    recoveryTimeline:
      "Return to work in 1-2 weeks, avoid heavy exercise for 4-6 weeks.",
  },

  // === BREAST RECONSTRUCTION ===
  {
    slug: "natural-tissue-flap",
    name: "Natural Tissue Flap Reconstruction",
    shortName: "Tissue Flap",
    category: "breast-reconstruction",
    categorySlug: "breast-reconstruction",
    description:
      "Natural tissue flap reconstruction uses your body's own tissue to rebuild the breast, providing the most natural-looking and feeling results after mastectomy.",
    heroDescription:
      "Rebuild your breast using your body's own tissue for the most natural-looking results, with advanced microsurgical techniques.",
    benefits: [
      "Most natural look and feel",
      "Long-lasting results that age naturally",
      "No synthetic implants required",
      "Secondary abdominal contouring benefit (DIEP flap)",
      "Better response to radiation therapy",
    ],
    candidateCriteria: [
      "Undergoing or planning mastectomy",
      "Sufficient donor tissue (abdomen, thigh, or back)",
      "Prefer to avoid implants",
      "Good overall health",
    ],
    techniques: [
      "DIEP Flap (preferred, preserves abdominal muscles)",
      "TRAM Flap (uses abdominal muscle tissue)",
      "LAT Flap (back tissue, often with implants)",
      "PAP Flap (inner thigh tissue)",
    ],
    procedureDuration: "6-8 hours (DIEP flap)",
    recoveryTimeline:
      "Initial recovery 4-6 weeks, with full healing over several months.",
    insuranceCoverage:
      "Covered by insurance under the Women's Health and Cancer Rights Act of 1998 (WHCRA).",
  },
  {
    slug: "implant-based",
    name: "Implant-Based Reconstruction",
    category: "breast-reconstruction",
    categorySlug: "breast-reconstruction",
    description:
      "Implant-based reconstruction restores breast shape after mastectomy using state-of-the-art implants, offering a shorter recovery time than tissue flap procedures.",
    heroDescription:
      "Restore breast shape after mastectomy with advanced implant technology for a quicker recovery and customizable results.",
    benefits: [
      "Shorter recovery time",
      "Less invasive than tissue flap procedures",
      "Highly customizable results",
      "No donor site required",
    ],
    candidateCriteria: [
      "Undergoing or planning mastectomy",
      "Sufficient skin and muscle for implant support",
      "Prefer shorter recovery",
      "Leaner body type without adequate donor tissue",
    ],
    techniques: [
      "Direct-to-implant (single stage)",
      "Two-stage (tissue expander then implant)",
      "Prepectoral placement",
      "Subpectoral placement",
    ],
    procedureDuration: "1-2 hours per breast",
    recoveryTimeline:
      "2-3 weeks initial healing with activity restrictions continuing.",
    insuranceCoverage: "Covered by insurance under WHCRA.",
  },
  {
    slug: "oncoplastic",
    name: "Oncoplastic Breast Reduction",
    category: "breast-reconstruction",
    categorySlug: "breast-reconstruction",
    description:
      "Oncoplastic breast reduction combines cancer removal with breast reshaping at the time of lumpectomy, achieving superior aesthetic results and symmetry.",
    heroDescription:
      "Combine cancer removal with expert breast reshaping for superior aesthetic outcomes and improved symmetry after lumpectomy.",
    benefits: [
      "Superior aesthetic results compared to traditional lumpectomy",
      "Improved breast symmetry",
      "Functional relief from chronic pain",
      "Enhanced psychological confidence during cancer recovery",
    ],
    candidateCriteria: [
      "Undergoing lumpectomy for breast cancer",
      "Larger breast size where reshaping is beneficial",
      "Desire improved symmetry",
      "Good overall health",
    ],
    techniques: [
      "Wise Pattern (anchor scar)",
      "Vertical Pattern (lollipop scar)",
      "Circumareolar approach",
    ],
    recoveryTimeline:
      "Return to light activities in 1-2 weeks, full results over several months.",
    insuranceCoverage:
      "Often covered by insurance as it addresses medical necessity and functional symptoms.",
  },
  {
    slug: "resensation",
    name: "Resensation",
    shortName: "Nerve Restoration",
    category: "breast-reconstruction",
    categorySlug: "breast-reconstruction",
    description:
      "Resensation is a nerve grafting technology that reconnects nerves to restore sensation to the breast and nipple area after mastectomy and reconstruction.",
    heroDescription:
      "Restore protective and erogenous sensation to the breast and nipple area after mastectomy using advanced nerve grafting technology.",
    benefits: [
      "Restored protective sensation",
      "Potential recovery of erogenous sensation",
      "Combined aesthetic and functional restoration",
      "No additional incisions required",
    ],
    candidateCriteria: [
      "Undergoing or planning mastectomy with tissue flap reconstruction",
      "Committed to advanced microsurgical techniques",
      "Desire functional as well as aesthetic restoration",
    ],
    procedureDuration: "Performed during reconstruction surgery",
    recoveryTimeline:
      "4-6 weeks recovery, sensation may return over months to two years as nerves regenerate.",
    insuranceCoverage: "Covered as part of breast reconstruction under WHCRA.",
  },
  {
    slug: "revision",
    name: "Revision Breast Reconstruction",
    category: "breast-reconstruction",
    categorySlug: "breast-reconstruction",
    description:
      "Revision breast reconstruction addresses concerns or complications from prior reconstruction, improving symmetry, comfort, and appearance.",
    heroDescription:
      "Improve or correct results from prior breast reconstruction with personalized revision options for symmetry, comfort, and natural appearance.",
    benefits: [
      "Enhanced symmetry and proportion",
      "Correction of implant complications",
      "Refined tissue flap contours",
      "Relief from pain or discomfort",
      "Restored shape after aging or weight changes",
    ],
    candidateCriteria: [
      "Prior breast reconstruction with concerns about results",
      "Implant complications (capsular contracture, displacement, rupture)",
      "Discomfort or pain from previous surgery",
      "Desire change in reconstruction type",
    ],
    techniques: [
      "Implant exchange or removal",
      "Capsular contracture correction",
      "Natural tissue (flap) refinement",
      "Fat grafting",
      "Scar revision and tissue reshaping",
    ],
    recoveryTimeline:
      "Resume light activities within 1-2 weeks, final results within a few months.",
    insuranceCoverage: "Covered under WHCRA for all stages of reconstruction.",
  },
  {
    slug: "specialized",
    name: "Specialized Reconstruction Procedures",
    category: "breast-reconstruction",
    categorySlug: "breast-reconstruction",
    description:
      "Advanced specialized procedures including aesthetic flat closure, nipple-areolar reconstruction, male breast reconstruction, and lymphedema surgery.",
    heroDescription:
      "Access the full spectrum of specialized reconstruction options, from aesthetic flat closure to lymphedema surgery, all under one roof.",
    benefits: [
      "Complete reconstruction options",
      "Male breast reconstruction expertise",
      "Lymphedema surgical treatment",
      "Nipple-areolar restoration with 3D tattooing",
      "Aesthetic flat closure as an empowering alternative",
    ],
    candidateCriteria: [
      "Post-mastectomy patients seeking alternatives to traditional reconstruction",
      "Male breast cancer patients",
      "Lymphedema patients who have not responded to conservative treatment",
      "Patients seeking nipple-areolar completion",
    ],
    recoveryTimeline: "Varies by procedure, typically 1-6 weeks initial recovery.",
    insuranceCoverage: "Most procedures covered under WHCRA or as medically necessary.",
  },

  // === BODY ===
  {
    slug: "liposuction",
    name: "Liposuction",
    category: "body",
    categorySlug: "body",
    description:
      "Liposuction permanently removes unwanted fat from targeted areas of the body for improved contours and a refined shape.",
    heroDescription:
      "Permanently remove stubborn fat deposits and refine your body contours with precision liposuction techniques.",
    benefits: [
      "Targeted, permanent fat removal",
      "Improved body contours",
      "Enhanced clothing fit",
      "Boosted self-confidence",
    ],
    candidateCriteria: [
      "Close to ideal weight with localized fat deposits",
      "Good skin elasticity",
      "Non-smoker",
      "Healthy overall",
    ],
    techniques: [
      "Traditional liposuction",
      "Tumescent liposuction",
      "Ultrasound-assisted (UAL)",
      "Power-assisted (PAL)",
    ],
    recoveryTimeline:
      "Return to light activities within days, work within 1-2 weeks, full results in 1-3 months.",
  },
  {
    slug: "lipo-360",
    name: "Lipo 360",
    category: "body",
    categorySlug: "body",
    description:
      "Lipo 360 is an advanced body contouring procedure that sculpts the entire midsection, targeting the abdomen, flanks, and lower back together for balanced results.",
    heroDescription:
      "Sculpt your entire midsection with circumferential liposuction for a slimmer, more defined waistline and balanced contours.",
    benefits: [
      "Sharper waist-to-hip contrast",
      "Tighter midsection",
      "Smoother transitions between body areas",
      "More sculpted silhouette",
    ],
    candidateCriteria: [
      "Close to goal weight",
      "Stubborn fat in abdomen, flanks, and back",
      "Good skin elasticity",
      "No significant loose skin",
    ],
    recoveryTimeline:
      "Desk job return in 5-10 days, physical work in 3-4 weeks, final results at 3-6 months.",
  },
  {
    slug: "bbl",
    name: "Brazilian Butt Lift",
    shortName: "BBL",
    category: "body",
    categorySlug: "body",
    description:
      "A Brazilian Butt Lift combines liposuction with fat transfer to the buttocks, enhancing volume and creating better body proportions using your own tissue.",
    heroDescription:
      "Enhance your curves naturally by combining liposuction with fat transfer to the buttocks for improved volume and body proportions.",
    benefits: [
      "Natural enhancement using your own tissue",
      "Improved waist definition through liposuction",
      "Hip dip correction",
      "Long-lasting results",
    ],
    candidateCriteria: [
      "Sufficient donor fat available",
      "Good skin elasticity",
      "Stable body weight",
      "Non-smoker with realistic expectations",
    ],
    recoveryTimeline:
      "Compression garments and positioning modifications for several weeks, results visible as swelling subsides.",
  },
  {
    slug: "tummy-tuck",
    name: "Tummy Tuck",
    shortName: "Abdominoplasty",
    category: "body",
    categorySlug: "body",
    description:
      "A tummy tuck removes excess skin and fat from the abdominal area, tightens weakened or separated muscles, and creates a smoother, more toned midsection.",
    heroDescription:
      "Achieve a flatter, more toned abdomen by removing excess skin, eliminating stubborn fat, and tightening weakened muscles.",
    benefits: [
      "Flatter, firmer abdomen",
      "Tightened abdominal muscles",
      "Removed excess skin and stretch marks",
      "Improved body contour",
    ],
    candidateCriteria: [
      "Close to ideal weight",
      "Loose skin or weakened abdominal muscles",
      "Not planning future pregnancies",
      "Good overall health",
    ],
    techniques: [
      "Full tummy tuck",
      "Mini tummy tuck (lower abdomen focus)",
      "Extended tummy tuck (includes flanks/hips)",
    ],
    recoveryTimeline:
      "Resume light activities and return to work within 1-2 weeks.",
  },
  {
    slug: "mommy-makeover",
    name: "Mommy Makeover",
    category: "body",
    categorySlug: "body",
    description:
      "A mommy makeover combines procedures like tummy tuck, breast lift, and liposuction to restore body shape after pregnancy and childbirth.",
    heroDescription:
      "Reclaim your pre-pregnancy confidence with a customized combination of procedures designed to restore your body shape.",
    benefits: [
      "Restored abdominal contours",
      "Enhanced breast shape and volume",
      "Balanced silhouette",
      "Single surgery, single recovery",
    ],
    candidateCriteria: [
      "Done having children",
      "Stable weight near ideal",
      "Realistic expectations",
      "Good overall health",
    ],
    techniques: [
      "Tummy tuck (abdominoplasty)",
      "Breast lift and/or augmentation",
      "Liposuction",
      "Body contouring",
    ],
    procedureDuration: "3-6 hours",
    recoveryTimeline:
      "Return to work and light activities in 1-2 weeks, final results visible over several months.",
  },
  {
    slug: "body-lift",
    name: "Body Lift",
    category: "body",
    categorySlug: "body",
    description:
      "A body lift removes large amounts of excess skin and tightens underlying tissue around the midsection, thighs, and buttocks after substantial weight loss.",
    heroDescription:
      "Transform your body after significant weight loss by removing excess skin and reshaping your midsection, thighs, and buttocks.",
    benefits: [
      "Removal of excess skin from multiple areas",
      "Improved hygiene and comfort",
      "Increased mobility",
      "Smoother contours and better-fitting clothes",
    ],
    candidateCriteria: [
      "Significant, stable weight loss (typically 100+ pounds)",
      "Stable weight for at least 6 months",
      "Good overall health",
      "Non-smoker",
    ],
    recoveryTimeline:
      "Initial recovery 3-4 weeks, full recovery 6-8 weeks, final results refining up to one year.",
    insuranceCoverage:
      "Panniculectomy may qualify for partial coverage if documented as medically necessary.",
  },
  {
    slug: "thigh-lift",
    name: "Thigh Lift",
    shortName: "Thighplasty",
    category: "body",
    categorySlug: "body",
    description:
      "A thigh lift reshapes the thighs by removing excess skin and fat for firmer, more contoured, and proportionate legs.",
    heroDescription:
      "Achieve firmer, more contoured legs by removing excess skin and fat for improved shape and comfort.",
    benefits: [
      "Firmer leg contours",
      "Elimination of skin friction and chafing",
      "Improved hygiene",
      "Better clothing fit",
    ],
    candidateCriteria: [
      "Stable, healthy weight for six months or longer",
      "Significant loose skin on thighs",
      "Limited response to liposuction alone",
      "Accept surgical scarring for improved comfort",
    ],
    techniques: [
      "Medial (inner) thigh lift",
      "Extended/vertical thigh lift",
      "Lateral and outer thigh lift",
      "Combination with liposuction",
    ],
    recoveryTimeline:
      "1-2 weeks off work, compression garment for several weeks, strenuous activity avoided for 4-6 weeks.",
  },
  {
    slug: "arm-lift",
    name: "Arm Lift",
    shortName: "Brachioplasty",
    category: "body",
    categorySlug: "body",
    description:
      "An arm lift (brachioplasty) improves the appearance of the upper arms by removing excess skin and fat for a more toned, defined look.",
    heroDescription:
      "Sculpt and define your upper arms by removing excess skin and fat for a toned, youthful appearance.",
    benefits: [
      "Toned, defined upper arms",
      "Removal of excess sagging skin",
      "Improved arm contour",
      "Discreet incision placement",
    ],
    candidateCriteria: [
      "Significant excess skin on upper arms",
      "Stable weight",
      "Good overall health",
      "Non-smoker",
    ],
    techniques: [
      "Full brachioplasty",
      "Short scar brachioplasty",
      "Arm liposuction",
    ],
    recoveryTimeline:
      "Return to light activities in 1-2 weeks, avoid heavy lifting for 4-6 weeks.",
  },
];

export function getProceduresByCategory(
  category: ProcedureCategory
): Procedure[] {
  return procedures.filter((p) => p.category === category);
}

export function getProcedureBySlug(
  categorySlug: string,
  procedureSlug: string
): Procedure | undefined {
  return procedures.find(
    (p) => p.categorySlug === categorySlug && p.slug === procedureSlug
  );
}

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.slug === slug);
}
