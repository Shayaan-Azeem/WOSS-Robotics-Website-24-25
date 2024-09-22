import Image from "next/image";
import Link from "next/link";

interface Props {
  className?: string;
  title: string;
  bg: string;
}

export const AboutCard = (props: Props) => {
  return (
    <div
      className={`${props.className} group hover:cursor-pointer border-solid border-2 border-primary hover:border-white rounded-lg md:w-[275px] px-10 py-24 relative`}
    >
      <div className="relative">
        <h1 className="text-4xl text-white font-bold text-center mb-2 uppercase">
          {props.title}{" "}
        </h1>
      </div>
      <Image
        className="backgroundImage opacity-40 group-hover:opacity-50 absolute inset-0 w-full h-full object-cover transition-all duration-300"
        src={props.bg}
        alt="Background Image"
        priority={true}
        fill
        quality={20}
      />
    </div>
  );
};
export const GeneralScreen = () => {
  return (
    <div className="border-2 border-gray-600 rounded-lg md:w-[939px] px-10 py-8">

      <h1 className="md:text-4xl text-3xl font-bold text-left mb-5">
        <span className="text-gray-400">
          We are <span className="text-primary">WOSS Robotics</span> 🐯
        </span>
      </h1>

      <div className="space-y-5">
        <div>
          <h2 className="font-bold text-gray-300 text-lg">About Us</h2>
          <p className="text-left text-gray-400">
            Hi there, welcome to our site! We are three ROOKIE VEX teams in the 2024-2025 season from {" "}
            <a
              href="https://wos.hdsb.ca/"
              className="text-primary hover:text-white"
              target="_blank"
            >
              White Oaks Secondary School in Oakville, ON, Canada 🇨🇦
            </a>
            ! We&apos;re a team of passionate students who love
            everything about robotics.
            <br />
          </p>
        </div>

        <div>
          <h2 className="font-bold text-gray-300 text-lg">Teams</h2>
          <p className="text-left text-gray-400">
            Our senior team, <a
              href="https://www.robotevents.com/teams/V5RC/8433W"
              className="text-primary hover:text-white"
              target="_blank"
            >
            8433W
            </a>
            , is made up of 10 of our more experienced members,
            having competed at Worlds for VEX V5 & AI and earned provincial VEX Skills placements for the past 2 seasons.

            <br />

            Our junior teams, <a
              href="https://wos.hdsb.ca/"
              className="text-primary hover:text-white"
              target="_blank"
            >
            8433X
            </a> and&nbsp;

            <a
              href="https://wos.hdsb.ca/"
              className="text-primary hover:text-white"
              target="_blank"
            >
            8433Y
            </a>
            , are made for students trying competitive robotics for the first time. With captains
            for guidance, teams work together to compete at the same qualifying competitions as our senior counterpart.
          </p>
        </div>
      </div>
    </div>
  );
};
