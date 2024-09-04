import { useState, useEffect } from "react";
import SplashTile from "./splash-tile";
import { motion, AnimatePresence } from "framer-motion";
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
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <SplashTile
          project={projectArray[currentIndex]}
          key={currentIndex}
          poppins={poppins}
        />
      </motion.div>
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
