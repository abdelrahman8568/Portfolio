"use client";
import SplitText from "@/app/components/atoms/SplitText";
import { MainBox } from "@/app/components/atoms/MotionBox";
import LogoLoop from "@/app/components/atoms/LogoLoop";
import { PortfolioCard } from "@/app/components/molecules/PortfolioCard";
import Image from "next/image";
import { SubTitle } from "@/app/components/atoms/SubTitle";

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
            width={100}
            height={100}
            className="w-10 md:w-25 h-10 md:h-25 object-contain max-w-10 md:max-w-25 opacity-70 transition-all duration-500 hover:opacity-100 hover:scale-110"
          />
        )}
      />
      <SplitText text="Portfolio" />
      <MainBox className="pt-0!">
        <SubTitle
          text={{
            content: "Some Recent Work",
          }}
        />
        {projects.map((project, index) => (
          <PortfolioCard key={project.id} project={sortedProjects[index]} />
        ))}
      </MainBox>
    </div>
  );
};
