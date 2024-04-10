"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function Typer() {
  const words = [
    {
      text: "I",
    },
    {
      text: "mostly",

    },
    {
      text: "breathe",
      className: "text-blue-500 dark:text-blue-500",

    },
    {
      text: "and",

    },
    {
      text: "code",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "sometimes.",
    },
    
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-28">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Hey, I'm Ayush! I'm into both coding and design.        
        </p>
        <TypewriterEffectSmooth words={words} />
      <div>
       
      </div>
    </div>
  );
}

export default Typer