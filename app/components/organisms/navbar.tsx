"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

const NavLinks = [
  { path: "/", label: "home" },
  { path: "/services", label: "services" },
  { path: "/portfolio", label: "portfolio" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const container = useRef<HTMLElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useGSAP(
    () => {
      gsap.set(".navLinkItemHolder", { y: 150 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".navOverlay", {
          duration: 1.25,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(
          ".navLinkItemHolder",
          {
            y: 0,
            duration: 1.25,
            stagger: 0.125,
            ease: "power4.inOut",
          },
          "-=0.75",
        );
    },
    { scope: container },
  );

  useEffect(() => {
    if (isNavOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isNavOpen]);

  return (
    <nav ref={container} className="fixed z-99999 w-auto h-auto">
      <div
        className="absolute top-[4vh] left-[91vw] max-md:w-[10vw] max-md:top-[10vh] max-md:left-[90vw] max-md:rotate-90 max-md:whitespace-nowrap cursor-pointer z-100"
        onClick={toggleNav}
      >
        <p className="flex justify-center items-center text-white text-2xl font-semibold uppercase max-md:text-base">
          menu
        </p>
      </div>
      <div className="navOverlay z-9999999 fixed top-0 left-0 w-screen h-screen bg-dark flex flex-col [clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_0%)]">
        <div className="w-full relative">
          <div
            className="absolute top-[4vh] left-[91vw] max-md:w-[10vw] max-md:top-[10vh] max-md:left-[90vw] max-md:rotate-90 max-md:whitespace-nowrap cursor-pointer z-50"
            onClick={toggleNav}
          >
            <p className="flex justify-center items-center text-primary text-2xl font-semibold uppercase max-md:text-base">
              close
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center text-center flex-1">
          <div className="h-[90vh] flex flex-col justify-center items-center">
            {NavLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <div
                  className="w-max [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)] overflow-hidden"
                  key={link.label}
                >
                  <div className="navLinkItemHolder relative">
                    <Link
                      href={link.path}
                      onClick={() => {
                        if (!isActive) toggleNav();
                      }}
                      className={`text-[7.5rem] font-semibold uppercase max-md:text-[60px] transition-all duration-1000 ease-in-out ${
                        isActive
                          ? "text-primary cursor-default pointer-events-none after:content-[''] after:w-full after:h-0.5 after:bg-gray after:absolute after:top-[49%] after:left-0 after:-z-10"
                          : "text-white hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
