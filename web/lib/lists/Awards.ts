// ./lists/Awards.ts
export interface AwardDetail {
  title: string;
  competition: string;
}

export interface Award {
  season: string;
  title: string;
  details: AwardDetail[];
}

export const awards: Award[] = [
  {
    season: "2024-25",
    title: "High Stakes",
    details: [
      { title: "Excellence Award", competition: "Glenforest iDESIGN 365 VEX V5 Robotics Competition High Stakes" },
      { title: "Tournament Champions", competition: "Glenforest iDESIGN 365 VEX V5 Robotics Competition High Stakes" },
      { title: "Robot Skills 2nd Place", competition: "Glenforest iDESIGN 365 VEX V5 Robotics Competition High Stakes" },
      { title: "Design Award", competition: "Brampton V5RC Qualifier" },
    ],
  },
  {
    season: "2023-24",
    title: "Over Under",
    details: [
      { title: "Excellence Award", competition: "Ontario VRC H.S. Over/Under Provincial Championships 2024" },
      { title: "Tournament Finalists", competition: "iDESIGN Central Toronto VEX VRC Robotics Competition" },
      { title: "Excellence Award", competition: "iDESIGN Central Toronto VEX VRC Robotics Competition" },
      { title: "Innovate Award", competition: "TCTM & CSAA Blended VRC Lunar New Year Qualifier" },
      { title: "Tournament Finalists", competition: "Canadian Open VRC Signature Event" },
      { title: "Robot Skills 2nd Place", competition: "The RiverBots II VRC Over Under Signature Event" },
      { title: "Excellence Award", competition: "St. Catharines VRC Qualifier" },
      { title: "Tournament Champions", competition: "St. Catharines VRC Qualifier" },
      { title: "Robot Skills Champion", competition: "St. Catharines VRC Qualifier" },
      { title: "Judges Award", competition: "Blended VRC In-Person Over/Under Qualifier" },
      { title: "Excellence Award", competition: "VRC In Person Over/Under MS/HS Tournament" },
      { title: "Design Award", competition: "Battle by the Beach VRC Signature Event" },
      { title: "Global Finalist", competition: "Mathworks FollowThePathChallenge" },
    ],
  },
  {
    season: "2022-23",
    title: "Spin Up",
    details: [
      { title: "Create Award", competition: "VEX Robotics Ontario In-person VRC Provincial Championships 2023" },
      { title: "Robot Skills Champion", competition: "VEX Skills Ontario Qualifier" },
      { title: "Innovate Award", competition: "iDESIGN Central Toronto VEX Robotics Competition" },
      { title: "Tournament Finalists", competition: "iDESIGN Central Toronto VEX Robotics Competition"},
      { title: "Design Award", competition: "CanSTEAM December VRC In Person Qualifying Tournament"},
      { title: "Global Finalist", competition: "Reverse Engineering Challenge" },

    ],
  },
  {
    season: "2021-22",
    title: "Tipping Point",
    details: [
      { title: "Global Winner", competition: "Reverse Engineering Challenge" },
    ],
  },
];
