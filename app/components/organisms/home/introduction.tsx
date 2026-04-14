"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/app/components/atoms/ScrollReveal";
import SplitText from "@/app/components/atoms/SplitText";
import { MainBox } from "../../atoms/MotionBox";

const aboutData = {
  info: [
    { label: "name", value: "Abdelrahman Mohamed" },
    { label: "address", value: "Cairo, Egypt" },
    {
      label: "phone/whats App",
      value: "(+20) 01110828568",
      link: "https://wa.me/+201110828568",
    },
    {
      label: "email",
      value: "abdelrahman.mohamed8568@gmail.com",
      link: "mailto:abdelrahman.mohamed8568@gmail.com",
    },
  ],
  cv: {
    filename: "Abdelrahman-Mohamed-CV.pdf",
    path: "cv/Abdelrahman-Mohamed-CV.pdf",
  },
};

function Introduction() {
  return (
    <div className=" w-full bg-black flex flex-col">
      <motion.div
        className="absolute left-[7.5%] w-[85%] md:h-[30vh] bg-black shadow-[0_10px_50px_#eeeeee1f] 
             flex flex-col items-center justify-center text-center z-999 max-md:py-5
             [--top-init:110vh] [--top-anim:91vh] 
             md:[--top-init:120vh] md:[--top-anim:85vh]"
        initial={{ top: "var(--top-init)" }}
        animate={{ top: "var(--top-anim)" }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h1 className="text-primary text-5xl font-bold w-[60%] md:mb-4 max-md:text-xl max-md:w-[80%]">
          Let’s Connect Now
        </h1>
        <Link
          href={"contact"}
          className="group relative max-md:text-sm flex w-50 h-10 md:h-20 items-center justify-evenly uppercase tracking-widest cursor-pointer text-white text-lg opacity-60 transition-all duration-300 hover:opacity-100 hover:tracking-[2px] z-99999"
        >
          Get In Touch
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="max-md:w-4 max-md:h-4 text-prborder-primary group-hover:translate-x-[30%]! group-hover:animate-none! transition-all ease-in-out"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
          <span className="absolute bottom-6 left-0 w-0 h-0.75 border-b-0.75 border-double border-primary transition-all duration-300 group-hover:w-[80%] visible opacity-100" />
        </Link>
      </motion.div>
      <div className="mainContainer">
        <SplitText text="introduction" />
        <ScrollReveal
          baseOpacity={0.3}
          enableBlur={false}
          baseRotation={0}
          blurStrength={100}
          textClassName="max-md:w-full! w-full! max-md:text-lg! ps-[10%]"
        >
          A passionate React.js/Next.js developer focused on building fast,
          responsive, and easy-to-use user interfaces. I have a keen eye for
          user experience, writing clean, maintainable code, and improving
          performance.
        </ScrollReveal>
        <SplitText text="about me" />
        <MainBox>
          <table className="w-full table-fixed max-w-[90%] ml-[10%] max-md:ml-0 max-md:max-w-full ">
            <tbody className="text-2xl text-left">
              {aboutData.info.map((item, index) => (
                <tr key={index} className="border-none max-md:flex flex-col">
                  <th className="py-[1.5%] uppercase text-gray font-bold max-md:text-base">
                    {item.label}
                  </th>
                  <th className="py-[1.5%] text-white font-bold wrap-break-word max-md:text-sm">
                    {item.link ? (
                      <Link
                        href={item.link}
                        target="_blank"
                        className="hover:underline transition-all "
                      >
                        {item.value}
                      </Link>
                    ) : (
                      item.value
                    )}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </MainBox>
        <div className="flex justify-center pt-12 pb-8">
          <a
            download={aboutData.cv.filename}
            href={aboutData.cv.path}
            className="group relative flex h-30 md:h-55 w-[85%] flex-col items-center justify-center gap-3 overflow-hidden cursor-pointer border-2 border-gray bg-black text-center transition-all duration-300 hover:border-primary hover:shadow-2xl active:scale-[0.98]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              fill="currentColor"
              className="cvIcon text-gray transition-all duration-500 group-hover:text-white group-hover:animate-[slide-in-top_0.8s_linear_infinite]"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
              />
            </svg>
            <span className="absolute md:top-26.25 h-5 w-20 border-b-2 border-l-2 border-r-2 border-primary transition-all duration-700 group-hover:border-wtext-white" />
            <p className="mt-2 md:text-xl font-medium uppercase tracking-widest text-white transition-all duration-300 group-hover:tracking-0.75">
              Download CV
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
