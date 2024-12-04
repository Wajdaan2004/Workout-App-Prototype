import React, { useState } from "react";
import "../styles.css";

const exerciseDescriptions = {
  "Push: Bench Press": "A compound exercise that primarily targets the chest, shoulders, and triceps.",
  "Chest: Bench Press": "A compound exercise that primarily targets the chest, shoulders, and triceps.",
  "Overhead Press": "A shoulder exercise that focuses on deltoids and triceps.",
  "Tricep Pushdown": "An isolation exercise for the triceps using a cable machine.",
  "Pull: Deadlift": "A compound exercise that targets the lower back, glutes, hamstrings, and core.",
  "Pull-ups": "A bodyweight exercise that targets the lats and biceps.",
  "Bicep Curl": "An isolation exercise for the biceps.",
  "Legs: Squats": "A lower-body compound exercise targeting the quads, glutes, and hamstrings.",
  "Leg Press": "An exercise focusing on the quads, hamstrings, and glutes.",
  "Calf Raises": "An isolation exercise for the calf muscles.",
  "Push: Dumbbell Press": "A variation of the bench press using dumbbells.",
  "Dips": "A bodyweight exercise focusing on the chest, shoulders, and triceps.",
  "Shoulder Press": "An overhead pressing movement for the deltoids and triceps.",
  "Pull: Barbell Rows": "A compound movement targeting the back and biceps.",
  "Lat Pulldowns": "An exercise for the lats and upper back.",
  "Hammer Curl": "A bicep exercise emphasizing the brachialis and forearm.",
  "Legs: Lunges": "A lower-body exercise targeting the quads, hamstrings, and glutes.",
  "Leg Extensions": "An isolation exercise focusing on the quads.",
  "Leg Curl": "An isolation exercise for the hamstrings.",
  "Rest": "Rest your muscles",
};

export default function DayView({ dayData }) {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise); //excersise updated
  };

  return (
    <div className="day-view-container">
      <div className="day-view">
        <div className="day-header">
          <h3 className="spaced-day">{dayData.day}</h3>
        </div>
        <ul className="workout-list">
          {dayData.workout.map((exercise, index) => (
            <li
              key={index}
              className="workout-item"
              onClick={() => handleExerciseClick(exercise)}
            >
              {exercise}
            </li>
          ))}
        </ul>
      </div>
      {selectedExercise && (
        <div className="exercise-panel">
          <h4>{selectedExercise}</h4>
          <p>
            {exerciseDescriptions[selectedExercise] ||
              "Description not available for this exercise."}
          </p>
        </div>
      )}
    </div>
  );
}
