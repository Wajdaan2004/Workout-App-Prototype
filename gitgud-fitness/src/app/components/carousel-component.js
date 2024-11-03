import { useState } from "react";

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
    <div className="carousel">
      <button onClick={handlePrev}>Previous</button>
      <h2>{regimens[selectedRegimen]}</h2>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
