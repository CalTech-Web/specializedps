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
      "A facelift, also known as a rhytidectomy, is a transformative surgical procedure designed to restore a youthful, refreshed appearance by addressing sagging skin, deep wrinkles, and loss of facial volume. At Specialized Plastic Surgery, our board-certified plastic surgeons specialize in advanced facelift techniques that lift and reposition facial tissues, smooth deep folds, and rejuvenate the overall facial contour.\n\nAs we age, the skin gradually loses its elasticity, leading to sagging along the jawline, deep creases around the nose and mouth, and an overall tired appearance. A facelift addresses these concerns by tightening the underlying muscles and repositioning the skin for a naturally refreshed look that turns back the clock without appearing \"done.\"",
    heroDescription:
      "Restore a youthful, refreshed appearance by lifting and repositioning facial tissues to smooth folds, reduce sagging, and restore natural contour.",
    benefits: [
      "Smoothing of deep wrinkles, creases, and nasolabial folds",
      "Improved jawline definition and neck contours",
      "Restoration of lost facial volume and youthful proportions",
      "Long-lasting, natural-looking results that age gracefully",
      "Enhanced self-confidence and refreshed appearance",
    ],
    candidateCriteria: [
      "Moderate to severe facial sagging or loss of skin elasticity",
      "Deep folds or wrinkles around the nose and mouth",
      "Jowls or loss of jawline definition",
      "Desire for a more youthful appearance with realistic expectations",
      "Non-smoker in good overall health",
    ],
    techniques: [
      "Traditional facelift (comprehensive lifting and repositioning)",
      "Mini facelift (less invasive, shorter recovery)",
      "SMAS facelift (deep tissue repositioning for longer-lasting results)",
      "Combined facelift with neck lift for full rejuvenation",
    ],
    recoveryTimeline:
      "Most patients return to light activities within 1-2 weeks. Bruising and swelling gradually subside over the following weeks, with final results becoming fully visible over several months as tissues settle into their new position.",
  },
  {
    slug: "neck-lift",
    name: "Neck Lift",
    category: "face",
    categorySlug: "face",
    description:
      "A neck lift, or lower rhytidectomy, is a surgical procedure that improves the appearance of the neck and jawline by removing excess fat, tightening sagging skin, and eliminating vertical muscle bands (platysmal banding). This procedure is designed for individuals who are bothered by a \"turkey neck\" appearance, double chin, or loss of definition along the jawline.\n\nAt Specialized Plastic Surgery, our surgeons use advanced techniques to create a more defined, youthful neck and jawline profile. A neck lift can be performed on its own or in combination with a facelift for comprehensive facial rejuvenation.",
    heroDescription:
      "Achieve a more defined, youthful neck and jawline by removing excess fat, tightening skin, and correcting muscle bands.",
    benefits: [
      "Elimination of vertical neck bands (platysmal banding)",
      "Removal of excess fat and sagging skin beneath the chin",
      "Improved jawline definition and sharper profile",
      "Natural, rejuvenated neck contour",
      "Can be combined with facelift for comprehensive results",
    ],
    candidateCriteria: [
      "Visible signs of aging in the neck, including sagging or banding",
      "Excess fat or skin beneath the chin (double chin)",
      "Vertical muscle bands creating a \"turkey neck\" appearance",
      "Good overall health with realistic expectations",
      "Non-smoker",
    ],
    recoveryTimeline:
      "Return to light activities in 1-2 weeks. Compression garment may be recommended for the first week. Swelling gradually subsides, with full results visible over several months.",
  },
  {
    slug: "rhinoplasty",
    name: "Rhinoplasty",
    category: "face",
    categorySlug: "face",
    description:
      "Rhinoplasty is a surgical procedure designed to enhance the shape, size, and overall appearance of the nose, addressing both cosmetic and functional concerns. Whether you are seeking to refine the nasal tip, correct a bump on the bridge, straighten the nose, or improve breathing difficulties caused by structural issues, rhinoplasty can provide transformative results.\n\nAt Specialized Plastic Surgery, our surgeons understand that the nose is the central feature of the face. Even subtle changes can significantly enhance facial harmony and balance. Every rhinoplasty procedure is customized to complement each patient's unique facial structure, ensuring results that look natural and proportionate.",
    heroDescription:
      "Enhance facial harmony by refining the shape, size, and proportions of the nose while correcting any breathing issues.",
    benefits: [
      "Enhanced facial harmony through improved nasal proportions",
      "Corrected breathing issues from deviated septum or structural problems",
      "Refined nasal shape, including tip, bridge, and width",
      "Permanent, natural-looking results",
      "Improved self-confidence and facial balance",
    ],
    candidateCriteria: [
      "Adults or adolescents (age 16+) with specific nasal concerns",
      "Individuals with breathing difficulties due to structural issues",
      "Realistic expectations about achievable outcomes",
      "Good overall health and non-smoker status",
    ],
    techniques: [
      "Closed rhinoplasty (internal incisions, no visible scarring)",
      "Open rhinoplasty (for more extensive structural work)",
      "Septoplasty (correction of deviated septum for breathing)",
      "Revision rhinoplasty (improving results of prior surgery)",
    ],
    procedureDuration: "1.5-3 hours",
    recoveryTimeline:
      "A nasal splint is worn for approximately one week. Return to work and light activities within 1-2 weeks. Swelling gradually resolves over several months, with final results fully visible within one year as subtle residual swelling subsides.",
  },
  {
    slug: "blepharoplasty",
    name: "Blepharoplasty",
    shortName: "Eyelid Surgery",
    category: "face",
    categorySlug: "face",
    description:
      "Eyelid surgery, or blepharoplasty, rejuvenates the eyes by addressing drooping eyelids, puffiness, under-eye bags, and excess skin that can create a tired or aged appearance. This procedure is one of the most popular facial rejuvenation surgeries because of its ability to create a dramatic yet natural improvement in overall appearance.\n\nAt Specialized Plastic Surgery, blepharoplasty can be performed on the upper eyelids, lower eyelids, or both, depending on the patient's concerns. Upper blepharoplasty removes excess skin that may droop over the eyelash line and obstruct vision, while lower blepharoplasty targets puffy under-eye bags and fine wrinkles for a smoother, more rested look.",
    heroDescription:
      "Rejuvenate your appearance by correcting drooping eyelids, puffiness, and excess skin for brighter, more youthful eyes.",
    benefits: [
      "Youthful, refreshed appearance around the eyes",
      "Enhanced vision by lifting obstructing upper eyelid skin",
      "Smooth, rejuvenated eye contours and reduced puffiness",
      "Natural-looking results with hidden incision lines",
      "Quick procedure with relatively short recovery",
    ],
    candidateCriteria: [
      "Drooping upper eyelids affecting appearance or peripheral vision",
      "Under-eye bags, puffiness, or dark circles",
      "Excess skin creating a hooded or tired appearance",
      "Good overall health with no serious eye conditions",
      "Non-smoker with realistic expectations",
    ],
    techniques: [
      "Upper blepharoplasty (removes excess skin and fat from upper lids)",
      "Lower blepharoplasty (addresses bags and puffiness beneath eyes)",
      "Double eyelid surgery (creates a defined upper eyelid crease)",
      "Combined upper and lower blepharoplasty for comprehensive rejuvenation",
    ],
    procedureDuration: "1-3 hours",
    recoveryTimeline:
      "Most patients return to work and daily activities within 7-10 days. Stitches are typically removed within a week. Mild swelling and bruising resolve over the following weeks, with final results visible within a few months.",
  },
  {
    slug: "otoplasty",
    name: "Otoplasty",
    shortName: "Ear Surgery",
    category: "face",
    categorySlug: "face",
    description:
      "Otoplasty, or ear reshaping surgery, addresses prominent, protruding, or asymmetrical ears by surgically repositioning and sculpting the ear cartilage for a more natural, balanced appearance. This procedure is one of the few cosmetic surgeries commonly performed on children as well as adults.\n\nAt Specialized Plastic Surgery, otoplasty is carefully tailored to each patient's unique ear anatomy. The incisions are made behind the ears, ensuring that any scarring is virtually invisible. The procedure creates permanent results, improving facial balance and eliminating self-consciousness about ear appearance.",
    heroDescription:
      "Reshape and reposition prominent or protruding ears for a natural, balanced appearance with hidden scarring.",
    benefits: [
      "Natural ear positioning that complements facial features",
      "Hidden scarring behind the ear",
      "Improved facial balance and symmetry",
      "Permanent correction that lasts a lifetime",
      "Suitable for both children and adults",
    ],
    candidateCriteria: [
      "Children ages 5-7+ (when ear growth is substantially complete)",
      "Adults seeking permanent correction of protruding ears",
      "Prominent, overly large, or asymmetrical ears",
      "Good overall health with realistic expectations",
    ],
    techniques: [
      "Suturing technique to reshape and reposition cartilage",
      "Cartilage sculpting for excessive or irregularly shaped tissue",
      "Combination approach for complex corrections",
    ],
    recoveryTimeline:
      "A protective head dressing is worn for the first few days. Patients transition to a compression headband worn at night for several weeks. Most patients return to normal activities within 1-2 weeks. Final results are visible once swelling fully resolves.",
  },
  {
    slug: "chin-liposuction",
    name: "Chin Liposuction",
    category: "face",
    categorySlug: "face",
    description:
      "Chin liposuction, also known as submental liposuction, permanently eliminates the double chin and restores jawline definition through small, discreet incisions. This minimally invasive procedure targets the stubborn pocket of fat beneath the chin that often does not respond to diet or exercise.\n\nAt Specialized Plastic Surgery, chin liposuction is performed using advanced techniques that allow for precise fat removal and sculpting of the submental area. The result is a sharper, more defined jawline and an improved facial profile. This procedure can also be combined with other facial rejuvenation procedures for enhanced results.",
    heroDescription:
      "Permanently eliminate the double chin and restore a sharper, more defined jawline with this minimally invasive procedure.",
    benefits: [
      "Permanent fat removal from beneath the chin",
      "Enhanced jawline definition and sharper profile",
      "Improved neck contour and transition to the jawline",
      "Smoother, more youthful profile appearance",
      "Minimal scarring from small, discreet incisions",
    ],
    candidateCriteria: [
      "Excess fat beneath the chin creating a double chin appearance",
      "Desire for improved jawline definition and profile",
      "Good skin elasticity for optimal contouring results",
      "Stable weight and overall good health",
    ],
    recoveryTimeline:
      "Minimal downtime with most patients returning to work within a few days. A compression garment is worn for several weeks to support healing. Swelling gradually subsides, with final results visible within 1-3 months.",
  },

  // === AESTHETIC BREAST ===
  {
    slug: "augmentation",
    name: "Breast Augmentation",
    category: "aesthetic-breast",
    categorySlug: "aesthetic-breast",
    description:
      "Breast augmentation is a surgical procedure designed to enhance the size, shape, and symmetry of the breasts using implants or fat transfer. At Specialized Plastic Surgery, our board-certified plastic surgeons partner with leading implant manufacturers, including Mentor, Allergan, Sientra, and Motiva, to offer the widest range of options tailored to each patient's aesthetic goals.\n\nWhether you are looking to restore volume lost after pregnancy or weight loss, correct asymmetry, or simply enhance your natural proportions, breast augmentation provides a personalized solution. Our surgeons take the time to understand your vision and recommend the ideal implant type, size, shape, and placement to achieve results that look and feel natural.",
    heroDescription:
      "Enhance your breast size, shape, and symmetry with personalized augmentation using the latest implant technology from leading manufacturers.",
    benefits: [
      "Enhanced breast size, shape, and overall proportions",
      "Improved symmetry between breasts",
      "Choice of saline, silicone, or gummy bear (cohesive gel) implants",
      "Natural-looking, long-lasting results tailored to your frame",
      "Restored volume after pregnancy, breastfeeding, or weight loss",
    ],
    candidateCriteria: [
      "Women seeking enhancement of naturally smaller breasts",
      "Lost breast volume due to pregnancy, breastfeeding, or weight changes",
      "Desire to improve breast asymmetry or proportions",
      "Good physical health with realistic expectations",
      "Non-smoker committed to following post-operative instructions",
    ],
    techniques: [
      "Saline implants (adjustable volume, smaller incision)",
      "Silicone implants (natural look and feel, most popular choice)",
      "Gummy bear implants (form-stable cohesive gel for natural shape)",
      "Submuscular placement (under the chest muscle)",
      "Subglandular placement (over the muscle, under breast tissue)",
      "Dual plane technique (combination approach for optimal results)",
      "Fat grafting breast augmentation (natural tissue enhancement)",
    ],
    procedureDuration: "1-2 hours",
    recoveryTimeline:
      "Most patients return to work within 1-2 weeks. Avoid strenuous exercise and heavy lifting for 4-6 weeks. Swelling gradually subsides, with final results visible after several months as the implants settle into their natural position.",
  },
  {
    slug: "lift",
    name: "Breast Lift",
    shortName: "Breast Lift",
    category: "aesthetic-breast",
    categorySlug: "aesthetic-breast",
    description:
      "A breast lift, or mastopexy, is a surgical procedure that raises and reshapes sagging breasts by removing excess skin and tightening the surrounding tissue. This procedure restores a more youthful, uplifted breast contour and repositions the nipples to a more aesthetically pleasing height.\n\nBreast sagging (ptosis) is a natural result of aging, pregnancy, breastfeeding, weight fluctuations, and gravity. A breast lift at Specialized Plastic Surgery addresses these changes, creating firmer, more symmetrical breasts that complement your natural body proportions. For patients who also desire increased volume, a breast lift can be combined with augmentation.",
    heroDescription:
      "Restore youthful breast contours by raising and reshaping sagging breasts with expert surgical precision.",
    benefits: [
      "Improved breast shape, firmness, and position",
      "Enhanced projection and youthful contour",
      "Symmetry correction between breasts",
      "Repositioned nipples and reduced areola size if needed",
      "Better fit in clothing and swimwear",
    ],
    candidateCriteria: [
      "Significant breast sagging (ptosis) due to aging, pregnancy, or weight changes",
      "Downward-pointing nipples or nipples that fall below the breast crease",
      "Desire for youthful, uplifted contours without necessarily increasing size",
      "Non-smoker in good overall health",
      "Stable weight with realistic expectations",
    ],
    procedureDuration: "2-3 hours",
    recoveryTimeline:
      "Return to work in 1-2 weeks. Avoid heavy lifting and strenuous exercise for 4-6 weeks. A supportive bra is worn during the healing period. Final results become visible within several months as swelling resolves.",
  },
  {
    slug: "reduction",
    name: "Breast Reduction",
    category: "aesthetic-breast",
    categorySlug: "aesthetic-breast",
    description:
      "Breast reduction, or reduction mammoplasty, is a surgical procedure that removes excess breast tissue, fat, and skin to reduce the size and weight of the breasts. This procedure alleviates the chronic physical discomfort associated with overly large breasts while creating a more proportionate, balanced figure.\n\nAt Specialized Plastic Surgery, breast reduction is one of the most frequently performed procedures, with Dr. Devulapalli having performed over 1,000 breast reductions. Many patients report immediate relief from chronic back, neck, and shoulder pain, along with a significant improvement in their ability to exercise and enjoy an active lifestyle. The procedure also reshapes and lifts the breasts for an aesthetically pleasing result.",
    heroDescription:
      "Find relief from chronic pain and achieve balanced, natural proportions through expert breast reduction surgery.",
    benefits: [
      "Relief from chronic back, neck, and shoulder pain",
      "Improved mobility, posture, and ability to exercise",
      "Enhanced body proportion and breast symmetry",
      "Relief from skin irritation and rashes beneath the breasts",
      "Elimination of bra strap grooving and nerve compression",
      "Improved self-confidence and quality of life",
    ],
    candidateCriteria: [
      "Chronic pain in the back, neck, or shoulders caused by breast weight",
      "Breast size that limits physical activity or exercise",
      "Persistent skin irritation, rashes, or infections beneath the breast crease",
      "Deep bra strap grooves or shoulder indentations",
      "Good overall health, non-smoker",
    ],
    techniques: [
      "Liposuction reduction (for minor reductions with good skin elasticity)",
      "Vertical (lollipop) reduction (moderate reduction with less scarring)",
      "Anchor (inverted-T) reduction (for larger reductions, maximum reshaping)",
    ],
    procedureDuration: "3-4 hours",
    recoveryTimeline:
      "Return to work in 1-2 weeks. Avoid strenuous activities and heavy lifting for 4-6 weeks. A surgical bra is worn during the healing period. Final results visible within several months.",
    insuranceCoverage:
      "Breast reduction is one of the most common procedures covered by insurance when deemed medically necessary due to chronic pain, skin irritation, posture issues, or bra strap grooving. Our team works with your carrier to demonstrate medical necessity and submit the required documentation.",
  },
  {
    slug: "implant-removal",
    name: "Breast Implant Removal",
    shortName: "Explant Surgery",
    category: "aesthetic-breast",
    categorySlug: "aesthetic-breast",
    description:
      "Breast implant removal, or explant surgery, is a procedure that safely removes breast implants and surrounding scar tissue (capsule) for patients who wish to return to their natural appearance or address implant-related concerns. At Specialized Plastic Surgery, we offer comprehensive explant options tailored to each patient's goals.\n\nWhether you are experiencing implant-related discomfort, concerns about implant integrity, or simply prefer a more natural look, our surgeons provide expert care throughout the entire process. Explant surgery can be performed on its own or combined with a breast lift to reshape and tighten the breast tissue after implant removal.",
    heroDescription:
      "Safely remove breast implants and restore your natural appearance with personalized explant procedures.",
    benefits: [
      "Restored natural breast appearance and feel",
      "Relief from implant-related discomfort or complications",
      "Address concerns about breast implant illness (BII)",
      "Improved comfort for active lifestyles",
      "Option to combine with breast lift for optimal shape",
    ],
    candidateCriteria: [
      "Experiencing implant-related discomfort, hardness, or pain",
      "Desire to return to a more natural breast appearance",
      "Concerns about implant integrity, rupture, or capsular contracture",
      "Health or lifestyle concerns related to breast implants",
      "Previous breast augmentation with implants",
    ],
    techniques: [
      "Simple explantation (implant removal only)",
      "En bloc capsulectomy (removal of implant with surrounding capsule intact)",
      "Total capsulectomy (complete removal of scar tissue capsule)",
      "Combined explant with breast lift (mastopexy) for reshaping",
    ],
    procedureDuration: "1-2 hours",
    recoveryTimeline:
      "Return to daily activities within 1-2 weeks. Avoid heavy lifting for 4-6 weeks. Final breast shape continues to evolve over several months as tissues settle.",
  },
  {
    slug: "gynecomastia",
    name: "Gynecomastia",
    shortName: "Male Breast Reduction",
    category: "aesthetic-breast",
    categorySlug: "aesthetic-breast",
    description:
      "Gynecomastia surgery, or male breast reduction, is a procedure designed to reduce excess fat and glandular tissue in the male chest, creating a flatter, firmer, and more masculine contour. Gynecomastia affects a significant percentage of men and can cause considerable self-consciousness and discomfort.\n\nAt Specialized Plastic Surgery, our surgeons understand the impact that gynecomastia can have on confidence and quality of life. Using a combination of liposuction and tissue excision techniques, we create natural-looking results that restore a proportionate, masculine chest profile. The procedure is tailored to each patient's specific anatomy and degree of tissue excess.",
    heroDescription:
      "Achieve a flatter, more masculine chest contour through expert gynecomastia surgery tailored to your anatomy.",
    benefits: [
      "Flatter, firmer, more masculine chest contour",
      "Improved self-confidence in and out of clothing",
      "Permanent results that maintain with stable weight",
      "Minimal scarring with advanced surgical techniques",
      "Relief from physical discomfort and skin irritation",
    ],
    candidateCriteria: [
      "Excess chest tissue (fat and/or glandular) unresponsive to diet and exercise",
      "Self-consciousness about chest appearance affecting confidence",
      "Good overall health and stable body weight",
      "Non-smoker with realistic expectations",
    ],
    techniques: [
      "Liposuction-only approach (for primarily fatty tissue)",
      "Excision technique (for dense glandular tissue or excess skin)",
      "Combination approach (liposuction plus direct excision for optimal results)",
    ],
    procedureDuration: "1-3 hours",
    recoveryTimeline:
      "Return to work and light activities in 1-2 weeks. A compression garment is worn for several weeks to support healing. Avoid heavy exercise for 4-6 weeks. Final results visible within 3-6 months.",
  },

  // === BREAST RECONSTRUCTION ===
  {
    slug: "natural-tissue-flap",
    name: "Natural Tissue Flap Reconstruction",
    shortName: "Tissue Flap",
    category: "breast-reconstruction",
    categorySlug: "breast-reconstruction",
    description:
      "Natural tissue flap reconstruction involves using a patient's own tissue from areas such as the abdomen, back, or thighs to recreate a breast following mastectomy. This autologous tissue reconstruction provides a softer, more natural outcome compared to implant-based reconstruction.\n\nThe DIEP (Deep Inferior Epigastric Perforator) flap is the most frequently performed technique at Specialized Plastic Surgery because it creates the most natural appearance using the patient's own abdominal fat and skin, preserves abdominal muscles (unlike the TRAM flap), provides lasting results that adapt to body changes over time, works better with radiation therapy than synthetic materials, and offers a secondary abdominal contouring benefit similar to a tummy tuck.",
    heroDescription:
      "Rebuild your breast using your body's own tissue for the most natural-looking results, with advanced microsurgical techniques.",
    benefits: [
      "Most natural look and feel using your own tissue",
      "Long-lasting results that age and change naturally with your body",
      "No synthetic implants required, reducing long-term complications",
      "Preserves abdominal muscles (DIEP flap technique)",
      "Secondary abdominal contouring benefit (similar to a tummy tuck)",
      "Better tolerance of radiation therapy than implants",
    ],
    candidateCriteria: [
      "Individuals who have undergone or plan to undergo mastectomy",
      "Patients with sufficient abdominal, thigh, or back tissue for donation",
      "Those preferring to avoid synthetic implants",
      "Good overall health suitable for microsurgical procedure",
    ],
    techniques: [
      "DIEP Flap (preferred, preserves abdominal muscles entirely)",
      "TRAM Flap (uses abdominal muscle tissue)",
      "LAT Flap (back tissue, often combined with an implant)",
      "PAP Flap (inner thigh tissue for patients without sufficient abdominal tissue)",
    ],
    procedureDuration: "6-8 hours under general anesthesia",
    recoveryTimeline:
      "Initial recovery is 4-6 weeks, during which activity is gradually increased. Full healing occurs over several months. Regular follow-up appointments monitor the microsurgical connections and overall healing progress.",
    insuranceCoverage:
      "Covered by insurance under the Women's Health and Cancer Rights Act of 1998 (WHCRA), which mandates coverage for all stages of breast reconstruction after mastectomy.",
  },
  {
    slug: "implant-based",
    name: "Implant-Based Reconstruction",
    category: "breast-reconstruction",
    categorySlug: "breast-reconstruction",
    description:
      "Implant-based reconstruction is a type of breast reconstruction that involves placing an implant beneath the chest muscle or just above it, recreating the shape and appearance of the breast after mastectomy. This approach often involves a two-stage process: first, a temporary tissue expander is placed to gradually stretch the skin and make space for the permanent implant; then, in a second procedure, the tissue expander is removed and the permanent implant is inserted.\n\nImplant-based reconstruction offers several benefits that make it a popular choice for many breast cancer patients. This option typically involves a shorter, less complex surgery and a faster recovery period than natural tissue flap reconstruction. It also allows patients with limited donor tissue to achieve natural-looking results. There are two main types of implants: saline implants (filled with sterile salt water) and silicone implants (filled with silicone gel, providing a softer, more natural look and feel).",
    heroDescription:
      "Restore breast shape after mastectomy with advanced implant technology for a quicker recovery and customizable results.",
    benefits: [
      "Shorter recovery time compared to tissue flap procedures",
      "Less invasive surgery without additional donor sites",
      "Highly customizable with a range of implant sizes, shapes, and profiles",
      "No donor site required, suitable for leaner body types",
      "Versatile options including saline, silicone, and form-stable implants",
    ],
    candidateCriteria: [
      "Breast cancer patients who have undergone or plan to undergo mastectomy",
      "Individuals with enough skin and muscle to support an implant, or willingness to undergo tissue expansion",
      "Patients who prefer a shorter recovery time and less invasive surgery",
      "Women with a leaner body type who may not have sufficient donor tissue for flap reconstruction",
      "Those without a history of radiation therapy to the chest (radiation can impact implant results)",
    ],
    techniques: [
      "Direct-to-implant reconstruction (single-stage, immediate implant placement)",
      "Two-stage reconstruction (tissue expander followed by permanent implant)",
      "Prepectoral placement (above the muscle for less discomfort and distortion)",
      "Subpectoral placement (beneath the chest muscle for additional coverage)",
    ],
    procedureDuration: "1-2 hours per breast",
    recoveryTimeline:
      "Recovery after implant-based reconstruction is generally smoother and shorter than tissue flap reconstruction. Patients can expect an initial healing period of 2-3 weeks, with minor restrictions on lifting and strenuous activity for several more weeks. Regular follow-up appointments monitor healing and ensure implants settle naturally.",
    insuranceCoverage:
      "Covered by insurance under WHCRA. Our team handles the pre-authorization process to maximize your benefits.",
  },
  {
    slug: "oncoplastic",
    name: "Oncoplastic Breast Reduction",
    category: "breast-reconstruction",
    categorySlug: "breast-reconstruction",
    description:
      "Oncoplastic breast reduction (also known as Therapeutic Mammoplasty) is a sophisticated, two-in-one procedure that seamlessly combines the necessary removal of cancerous tissue with immediate breast reduction and reshaping, resulting in both improved health and superior cosmetic symmetry.\n\nInstead of simply removing the tumor and leaving a deformity or \"dent,\" the surgeon utilizes the principles of a cosmetic breast reduction to remove the tumor while ensuring clear margins, while simultaneously lifting and reducing the breast volume. The surrounding breast tissue is meticulously rearranged to immediately fill the void left by the cancer removal, achieving a beautiful, balanced contour. To achieve optimal balance, the surgeon often performs a contralateral breast reduction (a reduction on the healthy, opposite breast) at the same time.",
    heroDescription:
      "Combine cancer removal with expert breast reshaping for superior aesthetic outcomes and improved symmetry after lumpectomy.",
    benefits: [
      "Superior aesthetic results compared to traditional lumpectomy",
      "Improved breast symmetry through contralateral reduction",
      "Functional relief from chronic back, neck, and shoulder pain",
      "Enhanced psychological confidence during cancer recovery",
      "Single procedure combining cancer treatment and aesthetic improvement",
    ],
    candidateCriteria: [
      "Patients requiring a lumpectomy (not full mastectomy)",
      "Larger tumor size that would otherwise lead to significant breast deformity",
      "Large or heavy breasts where reduction provides both functional and aesthetic benefit",
      "Good overall health suitable for combined procedure",
    ],
    techniques: [
      "Wise Pattern (anchor scar) for larger reductions and significant lifting",
      "Vertical Pattern (lollipop scar) for moderate reductions with less visible scarring",
      "Circumareolar approach for very small tumors or minor reshaping",
    ],
    recoveryTimeline:
      "Return to light activities in 1-2 weeks. Avoid strenuous exercise for 4-6 weeks. Full results become visible over several months as swelling subsides and tissues heal.",
    insuranceCoverage:
      "Often covered by insurance as a medically necessary procedure that treats cancer and corrects functional symptoms. Our team specializes in navigating the pre-authorization process, submitting letters of medical necessity, clinical photos, and supporting documentation to maximize your benefits.",
  },
  {
    slug: "resensation",
    name: "Resensation",
    shortName: "Nerve Restoration",
    category: "breast-reconstruction",
    categorySlug: "breast-reconstruction",
    description:
      "Resensation is a revolutionary nerve grafting technique that uses a specially processed nerve allograft to reconnect nerves in the chest to reconstructed breast tissue. This enables the body to rebuild nerve pathways, potentially restoring protective sensation and sensitivity to the nipple and surrounding breast tissue.\n\nDuring surgery, the surgeon identifies severed nerve endings in the chest, places a Resensation nerve allograft to bridge the gap between the severed nerves, and uses microsurgical techniques to connect the graft. The body then naturally regenerates nerves over time, allowing sensation to gradually return. This procedure represents a complete approach to breast reconstruction that addresses both aesthetic and functional restoration.",
    heroDescription:
      "Restore protective and erogenous sensation to the breast and nipple area after mastectomy using advanced nerve grafting technology.",
    benefits: [
      "Restored protective sensation to help prevent injury",
      "Potential recovery of erogenous sensation",
      "Combined aesthetic and functional breast restoration",
      "Performed during reconstruction surgery with no additional incisions",
      "Uses proven nerve allograft technology",
    ],
    candidateCriteria: [
      "Patients undergoing mastectomy and breast reconstruction",
      "Those choosing natural tissue flap reconstruction (such as DIEP flap)",
      "Committed to advanced microsurgical techniques",
      "Desire both functional and aesthetic restoration",
    ],
    procedureDuration: "Performed during reconstruction surgery (adds minimal additional time)",
    recoveryTimeline:
      "Standard reconstruction recovery of 4-6 weeks. Sensation return is gradual and can take up to two years as nerves regenerate along the graft. Regular follow-up appointments track progress and nerve recovery.",
    insuranceCoverage:
      "Covered as part of breast reconstruction under the Women's Health and Cancer Rights Act (WHCRA).",
  },
  {
    slug: "revision",
    name: "Revision Breast Reconstruction",
    category: "breast-reconstruction",
    categorySlug: "breast-reconstruction",
    description:
      "Revision breast reconstruction is a specialized procedure designed to address concerns or complications from prior breast reconstruction. Unlike primary reconstruction, which is performed immediately after mastectomy, revision surgery focuses on enhancing or correcting the results of an earlier procedure.\n\nAt Specialized Plastic Surgery, we believe that every patient deserves to feel confident and comfortable with their breast reconstruction results. Common reasons for revision include improving symmetry, addressing changes in breast shape over time, resolving implant-related issues such as capsular contracture or malposition, or enhancing the overall appearance. Each revision is tailored to meet the unique needs of the patient, restoring confidence and comfort.",
    heroDescription:
      "Improve or correct results from prior breast reconstruction with personalized revision options for symmetry, comfort, and natural appearance.",
    benefits: [
      "Enhanced symmetry and balanced proportions",
      "Correction of implant complications (capsular contracture, displacement, rippling)",
      "Refined tissue flap contours through additional sculpting or fat grafting",
      "Relief from pain or discomfort caused by scar tissue or nerve issues",
      "Restored shape after aging or weight changes",
      "Option to change reconstruction type (implants to flap, or vice versa)",
    ],
    candidateCriteria: [
      "Prior breast reconstruction with dissatisfaction regarding appearance, symmetry, or comfort",
      "Implant complications such as capsular contracture, displacement, or rupture",
      "Discomfort or pain from previous surgery (scar tissue, nerve issues)",
      "Desire to change reconstruction type or update to current techniques",
      "Changes in breast shape due to aging or weight fluctuations",
    ],
    techniques: [
      "Implant exchange, removal, or repositioning",
      "Capsular contracture correction (removal of hardened scar tissue)",
      "Natural tissue (flap) refinement and additional contouring",
      "Fat grafting to add volume, smooth contours, and correct asymmetry",
      "Scar revision and tissue reshaping",
      "Nipple and areola reconstruction or adjustment",
      "Conversion from subpectoral to prepectoral implant placement",
    ],
    recoveryTimeline:
      "Resume light activities within 1-2 weeks. Avoid strenuous exercise for 4-6 weeks. Swelling gradually subsides, and improved shape and symmetry become more visible over the following months. Regular follow-up appointments monitor healing.",
    insuranceCoverage:
      "Covered under the Women's Health and Cancer Rights Act (WHCRA) for all stages of breast reconstruction, including revision procedures.",
  },
  {
    slug: "specialized",
    name: "Specialized Reconstruction Procedures",
    category: "breast-reconstruction",
    categorySlug: "breast-reconstruction",
    description:
      "Specialized Plastic Surgery offers a comprehensive range of advanced reconstruction procedures beyond traditional breast reconstruction, including aesthetic flat closure, male breast reconstruction, and lymphedema surgery.\n\nAesthetic flat closure is designed for women who choose not to undergo traditional breast mound reconstruction, creating a smooth, even chest contour following mastectomy. Male breast reconstruction restores the chest contour for men who have undergone mastectomy for breast cancer, focusing on achieving a flat, symmetrical, and masculine appearance. Lymphedema surgery addresses chronic swelling through advanced microsurgical techniques such as lymphaticovenous bypass (LVB) and vascularized lymph node transfer (VLNT), providing relief for patients who have not responded to conservative treatment.",
    heroDescription:
      "Access the full spectrum of specialized reconstruction options, from aesthetic flat closure to lymphedema surgery, all under one roof.",
    benefits: [
      "Aesthetic flat closure for a streamlined, empowering alternative to reconstruction",
      "Male breast reconstruction expertise for men with breast cancer",
      "Lymphedema surgical treatment using microsurgical techniques",
      "Nipple-areolar restoration with advanced techniques and 3D tattooing",
      "Simplified recovery compared to traditional reconstruction (flat closure)",
      "Long-term relief from chronic lymphedema symptoms",
    ],
    candidateCriteria: [
      "Post-mastectomy patients who prefer a flat chest contour rather than breast mound reconstruction",
      "Male breast cancer patients seeking to restore natural chest appearance",
      "Lymphedema patients with persistent swelling despite conservative treatment",
      "Patients seeking nipple-areolar completion or revision",
    ],
    techniques: [
      "Chest wall contouring and skin tightening (aesthetic flat closure)",
      "Lymphaticovenous bypass (LVB) for lymphedema",
      "Vascularized lymph node transfer (VLNT)",
      "Fat grafting and scar revision for male reconstruction",
      "3D nipple tattooing for realistic areolar restoration",
    ],
    recoveryTimeline:
      "Varies by procedure. Aesthetic flat closure: 1-2 weeks for light activities, 4-6 weeks for full recovery. Male reconstruction: 2-4 weeks initial recovery. Lymphedema surgery: 2-4 weeks for light activities, with compression garments and physical therapy continuing as part of ongoing care.",
    insuranceCoverage:
      "Most procedures covered under WHCRA or as medically necessary. Lymphedema surgery is often covered when conservative treatments have failed. Our team assists with insurance documentation and pre-authorization.",
  },

  // === BODY ===
  {
    slug: "liposuction",
    name: "Liposuction",
    category: "body",
    categorySlug: "body",
    description:
      "Liposuction is a cosmetic surgical procedure that removes unwanted fat from targeted areas of the body. By precisely breaking down and suctioning fat cells, liposuction can provide long-lasting contour improvements in areas such as the abdomen, thighs, hips, arms, and neck. Unlike weight loss, which reduces the size of fat cells, liposuction permanently removes these cells, resulting in a leaner appearance in the treated areas.\n\nAt Specialized Plastic Surgery, our board-certified plastic surgeons use advanced liposuction techniques to help patients achieve a smoother, more contoured silhouette tailored to each person's aesthetic goals and unique anatomy. Many patients choose liposuction to enhance their natural body contours and renew their confidence when diet and exercise alone cannot address stubborn pockets of fat.",
    heroDescription:
      "Permanently remove stubborn fat deposits and refine your body contours with precision liposuction techniques.",
    benefits: [
      "Targeted, permanent removal of stubborn fat deposits",
      "Refined body contours and improved proportions",
      "Enhanced clothing fit and comfort",
      "Long-lasting results when maintaining a healthy lifestyle",
      "Boosted self-confidence and body image",
    ],
    candidateCriteria: [
      "Close to ideal weight with localized fat deposits that do not respond to diet or exercise",
      "Good skin elasticity for optimal contouring (firmer skin adapts better to new contours)",
      "Non-smoker in good overall health",
      "Desire more defined body contours without significant weight loss",
    ],
    techniques: [
      "Traditional liposuction (cannula-based fat removal for precise control)",
      "Tumescent liposuction (anesthetic solution for comfort and reduced bleeding)",
      "Ultrasound-assisted liposuction (UAL) for dense or fibrous fat areas",
      "Power-assisted liposuction (PAL) with vibrating cannula for efficiency",
    ],
    recoveryTimeline:
      "Compression garments are worn to reduce swelling and help the body adjust to its new contours. Most patients resume light activities within a few days and return to work within 1-2 weeks. Swelling gradually subsides over the following weeks, with full results visible within 1-3 months.",
  },
  {
    slug: "lipo-360",
    name: "Lipo 360",
    category: "body",
    categorySlug: "body",
    description:
      "Lipo 360 is a powerful body contouring procedure designed to sculpt the entire midsection, creating a slimmer waist, smoother torso, and more defined silhouette. Unlike traditional liposuction that targets only one area, Lipo 360 focuses on shaping the abdomen, flanks, and lower back together to create balanced, natural-looking results.\n\nAt Specialized Plastic Surgery, Lipo 360 is performed with precision, artistic planning, and advanced surgical technique. The goal is not simply to remove fat, but to create refined contours, enhance curves, and deliver a sculpted appearance that aligns with each patient's natural anatomy. By addressing the full circumference of the torso, patients can achieve a more dramatic and harmonious transformation that improves waist-to-hip contrast.",
    heroDescription:
      "Sculpt your entire midsection with circumferential liposuction for a slimmer, more defined waistline and balanced contours.",
    benefits: [
      "Sharper waist-to-hip contrast and enhanced curves",
      "Tighter, more sculpted midsection from every angle",
      "Smoother transitions between body areas (no abrupt contour changes)",
      "More balanced, proportionate silhouette",
      "Improved body confidence in and out of clothing",
    ],
    candidateCriteria: [
      "Close to goal weight with stubborn fat in the abdomen, flanks, and back",
      "Good skin elasticity for optimal contouring results",
      "No significant loose skin requiring surgical removal",
      "Non-smoker with realistic expectations about achievable results",
    ],
    recoveryTimeline:
      "A compression garment is worn to support healing and contouring. Return to desk work in 5-10 days, physical work in 3-4 weeks. Avoid strenuous exercise for 4-6 weeks. Final results become fully visible at 3-6 months as swelling completely resolves.",
  },
  {
    slug: "bbl",
    name: "Brazilian Butt Lift",
    shortName: "BBL",
    category: "body",
    categorySlug: "body",
    description:
      "A Brazilian Butt Lift is a specialized body contouring procedure that combines liposuction with fat transfer to the buttocks to enhance volume and improve body proportions. Instead of implants, this technique uses purified fat harvested from areas such as the abdomen, flanks, lower back, or thighs. The fat is carefully processed and strategically re-injected to create smoother transitions, enhanced projection, and a more defined waist-to-hip ratio.\n\nBecause the procedure uses your own tissue, results look and feel natural while also refining the surrounding contours through sculpting. Choosing a Brazilian Butt Lift means choosing comprehensive body sculpting, not just added fullness. By combining liposuction and fat transfer, this procedure reshapes multiple areas to create striking, balanced curves.",
    heroDescription:
      "Enhance your curves naturally by combining liposuction with fat transfer to the buttocks for improved volume and body proportions.",
    benefits: [
      "Natural enhancement using your own fat (no implants)",
      "Improved waist definition through liposuction sculpting",
      "Hip dip correction with strategic fat placement",
      "Long-lasting results as transferred fat establishes blood supply",
      "Comprehensive body sculpting of multiple areas in one procedure",
    ],
    candidateCriteria: [
      "Sufficient donor fat in the abdomen, flanks, thighs, or lower back",
      "Good skin elasticity and stable body weight",
      "Healthy adults who do not smoke",
      "Realistic expectations about natural enhancement vs. artificial results",
      "Understanding of the recovery process, including sitting modifications",
    ],
    recoveryTimeline:
      "Compression garments support healing after surgery. Patients receive guidance on sitting modifications and positioning to protect transferred fat during the initial weeks. Avoid sitting directly on the buttocks for 2-3 weeks. Follow-up visits ensure healing progresses smoothly while preserving sculpted results. Final results visible in 3-6 months.",
  },
  {
    slug: "tummy-tuck",
    name: "Tummy Tuck",
    shortName: "Abdominoplasty",
    category: "body",
    categorySlug: "body",
    description:
      "A tummy tuck, or abdominoplasty, is a surgical procedure that removes excess skin and fat from the abdominal area, tightens weakened or separated muscles, and creates a smoother, more toned midsection. This procedure not only addresses loose skin and unwanted fat, but also repairs underlying abdominal muscles that may have been stretched or damaged, especially after pregnancy.\n\nUnlike liposuction, which primarily removes fat, a tummy tuck improves the contour and firmness of the abdomen by addressing both the skin and muscles. At Specialized Plastic Surgery, our surgeons offer multiple abdominoplasty techniques including full, mini, and extended tummy tucks, selecting the best approach based on each patient's anatomy and goals. Liposuction of the flanks may be combined for additional waist contouring.",
    heroDescription:
      "Achieve a flatter, more toned abdomen by removing excess skin, eliminating stubborn fat, and tightening weakened muscles.",
    benefits: [
      "Flatter, firmer abdomen with improved muscle tone",
      "Tightened and repaired separated abdominal muscles (diastasis recti)",
      "Removal of excess skin and stretch marks below the incision line",
      "Improved body contour and waistline definition",
      "Relief from weakened core muscles, improved posture, and reduced lower back pain",
    ],
    candidateCriteria: [
      "Close to ideal weight with loose skin or weakened abdominal muscles",
      "Sagging or excess skin that has not responded to diet or exercise",
      "Stretched or separated abdominal muscles, often from pregnancy or weight fluctuations",
      "Not planning future pregnancies (pregnancy can reverse results)",
      "Good overall health, non-smoker",
    ],
    techniques: [
      "Full tummy tuck (addresses the entire abdomen, upper and lower)",
      "Mini tummy tuck (focuses on the lower abdomen below the belly button)",
      "Extended tummy tuck (includes flanks and hips, ideal after major weight loss)",
    ],
    procedureDuration: "2-4 hours",
    recoveryTimeline:
      "Initial recovery period of 1-2 weeks with limited activity. Incisions are placed low on the abdomen for discreet scarring hidden by most clothing. Avoid strenuous exercise and heavy lifting for 6-8 weeks. Swelling gradually subsides, with sculpted final results visible within a few months.",
  },
  {
    slug: "mommy-makeover",
    name: "Mommy Makeover",
    category: "body",
    categorySlug: "body",
    description:
      "A mommy makeover is a comprehensive cosmetic procedure designed to help mothers restore their pre-pregnancy shape and boost their confidence. Pregnancy, childbirth, and breastfeeding can bring significant changes to the body, affecting areas like the abdomen, breasts, and more. A mommy makeover combines a range of body-contouring and aesthetic surgeries customized to each individual's needs.\n\nAt Specialized Plastic Surgery, our board-certified plastic surgeons have helped countless women achieve their aesthetic goals, providing natural-looking results that help them feel like the best versions of themselves. Typically, a mommy makeover includes procedures such as tummy tuck, breast enhancement (lift and/or augmentation), and liposuction, allowing women to address multiple areas in a single surgery for a balanced, youthful appearance.",
    heroDescription:
      "Reclaim your pre-pregnancy confidence with a customized combination of procedures designed to restore your body shape.",
    benefits: [
      "Restored abdominal contours with tightened muscles and removed excess skin",
      "Enhanced breast shape and volume through lift and/or augmentation",
      "Balanced, proportionate silhouette through targeted liposuction",
      "Single surgery with a single recovery period for multiple concerns",
      "Renewed confidence and comfort in your own body",
    ],
    candidateCriteria: [
      "Done having children (pregnancy can reverse results)",
      "Stable weight near ideal body weight",
      "Loose skin, stretch marks, or weakened abdominal muscles from pregnancy",
      "Breast sagging or loss of volume after breastfeeding",
      "Stubborn fat deposits that do not respond to diet and exercise",
      "Good overall health with realistic expectations",
    ],
    techniques: [
      "Tummy tuck (abdominoplasty) for abdominal reshaping",
      "Breast lift (mastopexy) for repositioning sagging breasts",
      "Breast augmentation for restoring or enhancing volume",
      "Liposuction for removing localized fat from abdomen, hips, and flanks",
      "Body contouring to refine and sculpt the waist and thighs",
    ],
    procedureDuration: "3-6 hours depending on procedures included",
    recoveryTimeline:
      "Initial recovery of 1-2 weeks with limited activity. Most patients resume desk work and light activities within 1-2 weeks. Avoid strenuous exercise for 6-8 weeks. It may take several months for swelling to fully subside, revealing your final results.",
  },
  {
    slug: "body-lift",
    name: "Body Lift",
    category: "body",
    categorySlug: "body",
    description:
      "A body lift is an extensive plastic surgery procedure that removes large amounts of excess skin and tightens the underlying tissue around the midsection, thighs, and buttocks. This procedure is typically sought by patients who have achieved significant, stable weight loss (often 100 pounds or more) and are dealing with redundant skin that cannot be addressed through non-surgical methods.\n\nAt Specialized Plastic Surgery, we help patients from New York, New Jersey, Connecticut, and throughout the TriState Area complete their weight loss transformation through post-bariatric body contouring. Almost everyone who loses a substantial amount of weight is left with some degree of loose or sagging skin that can cause infections, rashes, chafing, limited mobility, and poor-fitting clothing. The goal of a body lift is not weight reduction, but rather to sculpt and refine the body's final shape, dramatically improving both the look and feel of the skin.",
    heroDescription:
      "Transform your body after significant weight loss by removing excess skin and reshaping your midsection, thighs, and buttocks.",
    benefits: [
      "Removal of heavy, hanging excess skin from multiple areas",
      "Improved hygiene by eliminating skin folds prone to infection and rashes",
      "Increased mobility and ability to exercise comfortably",
      "Smoother body contours and better-fitting clothes",
      "Enhanced confidence and renewed self-esteem after weight loss journey",
    ],
    candidateCriteria: [
      "Significant, stable weight loss (typically 100+ pounds) with loose, hanging skin",
      "Weight stable for at least 6 months (recommend waiting 1 year after bariatric surgery)",
      "Good overall health with no medical conditions that would impair healing",
      "Non-smoker or willing to quit prior to surgery",
      "Realistic expectations about surgical results and permanent scarring",
    ],
    techniques: [
      "Lower body lift (circumferential, addresses abdomen, flanks, outer thighs, and buttocks)",
      "Panniculectomy (removal of the overhanging abdominal skin 'apron')",
      "Abdominoplasty (tummy tuck for abdominal muscle tightening)",
      "Thigh lift (thighplasty for inner, outer, or posterior thighs)",
      "Arm lift (brachioplasty for upper arm excess skin)",
      "Breast lift (mastopexy for deflated or sagging breasts)",
    ],
    recoveryTimeline:
      "Initial recovery requiring restricted activity is typically 3-4 weeks. Full recovery and return to vigorous exercise can take 6-8 weeks. Final results continue to refine for up to one year. Strategic incision placement ensures scars can be hidden by undergarments and bathing suits.",
    insuranceCoverage:
      "Panniculectomy (removal of the large flap of overhanging abdominal skin) may qualify for partial insurance coverage when documented as medically necessary due to chronic infections, rashes, or functional impairment. Our insurance coordinators assist with documentation and pre-authorization. Coverage depends on your plan and requires medical records from your primary doctor or bariatric surgeon.",
  },
  {
    slug: "thigh-lift",
    name: "Thigh Lift",
    shortName: "Thighplasty",
    category: "body",
    categorySlug: "body",
    description:
      "A thigh lift (thighplasty) is a comprehensive body contouring procedure focused on reshaping the thighs by surgically removing excess skin and, in some cases, excess fat deposits that lead to a sagging appearance. While many patients achieve weight loss success through diet, fitness, or bariatric surgery, the skin often loses its elasticity and cannot snap back to the body's new, smaller contours.\n\nAt Specialized Plastic Surgery, thigh lift surgery offers dual benefits: aesthetic improvement through firmer, more youthful leg contours that allow clothes to fit better, and functional relief by eliminating uncomfortable skin-on-skin friction (chafing) and addressing chronic hygiene concerns caused by hanging skin folds. Our surgeon possesses extensive experience in post-bariatric and massive weight loss body contouring, with a commitment to deep-layer tissue support to ensure the most discreet and aesthetic scarring possible.",
    heroDescription:
      "Achieve firmer, more contoured legs by removing excess skin and fat for improved shape and comfort.",
    benefits: [
      "Firmer, more youthful leg contours and improved proportions",
      "Elimination of skin friction, chafing, and irritation",
      "Improved hygiene by removing hanging skin folds",
      "Better clothing fit and increased comfort during activity",
      "Can be combined with liposuction for enhanced sculpting",
    ],
    candidateCriteria: [
      "Achieved a stable, healthy weight maintained for six months or more",
      "Significant loose, non-elastic skin on the inner or outer thighs",
      "Limited response to liposuction alone (excess skin, not just fat)",
      "Psychologically prepared to accept surgical scarring for improved shape and comfort",
      "Good overall health, non-smoker",
    ],
    techniques: [
      "Medial (inner) thigh lift, incision placed high in the groin crease for hidden scarring",
      "Extended/vertical thigh lift for extreme skin laxity after massive weight loss",
      "Lateral and outer thigh lift targeting the outer side and front of the thigh",
      "Combination with liposuction for residual fat pockets and optimal sculpting",
    ],
    recoveryTimeline:
      "Most patients require 1-2 weeks off work. A compression garment is worn consistently for several weeks to minimize swelling and support new contours. Walking is encouraged early, but strenuous activity must be avoided for 4-6 weeks. Customized incision lines are mapped while standing to account for gravity and ensure the best final contours.",
  },
  {
    slug: "arm-lift",
    name: "Arm Lift",
    shortName: "Brachioplasty",
    category: "body",
    categorySlug: "body",
    description:
      "An arm lift, or brachioplasty, is a procedure designed to improve the shape and definition of the upper arms by removing excess skin and fat. The incision is strategically placed along the inner arm, hidden in the natural folds to ensure minimal visible scarring.\n\nAt Specialized Plastic Surgery, we offer several arm lift approaches depending on the degree of excess tissue. A full brachioplasty involves a longer incision from elbow to armpit for patients with significant excess, while a short scar brachioplasty uses a shorter incision for those needing minimal correction. For younger patients with excess fat but firm skin, arm liposuction provides improvement without addressing skin laxity. Each procedure is tailored to meet the patient's specific needs and desired outcomes.",
    heroDescription:
      "Sculpt and define your upper arms by removing excess skin and fat for a toned, youthful appearance.",
    benefits: [
      "Toned, defined upper arm contour",
      "Removal of excess sagging skin ('bat wings')",
      "Improved arm shape and transition to the chest",
      "Discreet incision placement along the inner arm",
      "Enhanced confidence in sleeveless clothing",
    ],
    candidateCriteria: [
      "Significant excess skin on the upper arms not responsive to exercise",
      "Stable body weight maintained for at least 6 months",
      "Good overall health suitable for surgery",
      "Non-smoker with realistic expectations",
      "Acceptance of surgical scarring in exchange for improved contour",
    ],
    techniques: [
      "Full brachioplasty (incision from elbow to armpit for significant excess)",
      "Short scar brachioplasty (shorter incision for minimal correction)",
      "Arm liposuction (for excess fat with firm, elastic skin, no incision needed)",
    ],
    recoveryTimeline:
      "Return to light activities in 1-2 weeks. A compression garment supports healing. Avoid heavy lifting and strenuous exercise for 4-6 weeks. Scars gradually fade over the following months.",
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
