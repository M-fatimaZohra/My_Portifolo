import { Button } from '@/components/ui/button';
import { Nunito } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import About from '../Component/CTA/About/About';


const nunito = Nunito({ weight: ["400", "700"], subsets: ["latin"] });
function page() {
  return (
    <div className="md:px-10 sm:px-8 px-4 py-8 h-screen w-full" style={nunito.style}>
      <div className="flex  sm:flex-row flex-col-reverse h-auto items-center justify-center sm:justify-between gap-6">
        <div className="flex flex-col md:gap-4 gap-2 w-1/2 justify-between items-start h-auto">

          <h1 className="lg:text-[50px] sm:text-[40px] text-[30px] ">Hello, I am Fatima Zohra</h1>
          <p className="lg:text-[20px] sm:text-[26px] text-[10px] ">
            Front-End Web Development Student | Skilled in TypeScript,
            JavaScript, Node.js, NPM, Tailwind CSS, Next.js, UI/UX | Currently Mastering Python
            Python | A Journey to Enhanced Code Efficiency
          </p>
          <Button variant="default" size="default" className="group ">
            <Link href="/About#about" className="sm:text-[20px] text-[10px] flex gap-[8px]">View About me <div className='group-hover:animate-bounce duration-[1.5s]'>⇩</div></Link>
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
      <About/>
    </div>
  )
}

export default page
