"use client";
import "../styles/portfolio.css";
import card1 from "@/public/images/cards/card1.png";
import card2 from "@/public/images/cards/card2.png";
import card3 from "@/public/images/cards/card3.png";
import card4 from "@/public/images/cards/card4.png";
import card5 from "@/public/images/cards/card5.png";
import card6 from "@/public/images/cards/card6.png";
import card7 from "@/public/images/cards/card7.png";
import card8 from "@/public/images/cards/card8.png";
import html from "@/public/images/skills/html.svg";
import css from "@/public/images/skills/css.svg";
import bootstrap from "@/public/images/skills/bootstrap.svg";
import js from "@/public/images/skills/js.svg";
import git from "@/public/images/skills/git.svg";
import github from "@/public/images/skills/github.svg";
import swiper from "@/public/images/skills/swiper.svg";
import react from "@/public/images/skills/react.svg";
import dom from "@/public/images/skills/dom.svg";
import redux from "@/public/images/skills/redux.svg";
import netlify from "@/public/images/skills/netlify.svg";
import next from "@/public/images/skills/next.svg";
import ts from "@/public/images/skills/ts.svg";
import framer from "@/public/images/skills/motion.svg";
import supabase from "@/public/images/skills/supabase.svg";
import chakraui from "@/public/images/skills/chakraui.svg";
import gsap from "@/public/images/skills/gsap.svg";
import vercel from "@/public/images/skills/vercel.svg";
import figma from "@/public/images/skills/figma.svg";
import bun from "@/public/images/skills/bun.svg";
import tailwind from "@/public/images/skills/tailwind.svg";
import postman from "@/public/images/skills/postman.svg";
import nextAuth from "@/public/images/skills/next-auth.svg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SplitText from "../components/animations/SplitText";
import { MainBox } from "../components/animations/motionBox";

function Portfolio() {
  return (
    <div className="mainContainer">
      <SplitText text="Portfolio" />
      <MainBox name="portfolioContainer">
        <p>Some Recent Work</p>
        <div className="cardsContainer">
          <div className="portfolioCard">
            <div className="imgLink">
              <Image src={card8} alt="" className="img" priority />
              <Link
                href={"https://aurabeautyeg.com/"}
                className="portfolioLink"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </Link>
              <div className="cardInfo">
                <Link
                  href={"https://github.com/abdelrahman8568/aura-beauty"}
                  className="cardGit"
                  target="_blank"
                >
                  GitHub
                </Link>
                <Link
                  href={"https://aurabeautyeg.com/"}
                  className="cardLive"
                  target="_blank"
                >
                  Live
                </Link>
              </div>
            </div>
            <h4>Aura Beauty</h4>
          </div>
          <div className="portfolioCard">
            <div className="imgLink">
              <Image src={card7} alt="" className="img" priority />
              <Link
                href={"https://five-palm-jumeirah.vercel.app/"}
                className="portfolioLink"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </Link>
              <div className="cardInfo">
                <Link
                  href={"https://github.com/abdelrahman8568/five-palm-jumeirah"}
                  className="cardGit"
                  target="_blank"
                >
                  GitHub
                </Link>
                <Link
                  href={"https://five-palm-jumeirah.vercel.app/"}
                  className="cardLive"
                  target="_blank"
                >
                  Live
                </Link>
              </div>
            </div>
            <h4>Five Palm Jumeirah</h4>
          </div>
          <div className="portfolioCard">
            <div className="imgLink">
              <Image src={card6} alt="" className="img" priority />
              <Link
                href={"https://pop-movie-demo.netlify.app/"}
                className="portfolioLink"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </Link>
              <div className="cardInfo">
                <Link
                  href={"https://github.com/abdelrahman8568/Movie"}
                  className="cardGit"
                  target="_blank"
                >
                  GitHub
                </Link>
                <Link
                  href={"https://pop-movie-demo.netlify.app/"}
                  className="cardLive"
                  target="_blank"
                >
                  Live
                </Link>
              </div>
            </div>
            <h4>Pop Movie</h4>
          </div>
          <div className="portfolioCard">
            <div className="imgLink">
              <Image src={card5} alt="" className="img" priority />
              <Link
                href={"https://meetus-rouge.vercel.app/"}
                className="portfolioLink"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </Link>
              <div className="cardInfo">
                <Link
                  href={"https://github.com/abdelrahman8568/meetus"}
                  className="cardGit"
                  target="_blank"
                >
                  GitHub
                </Link>
                <Link
                  href={"https://meetus-rouge.vercel.app/"}
                  className="cardLive"
                  target="_blank"
                >
                  Live
                </Link>
              </div>
            </div>
            <h4>Meetus</h4>
          </div>
          <div className="portfolioCard">
            <div className="imgLink">
              <Image src={card4} alt="" className="img" priority />
              <Link
                href={"https://furniro-rosy-one.vercel.app/"}
                className="portfolioLink"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </Link>
              <div className="cardInfo">
                <Link
                  href={"https://github.com/abdelrahman8568/furniro"}
                  className="cardGit"
                  target="_blank"
                >
                  GitHub
                </Link>
                <Link
                  href={"https://furniro-rosy-one.vercel.app/"}
                  className="cardLive"
                  target="_blank"
                >
                  Live
                </Link>
              </div>
            </div>
            <h4>Furniro</h4>
          </div>
          <div className="portfolioCard">
            <div className="imgLink">
              <Image src={card3} alt="" className="img" priority />
              <Link
                href={"https://z-book.netlify.app/"}
                className="portfolioLink"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </Link>
              <div className="cardInfo">
                <Link
                  href={"https://github.com/abdelrahman8568/Z-Book"}
                  className="cardGit"
                  target="_blank"
                >
                  GitHub
                </Link>
                <Link
                  href={"https://z-book.netlify.app/"}
                  className="cardLive"
                  target="_blank"
                >
                  Live
                </Link>
              </div>
            </div>
            <h4>Z Book</h4>
          </div>
          <div className="portfolioCard">
            <div className="imgLink">
              <Image src={card2} alt="" className="img" priority />
              <Link
                href={"https://abdelrahman8568.github.io/cruds/"}
                className="portfolioLink"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </Link>
              <div className="cardInfo">
                <Link
                  href={"https://github.com/abdelrahman8568/cruds"}
                  className="cardGit"
                  target="_blank"
                >
                  GitHub
                </Link>
                <Link
                  href={"https://abdelrahman8568.github.io/cruds/"}
                  className="cardLive"
                  target="_blank"
                >
                  Live
                </Link>
              </div>
            </div>
            <h4>Cards</h4>
          </div>
          <div className="portfolioCard">
            <div className="imgLink">
              <Image src={card1} alt="" className="img" priority />
              <Link
                href={"https://abdelrahman8568.github.io/Old-Portfolio/"}
                className="portfolioLink"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </Link>
              <div className="cardInfo">
                <Link
                  href={"https://github.com/abdelrahman8568/Old-Portfolio"}
                  className="cardGit"
                  target="_blank"
                >
                  GitHub
                </Link>
                <Link
                  href={"https://abdelrahman8568.github.io/Old-Portfolio/"}
                  className="cardLive"
                  target="_blank"
                >
                  Live
                </Link>
              </div>
            </div>
            <h4>old portfolio</h4>
          </div>
        </div>
      </MainBox>
      <SplitText text="skills" />
      <div className="skills">
        {[
          html,
          css,
          bootstrap,
          js,
          git,
          github,
          swiper,
          react,
          dom,
          redux,
          netlify,
          figma,
          next,
          ts,
          framer,
          supabase,
          chakraui,
          gsap,
          vercel,
          bun,
          tailwind,
          postman,
          nextAuth,
        ].map((image, index) => (
          <motion.img
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ delay: index * 0.3 }}
            viewport={{ once: true }}
            key={index}
            src={image.src}
            alt="Logo Image"
            className="skillsLogo"
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
