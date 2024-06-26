// about.tsx
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import AwardsSection from "@/components/AwardsSection";

export default function BuildsPage() {
  return (
    <>
      <Head>
        <title>History @ WOSS Robotics</title>
      </Head>

      <Header
        title="📔 Our Team's History"
        subtitle="We've been around a lot longer than 2024."
      />
      <div className="flex items-center justify-center pr-5 pl-5">
        <div className="flex flex-col space-y-10 w-full max-w-5xl">
          <div className="border-2 border-gray-600 rounded-lg px-10 py-8 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg">
            <div>
              <h2 className="font-bold text-gray-300 text-lg mb-4">
                Looking back over two decades.
              </h2>
              <p className="text-left text-gray-400 leading-relaxed">
                The White Oaks Robotics Club has a history of teams which have achieved remarkable success in various regional, national and international competitions, while inspiring many students to pursue their passion for engineering and technology. The reinvigorated Robotics Club, through VEX, aims to follow their footsteps and to create new opportunities for learning and growth for our members while continuing the tradition of excellence and innovation that our past teams have established. Here is a quick look into our legacy!
              </p>
            </div>
          </div>

          <AwardsSection />

          <div className="border-2 border-gray-600 rounded-lg px-10 py-8 flex flex-col md:flex-row items-center bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg">
            <Image
              className="rounded-lg mr-0 md:mr-5 mb-4 md:mb-0"
              src="/chrisHatfield.png"
              height={500}
              width={350}
              alt="Chris Hadfield"
              priority={true}
            />
            <div className="text-center md:text-left">
              <h2 className="font-bold text-gray-300 text-lg mb-2">
                Notable Alumnus 🐱‍🚀
              </h2>
              <p className="text-left text-gray-400 mb-4 leading-relaxed">
                &quot;I have to root for my alma mater [
                <a
                  href="https://wos.hdsb.ca/"
                  className="text-primary hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  White Oaks
                </a>
                ] and that&apos;s the high school that I went to... and I&apos;ve gone back and spoken several times at White Oaks so I was pleased to hear that they were in the competition and of course I&apos;m rooting for them. It looks like it&apos;s really well built.&quot;
              </p>
              <a
                href="https://youtu.be/MipH3S03PaM?si=LRk0L1-qDQRJzpyf&t=41/"
                className="text-primary hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                - Chris Hadfield, 2006
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
