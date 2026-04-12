"use client";
import "@/app/styles/navbar.css";
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
  const [activeLink, setActiveLink] = useState(pathname);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const container = useRef();
  const tl = useRef();

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
        .to(".navLinkItemHolder", {
          y: 0,
          duration: 1.25,
          stagger: 0.125,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container },
  );

  useEffect(() => {
    setActiveLink(pathname);
    if (isNavOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isNavOpen, pathname]);

  return (
    <nav ref={container}>
      <div className="navOpen" onClick={toggleNav}>
        <p>menu</p>
      </div>
      <div className="navOverlay">
        <div className="navOverlayBar">
          <div className="navClose" onClick={toggleNav}>
            <p>close</p>
          </div>
        </div>
        <div className="navCopy">
          <div className="navLinks">
            {NavLinks.map((link) => {
              return (
                <div className="navLinkItem" key={link.label}>
                  <div
                    className="navLinkItemHolder"
                    onClick={activeLink === link.path ? null : toggleNav}
                  >
                    <Link
                      href={link.path}
                      {...(activeLink !== link.path && { href: link.path })}
                      className={`navLink ${
                        activeLink === link.path ? "active" : ""
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
