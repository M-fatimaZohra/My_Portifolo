import React from "react";
import { Nunito } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Skills from "./Component/CTA/Skills/Skills";
import Work from "./Component/CTA/Work/Work";

const nunito = Nunito({ weight: ["400", "700"], subsets: ["latin"] });

export default function Home() {
  return (
    <div className="md:px-10 sm:px-8 px-4 py-8 h-screen w-full" style={nunito.style}>
      {/* Hero Section */}
      <div className="flex  sm:flex-row flex-col-reverse h-auto items-center justify-center sm:justify-between gap-6">
        <div className="flex flex-col md:gap-4 gap-2 w-1/2 justify-between items-start h-auto">

          <h1 className="lg:text-[50px] sm:text-[40px] text-[30px] ">Hello, I am Fatima Zohra</h1>
          <p className="lg:text-[20px] sm:text-[26px] text-[10px] ">
            Front-End Web Development Student | Skilled in TypeScript,
            JavaScript, Node.js, NPM, Tailwind CSS, Next.js, UI/UX | Currently Mastering Python
            Python | A Journey to Enhanced Code Efficiency
          </p>
          <Button variant="default" size="default" className="">
            <Link href="/#work" className="sm:text-[20px] text-[10px]">View My Work</Link>
          </Button>
        </div>
        <div className="sm:w-1/2 w-auto flex justify-center items-center">
          <Image
            src="./logo.svg"
            alt="App logo"
            width={399}
            height={300}
            className="rounded-full md:w-[50%] sm:w-[70%] w-[70%] "
          />
        </div>
      </div>
      {/* My skills and the frameworks and package managers I've used */}
      <Skills/>
      <Work/>
    </div>
  );
}
