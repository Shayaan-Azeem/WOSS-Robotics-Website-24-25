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
    season: "2023-24",
    title: "Over Under",
    details: [
      { title: "Excellence Award", competition: "Ontario VRC H.S. Over/Under Provincial Championships 2024" },
      { title: "World Skills Champion", competition: "VEX AI World Championships" },
      { title: "Tournament Finalists", competition: "iDESIGN Central Toronto VEX VRC Robotics Competition" },
      { title: "Excellence Award", competition: "iDESIGN Central Toronto VEX VRC Robotics Competition" },
      { title: "Innovate Award", competition: "TCTM & CSAA Blended VRC Lunar New Year Qualifier" },
      { title: "Tournament Finalists", competition: "Canadian Open VRC Signature Event" },
      { title: "Robot Skills 2nd Place", competition: "The RiverBots II VRC Over Under Signature Event" },
      { title: "Excellence Award", competition: "St. Catharines VRC Qualifier" },
      { title: "Tournament Champions", competition: "St. Catharines VRC Qualifier" },
      { title: "Robot Skills Champion", competition: "St. Catharines VRC Qualifier" },
      { title: "Judges Award", competition: "Blended VRC In-Person Over/Under Qualifier Remote Judging and Notebooks" },
      { title: "Excellence Award", competition: "VRC In Person Over/Under MS/HS Tournament. In Person Judging & Remote Notebook Submission" },
      { title: "Design Award", competition: "Battle by the Beach VRC Signature Event" },
      { title: "Global Finalist", competition: "Mathworks FollowThePathChallenge" },
    ],
  },
  {
    season: "2022-23",
    title: "Spin Up",
    details: [
      { title: "Create Award", competition: "VEX Robotics Ontario In-person VRC Provincial Championships 2023" },
      { title: "Skills Champion", competition: "VEX Skills Ontario Qualifier" },
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
