import React, { useState } from "react";
import "../styles.css";

const exerciseDescriptions = {
  "Bench Press": "A compound exercise that primarily targets the chest, shoulders, and triceps.",
  "Overhead Press": "A shoulder exercise that focuses on deltoids and triceps.",
  "Tricep Pushdown": "An isolation exercise for the triceps using a cable machine.",
  "Deadlift": "A compound exercise that targets the lower back, glutes, hamstrings, and core.",
  "Pull-ups": "A bodyweight exercise that targets the lats and biceps.",
  "Bicep Curls": "An isolation exercise for the biceps.",
  "Squats": "A lower-body compound exercise targeting the quads, glutes, and hamstrings.",
  "Leg Press": "An exercise focusing on the quads, hamstrings, and glutes.",
  "Calf Raises": "An isolation exercise for the calf muscles.",
  "Dumbbell Press": "A variation of the bench press using dumbbells.",
  "Dips": "A bodyweight exercise focusing on the chest, shoulders, and triceps.",
  "Shoulder Press": "An overhead pressing movement for the deltoids and triceps.",
  "Barbell Rows": "A compound movement targeting the back and biceps.",
  "Lat Pulldowns": "An exercise for the lats and upper back.",
  "Hammer Curls": "A bicep exercise emphasizing the brachialis and forearm.",
  "Lunges": "A lower-body exercise targeting the quads, hamstrings, and glutes.",
  "Leg Extensions": "An isolation exercise focusing on the quads.",
  "Leg Curl": "An isolation exercise for the hamstrings.",
  "Rest": "Rest your muscles",
  "Dumbbell Flyes": "A chest exercise where you lie on a bench, holding a dumbbell in each hand, and extend your arms wide before bringing them together above your chest to target the pectoral muscles.",
  "Push-Ups": "A bodyweight exercise that involves lowering your body to the floor and pushing back up to work the chest, shoulders, and triceps.",
  "Rows": "Typically performed with a barbell or dumbbells, this back exercise targets the latissimus dorsi and other upper back muscles by pulling weights towards your torso while keeping your back straight",
  "Lateral Raises": "A shoulder exercise where you hold a dumbbell in each hand and lift your arms out to the sides to shoulder height, engaging the deltoid muscles.",
  "Face Pulls": " A rear deltoid and upper back exercise where you pull a rope attachment on a cable machine towards your face, keeping your elbows high and squeezing your shoulder blades together.",
  "Tricep Extensions": "This exercise isolates the triceps by extending the arms overhead while holding a dumbbell or cable, focusing on the contraction of the tricep muscles.",
  "Incline Bench Press": "A variation of the bench press performed on an inclined bench, targeting the upper chest and shoulders with a barbell or dumbbells",
  "Curls": "A general term for exercises where weights are curled toward the body, typically targeting the biceps.",
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
        <div className="workout-type">
          {dayData.workoutType && <h4>{dayData.workoutType}</h4>}
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
