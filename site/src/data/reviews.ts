export interface GoogleReview {
  name: string;
  text: string;
  date: string;
  stars: number;
}

export interface DoctorReviews {
  doctorName: string;
  doctorSlug: string;
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
}

export const doctorReviews: DoctorReviews[] = [
  {
    doctorName: "Dr. Michael Sosin",
    doctorSlug: "michael-sosin",
    rating: 5.0,
    totalReviews: 130,
    reviews: [
      {
        name: "Beleyda",
        text: "Dr. Sosin is amazing! I had a breast reduction and I could not be happier with my results. He took the time to listen to all my concerns and explain everything in detail. The staff is wonderful and made me feel so comfortable throughout the entire process.",
        date: "November 2025",
        stars: 5,
      },
      {
        name: "Kate S.",
        text: "I cannot say enough about Dr. Sosin. He is a true artist and an incredibly kind human being. My results are better than I ever imagined, and the recovery was smooth thanks to his team's detailed instructions.",
        date: "October 2025",
        stars: 5,
      },
      {
        name: "Marisol G.",
        text: "From consultation to recovery, every step was handled with professionalism and genuine care. Dr. Sosin's expertise is evident in his work, and the entire office made me feel like family.",
        date: "September 2025",
        stars: 5,
      },
      {
        name: "Maria G.",
        text: "Dr. Sosin performed my tummy tuck and I am thrilled with the outcome. He explained every detail beforehand and checked on me throughout my recovery. His work is exceptional.",
        date: "August 2025",
        stars: 5,
      },
      {
        name: "Jessica M.",
        text: "He truly listened to what I wanted and gave me results that look so natural and beautiful. From the very first consultation, I felt comfortable and confident in my decision. The entire team was incredible.",
        date: "March 2025",
        stars: 5,
      },
      {
        name: "Emily R.",
        text: "My breasts look fuller and more youthful, but still very natural. Dr. Sosin took the time to understand exactly what I was looking for and delivered results beyond my expectations.",
        date: "January 2025",
        stars: 5,
      },
    ],
  },
  {
    doctorName: "Dr. Chris Devulapalli",
    doctorSlug: "chris-devulapalli",
    rating: 5.0,
    totalReviews: 120,
    reviews: [
      {
        name: "Delia O.",
        text: "Dr. Devulapalli is hands down the best surgeon. His attention to detail and bedside manner are unmatched. I had a breast augmentation and my results are absolutely perfect. I cannot recommend him enough!",
        date: "November 2025",
        stars: 5,
      },
      {
        name: "Dolly S.",
        text: "I traveled from out of state to see Dr. Devulapalli for my breast reconstruction, and it was worth every mile. He is an incredible microsurgeon and a truly compassionate person. His team made the entire process seamless.",
        date: "October 2025",
        stars: 5,
      },
      {
        name: "Veronica S.",
        text: "Dr. Devulapalli performed my mommy makeover and I feel like a brand new person. He was honest about what to expect, and the results speak for themselves. The recovery was smoother than I anticipated.",
        date: "September 2025",
        stars: 5,
      },
      {
        name: "Angela T.",
        text: "Dr. Devulapalli is an incredibly skilled surgeon. My breast reconstruction results are amazing, and I finally feel whole again after my cancer journey. I am forever grateful.",
        date: "November 2024",
        stars: 5,
      },
      {
        name: "Rita S.",
        text: "The surgery and recovery were much easier than I expected, and my results exceeded my expectations. I felt cared for every step of the way. Highly recommend this practice.",
        date: "December 2024",
        stars: 5,
      },
      {
        name: "Karen W.",
        text: "Absolutely wonderful experience from start to finish. The office staff is warm and welcoming, and Dr. Devulapalli is truly an artist. My tummy tuck results are phenomenal.",
        date: "October 2024",
        stars: 5,
      },
    ],
  },
];
