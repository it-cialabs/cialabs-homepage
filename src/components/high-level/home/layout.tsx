import React, { ReactNode } from "react";
import ConnectBTN from "@/components/high-level/home/con-btn";
import SideNav from "@/components/high-level/home/side-nav";
import SideNavMobile from "@/components/high-level/home/side-nav-mobile";
import { ModeToggle } from "@/components/ui/theme-toggle-swtich";

interface HomeProps {
    children: ReactNode;
}

export default function HomeLayout({ children }: HomeProps) {
    return (
        <div className="w-screen h-[100dvh]  flex flex-col px-4 md:px-8 ">
            <nav className="w-full h-[8vh]   flex flex-row justify-between items-end">
                <a href="/" className=" text-2xl cursor-pointer">
                    CIA <b>Labs</b>{" "}
                </a>
                <div className=" flex flex-row gap-4 justify-center items-center">
                    <div className="hidden md:block">
                        <ModeToggle />
                    </div>
                    <div>
                        <ConnectBTN />
                    </div>
                    <div className="block md:hidden">
                        <SideNavMobile  />
                    </div>
                </div>
            </nav>

            <div className="w-full h-full  flex-row py-8 flex">
                <div className=" hidden md:block">
                    <SideNav />
                </div>

                <div className="w-full h-full flex justify-center items-center">
  
                    
                    {children}
                </div>
            </div>
        </div>
    );
}
