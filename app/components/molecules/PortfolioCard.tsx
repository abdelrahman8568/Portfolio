import Image from "next/image";
import Link from "next/link";
import { Project } from "@/app/modules/Portfolio/Portfolio";

interface IPortfolioCard {
  project: Project;
}

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    fill="primary"
    className="bi bi-arrow-up-right fill-primary"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
    />
  </svg>
);

export const PortfolioCard: React.FC<IPortfolioCard> = ({ project }) => {
  return (
    <div className="top-[10%] w-[95%] h-full flex items-center max-md:flex-col overflow-hidden sticky bg-bc transition-all duration-1000 bg-black">
      <div className="group h-full w-[85%] flex flex-col items-center justify-center text-center overflow-hidden relative">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-all duration-1500 group-hover:scale-120 group-hover:-rotate-5 group-hover:opacity-60 group-hover:blur-[3px]"
        />
        <Link
          href={project.live}
          target="_blank"
          className="max-md:hidden absolute bottom-0 left-0 w-[120%] h-[120%] flex flex-col p-5 items-end justify-start no-underline opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:w-full group-hover:h-full"
        >
          <ArrowIcon />
        </Link>
        {project.github && (
          <div className="flex w-[90%] h-auto items-center justify-center absolute bottom-[-70%] transition-all duration-1000 group-hover:bottom-[10%]">
            <Link
              href={project.github}
              target="_blank"
              className="w-50 h-12.5 flex items-center justify-center no-underline border border-white text-white text-base md:text-lg"
            >
              GitHub
            </Link>
          </div>
        )}
      </div>
      <h4 className="w-[10vw] h-auto text-[1.5em] lg:text-[1.8em] text-gray font-medium flex justify-center items-center uppercase md:rotate-90 whitespace-nowrap">
        {project.title}
      </h4>
      <div className="flex md:hidden w-[85%] h-auto items-center justify-around gap-[10%] py-3">
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            className="w-full py-1 flex items-center justify-center no-underline border border-white text-white text-base"
          >
            GitHub
          </Link>
        )}
        <Link
          href={project.live}
          target="_blank"
          className="w-full py-1 flex items-center justify-center no-underline border border-white text-white text-base"
        >
          Live
        </Link>
      </div>
    </div>
  );
};
