"use client";
import Image from "next/image";
import cover from "@/public/images/home/cover.jpg";
import { font2 } from "@/public/fonts/font";
import { useEffect, useState } from "react";
import ShinyText from "@/app/components/atoms/ShinyText";

function Home() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen overflow-hidden relative">
      <Image
        src={cover}
        alt="Cover Image"
        priority
        className="fixed -top-12.5 left-0 w-screen max-md:w-[250vw] h-[135vh] -z-10 object-cover"
      />
      <div
        className="flex flex-col gap-7.5 px-[10%] py-[20%] text-[2.5em] text-whitetransition-all duration-200 -z-10 
                   md:text-[2.5em] 
                   max-md:text-[2em] 
                   max-[585px]:text-[1.5em] max-[585px]:items-center max-[585px]:py-[50%] max-[585px]:px-0
                   max-[320px]:text-[1.3em]"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <h6 className="text-dark font-semibold text-lg md:text-2xl tracking-widest">
          HI THERE! I AM
        </h6>
        <h1
          className={`${font2} text-transparent [-webkit-text-stroke:0.5px_var(--wc)] font-bold text-5xl md:text-[80px]`}
        >
          ABD
          <span className="text-transparent [-webkit-text-stroke:0.5px_var(--bc)]">
            E
          </span>
          LRAHMAN
        </h1>
        <ShinyText
          text="< FRONT-END DEVELOPER />"
          disabled={false}
          speed={3}
          className="max-sm:text-xl"
        />
      </div>
    </div>
  );
}

export default Home;
