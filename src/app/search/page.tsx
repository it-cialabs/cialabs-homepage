"use client";
import HomeLayout from "@/components/high-level/home/layout";
import React from "react";
import { useSearchParams } from "next/navigation";
import { PlaceholdersAndVanishInputDemoNotext } from "@/components/high-level/PlaceholdersAndVanishInputComp";
import SplitText from "@/components/ui/split-text";

const handleAnimationComplete = () => {};

export default function Page() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  return (
    <HomeLayout>
      <div className=" w-full h-full  flex flex-col items-center justify-between">
        <div className=" w-full h-full flex flex-col justify-center items-center text">
          <div className="absolute -z-50 hidden md:block   translate-x-[1%] ">
            <img src="blur-green-bg.png" alt="bg image" className="" />
          </div>

          <div className="absolute -z-50  block md:hidden   ">
            <img src="blur-green-bg-mob.png" alt="bg image" className="" />
          </div>

          <SplitText
            text={query || ""}
            className="text-4xl md:text-6xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 } as any}
            to={{ opacity: 1, y: 0 } as any}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={() => {}}
          />

            <SplitText
            text={"Query parameters, often referred to as query strings or URL parameters, are key-value pairs appended to the end of a Uniform Resource Locator (URL) after a question mark (?). They are used to pass additional information from a client (like a web browser) to a server when making a request"}
            className="text-sm font-normal opacity-50 text-start px-4  md:px-32 lg:px-56 mt-9"
            delay={10}
            duration={1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 } as any}
            to={{ opacity: 1, y: 0 } as any}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="start"
            onLetterAnimationComplete={() => {}}
          />




        </div>
        <PlaceholdersAndVanishInputDemoNotext />
      </div>
    </HomeLayout>
  );
}
