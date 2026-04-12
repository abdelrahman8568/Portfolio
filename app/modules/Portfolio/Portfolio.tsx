// Portfolio.tsx
"use client";
import SplitText from "@/app/components/atoms/SplitText";
import { MainBox } from "@/app/components/atoms/MotionBox";
import LogoLoop from "@/app/components/atoms/LogoLoop";
import { PortfolioCard } from "@/app/components/molecules/PortfolioCard";
import Image from "next/image";

export interface Project {
  id: number;
  title: string;
  image: string;
  github?: string;
  live: string;
}

interface Skill {
  id: number;
  image: string;
}

interface PortfolioProps {
  projects: Project[];
  skills: Skill[];
}

export const Portfolio = ({ projects, skills }: PortfolioProps) => {
  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);
  return (
    <div className="mainContainer">
      <SplitText text="Portfolio" />
      <MainBox name="flex flex-col max-w-full flex-wrap flex-auto pt-[5%] pb-[10%]">
        <p className="text-start ps-[10%] mb-8">Some Recent Work</p>
        <div className="w-full flex flex-wrap justify-center gap-[6vh] md:gap-[15vh] md:ps-[10%]">
          {projects.map((project, index) => (
            <PortfolioCard key={project.id} project={sortedProjects[index]} />
          ))}
        </div>
      </MainBox>
      <SplitText text="skills" />
      <LogoLoop
        logos={skills.map((item) => ({ src: item.image }))}
        speed={160}
        direction="left"
        logoHeight={85}
        gap={60}
        hoverSpeed={50}
        fadeOut
        renderItem={(item) => (
          <Image
            src={(item as any).src}
            alt="skill icon"
            width={85}
            height={85}
            className="w-25 h-25 object-contain opacity-70 transition-all duration-500 hover:opacity-100 hover:scale-110"
          />
        )}
      />
    </div>
  );
};
