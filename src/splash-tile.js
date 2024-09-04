import Image from "next/image";
import { BsCaretRightFill } from "react-icons/bs";

export default function SplashTile({ project, poppins }) {
  return (
    <div className={`splash-tile + ${poppins.className}`}>
      <Image
        className="tile-image"
        src={project.src}
        alt={project.title}
        width={800}
        height={800}
      />
      <div className="tile-text-container">
        <h1>{project.title}</h1>
        <h2>{project.type}</h2>
        <h3>{project.summary}</h3>
      </div>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <button className="tile-link">
          <BsCaretRightFill />
        </button>
      </a>
    </div>
  );
}
