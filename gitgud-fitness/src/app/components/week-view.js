import { useState } from "react";

export default function WeekView({ regimenData, onDaySelect }) {
  const [selectedDay, setSelectedDay] = useState(0);

  const handleDayClick = (index) => {
    setSelectedDay(index);
    onDaySelect(index);
  };

  return (
    <div className="week-view">
      {regimenData.days.map((day, index) => (
        <button key={index} onClick={() => handleDayClick(index)} className={selectedDay === index ? "selected" : ""}>
          {day.day}
        </button>
      ))}
    </div>
  );
}
