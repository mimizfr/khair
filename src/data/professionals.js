// Mock Database of Verified Support Professionals in the UAE

export const INITIAL_PROFESSIONALS = [
  {
    id: "prof-1",
    name: "Dr. Sarah Al-Mansoori",
    specialty: "Speech-Language Therapist",
    location: "Dubai",
    experience: 12,
    priceRange: "400 - 550", // AED per hour
    languages: ["Arabic", "English"],
    sessionTypes: ["In-person", "Online", "Hybrid"],
    conditionsSupported: ["Speech Delay", "Autism", "Social Communication Disorder", "Stuttering"],
    verifiedBadge: "DHA Licensed Speech Therapist",
    verificationChecklist: {
      licenseChecked: true,
      backgroundCheck: true,
      degreeAuthenticated: true,
      referencesVerified: true
    },
    verificationDetails: {
      licenseNumber: "DHA-L-102947",
      degree: "Ph.D. in Communication Disorders, Boston University",
      backgroundCheckDate: "May 2026",
      referenceCount: 3
    },
    bio: "Dr. Sarah is a compassionate speech therapist with over a decade of experience helping bilingual children in the UAE build strong communication foundations. She specializes in neurodiversity-affirming, play-based speech therapy for autistic children.",
    services: [
      "Individual Speech & Language Therapy",
      "Bilingual Language Development Assessments",
      "Parent-Led Communication Coaching"
    ],
    trustExplanation: "Dr. Sarah Al-Mansoori has been verified through a complete review of her clinical credentials. Her DHA License was verified directly with the Dubai Health Authority. She completed our face-to-face onboarding interview and cleared a local UAE criminal record check.",
    avatarBg: "from-[#2F6F6D] to-[#A7C4BC]"
  },
  {
    id: "prof-2",
    name: "Michael Sterling, M.Ed.",
    specialty: "Special Educator",
    location: "Abu Dhabi",
    experience: 8,
    priceRange: "250 - 350",
    languages: ["English"],
    sessionTypes: ["In-person", "Hybrid"],
    conditionsSupported: ["ADHD", "Dyslexia", "Dysgraphia", "Executive Dysfunction"],
    verifiedBadge: "ADEK Certified Special Educator",
    verificationChecklist: {
      licenseChecked: true,
      backgroundCheck: true,
      degreeAuthenticated: true,
      referencesVerified: true
    },
    verificationDetails: {
      licenseNumber: "ADEK-T-882910",
      degree: "M.Ed. in Special Education, Vanderbilt University",
      backgroundCheckDate: "April 2026",
      referenceCount: 2
    },
    bio: "Michael is a dedicated educator who focuses on designing tailored Individualized Education Plans (IEPs) that build academic confidence and address learning differences. He utilizes structured, multi-sensory reading and math interventions.",
    services: [
      "Individualized Educational Planning & IEP Design",
      "Multi-sensory Reading & Dyslexia Tutoring",
      "Executive Function & Study Skills Coaching"
    ],
    trustExplanation: "Michael Sterling's teaching credentials and ADEK licensing have been verified. His academic degree from Vanderbilt University has been authenticated by the UAE Ministry of Education. References from two local schools in Abu Dhabi have been checked and cleared.",
    avatarBg: "from-[#C89F7B] to-[#A7C4BC]"
  },
  {
    id: "prof-3",
    name: "Yasmin Haddad",
    specialty: "Occupational Therapist",
    location: "Sharjah",
    experience: 6,
    priceRange: "300 - 450",
    languages: ["Arabic", "English", "French"],
    sessionTypes: ["In-person", "Hybrid"],
    conditionsSupported: ["Sensory Processing Disorder", "Fine Motor Delay", "Dyspraxia", "Autism"],
    verifiedBadge: "MOH Licensed Occupational Therapist",
    verificationChecklist: {
      licenseChecked: true,
      backgroundCheck: true,
      degreeAuthenticated: true,
      referencesVerified: true
    },
    verificationDetails: {
      licenseNumber: "MOH-L-884920",
      degree: "B.Sc. in Occupational Therapy, McGill University",
      backgroundCheckDate: "March 2026",
      referenceCount: 3
    },
    bio: "Yasmin is passionate about enabling children to participate fully in daily life. She designs sensory-friendly home environments and helps children develop motor planning, coordination, fine-motor capabilities, and emotional regulation skills.",
    services: [
      "Sensory Integration Assessment & Therapy",
      "Fine Motor and Handwriting Interventions",
      "Home and Classroom Sensory Environment Adaptation"
    ],
    trustExplanation: "Yasmin Haddad is licensed by the UAE Ministry of Health (MOH). Her educational qualification from McGill University has been fully authenticated. She has cleared a complete background screening and active reference checks.",
    avatarBg: "from-[#2F6F6D] to-[#C89F7B]"
  },
  {
    id: "prof-4",
    name: "Aisha Al-Hashimi, BCBA",
    specialty: "Learning Specialist",
    location: "Dubai",
    experience: 7,
    priceRange: "350 - 500",
    languages: ["English", "Arabic"],
    sessionTypes: ["In-person", "Online", "Hybrid"],
    conditionsSupported: ["Autism", "ADHD", "Oppositional Defiant Disorder", "Developmental Delay"],
    verifiedBadge: "BCBA Certified Behavior Analyst",
    verificationChecklist: {
      licenseChecked: true,
      backgroundCheck: true,
      degreeAuthenticated: true,
      referencesVerified: true
    },
    verificationDetails: {
      licenseNumber: "BCBA-1-19-38290",
      degree: "M.Sc. in Applied Behavior Analysis, University of Kent",
      backgroundCheckDate: "June 2026",
      referenceCount: 4
    },
    bio: "Aisha uses positive, naturalistic behavior therapy to help children develop functional communication and social skills. She firmly believes in compassionate, trauma-informed behavior support and works closely with parents for consistency.",
    services: [
      "Applied Behavior Analysis (ABA) Therapy",
      "Positive Behavior Support Plans (PBS)",
      "Parent Training & Home Implementation Guides"
    ],
    trustExplanation: "Aisha is a Board Certified Behavior Analyst (BCBA) verified via the BACB Registry. Her master's degree has been authenticated by the UAE Ministry of Education. She has passed all background checks and reference screening processes.",
    avatarBg: "from-[#A7C4BC] to-[#2F6F6D]"
  },
  {
    id: "prof-5",
    name: "Dr. Liam Vance",
    specialty: "Educational Psychologist",
    location: "Abu Dhabi",
    experience: 15,
    priceRange: "550 - 700",
    languages: ["English"],
    sessionTypes: ["In-person", "Online", "Hybrid"],
    conditionsSupported: ["Dyscalculia", "Giftedness", "Autism", "ADHD", "Dyslexia"],
    verifiedBadge: "DHA Licensed Psychologist",
    verificationChecklist: {
      licenseChecked: true,
      backgroundCheck: true,
      degreeAuthenticated: true,
      referencesVerified: true
    },
    verificationDetails: {
      licenseNumber: "DHA-L-55291",
      degree: "Psy.D. in Educational Psychology, University College London",
      backgroundCheckDate: "February 2026",
      referenceCount: 3
    },
    bio: "Dr. Liam specializes in comprehensive educational assessments, diagnostic evaluations, and helping parents navigate school accommodations (IEPs) in the UAE school system. He focuses on identifying a child's strengths.",
    services: [
      "Cognitive and Academic Assessments",
      "ADHD & Autism Diagnostic Evaluations",
      "School Accommodations & IEP Advocacy Consultation"
    ],
    trustExplanation: "Dr. Liam Vance's license as a clinical psychologist has been verified. His doctoral credentials and academic certificates have been fully authenticated, and all background checks are clear.",
    avatarBg: "from-[#C89F7B] to-[#2F6F6D]"
  }
];
