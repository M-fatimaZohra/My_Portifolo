import React from "react";
import myWork from "./object";
import Image from "next/image";
import { Nunito } from "next/font/google";
import Link from "next/link";

const nunito = Nunito({ weight: ["400", "700"], subsets: ["latin"] });

function Work() {
  return (
    <div
      className="md:px-10 sm:px-8 px-4 py-8  w-full"
      style={nunito.style}
      id="work"
    >
      <div className="flex flex-col gap-4">
        <h1 className=" sm:text-[60px] text-[30px] ">My Work</h1>
        <p className="sm:text-[25px] text-[16px]">
          Languages, frameworks, and tools I've used throughout my development
          journey:
        </p>

        <div>
          <div className="sm:grid md:grid-cols-3 sm:grid-cols-2 flex flex-wrap  gap-8  justify-center items-center">
            {myWork.map((project, index) => (
              <div
                key={index}
                className="group flex flex-col w-[85%] sm:w-auto scale-100 h-[100%] hover:scale-105 duration-[1s] ease-in-out  transition-all   gap-2 border-[#035096] rounded-md hover:border-[#5BA5E2] border-4 border-solid hover:text-[#f9f9f9] text-[#1a1a1a] bg-[#f9f9f9] hover:bg-[#035096] p-5 "
              >
                <div className="flex flex-col justify-between gap-2">
                  <a href={project.LinkToLive} target="_blank">
                    <Image
                      src={`${project.image}`}
                      alt={`${project.title} image`}
                      width={400}
                      height={300}
                      title={project.isLive}
                    />
                  </a>

                  <div className="flex flex-row justify-between gap-1">
                    <a
                      href={project.codeLink}
                      className="group-hover:block hidden sm:text-[16px] text-[12px] hover:underline"
                      target="_blank"
                    >
                      See Code
                    </a>
                    {project.cliInstallCommand && (
                      <a
                        href={project.cliInstallCommand}
                        className="group-hover:block hidden sm:text-[16px] text-[12px] hover:underline"
                        target="_blank"
                      >
                        NPM command
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-auto">
                  <h3 className="text-[28px]  text-bold line-clamp-1 group-hover:line-clamp-none">
                    {project.title}
                  </h3>
                  <p className=" sm:scale-75 sm:group-hover:scale-90 scale-[0.7] group-hover:scale-[0.9] line-clamp-2  group-hover:line-clamp-none ease-in-out transition-all duration-[1s] ">
                    {project.description}
                  </p>
                </div>
                {/* Optional: You can show tech stack */}
                <p className="sm:text-[14px] text-[13px] italic">
                  {project.technologies.join(", ")}
                </p>
              </div>
            ))}
             <div
                className="group flex flex-col justify-center items-center  w-[85%] sm:w-auto scale-100 md:h-[100%] h-[300px] hover:scale-105 duration-[1s] ease-in-out  transition-all  gap-2 border-[#035096] rounded-md hover:border-[#5BA5E2] border-4 border-solid hover:text-[#f9f9f9] text-[#1a1a1a] bg-[#f9f9f9] hover:bg-[#035096] p-5 "
              >
                <h3 className="md:text-[28px] sm:text-[20px] text-[16px] text-bold line-clamp-1 group-hover:line-clamp-none sm:group-hover:scale-150 group-hover:scale-105 ease-in-out transition-all duration-[1.5s]">Comming Soon</h3>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
