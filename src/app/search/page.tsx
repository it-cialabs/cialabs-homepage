"use client";
import HomeLayout from "@/components/high-level/home/layout";
import React, { useEffect, Suspense } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { useSearchParams } from "next/navigation";
import { PlaceholdersAndVanishInputDemoNotext } from "@/components/high-level/PlaceholdersAndVanishInputComp";
import SplitText from "@/components/ui/split-text";

const handleAnimationComplete = () => {};

// Create a separate component for the content that uses useSearchParams
function SearchPageContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  // Effect to blur any focused inputs and prevent mobile keyboard from showing
  useEffect(() => {
    const blurFocusedInputs = () => {
      // Blur any currently focused input elements
      const activeElement = document.activeElement;
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
        (activeElement as HTMLElement).blur();
      }
      
      // Also blur any inputs that might have autofocus
      const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        if (input === document.activeElement) {
          (input as HTMLElement).blur();
        }
      });
    };

    // Run immediately when component mounts
    blurFocusedInputs();
    
    // Also run after a small delay to catch any inputs that might focus after initial render
    const timeoutId = setTimeout(blurFocusedInputs, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <HomeLayout>
      <div className=" w-full h-full flex flex-col items-center justify-between">
        <div className=" w-full h-full flex flex-col justify-center items-center text">
          <div className="absolute -z-50 hidden md:block translate-x-[1%] ">
            <img src="blur-green-bg.png" alt="bg image" className="" />
          </div>
          <div className="absolute -z-50 w-[100vw] block md:hidden ">
            <img src="blur-green-bg-mob.png" alt="bg image" className="" />
          </div>
          <div className="translate-y-[-10%] flex flex-col justify-center items-center">
            <div className="whitespace-nowrap opacity-60 text-xs flex py-2 items-center rounded-full border w-fit border-solid bg-transparent border-black/40 dark:border-white/40 px-3 leading-none mb-8">
              Your Question&nbsp;<b> {query}</b>
            </div>
            <div className=" max-w-xl">
              <SplitText
                text={"Where Engineering Comes Alive"}
                className="text-4xl md:text-6xl font-semibold text-center break-keep lg:leading-[70px]"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 40 } as any}
                to={{ opacity: 1, y: 0 } as any}
                threshold={0.1}
                rootMargin="-10px"
                textAlign="start"
                onLetterAnimationComplete={() => {}}
              />
              <SplitText
                text={
                  "At CIA Labs, we go beyond textbooks and exams. Students come together to create, innovate, and solve real-world problems — from building robots and coding solutions to collaborating across disciplines. It's a space where hands-on learning, teamwork, and curiosity fuel every project. No matter your department or club affiliation, you can be part of this vibrant community and grow together. "
                }
                className="text-sm wrap-normal font-normal opacity-50 text-start mt-4 break-keep"
                delay={10}
                duration={1}
                ease={"power3.out"}
                splitType="words"
                from={{ opacity: 0, y: 40 } as any}
                to={{ opacity: 1, y: 0 } as any}
                threshold={0.1}
                rootMargin="-10px"
                textAlign="start"
                onLetterAnimationComplete={() => {}}
              />
            </div>
          </div>
        </div>
        <PlaceholdersAndVanishInputDemoNotext />
      </div>
    </HomeLayout>
  );
}

// Loading fallback component
function SearchPageLoading() {
  return (
    <HomeLayout>
      <div className="w-full h-full flex flex-col items-center justify-between">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="absolute -z-50 hidden md:block translate-x-[1%] ">
            <img src="blur-green-bg.png" alt="bg image" className="" />
          </div>
          <div className="absolute -z-50 w-[100vw] block md:hidden ">
            <img src="blur-green-bg-mob.png" alt="bg image" className="" />
          </div>
          <div className="translate-y-[-10%] flex flex-col justify-center items-center">
            <div className="whitespace-nowrap opacity-60 text-xs flex py-2 items-center rounded-full border w-fit border-solid bg-transparent border-black/40 dark:border-white/40 px-3 leading-none mb-8">
              Loading...
            </div>
            <div className="max-w-xl">
              <div className="text-4xl md:text-6xl font-semibold text-center break-keep lg:leading-[70px]">
                Where Engineering Comes Alive
              </div>
              <div className="text-sm wrap-normal font-normal opacity-50 text-start mt-4 break-keep">
                At CIA Labs, we go beyond textbooks and exams. Students come together to create, innovate, and solve real-world problems — from building robots and coding solutions to collaborating across disciplines.
              </div>
            </div>
          </div>
        </div>
        <PlaceholdersAndVanishInputDemoNotext />
      </div>
    </HomeLayout>
  );
}

// Main page component with Suspense wrapper
export default function Page() {
  return (
    <Suspense fallback={<></>}>
      <SearchPageContent />
    </Suspense>
  );
}