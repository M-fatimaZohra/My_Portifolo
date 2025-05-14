import { Nunito } from 'next/font/google';
import React from 'react'
import { New_Rocker } from 'next/font/google'
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const newRocker = New_Rocker({
  weight: "400",
  subsets: ["latin"],
});

const nunito = Nunito({ weight: ["400", "700"], subsets: ["latin"] });
function page() {
  return (
    <div className="fixed top-0 md:px-10 sm:px-8 px-4 py-8 h-screen w-full" style={nunito.style}>
      <div className="flex  flex-col h-full items-center justify-center gap-[16px] ">
        <h1 style={newRocker.style} className='lg:text-[80px] sm:text-[50px] text-[30px] text-center'>404 - Page Not Found</h1>
        <p className="lg:text-[20px] sm:text-[26px] text-[10px] ">🧭 The page you are looking for does not exist.</p>
            <Button variant="default" size="default">
            <Link href="./" className="sm:text-[20px] text-[10px]">Go Back</Link>
          </Button>
      </div>

    </div>
  )
}

export default page