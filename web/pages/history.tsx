import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Title } from "../components/Title";
import Link from "next/link";
import { SeasonCard } from "@/components/season/SeasonCard";
import Head from "next/head";
import Image from "next/image";
import { awards } from "@/lib/lists/Awards";


export default function BuildsPage() {
  return (
    <>
      <Head>
        <title>History @ WOSS Robotics</title>
      </Head>

      <Header
        title="📔 Our Team&apos;s History"
        subtitle="We&apos;ve been around a lot of longer than 2024."
      />
      <div className="flex items-center justify-center pr-5 pl-5">
        <div className="flex flex-col space-y-10">
          <div className="border-2 border-gray-600 rounded-lg px-10 py-8">


              <div>
                <h2 className="font-bold text-gray-300 text-lg">Looking back over two decades.</h2>
                <p className="text-left text-gray-400">
                The White Oaks Robotics Club has a history of teams which have achieved remarkable success in various regional, national and
                <br></br>international competitions, while inspiring many students to pursue their passion for engineering and technology. The reinvigorated
                <br></br>Robotics Club, through VEX, aims to follow their footsteps and to create new opportunities for learning and growth for our members while
                <br></br> continuing the tradition of excellence and innovation that our past teams have established. Here is a quick look into our legacy!

                </p>
            </div>
          </div>


          <div className="border-2 border-gray-600 rounded-lg px-10 py-8 bg-gray-950">
            <h1 className="md:text-4xl text-3xl font-bold text-left mb-5">
              <span className="text-gray-400">
                <span className="text-primary">🏆 Awards in VEX</span>
              </span>
            </h1>
            {awards.map((award, index) => (
              <div key={index} className="mb-6">
                <h2 className="font-bold text-primary text-lg mb-2">
                  {award.season}: <span className="text-gray-300">{award.title}</span>
                </h2>
                <ul className="list-disc list-inside pl-5 space-y-2">
                  {award.details.map((detail, i) => (
                    <li key={i} className="text-left text-gray-400">
                      <span className="text-white font-semibold">{detail.title}</span>
                      {" | "}
                      <span className="text-gray-300">{detail.competition}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>



          <div className="border-2 border-gray-600 rounded-lg px-10 py-8 justify-center items-center flex">
            <Image
              className="rounded-lg mr-5"
              src="/chrisHatfield.png"
              height="850"
              width="500"
              alt="Chris Hadfield"
              priority={true}
            />


              <div>
                <h2 className="font-bold text-gray-300 text-lg">Notable Alumnus 🐱‍🚀</h2>
                <p className="text-left text-gray-400">
                &quot;I have to root for my alma mater [{""}
                <a
                  href="https://wos.hdsb.ca/"
                  className="text-primary hover:text-white"
                  target="_blank"
                >
                White Oaks
                </a>
              ]
              <br></br> and that&apos;s the high school that that I went to...
              <br></br>and I&apos;ve gone back and spoken several times at
              <br></br>White Oaks so I was pleased to hear that they were
              <br></br>in the competition and of course I&apos;m rooting for
              <br></br>them it looks like it&apos;s really well built.&quot;

                </p>
                <a
                  href="https://youtu.be/MipH3S03PaM?si=LRk0L1-qDQRJzpyf&t=41/"
                  className="text-primary hover:text-white"
                  target="_blank"
                >
                -Chris Hadfield, 2006
                </a>

            </div>
          </div>





        </div>
      </div>
      <Footer />
    </>
  );
}
