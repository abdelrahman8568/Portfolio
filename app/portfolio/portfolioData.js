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
import zod from "@/public/images/skills/zod.svg";
import shadcn from "@/public/images/skills/shadcn.svg";

export const projects = [
  {
    id: 1,
    title: "Aura Beauty",
    image: card8,
    github: "https://github.com/abdelrahman8568/aura-beauty",
    live: "https://aurabeautyeg.com/",
  },
  {
    id: 2,
    title: "Five Palm Jumeirah",
    image: card7,
    github: "https://github.com/abdelrahman8568/five-palm-jumeirah",
    live: "https://five-palm-jumeirah.vercel.app/",
  },
  {
    id: 3,
    title: "Pop Movie",
    image: card6,
    github: "https://github.com/abdelrahman8568/Movie",
    live: "https://pop-movie-demo.netlify.app/",
  },
  {
    id: 4,
    title: "Meetus",
    image: card5,
    github: "https://github.com/abdelrahman8568/meetus",
    live: "https://meetus-rouge.vercel.app/",
  },
  {
    id: 5,
    title: "Furniro",
    image: card4,
    github: "https://github.com/abdelrahman8568/furniro",
    live: "https://furniro-rosy-one.vercel.app/",
  },
  {
    id: 6,
    title: "Z Book",
    image: card3,
    github: "https://github.com/abdelrahman8568/Z-Book",
    live: "https://z-book.netlify.app/",
  },
  {
    id: 7,
    title: "Cards",
    image: card2,
    github: "https://github.com/abdelrahman8568/cruds",
    live: "https://abdelrahman8568.github.io/cruds/",
  },
  {
    id: 8,
    title: "Old Portfolio",
    image: card1,
    github: "https://github.com/abdelrahman8568/Old-Portfolio",
    live: "https://abdelrahman8568.github.io/Old-Portfolio/",
  },
];

export const skills = [
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
  zod,
  shadcn,
].map((node) => ({ node }));
