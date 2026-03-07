export interface Doctor {
  slug: string;
  name: string;
  title: string;
  credentials: string;
  location: string;
  locationKey: "nj" | "ny";
  image: string;
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
    education: [
      "Robert Wood Johnson Medical School (7-year BA/MD program)",
      "Georgetown University Hospital (General Surgery Residency)",
      "Johns Hopkins University and R. Adams Cowley Shock Trauma Center",
      "NYU Langone Health (Plastic and Reconstructive Surgery Residency)",
    ],
    boardCertifications: [
      "American Board of Plastic Surgery",
      "American Board of Surgery",
      "Fellow, American College of Surgeons (FACS)",
    ],
    recognition: [
      "Castle Connolly Top Doctor",
      "Featured in Jersey's Best Magazine",
      "Featured in New York Magazine",
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
      "Dr. Sosin believes in a patient-first approach, which integrates the patient's goals and desires while combining aesthetic artistry with a meticulous surgical skillset to achieve optimal results.",
    publications: "90+ peer-reviewed publications and 8 book chapters",
    notableAchievement:
      "Primary team member of New York State's first successful face transplant",
  },
  {
    slug: "chris-devulapalli",
    name: "Dr. Chris Devulapalli",
    title: "Board-Certified Plastic Surgeon",
    credentials: "MD",
    location: "Harrison, NY",
    locationKey: "ny",
    image: "/images/team/dr-devulapalli.jpg",
    education: [
      "Thomas Jefferson University School of Medicine (Philadelphia)",
      "Georgetown University Hospital (Surgical Training)",
      "Georgetown University (Microsurgery Fellowship)",
    ],
    boardCertifications: [
      "American Board of Plastic Surgery",
      "Member, American Society of Plastic Surgeons",
      "Member, American College of Surgery",
    ],
    recognition: [
      "Castle Connolly Top Doctor",
      "US News Top Doctor",
      "Featured in New York Magazine",
      "Featured in Jersey's Best Magazine",
    ],
    awards: [],
    specialtiesAesthetic: [
      "Breast augmentation, lift, and reduction",
      "Tummy tucks and liposuction",
      "Brazilian butt lifts",
      "Mommy makeovers",
      "Facial procedures (rhinoplasty, blepharoplasty, facelifts)",
    ],
    specialtiesReconstructive: [
      "Breast reconstruction following mastectomy",
      "Advanced microsurgery techniques",
      "Oncoplastic reduction",
      "Resensation procedures for nipple sensation restoration",
    ],
    philosophy:
      "Personalized, detail-oriented care with natural-looking results. Fellowship-trained microsurgeon providing advanced anatomical understanding and precision.",
    quote:
      "For the past 15 years, from plastic surgery residency to microsurgery fellowship, I've dedicated my life to learning and mastering advanced breast reconstruction techniques. I've built my practice around delivering state-of-the-art care to help breast cancer patients restore form, function, and a sense of self.",
  },
];
