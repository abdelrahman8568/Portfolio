"use client";
import "@/app/styles/introduction.css";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/app/components/atoms/ScrollReveal";
import SplitText from "@/app/components/atoms/SplitText";

function Introduction() {
  return (
    <div className="introduction">
      <motion.div
        className="infoCard"
        initial={{ top: "120vh" }}
        animate={{ top: "85vh" }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h1>Let’s Connect Now</h1>
        <Link href={"contact"} className="homeBtn">
          Get In Touch
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-chevron-right icon "
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </Link>
      </motion.div>
      <div className="mainContainer">
        <SplitText text="introduction" />
        <ScrollReveal
          baseOpacity={0.3}
          enableBlur={false}
          baseRotation={0}
          blurStrength={100}
          textClassName="max-md:w-full! max-md:text-lg!"
        >
          A passionate React.js/Next.js developer focused on building fast,
          responsive, and easy-to-use user interfaces. I have a keen eye for
          user experience, writing clean, maintainable code, and improving
          performance.
        </ScrollReveal>
        <SplitText text="about me" />
        <table className="ml-[10%]! max-w-[80%] max-md:[&_th]:text-sm">
          <tbody>
            <tr>
              <th>name</th>
              <th>Abdelrahman Mohamed</th>
            </tr>
            <tr>
              <th>address</th>
              <th>Cairo, Egypt</th>
            </tr>
            <tr>
              <th>phone/whats App</th>
              <th>
                <Link
                  href={"https://wa.me/+201110828568"}
                  target="_blank"
                  className="linkText"
                >
                  (+20) 01110828568
                </Link>
              </th>
            </tr>
            <tr>
              <th>email</th>
              <th>
                <Link
                  href={"mailto:abdelrahman.mohamed8568@gmail.com"}
                  target="_blank"
                  className="linkText"
                >
                  abdelrahman. mohamed8568 @gmail.com
                </Link>
              </th>
            </tr>
          </tbody>
        </table>
        <div className="cv">
          <a
            className="cvBtn"
            download={"Abdelrahman-Mohamed-CV.pdf"}
            href="cv/Abdelrahman-Mohamed-CV.pdf"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              fill="currentColor"
              className="bi bi-arrow-down-short cvIcon"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
              />
            </svg>
            <span className="cvIcon2"></span>
            <p>Download CV</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
