import { Nunito } from "next/font/google";
import Image from "next/image";
import React from "react";

const nunito = Nunito({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
function About() {
  return (
    <div
      id="about"
      className="md:px-10 sm:px-8 px-4 py-8  w-full"
      style={nunito.style}
    >
      <div className="flex flex-col gap-16">
        <h1 className=" sm:text-[50px] text-[30px] font-semibold">About Me:</h1>
        <div className="bg-[#035096] text-[#F9F9F9] border-solid border-[#5BA5E2] border-2 rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex md:flex-row flex-col-reverse gap-4 px-2 py-4">
          <div className="md:w-1/2 w-auto ">
            <h2 className=" sm:text-[40px] text-[30px] font-medium">
              Introduction
            </h2>
            <p className=" leading-loose sm:text-[16px] text-[12px]">
              Hello! I'm <b>Fatima Zohra</b>, a passionate Frontend Developer
              and Web Developer with a strong blend of design and development
              skills. My journey started on{" "}
              <u>
                <b>February 14, 2024, at GIAIC</b>
              </u>
              , and since then, I’ve been deeply committed to honing my craft
              through hands-on experience with real-world projects and
              challenges from Panaverse and Panaversity.
            </p>
          </div>

          <div className="md:w-1/2 w-auto">
            <Image
              src="/gifs/gif1.gif"
              alt="logo"
              width={800}
              height={500}
              className="rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
        <div className="bg-[#035096] text-[#F9F9F9] border-solid border-[#5BA5E2] border-2 rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex md:flex-row-reverse flex-col-reverse gap-4 px-2 py-4">
          <div className="md:w-1/2 w-auto ">
            <h2 className=" sm:text-[40px] text-[30px] font-medium">
              Python Expertise
            </h2>
            <p className=" leading-loose sm:text-[16px] text-[12px]">
              I have a solid grasp of <b>Python</b>, and I am proficient in
              writing <b>clean, efficient code</b> across multiple programming
              paradigms, including <b>functional</b>, <b>object-oriented</b>,
              and <b>basic scripting</b>. I enjoy building both <b>CLI tools</b>{" "}
              and <b>Streamlit apps</b>, using Python to handle everything from{" "}
              <b>automation</b> to <b>backend logic</b>, ensuring{" "}
              <b>scalability</b> and <b>efficiency</b>.
            </p>
          </div>
          <div className="md:w-1/2 w-auto">
            <Image
              src="/gifs/gif3.gif"
              alt="logo"
              width={800}
              height={500}
              className="rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
        <div className="bg-[#035096] text-[#F9F9F9] border-solid border-[#5BA5E2] border-2 rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex md:flex-row flex-col-reverse gap-4 px-2 py-4">
          <div className="md:w-1/2 w-auto ">
            <h2 className=" sm:text-[40px] text-[30px] font-medium">
              TypeScript & Web Development
            </h2>
            <p className=" leading-loose sm:text-[16px] text-[12px]">
              I also specialize in <b>TypeScript</b>, using it extensively for
              both CLI-based applications and dynamic web projects. Whether it's
              building robust command-line tools or developing sophisticated
              features for web apps, I leverage TypeScript to ensure clean,
              scalable, and highly maintainable code. The strong typing and
              improved debugging that TypeScript offers help streamline
              development.
            </p>
          </div>
          <div className="md:w-1/2 w-auto">
            <Image
              src="/gifs/gif4.gif"
              alt="logo"
              width={800}
              height={500}
              className="rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
        <div className="bg-[#035096] text-[#F9F9F9] border-solid border-[#5BA5E2] border-2 rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex md:flex-row-reverse flex-col-reverse gap-4 px-2 py-4">
          <div className="md:w-1/2 w-auto ">
            <h2 className=" sm:text-[40px] text-[30px] font-medium">
              Projects with Next.js
            </h2>
            <p className=" leading-loose sm:text-[16px] text-[12px]">
              In addition to my expertise in <b>Python</b> and <b>TypeScript</b>
              , I work with
              <b>Next.js</b>, where I’ve had the opportunity to create
              remarkable projects, such as <b>Figma design websites</b> and{" "}
              <b>catalog sites</b>, as well as <b>blog websites</b> using{" "}
              <b>Sanity</b>. These experiences allow me to bring designs to life
              while ensuring <b>high performance</b> and{" "}
              <b>seamless integration</b>.
            </p>
          </div>
          <div className="md:w-1/2 w-auto">
            <Image
              src="/gifs/gif2.gif"
              alt="logo"
              width={800}
              height={500}
              className="rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
        <div className="bg-[#035096] text-[#F9F9F9] border-solid border-[#5BA5E2] border-2 rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex md:flex-row flex-col-reverse gap-4 px-2 py-4">
          <div className="md:w-1/2 w-auto ">
            <h2 className=" sm:text-[40px] text-[30px] font-medium">
              UI/UX & Future Goals
            </h2>
            <p className=" leading-loose sm:text-[16px] md:text-[20px] text-[12px]">
              Currently, I specialize in <b>UI/UX design</b>,{" "}
              <b>Tailwind CSS</b>, <b>JavaScript</b>, and <b>TypeScript</b>, and
              am continuously expanding my knowledge in
              <b>backend development</b>. My goal is to build web applications
              that are
              <b>visually striking</b>, <b>user-centric</b>, and{" "}
              <b>performance-optimized</b> across all devices. I am always open
              to <b>new challenges</b> and eager to collaborate on projects that{" "}
              <b>make an impact</b>.
            </p>
          </div>
          <div className="md:w-1/2 w-auto">
            <Image
              src="/gifs/gif5.gif"
              alt="logo"
              width={800}
              height={500}
              className="rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
