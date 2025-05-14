import { Nunito } from 'next/font/google';
import React from 'react'
import Image from 'next/image';
import ContactCard from '../Component/CTA/ContactMe/ContactMe';

const nunito = Nunito({ weight: ["400", "700"], subsets: ["latin"] });
function page() {
  return (
       <div className=" sm:px-8 px-2 py-8 h-screen w-full" style={nunito.style}>
     <div className="flex  sm:flex-row flex-col-reverse h-auto items-center justify-center sm:justify-between gap-6">
        <div className="flex flex-col md:gap-4 gap-2 sm:w-1/2  w-[80%] justify-between items-start h-auto">

          <h1 className="lg:text-[50px] sm:text-[40px] text-[30px] ">Contact me!</h1>
        <ContactCard/>
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

    </div>
  )
}

export default page
