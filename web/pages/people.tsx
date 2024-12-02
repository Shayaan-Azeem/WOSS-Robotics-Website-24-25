// people.tsx
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";
import Head from "next/head";

export default function BuildsPage() {
  // List of teams with their respective members and descriptions
  const teams = [
    {
      name: "8433W Wildcats (Senior Team)",
      link: "https://www.robotevents.com/teams/V5RC/8433W",
      image: "/team-pics/8433W.jpg",
      description: "The awards belonging to the individuals on this team attributed to 8433W (2024-2025) are Excellence, Design and Tournament Champions at Provincial Qualifiers.",
      members: [
        "Kenny Shi", 
        "Victoria Wang", 
        "Zane Beeai", 
        "Shayaan Azeem",
        "Arnnav Kudale",
        "Gabbi Ipwanshek"
      ],
    },
    {
      name: "8433X Wild Dawgs",
      link: "https://www.robotevents.com/teams/V5RC/8433X",
      image: "/team-pics/8433X.jpg",
      description: "Rookie team; yet to compete (no awards).",
      members: [
        "Eddie Bian",
        "Derek Dai",
        "Eric Feng",
        "Aashirya Ghosh",
        "Omair Jawaid",
        "Alicia Jung",
        "Veer Khanna",
        "Alexis Lee",
        "Muhammed Malik",
        "Madhav Menon",
        "Eeshal Omar",
        "Prathamesh Perlawar",
        "Kartikeya Shukla",
        "Alex Yuan"
      ],
    },
    {
      name: "8433Y Wild Kitties",
      link: "https://www.robotevents.com/teams/V5RC/8433Y",
      image: "/team-pics/8433Y.jpg",
      description: "Rookie team; yet to compete (no awards).",
      members: [
        "Ahmad Arab", 
        "Jupiter Chapman",
        "Dhruv Dussoye",
        "Ayaan Faisal",
        "Aarunya Gomber",
        "Arjun Gupta",
        "Parth Kaushik",
        "Sarim Khan",
        "Rishi Nachnani",
        "Soyul Park",
        "Maymun Rahman",
        "Aayan Wasti",
        "Spencer Wu"
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>People @ WOSS Robotics</title>
      </Head>

      <Header
        title="Our Teams"
        subtitle="The list of members in each division of our club."
      />
      <div className="flex items-center justify-center px-5 py-10">
        <div className="flex flex-col space-y-10 w-full max-w-5xl">
          {/* Dynamically render teams */}
          {teams.map((team, index) => (
            <div
              key={index}
              className="border-2 border-gray-600 rounded-lg px-10 py-8 flex flex-col md:flex-row items-center bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg"
            >
              <Image
                className="rounded-lg mr-0 md:mr-5 mb-4 md:mb-0"
                src={team.image || "/chrisHatfield.png"}
                height={500}
                width={350}
                alt="Team Image"
                priority={true}
              />
              <div className="text-center md:text-left">
                <h2 className="font-bold text-gray-100 text-xl mb-2 tracking-wide">
                  <a
                    href={team.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-blue-400 transition-colors duration-150"
                  >
                    {team.name}
                  </a>
                </h2>
                <p className="text-gray-400 text-sm mb-4">{team.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                  {team.members.map((member, memberIndex) => (
                    <div
                      key={memberIndex}
                      className="hover:text-white transition-colors duration-150"
                    >
                      {member}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
