import React from "react";

const navLinks = [
    { label: "Events", href: "#" },
    { label: "Gallery", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Communities & Clubs", href: "#" },
    { label: "Connect App", href: "#" },
    { label: "Join Us", href: "#" },
];

type SideNavProps = {
    textSize?: string; // e.g. "text-sm", "text-base", "text-lg"
    gap?: string;      // e.g. "gap-6", "gap-4"
};

export default function SideNav({
    textSize = "text-sm",
    gap = "gap-6",
}: SideNavProps) {
    return (
        <div className={`w-full md:w-52 h-full flex flex-col items-start ${textSize} justify-center ${gap} font-medium`}>
            {navLinks.map((link) => (
                <a
                    key={link.label}
                    className="opacity-60 transition-all group-hover:opacity-100 hover:text-[15px] hover:opacity-100"
                    href={link.href}
                >
                    {link.label}
                </a>
            ))}
        </div>
    );
}
