"use client";

import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { ModeToggle } from '@/components/ui/theme-toggle-swtich';

type SideNavMobileProps = {
    highLight?: string;
};

function Bgblur({ Isopen, Highlights }: { Isopen: boolean; Highlights?: string }) {
    const navLinks = [
        { label: "Events", href: "#" },
        { label: "Gallery", href: "#" },
        { label: "About Us", href: "#" },
        { label: "Communities & Clubs", href: "#" },
        { label: "Connect App", href: "#" },
        { label: "Join Us", href: "#" },
    ];

    return (
        <div className={`absolute  backdrop-blur-xl top-[8vh] left-0 w-screen h-screen bg-white/5 dark:bg-black/5 transition-opacity duration-500 ${Isopen ? 'opacity-100 block z-50' : 'opacity-0 '}`}>
            <div className={`transition-opacity px-6 delay-200 duration-1000 ${Isopen ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-full md:w-52  mt-10 h-full flex flex-col items-start text-xl justify-center gap-8 font-medium">
                    {navLinks.map((link, idx) => (
                        <a
                            key={link.label}
                            className={`transition-all  hover:text-[22px] ${Highlights === link.label ? 'font-bold' : ''}`}
                            href={link.href}
                            style={{
                                transitionDelay: `${Isopen ? idx * 100 : 0}ms`,
                                opacity: Highlights === link.label ? 1 : (Isopen ? 0.6 : 0),
                                transform: Isopen ? 'translateY(0)' : 'translateY(-10px)',
                                pointerEvents: Isopen ? 'auto' : 'none',
                            }}
                            tabIndex={Isopen ? 0 : -1}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
            <div className={` ${Isopen ? 'opacity-100' : 'opacity-0'} delay-500 duration-1000 transition-all absolute bottom-52 w-screen px-11 flex flex-row items-end justify-end`}>
                <ModeToggle />
            </div>
        </div>
    );
}

export default function SideNavMobile({ highLight }: SideNavMobileProps) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen(!open)}
                className="p-2 rounded focus:outline-none"
            >
                {open ? <X /> : <Menu />}
            </button>

            <Bgblur Isopen={open} Highlights={highLight} />

        </>
    );
}
