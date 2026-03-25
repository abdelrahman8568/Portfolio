import Image from "next/image";
import Link from "next/link";

const ArrowIcon = () => (
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
);

export const PortfolioCard = ({ project }) => {
  return (
    <div className="portfolioCard">
      <div className="imgLink">
        <Image
          src={project.image}
          alt={project.title}
          className="img"
          priority
        />
        <Link href={project.live} className="portfolioLink" target="_blank">
          <ArrowIcon />
        </Link>
        <div className="cardInfo">
          <Link href={project.github} className="cardGit" target="_blank">
            GitHub
          </Link>
          <Link href={project.live} className="cardLive" target="_blank">
            Live
          </Link>
        </div>
      </div>
      <h4>{project.title}</h4>
    </div>
  );
};
