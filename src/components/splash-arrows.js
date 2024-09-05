import { useState, useEffect } from "react";
import SplashTile from "../components/splash-tile";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";

export default function SplashArrows({ poppins }) {
  const projectArray = [
    {
      src: "/bcgp-logo.png",
      type: "modpack",
      title: "BigChadGuys Plus",
      summary: "A comfy and cozy adventure with over 1,600 quests!",
      url: "https://www.curseforge.com/minecraft/modpacks/bigchadguys-plus",
    },
    {
      src: "/bcghg-logo.png",
      type: "modpack",
      title: "BigChadGuys and the Holy Grail",
      summary: "Explore the mysteries of an enchanted forest.",
      url: "https://www.example.com/forest-adventures",
    },
    {
      src: "/bcg_minus_logo.png",
      type: "modpack",
      title: "BigChadGuys Minus",
      summary: "A winter-themed modpack full of snowy adventures.",
      url: "https://www.example.com/winter-wonderland",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectArray.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="splash-arrows-container">
      <SplashTile
        project={projectArray[currentIndex]}
        key={currentIndex}
        poppins={poppins}
      />
      <div className="arrows-container">
        <BsCaretLeft className="arrow-button" onClick={goToPrevious} />
        <div className="carousel-dots">
          {projectArray.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
        <BsCaretRight className="arrow-button" onClick={goToNext} />
      </div>
    </div>
  );
}
