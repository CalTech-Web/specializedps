export interface Doctor {
  slug: string;
  name: string;
  title: string;
  credentials: string;
  location: string;
  locationKey: "nj" | "ny";
  image: string;
  heroImage?: string;
  education: string[];
  boardCertifications: string[];
  recognition: string[];
  awards: string[];
  specialtiesAesthetic: string[];
  specialtiesReconstructive: string[];
  philosophy: string;
  quote?: string;
  publications?: string;
  notableAchievement?: string;
}

export const doctors: Doctor[] = [
  {
    slug: "michael-sosin",
    name: "Dr. Michael Sosin",
    title: "Board-Certified Plastic Surgeon",
    credentials: "MD, FACS",
    location: "Millburn, NJ",
    locationKey: "nj",
    image: "/images/team/dr-sosin.jpg",
    heroImage: "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-232.jpg",
    education: [
      "Robert Wood Johnson Medical School (Accelerated 7-year BA/MD program)",
      "Georgetown University Hospital (General Surgery Residency)",
      "Johns Hopkins University and R. Adams Cowley Shock Trauma Center (Research Fellowship)",
      "NYU Langone Health (Research Fellowship)",
      "NYU Langone Health (Plastic and Reconstructive Surgery Residency)",
    ],
    boardCertifications: [
      "American Board of Plastic Surgery",
      "American Board of Surgery",
      "Fellow, American College of Surgeons (FACS)",
      "Member, American Society of Plastic Surgeons",
      "Member, American College of Surgery",
    ],
    recognition: [
      "Castle Connolly Top Doctor",
      "Featured in Jersey's Best Magazine",
      "Featured in New York Magazine",
      "Featured in New York Metro Area digital guide",
    ],
    awards: [
      "Best Clinical Paper Award, American Society of Maxillofacial Surgery",
      "Best Reconstructive Paper Award, Plastic and Reconstructive Surgery Journal",
      "Mother of Pearl Winner (Georgetown University resident teaching award)",
      "Edward H. Preston, MD Award (Georgetown Department of Surgery)",
      "Harry B. Zehner, Jr. Travelling Award (American College of Surgeons)",
    ],
    specialtiesAesthetic: [
      "Face lift and neck lift",
      "Rhinoplasty",
      "Blepharoplasty (eyelid surgery)",
      "Otoplasty (ear surgery)",
      "Breast augmentation, lift, and reduction",
      "Brazilian Butt Lift",
      "Tummy tuck and body contouring",
      "Liposuction and Lipo 360",
    ],
    specialtiesReconstructive: [
      "Breast reconstruction (DIEP flap, implant-based, oncoplastic reduction)",
      "Complex facial reconstruction",
      "Microsurgery and tissue flap procedures",
      "Male breast reconstruction",
      "Lymphedema surgery",
    ],
    philosophy:
      "Dr. Michael Sosin is a double board-certified plastic surgeon specializing in a wide range of reconstructive and aesthetic procedures. After completing a highly competitive accelerated 7-year BA/MD program at Robert Wood Johnson Medical School, Dr. Sosin trained at Georgetown University Hospital, Johns Hopkins, and NYU Langone Health. He was a primary team member of the face transplant team who performed the first successful face transplant in New York State. Having authored over 90 peer-reviewed publications and 8 book chapters, Dr. Sosin believes in a patient-first approach, integrating the patient's goals and desires while combining aesthetic artistry with a meticulous surgical skillset to achieve optimal results.",
    publications: "90+ peer-reviewed publications and 8 book chapters",
    notableAchievement:
      "Primary team member of New York State's first successful face transplant",
  },
  {
    slug: "chris-devulapalli",
    name: "Dr. Chris Devulapalli",
    title: "Board-Certified Plastic Surgeon",
    credentials: "MD",
    location: "Harrison, NY (Westchester County)",
    locationKey: "ny",
    image: "https://specializedplasticsurgery.com/wp-content/uploads/2025/05/IMG_1227DCD.jpg",
    heroImage: "https://specializedplasticsurgery.com/wp-content/uploads/2025/01/SPS-Image-1023.jpg",
    education: [
      "Thomas Jefferson University School of Medicine (Medical School)",
      "Georgetown University Hospital (General Surgery Residency)",
      "Johns Hopkins Hospital (Research Fellowship)",
      "Georgetown University Hospital (Plastic and Reconstructive Surgery Residency)",
      "Georgetown University Hospital (Microsurgery Fellowship)",
    ],
    boardCertifications: [
      "American Board of Plastic Surgery",
      "Member, American Society of Plastic Surgeons",
      "Member, American College of Surgery",
      "Member, American Society of Reconstructive Microsurgery (ASRM)",
      "AOA Honor Medical Society",
    ],
    recognition: [
      "Castle Connolly Top Doctor",
      "US News Top Doctor",
      "Featured in New York Magazine, Westchester",
      "Featured in Jersey's Best Magazine",
      "Featured in New York Metro Area digital guide",
    ],
    awards: [
      "Plastic Surgery Foundation Research Grant Award, 2014",
      "Plastic Surgery Foundation Pilot Research Grant Recipient",
      "AOA Honor Medical Society, 2011",
    ],
    specialtiesAesthetic: [
      "Breast augmentation, lift, and reduction",
      "Tummy tucks and body contouring",
      "Brazilian butt lifts",
      "Mommy makeovers",
      "Liposuction and Lipo 360",
      "Facial procedures (rhinoplasty, blepharoplasty, facelifts)",
    ],
    specialtiesReconstructive: [
      "Breast reconstruction (DIEP flap, implant-based, oncoplastic)",
      "Advanced microsurgery and nerve grafting techniques",
      "Resensation procedure for nipple sensation restoration",
      "Oncoplastic breast reduction",
      "Complex breast revision surgery",
    ],
    philosophy:
      "Dr. Chris Devulapalli is a highly respected board-certified plastic surgeon, renowned in Westchester and surrounding areas for his expertise in both cosmetic and reconstructive procedures. A graduate of Jefferson Medical College, Dr. Devulapalli completed his general surgery and plastic surgery training at Georgetown University Hospital, then pursued a fellowship in microsurgery at Georgetown, specializing in advanced breast reconstruction, aesthetic breast surgery, and mommy makeovers. His meticulous attention to detail and personalized approach ensure results that look natural and feel authentically you.",
    quote:
      "For the past 15 years, from plastic surgery residency to microsurgery fellowship, I've dedicated my life to learning and mastering advanced breast reconstruction techniques. I've built my practice around delivering state-of-the-art care to help breast cancer patients restore form, function, and a sense of self.",
  },
];
