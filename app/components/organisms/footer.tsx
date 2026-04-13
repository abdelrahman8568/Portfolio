"use client";
import { MoveUp } from "lucide-react";
function Footer() {
  return (
    <div className="flex items-center w-full h-[20vh] border-t border-gray bg-black ">
      <MoveUp
        size={40}
        className="w-30! text-gray hover:text-primary bg-black cursor-pointer -mt-[20vh]! hover:-mt-[22vh]! absolute right-[15%] z-10 transition-all ease-in-out"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
      <h2 className="text-[0.8em] md:text-[1.2em] px-[10%] text-primary font-bold">
        Copyright © 2026. All rights reserved.
      </h2>
    </div>
  );
}

export default Footer;
