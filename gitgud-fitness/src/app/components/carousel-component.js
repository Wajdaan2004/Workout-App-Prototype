import { useState } from "react";
import "../styles.css";

export default function CarouselComponent({ onSelectRegimen }) {
  const regimens = ["PPL", "Bro-Split", "Upper-Lower", "Full-Body"];
  const [selectedRegimen, setSelectedRegimen] = useState(0);

  const handleNext = () => {
    setSelectedRegimen((prev) => (prev + 1) % regimens.length);
    onSelectRegimen(regimens[(selectedRegimen + 1) % regimens.length]);
  };

  const handlePrev = () => {
    setSelectedRegimen((prev) => (prev - 1 + regimens.length) % regimens.length);
    onSelectRegimen(regimens[(selectedRegimen - 1 + regimens.length) % regimens.length]);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn" onClick={handlePrev}>
        &lt; {/* Left arrow */}
      </button>
      <div className="carousel-content">
        <h2 className="carousel-title">{regimens[selectedRegimen]}</h2>
        <p className="carousel-description">
          {getRegimenDescription(regimens[selectedRegimen])}
        </p>
      </div>
      <button className="carousel-btn" onClick={handleNext}>
        &gt; {/* Right arrow */}
      </button>
    </div>
  );
}

function getRegimenDescription(regimen) {
  switch (regimen) {
    case "PPL":
      return "Push-Pull-Legs: A versatile workout split focusing on muscle groups.";
    case "Bro-Split":
      return "Bro Split: Classic bodybuilding approach focusing on individual muscles.";
    case "Upper-Lower":
      return "Upper-Lower Split: A balanced routine for upper and lower body workouts.";
    case "Full-Body":
      return "Full-Body: A comprehensive routine hitting all major muscle groups.";
    default:
      return "";
  }
}
