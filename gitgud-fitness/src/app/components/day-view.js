export default function DayView({ dayData }) {
    return (
      <div className="day-view">
        <h3>{dayData.day}</h3>
        <ul>
          {dayData.workout.map((exercise, index) => (
            <li key={index}>{exercise}</li>
          ))}
        </ul>
      </div>
    );
  }
  