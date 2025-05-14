import { Nunito } from 'next/font/google';
import React from 'react'
import skillsFramework from './object';
import Image from 'next/image';

const nunito = Nunito({ weight: ["400", "600","700"], subsets: ["latin"] });

function Skills() {
  return (
    <div className="md:px-10 sm:px-8 px-4 py-8 h-auto w-full" style={nunito.style}>
        <div className='flex flex-col gap-4'>
            <h1 className=' sm:text-[60px] text-[30px] font-medium'>My Skills</h1>
            <p className='sm:text-[25px] text-[16px]'>Languages, frameworks, and tools I've used throughout my development journey:</p>

            <div>
                  <div className='flex flex-row gap-4 flex-wrap justify-center items-center'>
                {skillsFramework.map((skill, index) => (
                <div key={index} className='flex flex-col w-[300px] sm:w-auto gap-2 border-[#035096] rounded-md hover:border-[#5BA5E2] border-4 border-solid hover:text-[#f9f9f9] text-[#1a1a1a] bg-[#f9f9f9] hover:bg-[#1a1a1a] p-5 duration-100 ease-in-out '>
                    <Image src={`./skill icons/${skill.icon}`} alt={`${skill.name} icon`} width={80} height={50} />
                    <h3 className='text-[30px] text-bold '>{skill.name}</h3>
                    <p>{skill.description}</p>
                </div>
            ))}
                 </div>

            </div>
          

        </div>
      
    </div>
  )
}

export default Skills
