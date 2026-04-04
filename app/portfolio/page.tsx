"use client";
import "../styles/portfolio.css";
import Image from "next/image";
import SplitText from "../components/animations/SplitText";
import { MainBox } from "../components/animations/motionBox";
import LogoLoop from "../components/animations/ScrollVelocity";
import { PortfolioCard } from "./PortfolioCard";
import { projects, skills } from "./portfolioData";

function Portfolio() {
  return (
    <div className="mainContainer">
      <SplitText text="Portfolio" />
      <MainBox name="portfolioContainer">
        <p>Some Recent Work</p>
        <div className="cardsContainer">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </MainBox>
      <SplitText text="skills" />
      <LogoLoop
        logos={skills}
        speed={160}
        direction="left"
        logoHeight={85}
        gap={60}
        hoverSpeed={50}
        fadeOut
        renderItem={(item) => (
          <Image src={(item as any).node} alt="skill" className="skillsLogo" />
        )}
      />
    </div>
  );
}

export default Portfolio;
