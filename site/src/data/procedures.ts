export interface Procedure {
  slug: string;
  name: string;
  shortName?: string;
  category: ProcedureCategory;
  categorySlug: string;
  description: string;
  heroDescription: string;
  heroImage?: string;
  contentImage?: string;
  benefits: string[];
  candidateCriteria: string[];
  techniques?: string[];
  recoveryTimeline: string;
  procedureDuration?: string;
  insuranceCoverage?: string;
  procedureSteps?: string[];
  heroVideo?: string;
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
  heroImage?: string;
  heroVideo?: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "face",
    name: "Face",
    description: "Facial rejuvenation and contouring procedures",
    heroDescription:
      "Restore a youthful, refreshed appearance with our comprehensive facial procedures performed by board-certified plastic surgeons.",
    icon: "Sparkles",
    heroImage: "/images/services/face-hero.webp",
  },
  {
    slug: "aesthetic-breast",
    name: "Aesthetic Breast",
    description: "Breast enhancement procedures tailored to your goals",
    heroDescription:
      "Achieve your desired look with personalized breast enhancement procedures from augmentation to reduction, performed with precision and artistry.",
    icon: "Heart",
    heroImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-190.jpg",
    heroVideo: "/videos/SPS-Video-102.mp4",
  },
  {
    slug: "breast-reconstruction",
    name: "Breast Reconstruction",
    description:
      "Comprehensive breast reconstruction for breast cancer patients",
    heroDescription:
      "Compassionate, expert breast reconstruction using advanced microsurgical techniques to restore form, function, and confidence after breast cancer surgery.",
    icon: "HandHeart",
    heroImage: "https://specializedplasticsurgery.com/wp-content/uploads/2026/02/pexels-anntarazevich-5629208.jpg",
    heroVideo: "/videos/Breast-Reconstruction-Video.mp4",
  },
  {
    slug: "body",
    name: "Body",
    description: "Body contouring and sculpting procedures",
    heroDescription:
      "Transform your silhouette with our body contouring procedures, from liposuction and tummy tucks to comprehensive mommy makeovers.",
    icon: "User",
    heroImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-236.jpg",
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
      "A facelift, also known as a rhytidectomy, is a transformative surgical procedure designed to restore a youthful, refreshed appearance by tightening the skin and underlying facial muscles. At Specialized Plastic Surgery, our board-certified plastic surgeons specialize in advanced facelift techniques that lift and reposition facial tissues, smooth deep folds, and rejuvenate the overall facial contour.\n\nAs we age, the skin gradually loses its elasticity, leading to sagging along the jawline, deep creases around the nose and mouth, and an overall tired appearance. A facelift addresses these concerns by tightening the underlying muscles and repositioning the skin for a naturally refreshed look that turns back the clock without appearing overdone.\n\nOur surgeons use minimally invasive techniques to achieve natural looking results that enhance rather than alter your appearance. Every facelift procedure is customized to complement each patient's unique facial structure, ensuring results that look natural and proportionate.",
    heroDescription:
      "Restore a youthful, refreshed appearance by lifting and repositioning facial tissues to smooth folds, reduce sagging, and restore natural contour.",
    heroImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-244.jpg",
    heroVideo: "/videos/SPS-Video-105.mp4",
    contentImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2025/11/SPS-Center-Image.jpg",
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
    procedureSteps: [
      "Incision placement along the natural hairline and around the ears for discreet scarring",
      "Lifting and repositioning of underlying facial tissues and muscles",
      "Removal of excess skin and careful incision closure for a smooth, natural result",
    ],
    recoveryTimeline:
      "You may experience temporary swelling, bruising, and mild discomfort, which are managed with prescribed medications and proper care. Bandages or compression garments may be applied to support healing. Most patients return to light activities within 1 to 2 weeks, though strenuous activity should be avoided for several weeks. Final results become fully visible over the following months as tissues settle into their new position.",
    procedureDuration: "3 to 5 hours",
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
    heroImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2026/02/pexels-789201469-276136990.jpg",
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
    heroImage: "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-1004.jpg",
    heroVideo: "/videos/SPS-Video-106.mp4",
    contentImage: "https://specializedplasticsurgery.com/wp-content/uploads/2025/11/SPS-Center-Image.jpg",
    description:
      "Rhinoplasty, commonly called a \"nose job,\" is a popular surgical procedure designed to enhance the shape, size, and overall appearance of the nose while improving facial balance. It can address both structural issues and aesthetic concerns, from refining the nasal tip and correcting a bump on the bridge to straightening the nose or improving breathing difficulties caused by a deviated septum.\n\nAt Specialized Plastic Surgery, our board-certified surgeons understand that the nose is the central feature of the face, and even subtle changes can create a significant improvement in facial harmony. Every rhinoplasty procedure is customized to complement each patient's unique facial structure, ensuring results that look natural and proportionate while also improving function when needed.",
    heroDescription:
      "Rhinoplasty surgery in New Jersey and New York, designed to enhance the nose's shape, size, and overall appearance while improving facial balance.",
    benefits: [
      "Enhanced facial harmony by creating better proportion and balance between the nose and other facial features",
      "Improved nasal function by correcting structural issues causing breathing problems, including deviated septum",
      "Refined shape and size, addressing bumps, nasal tip position, and nostril width",
      "Long-lasting, permanent results that allow you to enjoy lasting benefits",
      "Improved self-confidence and facial balance with natural-looking outcomes",
    ],
    candidateCriteria: [
      "Unhappy with nose appearance or function, with realistic expectations about achievable outcomes",
      "Specific concerns about the size, shape, or structure of the nose",
      "Experiencing breathing issues from nasal structure problems such as a deviated septum",
      "At least 16 years old with the nose fully developed, in good overall health, and a non-smoker (smoking interferes with healing)",
    ],
    techniques: [
      "Closed rhinoplasty (incisions inside the nostrils for minimally invasive reshaping)",
      "Open rhinoplasty (for extensive reshaping, with an incision across the columella)",
      "Septoplasty (corrects deviated septum to improve breathing while maintaining appearance)",
      "Revision rhinoplasty (addresses issues from previous nasal surgery)",
    ],
    procedureDuration: "1.5-3 hours",
    procedureSteps: [
      "Incision placement is carefully chosen based on the selected technique, either inside the nostrils for a closed approach or across the columella for an open approach.",
      "Bone, cartilage, and tissue are reshaped with precision to achieve the desired form and function, guided by your personalized surgical plan.",
      "Meticulous closure with sutures minimizes scarring and supports optimal healing for natural-looking results.",
    ],
    recoveryTimeline:
      "You may have a splint or bandages in place for support during the initial healing period. Mild swelling, bruising, and discomfort are normal and managed with medication.\n\nReturn to work and light activities within 1-2 weeks. Strenuous activity should be avoided for several weeks. Final results become fully visible within one year as subtle residual swelling gradually subsides.",
  },
  {
    slug: "blepharoplasty",
    name: "Blepharoplasty",
    shortName: "Eyelid Surgery",
    category: "face",
    categorySlug: "face",
    heroImage: "/images/hero/SPS-Image-209.jpg",
    contentImage: "/images/procedures/SPS-Image-200.jpg",
    description:
      "Blepharoplasty, commonly known as eyelid surgery, revitalizes the eyes by removing excess skin, fat, and puffiness, offering natural, refreshed results tailored to your unique needs and goals. It is one of the most popular facial rejuvenation procedures because of its ability to create a dramatic yet natural improvement in overall appearance.\n\nThe procedure improves the appearance of the upper eyelids, lower eyelids, or both by carefully removing or repositioning excess skin, fat, and muscle. It effectively addresses drooping eyelids, under-eye bags, and other signs of aging around the eyes. In some cases, blepharoplasty can also improve vision by lifting sagging skin that may be obstructing the upper visual field.\n\nAt Specialized Plastic Surgery, our board-certified plastic surgeons take a meticulous, patient-centered approach to eyelid surgery. Incisions are placed along the natural creases of the eyelids or just below the lash line, ensuring that any scarring is virtually invisible once healed.",
    heroDescription:
      "Rejuvenate your appearance by correcting drooping eyelids, puffiness, and excess skin for brighter, more youthful eyes.",
    benefits: [
      "Youthful, refreshed appearance around the eyes",
      "Enhanced vision by lifting obstructing upper eyelid skin",
      "Smooth, rejuvenated eye contours and reduced puffiness",
      "Natural-looking results with hidden incision lines",
      "Quick procedure with relatively short recovery",
      "Can be combined with other facial procedures for comprehensive rejuvenation",
    ],
    candidateCriteria: [
      "Drooping upper eyelids affecting appearance or peripheral vision",
      "Under-eye bags, puffiness, or dark circles that create a tired look",
      "Excess skin creating a hooded or aged appearance around the eyes",
      "Good overall health with no serious eye conditions such as glaucoma or dry eye",
      "Non-smoker with realistic expectations about outcomes",
    ],
    techniques: [
      "Upper blepharoplasty (removes excess skin and fat from upper lids for a lifted, open look)",
      "Lower blepharoplasty (addresses bags and puffiness beneath the eyes for a smoother contour)",
      "Double eyelid surgery (creates a defined upper eyelid crease for enhanced definition)",
      "Combined upper and lower blepharoplasty for comprehensive, full eye rejuvenation",
    ],
    procedureSteps: [
      "Consultation and assessment: Your surgeon evaluates your eyelid anatomy, discusses goals, and develops a personalized treatment plan.",
      "Anesthesia: Local anesthesia with sedation or general anesthesia is administered for your comfort throughout the procedure.",
      "Incision placement: Precise incisions are made along the natural creases of the upper eyelids or just below the lash line of the lower eyelids.",
      "Tissue removal and repositioning: Excess skin, fat, and muscle are carefully removed or repositioned to achieve a natural, rejuvenated contour.",
      "Meticulous closure: Incisions are closed with fine sutures to minimize scarring, with suture lines hidden within natural eyelid folds.",
      "Recovery monitoring: You are observed post-procedure and given detailed aftercare instructions, including cold compress use and activity restrictions.",
    ],
    procedureDuration: "1-3 hours",
    recoveryTimeline:
      "Mild swelling and bruising are normal and typically subside within the first few days. Most patients return to work and daily activities within 1-2 weeks. Strenuous activity should be avoided for several weeks to support optimal healing.\n\nFinal results develop over the following months as residual swelling continues to resolve, revealing brighter, more youthful eyes. Follow-up appointments are scheduled to monitor your progress and ensure you are healing beautifully.",
  },
  {
    slug: "otoplasty",
    name: "Otoplasty",
    shortName: "Ear Surgery",
    category: "face",
    categorySlug: "face",
    heroImage: "/images/services/otoplasty-hero.webp",
    contentImage: "/images/gallery-heroes/otoplasty.jpg",
    description:
      "For individuals, both children and adults, who struggle with the appearance of prominent, protruding, or misshapen ears, the cosmetic impact can lead to lifelong self-consciousness. Otoplasty, often called ear pinning surgery, is a precise and highly effective procedure designed to correct these concerns, creating a more balanced, natural facial harmony.\n\nThe procedure corrects the shape, position, or size of the ear, with a focus on protruding or prominent ears. Two primary structural issues are addressed: a lack of antihelical fold, where the natural inner curve is underdeveloped causing the cartilage to flatten outward, and excessive conchal cartilage, where an oversized concavity pushes the ear away from the head.\n\nOur approach to otoplasty is tailored to correct the specific anatomical defect, ensuring the ears look completely natural, symmetrical, and perfectly proportional to the rest of the face. The primary incision is made behind the ear, in the natural crease where the ear meets the head, ensuring that any resulting scar is completely hidden from view.",
    heroDescription:
      "Reshape and reposition prominent or protruding ears for a natural, balanced appearance with precision techniques and hidden scarring.",
    benefits: [
      "Natural ear positioning that complements facial features",
      "Completely hidden scarring behind the ear",
      "Improved facial balance and symmetry",
      "Permanent correction that lasts a lifetime",
      "Suitable for both children (ages 5-7+) and adults",
      "Artistry focused results that never look pinned back or unnatural",
    ],
    candidateCriteria: [
      "Children ages 5-7+ when ear growth is substantially complete, preventing emotional trauma from teasing before school years",
      "Adults seeking permanent correction of protruding ears, performed under local anesthesia with sedation",
      "Prominent, overly large, or asymmetrical ears caused by lack of antihelical fold or excessive conchal cartilage",
      "Good overall health with realistic expectations for a more balanced appearance",
    ],
    techniques: [
      "Suturing technique (the pinning) using permanent internal sutures to reshape cartilage and create the missing antihelical fold without removing cartilage",
      "Cartilage sculpting to carefully remove a small section of the conchal bowl and set the ear back using sutures",
      "Combination approach for complex corrections requiring both reshaping and repositioning",
    ],
    procedureSteps: [
      "A private consultation to evaluate your ear anatomy, discuss your goals, and develop a personalized surgical plan.",
      "The primary incision is made behind the ear in the natural crease where the ear meets the head, keeping scars completely hidden.",
      "Depending on the anatomy, permanent internal sutures reshape the cartilage or a small section of conchal cartilage is removed to reposition the ear.",
      "The ears are secured closer to the head using precise suture placement, creating a natural antihelical fold and balanced proportions.",
      "A protective compression dressing is applied to support the new ear position during the initial healing phase.",
    ],
    procedureDuration: "1-2 hours",
    recoveryTimeline:
      "During the first 24-48 hours, mild pain is managed with medication while a bulky compression head dressing is worn. Keep the dressing dry and rest with your head elevated.\n\nAt one week, the head dressing is removed. Slight swelling, bruising, and numbness are normal. A soft compressive headband is worn continuously (except when showering) for 2-4 weeks.\n\nBy two weeks, most patients return to school or work and light activity resumes. Continue wearing the headband nightly and avoid any activities that could bend the ears.\n\nAt six weeks, significant swelling has resolved and the final result is approaching. Contact sports and strenuous activity can gradually resume at this point.",
  },
  {
    slug: "chin-liposuction",
    name: "Chin Liposuction",
    category: "face",
    categorySlug: "face",
    heroImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-126.jpg",
    contentImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-126.jpg",
    description:
      "Chin liposuction, also known as submental liposuction, is a precise surgical solution for double chin removal that permanently eliminates excess fat beneath the chin and restores jawline definition. The procedure uses small, discreet incisions to remove unwanted fat while sculpting the natural angle between the chin and neck, known as the cervicomental angle.\n\nAt Specialized Plastic Surgery, our board-certified plastic surgeons use advanced contouring techniques that allow for precise fat removal and sculpting of the submental area. Once the fat cells are removed, they do not return, delivering predictable and permanent results. The outcome is a sharper, more defined jawline and an improved facial profile that enhances overall facial balance.\n\nChin liposuction is ideal for individuals with good skin elasticity who want to address stubborn fat beneath the chin that does not respond to diet or exercise. This procedure can also be combined with other facial rejuvenation procedures such as a facelift or neck lift for more comprehensive results.",
    heroDescription:
      "Permanently eliminate the double chin and restore a sharper, more defined jawline with advanced contouring techniques for natural, long-lasting results.",
    benefits: [
      "Permanent fat removal from beneath the chin, fat cells do not return",
      "Enhanced jawline definition and sharper facial profile",
      "Improved cervicomental angle (chin-to-neck definition)",
      "Advanced contouring for natural, long-lasting results",
      "Minimal scarring from small incisions in discreet locations",
      "Can be combined with facelift or neck lift for comprehensive rejuvenation",
    ],
    candidateCriteria: [
      "Excess fat beneath the chin creating a double chin appearance",
      "Desire for improved jawline definition and a sharper profile",
      "Good skin elasticity for optimal contouring and skin retraction",
      "Stable weight and overall good health",
      "Stubborn submental fat that has not responded to diet or exercise",
    ],
    techniques: [
      "Traditional Submental Liposuction",
      "Tumescent Liposuction",
      "Power-Assisted Liposuction (PAL)",
      "Combined Chin Lipo with Neck Lift",
    ],
    procedureSteps: [
      "A thorough consultation evaluates your chin, jawline, and neck anatomy to develop a customized treatment plan aligned with your aesthetic goals.",
      "Small, discreet incisions are made beneath the chin or behind the ears, positioned to remain virtually invisible once healed.",
      "A tumescent solution is injected to numb the area, minimize bleeding, and facilitate smooth fat removal.",
      "A thin cannula is inserted through the incisions to precisely remove excess fat while sculpting the submental area for optimal contour.",
      "The incisions are closed with fine sutures and a compression garment is applied to support healing and minimize swelling.",
    ],
    procedureDuration: "30-60 minutes",
    recoveryTimeline:
      "During the first 24-48 hours, mild swelling and bruising are normal. A compression chin strap is worn to support the new contour and minimize swelling. Most discomfort is manageable with over-the-counter pain medication.\n\nBy one week, most patients return to work and daily activities. Swelling continues to improve and the jawline begins to take shape. The compression garment is typically worn for 2-3 weeks.\n\nAt 2-4 weeks, the majority of swelling has subsided and the improved jawline definition becomes more visible. Light exercise can gradually resume.\n\nFinal results are typically visible within 1-3 months as any remaining swelling fully resolves, revealing a sharper, more sculpted jawline and chin profile.",
  },

  // === AESTHETIC BREAST ===
  {
    slug: "augmentation",
    name: "Breast Augmentation",
    category: "aesthetic-breast",
    categorySlug: "aesthetic-breast",
    heroImage: "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-186.jpg",
    contentImage: "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-185-1.jpg",
    description:
      "Breast augmentation, also known as augmentation mammoplasty, is a surgical procedure designed to enhance the size, shape, and symmetry of the breasts using implants or fat transfer. At Specialized Plastic Surgery, our board-certified plastic surgeons partner with leading implant manufacturers, including Mentor, Allergan, Sientra, and Motiva, to offer the widest range of options tailored to each patient's aesthetic goals.\n\nWhether you are looking to restore volume lost after pregnancy or weight loss, correct asymmetry, or simply enhance your natural proportions, breast augmentation provides a personalized solution. Our surgeons take the time to understand your vision and recommend the ideal implant type, size, shape, and placement to achieve results that look and feel natural.\n\nAt our AAAASF-accredited surgical suite in Westchester, NY and our Millburn, NJ office, we combine advanced surgical techniques with our Enhanced Recovery After Surgery (ERAS) protocols to ensure a comfortable experience and faster recovery. Every augmentation is customized to your body frame, lifestyle, and aesthetic preferences, so the results complement your natural contours.",
    heroDescription:
      "Enhance your breast size, shape, and symmetry with personalized augmentation using the latest implant technology from leading manufacturers.",
    benefits: [
      "Enhanced breast size, shape, and overall proportions",
      "Improved symmetry between breasts",
      "Choice of saline, silicone, or gummy bear (cohesive gel) implants",
      "Partnership with top manufacturers: Mentor, Allergan, Sientra, and Motiva",
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
    procedureSteps: [
      "Incision placement in a discreet location, typically in the natural crease beneath the breast, around the areola, or in the armpit",
      "A pocket is created either above or below the chest muscle (pectoralis) based on your anatomy and desired outcome",
      "The selected implant is carefully positioned within the pocket and adjusted for optimal symmetry and projection",
      "Incisions are closed with layered sutures and a supportive compression garment is applied to minimize swelling",
      "Enhanced recovery protocols begin immediately, with most patients going home the same day",
    ],
    procedureDuration: "1-2 hours",
    recoveryTimeline:
      "Most patients return to work within 1-2 weeks. A supportive compression garment is worn during the initial healing period to reduce swelling and support the new breast shape. Avoid strenuous exercise and heavy lifting for 4-6 weeks. Swelling gradually subsides over the first few months, with final results visible after several months as the implants settle into their natural position. Follow-up appointments are scheduled to monitor your healing and ensure optimal results.",
  },
  {
    slug: "lift",
    name: "Breast Lift",
    shortName: "Breast Lift",
    category: "aesthetic-breast",
    categorySlug: "aesthetic-breast",
    heroImage: "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-215.jpg",
    contentImage: "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-165.jpg",
    description:
      "A breast lift, also known as mastopexy, is a cosmetic surgery procedure designed to raise and reshape sagging breasts by removing excess skin and tightening the surrounding tissue. Unlike breast augmentation, a breast lift does not significantly increase breast size but instead improves position, firmness, and overall shape.\n\nOver time, aging, pregnancy, breastfeeding, weight fluctuations, and gravity cause the breasts to lose their youthful appearance. A breast lift at Specialized Plastic Surgery addresses these changes, creating firmer, more symmetrical breasts that complement your natural body proportions. The results create a youthful contour that enhances body proportions and clothing fit. For patients who also desire increased volume, a breast lift can be combined with augmentation for a comprehensive transformation.",
    heroDescription:
      "Restore youthful breast contours by raising and reshaping sagging breasts with expert surgical precision at our New York and New Jersey offices.",
    benefits: [
      "Improved breast shape, firmness, and position",
      "Enhanced projection and youthful contour",
      "Symmetry correction between breasts",
      "Repositioned nipples and reduced areola size if needed",
      "Better fit in clothing, intimates, and swimwear",
      "Can be combined with augmentation for added volume",
    ],
    candidateCriteria: [
      "Experienced significant breast sagging or volume loss due to aging, pregnancy, or weight changes",
      "Nipples that point downward or sit below the breast crease",
      "Desire for youthful, uplifted contours without necessarily increasing size",
      "Non-smoker in good overall health, as smoking interferes with healing",
      "Stable weight with realistic expectations for outcomes",
    ],
    techniques: [
      "Crescent Lift (minimal sagging)",
      "Peri-Areolar (Donut) Lift",
      "Vertical (Lollipop) Lift",
      "Inverted-T (Anchor) Lift",
      "Breast Lift with Augmentation",
    ],
    procedureSteps: [
      "Incision Placement: Your surgeon makes the chosen incision type based on your individual anatomy and the degree of lifting needed.",
      "Reshaping and Lifting: Excess skin is removed, the breast tissue is reshaped, and the nipple and areola are repositioned to achieve a youthful contour.",
      "Closing Incisions: Incisions are carefully closed using layered sutures to minimize scarring and enhance recovery.",
    ],
    procedureDuration: "2-3 hours",
    recoveryTimeline:
      "Most patients experience swelling, soreness, and minor bruising that typically improves within the first few days. Our Enhanced Recovery Protocol includes detailed post-operative care instructions and pain management to promote a smooth recovery.\n\nReturn to work within 1-2 weeks depending on the nature of your job. Avoid heavy lifting or intense physical activity for 4-6 weeks. A supportive bra is worn during the healing period. Final results become visible within several months as swelling subsides and scars continue to fade. Follow-up appointments are scheduled to monitor healing and ensure satisfaction with your results.",
  },
  {
    slug: "reduction",
    name: "Breast Reduction",
    category: "aesthetic-breast",
    categorySlug: "aesthetic-breast",
    heroImage: "/images/hero/SPS-Image-158.jpg",
    contentImage: "/images/procedures/SPS-Image-189.jpg",
    description:
      "Breast reduction, or reduction mammoplasty, is a surgical procedure that removes excess breast tissue, fat, and skin to reduce the size and weight of the breasts. The procedure alleviates chronic physical discomfort associated with overly large breasts while creating a more proportionate, balanced figure that improves your ability to find well-fitting clothing and participate in physical activities.\n\nAt Specialized Plastic Surgery, breast reduction is one of the most frequently performed procedures, with Dr. Devulapalli having performed over 1,000 breast reductions. Many patients report immediate relief from chronic back, neck, and shoulder pain, along with a significant improvement in their ability to exercise and enjoy an active lifestyle. The procedure also reshapes and lifts the breasts for an aesthetically pleasing result.\n\nOur surgeons work closely with each patient to determine the ideal breast size and shape based on your body frame, lifestyle, and personal goals. Whether you are seeking relief from physical symptoms or a more proportionate silhouette, breast reduction delivers life-changing results with high patient satisfaction.",
    heroDescription:
      "Rediscover comfort and confidence with expert breast reduction surgery in New Jersey and New York.",
    benefits: [
      "Reducing physical discomfort: alleviates chronic pain in the back, neck, and shoulders caused by excess breast weight",
      "Improved mobility and fitness: enables easier participation in physical activities and exercise without restriction",
      "Enhanced body proportion and symmetry: creates a balanced figure with better clothing fit and increased confidence",
      "Relief from skin irritation and discomfort: reduces chafing, rashes, and infections beneath the breast crease",
      "Elimination of bra strap grooving: relieves painful shoulder indentations and nerve compression from heavy bras",
      "Improved self-confidence and quality of life: patients consistently report dramatic improvements in daily comfort and body image",
    ],
    candidateCriteria: [
      "Experience chronic back, neck, or shoulder pain caused by the weight of large breasts",
      "Breast size that limits physical activity, exercise, or causes self-consciousness",
      "Persistent skin irritation, rashes, or infections beneath the breast crease (intertrigo)",
      "Deep bra strap grooves, shoulder indentations, or numbness and tingling in arms and hands",
      "Posture problems or spinal issues related to breast weight",
      "Seeking a permanent solution for smaller, more balanced breasts with good overall health",
    ],
    techniques: [
      "Liposuction reduction (for patients with minor reduction needs and good skin elasticity)",
      "Vertical (lollipop) reduction (uses a circular incision around the areola and a vertical line to the breast crease for moderate reductions with less scarring)",
      "Anchor (inverted-T) reduction (for substantial reductions, with incisions around the areola, vertically to the breast crease, and horizontally along the crease for maximum reshaping)",
    ],
    procedureSteps: [
      "Personalized consultation: Your surgeon assesses your breast anatomy, discusses your goals for size and shape, and creates a customized surgical plan.",
      "Anesthesia: General anesthesia is administered to ensure your comfort and safety throughout the procedure.",
      "Incision placement: Incisions are carefully placed based on the selected technique, whether lollipop, anchor, or liposuction approach.",
      "Tissue removal and reshaping: Excess breast tissue, fat, and skin are removed, and the remaining tissue is reshaped to create a lifted, proportionate contour.",
      "Nipple and areola repositioning: The nipple-areola complex is moved to a higher, more natural position on the newly shaped breast mound.",
      "Precision closure: Incisions are meticulously closed in layers to optimize healing and minimize scarring, with sutures placed to support the new breast shape.",
    ],
    procedureDuration: "3-4 hours",
    recoveryTimeline:
      "Return to work in 1-2 weeks depending on the demands of your job. A surgical support bra is worn during the initial healing period to maintain your new breast shape and reduce swelling. Avoid strenuous activities and heavy lifting for 4-6 weeks.\n\nFinal results become visible within several months as swelling resolves and scars continue to fade. Most patients experience immediate relief from physical symptoms such as back and shoulder pain, even during the early recovery period. Follow-up appointments are scheduled to monitor your healing progress.",
    insuranceCoverage:
      "Breast reduction is one of the most common procedures covered by insurance when deemed medically necessary. Coverage criteria typically include documented chronic neck, shoulder, and back pain from breast weight, painful shoulder grooves from bra straps, chronic skin irritation or rashes (intertrigo), posture problems or spinal issues, numbness or tingling in arms and hands, and exercise limitations. At Specialized Plastic Surgery, our experienced surgical coordinators handle the entire insurance process for you, including pre-authorization, claims submission, and appeals if needed.",
  },
  {
    slug: "implant-removal",
    name: "Breast Implant Removal",
    shortName: "Explant Surgery",
    category: "aesthetic-breast",
    categorySlug: "aesthetic-breast",
    heroImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-1023.jpg",
    contentImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-190.jpg",
    description:
      "Breast implant removal, also known as explant surgery, is a procedure to remove breast implants, often accompanied by the removal of scar tissue (capsulectomy) that forms around the implant over time. At Specialized Plastic Surgery, we offer comprehensive explant options tailored to each patient's goals, restoring a harmonious, natural contour that suits your body's proportions and enhances your comfort.\n\nWhether you are experiencing implant related discomfort, concerns about implant integrity, or simply prefer a more natural look, our board-certified surgeons provide expert care throughout the entire process. Explant surgery can be performed on its own or combined with a breast lift to reshape and tighten the breast tissue after implant removal, ensuring the best possible outcome.\n\nOur surgeons understand that the decision to remove implants is deeply personal. We take the time to discuss your concerns, evaluate your anatomy, and develop a customized surgical plan that aligns with your aesthetic preferences and health goals.",
    heroDescription:
      "Rediscover your natural silhouette with expert breast implant removal, restoring comfort, confidence, and a harmonious contour tailored to your body.",
    benefits: [
      "Restore your natural breast size and shape, which may better align with your aesthetic preferences",
      "Relieve discomfort or complications such as capsular contracture, rupture, or shifting",
      "Address health concerns or alleviate symptoms associated with breast implants",
      "Better alignment with an active lifestyle, as smaller natural breasts may suit physical activities",
      "Option to combine with breast lift for an optimal, rejuvenated shape",
      "Permanent results with a natural feel and appearance",
    ],
    candidateCriteria: [
      "In good overall health with realistic expectations about outcomes",
      "Experiencing discomfort, hardness, or pain related to breast implants",
      "Desire to return to a more natural breast appearance and size",
      "Health or lifestyle concerns related to breast implants",
      "Concerns about implant integrity, rupture, or capsular contracture",
    ],
    techniques: [
      "Simple explantation (implants carefully removed through a small incision, preserving natural breast tissue)",
      "En bloc capsulectomy (implant and surrounding capsule removed in one piece, recommended for health concerns)",
      "Total capsulectomy (complete removal of both implant and all capsule tissue for thorough, clean removal)",
      "Combined explant with breast lift (mastopexy) to reshape and improve the breast's natural shape after removal",
    ],
    procedureSteps: [
      "Incision placement using the original incision site whenever possible to minimize additional scarring",
      "The implant is carefully removed along with the surrounding scar tissue capsule if necessary, using the technique best suited to your situation",
      "If a breast lift is performed simultaneously, excess skin is removed and the breast is reshaped for a natural contour",
      "Incisions are carefully closed to promote optimal healing and minimal scarring, with a supportive garment applied",
    ],
    procedureDuration: "1-2 hours",
    recoveryTimeline:
      "Mild soreness, swelling, and bruising are normal in the first few days and are managed with prescribed medications and proper care. Most patients return to daily activities within 1 to 2 weeks as swelling decreases.\n\nAvoid intense physical activities for approximately 4 to 6 weeks to support optimal healing. A supportive garment is worn during the initial recovery period. Final results will become apparent over several months as your breast tissue settles into its new, natural shape. Follow-up appointments allow us to monitor your recovery and ensure you are healing beautifully.",
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
    heroImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-142.jpg",
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
    procedureSteps: [
      "Liposuction or direct excision incisions are carefully planned based on the degree of tissue excess and your anatomy",
      "Excess fat is removed via liposuction, and dense glandular tissue is excised through small, discreet incisions around the areola",
      "The chest is sculpted and contoured for a natural, masculine appearance with meticulous closure to minimize scarring",
    ],
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
    heroImage: "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-218.jpg",
    contentImage: "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-155.jpg",
    description:
      "Natural tissue flap reconstruction, particularly the DIEP (Deep Inferior Epigastric Perforator) flap, represents the most advanced breast reconstruction option available today. The procedure uses a patient's own tissue from areas such as the abdomen, back, or thighs to recreate a breast following mastectomy. This autologous tissue reconstruction provides a softer, more natural outcome compared to implant-based approaches, and the results are designed to last a lifetime.\n\nThe DIEP flap is the most frequently performed and preferred technique at Specialized Plastic Surgery. It creates the most natural appearance using the patient's own abdominal fat and skin while preserving abdominal muscles entirely (unlike the TRAM flap). This preservation results in less post-operative pain, maintained core strength, and a lower risk of hernia. Because it uses the body's own tissue, the reconstruction adapts naturally to weight fluctuations and aging, tolerates radiation therapy better than synthetic materials, and offers a secondary abdominal contouring benefit similar to a tummy tuck.",
    heroDescription:
      "Rebuild your breast using your body's own tissue for the most natural-looking, long-lasting results with advanced microsurgical techniques at our New York and New Jersey offices.",
    benefits: [
      "Most natural look and feel using your own tissue",
      "Long-lasting results that age and change naturally with your body",
      "No synthetic implants required, reducing long-term complications",
      "Preserves abdominal muscles (DIEP flap technique)",
      "Secondary abdominal contouring benefit (similar to a tummy tuck)",
      "Better tolerance of radiation therapy than implants",
    ],
    candidateCriteria: [
      "Individuals who have undergone or are planning a mastectomy",
      "Patients with sufficient abdominal, thigh, or back tissue for harvesting",
      "Those wishing to avoid synthetic implants due to personal preference or prior complications",
      "Good overall health suitable for a microsurgical procedure",
      "Patients who have undergone or will undergo radiation therapy",
    ],
    techniques: [
      "DIEP Flap (preferred, preserves abdominal muscles entirely)",
      "TRAM Flap (uses abdominal muscle tissue)",
      "TDAP/LAT Flap (back tissue, often combined with an implant or fat grafting)",
      "PAP Flap (inner thigh tissue for patients without sufficient abdominal tissue)",
      "Hybrid Reconstruction (combines multiple techniques for personalized results)",
    ],
    procedureSteps: [
      "Surgical Planning: Your surgeon carefully marks the abdomen and plans the tissue harvest, mapping the perforator blood vessels using advanced imaging.",
      "Tissue Harvest: Skin and fat are carefully separated from the muscle layer while keeping abdominal muscles fully intact, preserving core strength.",
      "Microsurgical Reconnection: The deep inferior epigastric perforator vessels are detached and meticulously reconnected to chest blood vessels using microsurgery to ensure optimal blood flow and tissue viability.",
      "Breast Shaping: The harvested tissue is sculpted and shaped to recreate a natural breast mound, with careful attention to symmetry and contouring to match the patient's body frame.",
      "Follow-Up Procedures: Secondary surgery may be recommended for nipple-areolar reconstruction, symmetry fine-tuning, or Resensation nerve restoration.",
    ],
    procedureDuration: "6-8 hours under general anesthesia",
    recoveryTimeline:
      "Initial recovery requires 4-6 weeks of gradually increasing activity. During this period, patients may experience temporary discomfort, bruising, and swelling. Our team provides comprehensive aftercare instructions covering mobility, heavy lifting restrictions, and pain management.\n\nFull healing occurs over several months with regular check-up appointments to monitor the microsurgical connections and overall healing progress. Most patients return to work within 4-6 weeks depending on the nature of their job. Our Enhanced Recovery Protocols are designed to promote a faster, safer, and more comfortable healing process.",
    insuranceCoverage:
      "Covered by insurance under the Women's Health and Cancer Rights Act of 1998 (WHCRA), which mandates coverage for all stages of breast reconstruction after mastectomy, including natural tissue flap procedures, symmetry surgery on the opposite breast, external prostheses, and treatment of physical complications such as lymphedema.",
  },
  {
    slug: "implant-based",
    name: "Implant-Based Reconstruction",
    category: "breast-reconstruction",
    categorySlug: "breast-reconstruction",
    heroImage: "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-220.jpg",
    contentImage: "https://specializedplasticsurgery.com/wp-content/uploads/2025/11/SPS-Center-Image.jpg",
    description:
      "Implant-based reconstruction is a type of breast reconstruction that involves placing an implant beneath the chest muscle or just above it, recreating the shape and appearance of the breast after mastectomy. This approach often involves a two-stage process: first, a temporary tissue expander is placed to gradually stretch the skin and make space for the permanent implant; then, in a second procedure, the tissue expander is removed and the permanent implant is inserted.\n\nImplant-based reconstruction offers several benefits that make it a popular choice for many breast cancer patients. This option typically involves a shorter, less complex surgery and a faster recovery period than natural tissue flap reconstruction. It also allows patients with limited donor tissue to achieve natural-looking results. There are two main types of implants: saline implants (filled with sterile salt water) and silicone implants (filled with silicone gel, providing a softer, more natural look and feel).\n\nAt Specialized Plastic Surgery, our board-certified surgeons bring fellowship-trained microsurgical expertise and a commitment to personalized care. Whether you are a candidate for direct-to-implant reconstruction or a staged approach, we work closely with your oncology team to develop a plan that aligns with your cancer treatment timeline and aesthetic goals.",
    heroDescription:
      "Restore breast shape after mastectomy with advanced implant technology for a quicker recovery and customizable results.",
    benefits: [
      "Shorter recovery time compared to tissue flap procedures",
      "Less invasive surgery without additional donor sites",
      "Highly customizable with a range of implant sizes, shapes, and profiles",
      "No donor site required, suitable for leaner body types",
      "Versatile options including saline, silicone, and form-stable implants",
      "Can be performed at the time of mastectomy for immediate reconstruction",
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
    procedureSteps: [
      "Coordination with your oncology and surgical team to plan the optimal reconstruction timeline, whether immediate or delayed",
      "During the first stage, a tissue expander is placed beneath the chest muscle or skin at the time of mastectomy (or in a separate procedure)",
      "Over several weeks, the tissue expander is gradually filled with saline during office visits to gently stretch the skin and create space",
      "In a second procedure, the tissue expander is exchanged for the permanent implant of your chosen type, size, and profile",
      "For direct-to-implant candidates, the permanent implant is placed in a single surgery at the time of mastectomy, eliminating the expansion phase",
    ],
    procedureDuration: "1-2 hours per breast",
    recoveryTimeline:
      "Recovery after implant-based reconstruction is generally smoother and shorter than tissue flap reconstruction. Patients can expect an initial healing period of 2-3 weeks, with minor restrictions on lifting and strenuous activity for several additional weeks. Mild swelling and discomfort are normal and managed through our Enhanced Recovery protocols. Regular follow-up appointments monitor healing and ensure implants settle naturally. Most patients can gradually return to normal activities within 4-6 weeks.",
    insuranceCoverage:
      "Covered by insurance under the Women's Health and Cancer Rights Act of 1998 (WHCRA), which mandates coverage for all stages of breast reconstruction after mastectomy. Our dedicated insurance team handles the entire pre-authorization process to maximize your benefits.",
  },
  {
    slug: "oncoplastic",
    name: "Oncoplastic Breast Reduction",
    category: "breast-reconstruction",
    categorySlug: "breast-reconstruction",
    heroImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-214.jpg",
    contentImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-129.jpg",
    description:
      "Oncoplastic breast reduction, also known as Therapeutic Mammoplasty, is a specialized procedure that combines the removal of cancerous breast tissue with immediate cosmetic reshaping. This two-in-one approach allows your surgeon to achieve clear oncologic margins while simultaneously lifting and reducing breast volume, delivering both health outcomes and aesthetic symmetry in a single operation.\n\nRather than leaving a visible deformity or contour irregularity after tumor removal, the surgeon rearranges the surrounding breast tissue to fill the void left by the excision, creating a natural and balanced shape. To achieve optimal symmetry, a contralateral breast reduction (reducing the opposite, healthy breast) is often performed at the same time, so both breasts match in size and proportion.\n\nThis approach is particularly valuable for women with larger breasts who may also benefit from the functional relief of a reduction, addressing chronic back, neck, and shoulder discomfort alongside their cancer treatment.",
    heroDescription:
      "Achieving symmetry and confidence after breast cancer through expert oncoplastic reconstruction that combines cancer removal with cosmetic breast reshaping.",
    benefits: [
      "Superior aesthetic results compared to traditional lumpectomy alone",
      "Improved breast symmetry through simultaneous contralateral reduction",
      "Functional relief from chronic back, neck, and shoulder pain caused by heavy breasts",
      "Enhanced psychological well-being and body confidence during cancer recovery",
      "Single combined procedure, reducing the total number of surgeries needed",
      "Allows larger tumor excisions with better cosmetic outcomes than standard lumpectomy",
    ],
    candidateCriteria: [
      "Patients requiring a lumpectomy rather than a full mastectomy",
      "Women with larger tumors where standard lumpectomy would cause noticeable deformity",
      "Patients with large or heavy breasts who would benefit from both reduction and cancer treatment",
      "Good overall health suitable for a combined oncologic and cosmetic procedure",
      "Women seeking improved symmetry and proportion after breast cancer surgery",
    ],
    techniques: [
      "Wise Pattern (anchor incision) with circumareolar, vertical, and inframammary components, ideal for significant reductions and maximum lifting",
      "Vertical Pattern (lollipop incision) around the areola and vertically downward, suitable for moderate reductions with less visible scarring",
      "Circumareolar technique with an incision only around the areola, best for small tumors or minor reshaping with minimal scarring",
      "Contralateral symmetry reduction to match the treated breast, ensuring balanced size and shape on both sides",
    ],
    procedureSteps: [
      "Collaborative Surgical Planning: Your breast surgeon and plastic surgeon work together to plan tumor removal and breast reshaping as a coordinated procedure, using imaging and clinical evaluation to design incision patterns that achieve clear margins while preserving the best possible contour.",
      "Tumor Excision and Tissue Rearrangement: The breast surgeon removes the cancerous tissue with adequate margins, and the plastic surgeon immediately rearranges the remaining breast tissue to fill the defect, lifting and reshaping the breast using reduction mammoplasty techniques.",
      "Contralateral Breast Reduction: When appropriate, the opposite breast is reduced and lifted to match the treated side, ensuring both breasts are symmetrical in size, shape, and position for a balanced, natural appearance.",
      "Recovery and Oncologic Follow-Up: After surgery, you will be monitored for healing and follow up with both your oncology team for any additional cancer treatments (such as radiation) and your plastic surgeon to track your cosmetic results and long-term symmetry.",
    ],
    recoveryTimeline:
      "Most patients return to light daily activities within 1-2 weeks. Surgical drains, if placed, are typically removed within the first week. Strenuous exercise and heavy lifting should be avoided for 4-6 weeks. Swelling gradually subsides over 2-3 months, and final breast shape and symmetry continue to refine over 6-12 months. If radiation therapy follows surgery, your surgeon will monitor how healing progresses and may recommend minor adjustments once treatment is complete.",
    insuranceCoverage:
      "Oncoplastic breast reduction is frequently covered by insurance as a medically necessary cancer treatment procedure. The contralateral breast reduction for symmetry is also typically covered under the Women's Health and Cancer Rights Act (WHCRA). Our team specializes in navigating the pre-authorization process, submitting detailed letters of medical necessity, clinical photographs, and supporting documentation to maximize your insurance benefits and minimize out-of-pocket costs.",
  },
  {
    slug: "resensation",
    name: "Resensation",
    shortName: "Nerve Restoration",
    category: "breast-reconstruction",
    categorySlug: "breast-reconstruction",
    heroImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-185-1.jpg",
    contentImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-180.jpg",
    description:
      "Losing nipple sensation is a common concern for women undergoing mastectomy or breast reconstruction surgery. Specialized Plastic Surgery is proud to offer Resensation, a cutting-edge nerve grafting technology designed to preserve or restore protective and erogenous sensation in the chest area after surgery. Using advanced microsurgical techniques, Resensation can help patients achieve not only aesthetic but also functional restoration, enhancing their overall quality of life.\n\nResensation is a revolutionary technique that leverages the body's natural ability to regenerate nerves. During breast reconstruction surgery, a specially processed nerve allograft is used to connect the nerves in the chest to the reconstructed breast. This enables the body to rebuild nerve pathways, potentially restoring protective sensation and sensitivity to the nipple and surrounding breast tissue.\n\nThis innovative approach is ideal for patients who prioritize feeling whole again, not just in appearance but in physical sensation as well. By incorporating Resensation into breast reconstruction, Specialized Plastic Surgery takes a holistic approach to healing that focuses on the functional outcomes of breast reconstruction alongside the aesthetic results.",
    heroDescription:
      "Preserve or restore protective and erogenous sensation to the breast and nipple area after mastectomy using cutting-edge nerve grafting technology.",
    benefits: [
      "Improved quality of life through restored sensation to warmth, touch, and pressure, helping protect the reconstructed breast from injury",
      "Potential recovery of erogenous sensation to the nipple and surrounding areas, which is key to feeling whole again",
      "A more complete reconstruction experience that combines both aesthetic and functional restoration",
      "Performed seamlessly during reconstruction surgery with no additional incisions or recovery time",
      "Uses proven, specially processed nerve allograft technology backed by clinical research",
      "Leverages the body's natural ability to regenerate nerves over time",
    ],
    candidateCriteria: [
      "Undergoing or planning to undergo mastectomy and breast reconstruction",
      "Choosing natural tissue flap reconstruction (such as DIEP flap or other tissue flaps)",
      "Committed to advanced microsurgical techniques performed by fellowship-trained surgeons",
      "Desire both functional sensation recovery and aesthetic restoration",
      "Want to prioritize feeling whole again beyond just the visual outcome",
    ],
    procedureSteps: [
      "During the mastectomy, the surgeon carefully identifies the severed nerve endings in the chest area and prepares them for grafting.",
      "A Resensation nerve allograft is precisely placed to bridge the gap between the chest nerves and the reconstructed breast tissue.",
      "Using advanced microsurgical techniques, the surgeon connects the allograft to both the chest nerves and the natural tissue flap used in reconstruction.",
      "Over time, the body naturally integrates the nerve graft, allowing nerves to regenerate and potentially restore sensation to the breast and nipple area.",
    ],
    procedureDuration: "Performed during reconstruction surgery (adds minimal additional time)",
    recoveryTimeline:
      "Recovery from Resensation aligns with your overall breast reconstruction recovery. Most patients recover within 4-6 weeks, with light activities resuming earlier as guided by your surgeon.\n\nSensation return is gradual. While some patients notice sensation within months, nerve regeneration is a slow process that can take up to two years. The timeline varies for each individual based on factors such as the extent of surgery and overall health.\n\nSpecialized Plastic Surgery ensures consistent post-operative care, with regular follow-up appointments to track your progress and monitor nerve regeneration throughout your recovery journey.",
    insuranceCoverage:
      "Covered as part of breast reconstruction under the Women's Health and Cancer Rights Act (WHCRA). Our dedicated insurance team handles authorization, claims submission, and appeals to help maximize your benefits.",
  },
  {
    slug: "revision",
    name: "Revision Breast Reconstruction",
    category: "breast-reconstruction",
    categorySlug: "breast-reconstruction",
    heroImage: "/images/services/revision-hero.jpg",
    contentImage: "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-169.jpg",
    description:
      "Revision breast reconstruction is a specialized procedure designed to address concerns or complications from prior breast reconstruction. Unlike primary reconstruction, which is performed immediately after mastectomy, revision surgery focuses on enhancing or correcting the results of an earlier procedure.\n\nAt Specialized Plastic Surgery, we believe that every patient deserves optimal results. Whether you experience issues with implants, tissue flaps, or asymmetry, our surgeons offer personalized revision options to improve prior breast reconstruction results. Common reasons for revision include improving symmetry, addressing changes in breast shape over time, resolving implant related issues such as capsular contracture or malposition, and enhancing the overall appearance.\n\nEach revision is tailored to meet the unique needs of the patient. During your consultation, our board-certified plastic surgeons assess your individual concerns and goals to determine the best revision approach, restoring confidence and comfort with results that look and feel natural.",
    heroDescription:
      "Improve or correct results from prior breast reconstruction with personalized revision options for symmetry, comfort, and natural appearance.",
    benefits: [
      "Enhanced symmetry and balanced proportions for a more cohesive appearance",
      "Correction of implant complications including capsular contracture, displacement, and rippling",
      "Refined tissue flap contours through additional sculpting or fat grafting for a rejuvenated look",
      "Relief from pain or discomfort caused by scar tissue, nerve issues, or poor implant positioning",
      "Restored shape after aging or weight changes to rejuvenate breast contour",
      "Option to change reconstruction type, including conversion from implants to natural tissue flap or vice versa",
    ],
    candidateCriteria: [
      "Seeking improvement in breast symmetry, contour, or size after prior reconstruction, with uneven or disproportionate breasts that could benefit from revision",
      "Experiencing implant complications such as capsular contracture, displacement, or rupture that affect comfort and appearance",
      "Discomfort or pain from previous surgery caused by scar tissue, nerve issues, or poor implant positioning that may be alleviated through revision",
      "Desire to change reconstruction type, transitioning from implants to natural tissue reconstruction or vice versa based on lifestyle or evolving preferences",
      "Changes in breast shape due to aging or weight fluctuations requiring rejuvenation of breast contour",
    ],
    techniques: [
      "Implant exchange, removal, or repositioning to improve comfort and appearance, including switching implant types or selecting autologous reconstruction",
      "Capsular contracture correction through removal of hardened scar tissue to improve the feel and shape of the breast",
      "Natural tissue (flap) refinement with additional contouring or fat grafting to improve shape and symmetry",
      "Fat grafting using fat transfer from another body area to add volume, smooth contours, and fill uneven areas",
      "Scar revision and tissue reshaping to improve appearance and achieve a more natural look",
      "Nipple and areola reconstruction or adjustment to improve aesthetic balance",
      "Conversion from subpectoral to prepectoral implant placement, combining breast lift benefits with implant fullness",
    ],
    procedureSteps: [
      "A thorough consultation where your surgeon evaluates your current reconstruction, discusses your concerns and goals, and develops a personalized revision plan.",
      "Customized incision and access, carefully working with previous scars to minimize new scarring while providing optimal surgical access.",
      "Correction of existing issues with precision, whether implant repositioning, fat grafting, tissue reshaping, or flap contouring to address each concern.",
      "Final adjustments to achieve the desired symmetry and contour, ensuring results that look and feel natural.",
      "Careful closure and bandaging to support healing, with detailed aftercare instructions for optimal recovery.",
    ],
    recoveryTimeline:
      "Most patients return to work and daily routines within one to two weeks, depending on the extent of revision. Physical activity should be limited for 4-6 weeks to promote healing and support the best outcomes.\n\nSwelling gradually subsides over the following months, with improved shape and symmetry becoming more visible over time. Regular follow-up appointments allow your surgical team to monitor progress, ensuring results heal beautifully and meet your expectations.",
    insuranceCoverage:
      "Covered under the Women's Health and Cancer Rights Act (WHCRA) for all stages of breast reconstruction, including revision procedures. Our dedicated insurance team handles pre-authorization and claims submission to help maximize your benefits.",
  },
  {
    slug: "specialized",
    name: "Specialized Reconstruction Procedures",
    category: "breast-reconstruction",
    categorySlug: "breast-reconstruction",
    heroImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-243.jpg",
    contentImage: "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-155.jpg",
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
    procedureSteps: [
      "Comprehensive consultation to evaluate your anatomy, medical history, and goals, with a customized surgical plan developed for your specific needs",
      "The selected procedure is performed using advanced microsurgical techniques, with meticulous attention to symmetry, contour, and natural appearance",
      "Careful closure and postoperative care instructions are provided, with follow-up appointments to monitor healing and optimize your results",
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
    heroImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-233.jpg",
    heroVideo: "/videos/SPS-Video-103.mp4",
    contentImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-197.jpg",
    description:
      "Liposuction is a cosmetic surgical procedure that removes unwanted fat from targeted areas of the body. By precisely breaking down and suctioning fat cells, liposuction can provide long-lasting contour improvements in areas such as the abdomen, thighs, hips, arms, and neck. Unlike weight loss, which reduces the size of fat cells, liposuction permanently removes these cells, resulting in a leaner appearance in the treated areas.\n\nAt Specialized Plastic Surgery, our board-certified plastic surgeons use advanced liposuction techniques to help patients achieve a smoother, more contoured silhouette tailored to each person's aesthetic goals and unique anatomy. Many patients choose liposuction to enhance their natural body contours and renew their confidence when diet and exercise alone cannot address stubborn pockets of fat.\n\nOur surgeons employ multiple liposuction technologies, including tumescent, ultrasound-assisted, and power-assisted techniques, selecting the ideal approach based on the treatment area, fat density, and your desired outcome. Combined with our Enhanced Recovery After Surgery (ERAS) protocols, patients experience less discomfort and a faster return to daily activities.",
    heroDescription:
      "Permanently remove stubborn fat deposits and refine your body contours with precision liposuction techniques.",
    benefits: [
      "Targeted, permanent removal of stubborn fat deposits",
      "Refined body contours and improved proportions",
      "Multiple treatment areas in a single session (abdomen, thighs, hips, arms, neck)",
      "Enhanced clothing fit and comfort",
      "Long-lasting results when maintaining a healthy lifestyle",
      "Boosted self-confidence and body image",
    ],
    candidateCriteria: [
      "Close to ideal weight with localized fat deposits that do not respond to diet or exercise",
      "Good skin elasticity for optimal contouring (firmer skin adapts better to new contours)",
      "Non-smoker in good overall health",
      "Desire more defined body contours without significant weight loss",
      "Realistic expectations about results and committed to maintaining a healthy lifestyle",
    ],
    techniques: [
      "Traditional liposuction (cannula-based fat removal for precise control)",
      "Tumescent liposuction (anesthetic solution for comfort and reduced bleeding)",
      "Ultrasound-assisted liposuction (UAL) for dense or fibrous fat areas",
      "Power-assisted liposuction (PAL) with vibrating cannula for efficiency",
    ],
    procedureSteps: [
      "Anesthesia is administered (local with sedation or general) and the target areas are carefully marked to guide sculpting",
      "A tumescent solution is injected into the treatment area to numb the tissue, minimize bleeding, and facilitate fat removal",
      "Small, discreet incisions are placed near the target areas, typically just a few millimeters in length",
      "A thin cannula is inserted through the incisions to precisely break down and suction out the targeted fat deposits",
      "The surgeon sculpts and contours the area for smooth, natural-looking results, then closes the incisions and applies a compression garment",
    ],
    procedureDuration: "1-3 hours depending on the number of areas treated",
    recoveryTimeline:
      "Compression garments are worn for several weeks to reduce swelling and help the body adjust to its new contours. Most patients resume light activities within a few days and return to work within 1-2 weeks. Mild bruising and swelling are normal and gradually subside over the following weeks. Full results become visible within 1-3 months as the body heals and the skin adapts to the refined contours. Follow-up appointments are scheduled to monitor your progress.",
  },
  {
    slug: "lipo-360",
    name: "Lipo 360",
    category: "body",
    categorySlug: "body",
    heroImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2026/02/pexels-kindelmedia-7298900.jpg",
    contentImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2026/02/pexels-kindelmedia-7298670.jpg",
    description:
      "Lipo 360 is an advanced body contouring procedure designed to sculpt the entire midsection and create a slimmer, more defined waistline. By targeting the abdomen, flanks, and lower back together, Lipo 360 enhances natural curves and improves overall body balance. This comprehensive approach enhances overall body proportion rather than producing isolated improvements.\n\nUnlike traditional liposuction that targets only one area, Lipo 360 focuses on shaping the abdomen, flanks, and lower back together to create balanced, natural looking results. At Specialized Plastic Surgery, Lipo 360 is performed with precision, artistic planning, and advanced surgical technique.\n\nThe procedure is designed to remove stubborn fat deposits that do not respond to diet or exercise. By sculpting the torso in a complete 360 degree manner, Lipo 360 improves body proportions and enhances waist-to-hip contrast, delivering a sculpted appearance that aligns with each patient's natural anatomy.",
    heroDescription:
      "Sculpt your waistline with advanced circumferential body contouring, targeting the abdomen, flanks, and lower back for a slimmer, more defined silhouette.",
    benefits: [
      "Sharper waist-to-hip contrast and enhanced natural curves",
      "Complete 360 degree sculpting of the entire midsection from every angle",
      "Smoother transitions between body areas with no abrupt contour changes",
      "More balanced, proportionate silhouette and improved body proportions",
      "Targeted removal of stubborn fat that does not respond to diet or exercise",
      "Improved body confidence in and out of clothing",
    ],
    candidateCriteria: [
      "Close to goal weight with stubborn fat in the abdomen, flanks, and back",
      "Good skin elasticity for optimal contouring results",
      "No significant loose skin requiring surgical removal",
      "Non-smoker in good overall health with realistic expectations",
      "Desire for comprehensive midsection sculpting rather than isolated fat removal",
    ],
    techniques: [
      "Traditional Lipo 360 (circumferential liposuction of the abdomen, flanks, and lower back)",
      "Tumescent technique (anesthetic solution for comfort and precise fat removal)",
      "Power-assisted liposuction (PAL) for efficient, smooth contouring",
      "Combined Lipo 360 with Brazilian Butt Lift for enhanced curves and fat transfer",
    ],
    procedureSteps: [
      "Small, discreet incisions are placed in natural creases around the midsection, typically just a few millimeters in length",
      "A tumescent solution is injected to numb the treatment area, minimize bleeding, and facilitate smooth fat removal",
      "A specialized cannula is used to carefully remove fat from the abdomen, flanks, and lower back while sculpting the body with precision",
      "The surgeon evaluates contours from all angles to ensure balanced, symmetrical results before closing incisions and applying a compression garment",
    ],
    procedureDuration: "2-4 hours",
    recoveryTimeline:
      "A compression garment is worn for several weeks to support healing and optimize contouring results. Most patients return to desk work within 5 to 10 days and physical work in 3 to 4 weeks.\n\nAvoid strenuous exercise for 4 to 6 weeks to support optimal healing. Mild bruising and swelling are normal and gradually subside over the following weeks. Final results become fully visible at 3 to 6 months as swelling completely resolves, revealing a sculpted, defined midsection.",
  },
  {
    slug: "bbl",
    name: "Brazilian Butt Lift",
    shortName: "BBL",
    category: "body",
    categorySlug: "body",
    heroImage: "/images/services/bbl-hero.jpg",
    description:
      "A Brazilian Butt Lift is a specialized body contouring procedure that combines liposuction with fat transfer to the buttocks to enhance volume and improve body proportions. Instead of implants, this technique uses purified fat harvested from areas such as the abdomen, flanks, lower back, or thighs. The fat is carefully processed and strategically re-injected to create smoother transitions, enhanced projection, and a more defined waist-to-hip ratio.\n\nBecause the procedure uses your own tissue, results look and feel natural while also refining the surrounding contours through sculpting. Choosing a Brazilian Butt Lift means choosing comprehensive body sculpting, not just added fullness. By combining liposuction and fat transfer, this procedure reshapes multiple areas to create striking, balanced curves.\n\nAt Specialized Plastic Surgery, our board-certified surgeons use advanced fat transfer techniques to maximize fat survival and create results that are proportional, natural, and long lasting. Every procedure is tailored to your body frame and aesthetic goals, ensuring a harmonious silhouette.",
    heroDescription:
      "Enhance your curves naturally by combining liposuction with fat transfer to the buttocks for improved volume and body proportions.",
    benefits: [
      "Natural enhancement using your own fat with no implants required",
      "Improved waist definition through targeted liposuction sculpting that narrows the waist and enhances contrast",
      "Hip dip correction with strategic fat placement to smooth inward hip contours",
      "Long-lasting results as transferred fat establishes its own blood supply for sustained shape",
      "Comprehensive body sculpting of multiple areas in one procedure, reshaping the abdomen, flanks, and buttocks together",
      "Natural look and feel that moves with your body and ages gracefully over time",
    ],
    candidateCriteria: [
      "Sufficient donor fat in the abdomen, flanks, thighs, or lower back for harvesting and transfer",
      "Good skin elasticity and a stable body weight maintained for at least several months",
      "Healthy adults who do not smoke, as smoking interferes with fat survival and healing",
      "Realistic expectations about natural enhancement rather than artificial structure",
      "Understanding of the recovery process, including sitting modifications and positioning adjustments during the initial healing weeks",
    ],
    techniques: [
      "Targeted liposuction of the abdomen, flanks, lower back, and thighs for fat harvesting and body sculpting",
      "Advanced fat purification and processing to maximize viable fat cell survival",
      "Strategic multi-layer fat injection for enhanced projection, smoother transitions, and natural contours",
      "Hip dip correction through precise fat placement to create a smooth, rounded silhouette",
      "Lipo 360 technique for circumferential sculpting combined with buttock augmentation",
    ],
    procedureSteps: [
      "Targeted liposuction is performed on donor areas such as the abdomen, flanks, lower back, and thighs to harvest fat and sculpt the surrounding contours.",
      "The harvested fat is carefully purified and processed using advanced techniques to maximize the number of viable fat cells for transfer.",
      "Purified fat is strategically injected into the buttocks at multiple layers and angles to create enhanced projection, smooth transitions, and a natural shape.",
      "Additional fat placement may be used to correct hip dips and refine the overall waist-to-hip ratio for a balanced, proportional result.",
      "A compression garment is applied to support the newly sculpted areas and optimize fat survival during the initial healing phase.",
    ],
    procedureDuration: "2-4 hours",
    recoveryTimeline:
      "Compression garments are worn to support healing and maintain your new contours. During the first 2-3 weeks, avoid sitting directly on the buttocks to protect the transferred fat. A special BBL pillow is provided for necessary sitting.\n\nMost patients return to light activities within 1-2 weeks and resume work within 2-3 weeks depending on the nature of their job. Strenuous exercise should be avoided for 6-8 weeks. Follow-up visits ensure healing progresses smoothly while preserving your sculpted results. Final results become visible in 3-6 months as swelling resolves and the transferred fat settles into its permanent position.",
  },
  {
    slug: "tummy-tuck",
    name: "Tummy Tuck",
    shortName: "Abdominoplasty",
    category: "body",
    categorySlug: "body",
    heroImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image128.jpg",
    contentImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-193.jpg",
    description:
      "A tummy tuck, or abdominoplasty, is a surgical procedure that removes excess skin and fat from the abdominal area, tightens weakened or separated muscles, and creates a smoother, more toned midsection. This procedure not only addresses loose skin and unwanted fat, but also repairs underlying abdominal muscles that may have been stretched or damaged, especially after pregnancy.\n\nUnlike liposuction, which primarily removes fat, a tummy tuck improves the contour and firmness of the abdomen by addressing both the skin and muscles. At Specialized Plastic Surgery, our surgeons offer multiple abdominoplasty techniques including full, mini, and extended tummy tucks, selecting the best approach based on each patient's anatomy and goals. Liposuction of the flanks may be combined for additional waist contouring.\n\nPerformed under general anesthesia at our AAAASF-accredited surgical suite, every tummy tuck is planned with meticulous attention to incision placement, ensuring scars are positioned low on the abdomen and hidden by most clothing and swimwear. Our Enhanced Recovery After Surgery (ERAS) protocols help minimize discomfort and speed your return to daily life.",
    heroDescription:
      "Achieve a flatter, more toned abdomen by removing excess skin, eliminating stubborn fat, and tightening weakened muscles.",
    benefits: [
      "Flatter, firmer abdomen with improved muscle tone",
      "Tightened and repaired separated abdominal muscles (diastasis recti)",
      "Removal of excess skin and stretch marks below the incision line",
      "Improved body contour and waistline definition",
      "Relief from weakened core muscles, improved posture, and reduced lower back pain",
      "Can be combined with liposuction for enhanced waist sculpting",
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
    procedureSteps: [
      "A low, horizontal incision is made across the lower abdomen, carefully positioned to be hidden by underwear and swimwear",
      "Excess skin and fat are removed from the abdominal area, and the belly button is repositioned if needed (full tummy tuck)",
      "Weakened or separated abdominal muscles are tightened and sutured together, restoring core strength and a flatter profile",
      "Optional liposuction of the flanks and waistline is performed for additional contouring and a more sculpted result",
      "The incisions are carefully closed in layers and a compression garment is applied to support healing and minimize swelling",
    ],
    procedureDuration: "2-4 hours",
    recoveryTimeline:
      "Initial recovery requires 1-2 weeks of limited activity. Patients are encouraged to walk gently within the first few days to promote circulation. A compression garment is worn for several weeks to support the abdomen and reduce swelling. Incisions are placed low for discreet scarring hidden by most clothing. Avoid strenuous exercise and heavy lifting for 6-8 weeks. Swelling gradually subsides over the following months, with sculpted final results becoming visible within 3-6 months. Follow-up appointments are scheduled to monitor healing and ensure optimal results.",
  },
  {
    slug: "mommy-makeover",
    name: "Mommy Makeover",
    category: "body",
    categorySlug: "body",
    heroImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-244.jpg",
    heroVideo: "/videos/SPS-Video-104.mp4",
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
    procedureSteps: [
      "In-depth consultation to discuss your concerns, goals, and which combination of procedures will deliver the best results for your body",
      "Your customized combination of procedures (tummy tuck, breast lift/augmentation, liposuction) is performed in a single session under general anesthesia",
      "Careful closure with compression garments applied, followed by detailed aftercare instructions and scheduled follow-up appointments to monitor your recovery",
    ],
    recoveryTimeline:
      "Initial recovery of 1-2 weeks with limited activity. Most patients resume desk work and light activities within 1-2 weeks. Avoid strenuous exercise for 6-8 weeks. It may take several months for swelling to fully subside, revealing your final results.",
  },
  {
    slug: "body-lift",
    name: "Body Lift",
    category: "body",
    categorySlug: "body",
    heroImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-227.jpg",
    contentImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-213.jpg",
    description:
      "Significant weight loss, whether achieved through bariatric surgery or dedicated lifestyle changes, is a life-changing accomplishment that deserves to be celebrated. But for many people, the journey doesn't end there. Almost everyone who loses a substantial amount of weight is left with some degree of loose or sagging skin. When someone loses 100 pounds or more, the skin often cannot \"bounce back\" on its own.\n\nA body lift is an extensive plastic surgery procedure that removes large amounts of excess skin and tightens the underlying tissue around the midsection, thighs, and buttocks. At Specialized Plastic Surgery, we help patients from New York City, Westchester County, New Jersey, Connecticut, and throughout the TriState Area complete their weight loss transformation through post-bariatric body contouring. The goal is not weight reduction, but rather to sculpt and refine the body's final shape, dramatically improving both the look and feel of the skin.\n\nExcess skin after massive weight loss can create a warm, moist environment prone to yeast and bacterial infections, cause painful rashes and chafing, limit mobility and make exercise difficult, and prevent clothing from fitting properly. Body lift surgery addresses all of these concerns in a customizable approach tailored to each patient's needs.",
    heroDescription:
      "Comprehensive body lift surgery in New Jersey and New York, helping patients achieve their post-weight loss goals by removing excess skin and reshaping the body.",
    benefits: [
      "Improved hygiene by eliminating skin folds that lead to rashes, irritation, and infection",
      "Increased mobility by removing heavy, redundant skin that restricts physical activity and exercise",
      "Enhanced comfort by eliminating chafing and physical discomfort caused by excess skin",
      "Smoother contours with a firmer, more proportional body silhouette",
      "Better-fitting clothes that sit properly and comfortably on your new frame",
      "Renewed confidence and a sense of self-esteem that matches your weight loss achievement",
    ],
    candidateCriteria: [
      "Significant, stable weight loss (typically 100+ pounds) with loose, hanging skin around the midsection and limbs",
      "Weight stable for at least 6 months (we recommend waiting at least 1 year after bariatric surgery to allow weight to fully stabilize)",
      "Good overall health with no medical conditions that would impair healing",
      "Non-smoker or willing to quit prior to surgery",
      "Realistic expectations about surgical results, including understanding that permanent scarring is strategically placed to be hidden by undergarments",
    ],
    techniques: [
      "Lower body lift (circumferential, the most comprehensive procedure addressing abdomen, flanks, outer thighs, and buttocks in one operation)",
      "Panniculectomy (removal of the overhanging abdominal skin \"apron\")",
      "Abdominoplasty (tummy tuck for abdominal muscle tightening and skin removal)",
      "Thigh lift (thighplasty for inner, outer, or posterior thigh excess skin)",
      "Arm lift (brachioplasty to eliminate excess skin of the upper arms)",
      "Breast lift (mastopexy for deflated or sagging breasts after weight loss)",
    ],
    procedureSteps: [
      "Comprehensive consultation to evaluate your excess skin, discuss your goals, and create a customized surgical plan tailored to the areas that need the most improvement.",
      "Surgery is performed under general anesthesia using advanced techniques and strategic incision placement to remove excess skin while ensuring scars can be hidden by undergarments and bathing suits.",
      "Underlying tissue is tightened and reshaped to create firmer, smoother contours around the midsection, thighs, and buttocks.",
      "Advanced pain management protocols, including nerve blocks, are used to optimize your comfort during the recovery process.",
    ],
    recoveryTimeline:
      "Initial recovery requiring restricted activity is typically 3-4 weeks. During this time, you will need to limit movement and follow detailed aftercare instructions to support optimal healing.\n\nFull recovery and return to vigorous exercise can take 6-8 weeks, with final results continuing to refine for up to one year. While body lift surgery does require strategically placed incisions, we strive to place scars where they can be hidden by undergarments and bathing suits. Scars will fade significantly over time.",
    insuranceCoverage:
      "A portion of your body lift procedure, such as a panniculectomy (removal of the large flap of overhanging skin), may be deemed medically necessary and partially covered by insurance. This typically requires documentation of chronic medical issues like rashes, infections, or pain related to the excess skin. Insurance companies require documentation of chronic skin infections, rashes, or medical complications, medical records from your primary doctor or bariatric surgeon, and photos and detailed notes showing how excess skin impacts your health. Our in-house insurance coordinators understand the process and will work closely with you to submit the required paperwork.",
  },
  {
    slug: "thigh-lift",
    name: "Thigh Lift",
    shortName: "Thighplasty",
    category: "body",
    categorySlug: "body",
    heroImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-217.jpg",
    contentImage:
      "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-197.jpg",
    description:
      "A thigh lift (thighplasty) is a comprehensive body contouring procedure focused on reshaping the thighs by surgically removing excess skin and, in some cases, excess fat deposits that lead to a sagging appearance. While many patients achieve weight loss success through diet, fitness, or bariatric surgery, the skin often loses its elasticity and cannot conform to the body's new, smaller contours, leaving behind loose folds that no amount of exercise can correct.\n\nThigh lift surgery offers dual benefits: aesthetic improvement through firmer, more youthful leg contours that allow clothes to fit better, and functional relief by eliminating uncomfortable skin-on-skin friction (chafing) and addressing chronic hygiene concerns caused by hanging skin folds. These functional issues can significantly impact daily comfort and quality of life, making a thigh lift both a cosmetic and quality-of-life procedure.\n\nAt Specialized Plastic Surgery, our surgeons employ meticulous, advanced surgical techniques with deep internal sutures that anchor the underlying tissues, supporting the newly contoured skin and promoting the best possible long-term scar quality. Every incision is customized and mapped while standing to account for gravity, ensuring the most discreet placement and optimal final results.",
    heroDescription:
      "Achieve firm, contoured, and proportionate legs by removing excess skin and fat with expert thighplasty techniques.",
    benefits: [
      "Firmer, more youthful leg contours and improved proportions",
      "Elimination of skin friction, chafing, and chronic irritation between the thighs",
      "Improved hygiene by removing hanging skin folds that trap moisture",
      "Better clothing fit and increased comfort during physical activity",
      "Can be combined with liposuction for enhanced sculpting and smoother results",
      "Deep tissue anchoring techniques for long-lasting contour improvement",
    ],
    candidateCriteria: [
      "Achieved a stable, healthy weight maintained for six months or more",
      "Significant loose, non-elastic skin on the inner or outer thighs that does not respond to exercise",
      "Limited response to liposuction alone (excess skin rather than just fat)",
      "Psychologically prepared to accept surgical scarring in exchange for dramatically improved shape and comfort",
      "Good overall health and a non-smoker",
    ],
    techniques: [
      "Medial (inner) thigh lift with incision placed high in the groin crease, keeping the scar hidden beneath underwear or swimwear",
      "Extended/vertical thigh lift with an additional vertical incision down the inner thigh for extreme skin laxity after massive weight loss",
      "Lateral and outer thigh lift targeting the outer side and front of the thigh, often performed as part of a comprehensive body lift",
      "Combination with liposuction to remove residual fat pockets for optimally sculpted, smooth contours",
    ],
    procedureSteps: [
      "Customized Planning: Your surgeon evaluates your thigh anatomy and skin laxity, then maps the incision lines while you are standing to account for gravity and ensure the most discreet scar placement.",
      "Anesthesia and Incision: General anesthesia is administered and precise incisions are made according to the chosen technique, whether medial, extended, or lateral.",
      "Tissue Removal and Reshaping: Excess skin and fat are carefully removed, and deep internal sutures are placed to anchor the underlying tissues, supporting the new contour and reducing tension on the skin closure.",
      "Liposuction (if applicable): Targeted liposuction may be performed simultaneously to remove stubborn fat deposits and create smoother transitions between treated and untreated areas.",
      "Closure and Compression: The incisions are closed in layers for minimal tension, and a compression garment is applied immediately to reduce swelling and support the newly contoured thighs.",
    ],
    recoveryTimeline:
      "Most patients require 1-2 weeks off work, depending on the extent of their procedure. A compression garment is worn consistently for several weeks to minimize swelling and support the new contours. Walking is encouraged early to promote circulation, but strenuous activity and heavy lifting must be avoided for 4-6 weeks. Swelling and bruising gradually subside over the first few weeks, and final results become visible within 3-6 months as tissues fully heal and settle into their new shape. Follow-up appointments are scheduled to monitor your progress and scar healing.",
  },
  {
    slug: "arm-lift",
    name: "Arm Lift",
    shortName: "Brachioplasty",
    category: "body",
    categorySlug: "body",
    heroImage: "/images/services/arm-lift-hero.jpg",
    description:
      "An arm lift, or brachioplasty, is a procedure designed to improve the shape and definition of the upper arms by removing excess skin and fat. The incision is strategically placed along the inner arm, hidden in the natural folds to ensure minimal visible scarring.\n\nAt Specialized Plastic Surgery, we offer several arm lift approaches depending on the degree of excess tissue. A full brachioplasty involves a longer incision from elbow to armpit for patients with significant excess and is often combined with liposuction to improve the arm-to-chest transition. A short scar brachioplasty uses a shorter incision from the elbow to the upper arm for those needing minimal correction and is suitable for patients with healthy, elastic skin. For younger patients with excess fat but firm skin, arm liposuction uses small, hidden incisions to reduce arm size without addressing skin laxity.\n\nOur board-certified surgeons specialize in body contouring and take a personalized approach to each patient's goals. Advanced techniques emphasize natural looking, long lasting results while prioritizing patient comfort and safety throughout the process.",
    heroDescription:
      "Sculpt and define your upper arms by removing excess skin and fat for a toned, youthful appearance.",
    benefits: [
      "Toned, defined upper arm contour with enhanced shape and definition",
      "Removal of excess sagging skin commonly known as bat wings",
      "Improved arm shape and smoother transition to the chest area",
      "Discreet incision placement along the inner arm, hidden in natural folds",
      "Enhanced confidence in sleeveless clothing, swimwear, and everyday wear",
      "Natural looking, long lasting results tailored to your body frame",
    ],
    candidateCriteria: [
      "Significant excess skin on the upper arms not responsive to diet or exercise",
      "Stable body weight maintained for at least 6 months to ensure lasting results",
      "Good overall health suitable for surgery with no conditions that impair healing",
      "Non-smoker with realistic expectations about achievable outcomes",
      "Acceptance of surgical scarring along the inner arm in exchange for dramatically improved contour",
    ],
    techniques: [
      "Full brachioplasty with an incision extending from elbow to armpit for significant excess, often combined with liposuction for enhanced contouring",
      "Short scar brachioplasty using a shorter incision for patients needing minimal correction with healthy, elastic skin",
      "Arm liposuction using small, hidden incisions for younger patients with excess fat but firm skin who do not need skin removal",
    ],
    procedureSteps: [
      "A personalized consultation to evaluate your upper arm anatomy, skin quality, and degree of excess tissue, then develop a tailored surgical plan.",
      "The appropriate technique is selected based on your anatomy: full brachioplasty, short scar, or liposuction, with incisions placed along the inner arm for minimal visibility.",
      "Excess skin and fat are carefully removed, and the remaining tissue is reshaped to create a smooth, toned arm contour with an improved transition to the chest.",
      "Incisions are meticulously closed in layers to minimize scarring, and a compression garment is applied to support healing and maintain your new arm shape.",
    ],
    procedureDuration: "1-3 hours",
    recoveryTimeline:
      "Most patients return to light activities within 1-2 weeks. A compression garment is worn during the initial healing period to support your new arm contour and reduce swelling.\n\nAvoid heavy lifting and strenuous upper body exercise for 4-6 weeks to allow proper healing. Scars along the inner arm gradually fade over the following months and continue to improve for up to a year. Follow-up appointments are scheduled to monitor your progress and ensure optimal results.",
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
