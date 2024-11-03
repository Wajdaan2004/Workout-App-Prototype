'use client'
import { useState, useEffect } from "react";
import CarouselComponent from "./components/carousel-component";
import WeekView from "./components/week-view";
import DayView from "./components/day-view";
import data from "./assets/db.json";

export default function Page() {
  const [selectedRegimen, setSelectedRegimen] = useState("PPL");
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [regimenData, setRegimenData] = useState(data[selectedRegimen]);

  useEffect(() => {
    setRegimenData(data[selectedRegimen]);
    setSelectedDayIndex(0);
  }, [selectedRegimen]);

  const handleRegimenSelect = (regimen) => {
    setSelectedRegimen(regimen);
  };

  const handleDaySelect = (dayIndex) => {
    setSelectedDayIndex(dayIndex);
  };

  return (
    <div className="page">
      <CarouselComponent onSelectRegimen={handleRegimenSelect} />
      <WeekView regimenData={regimenData} onDaySelect={handleDaySelect} />
      <DayView dayData={regimenData.days[selectedDayIndex]} />
    </div>
  );
}
