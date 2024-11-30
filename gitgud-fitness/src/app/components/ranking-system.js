'use client';
import { useState } from 'react';

export default function RankingSystem() {
  const exerciseOptions = [
    'Bench Press',
    'Squat',
    'Deadlift',
    'Overhead Press',
    'Pull-Up',
    'Barbell Row',
  ];
  const [inputs, setInputs] = useState(
    Array(6).fill({ name: '', weight: '', unit: 'kg' })
  );
  const [rank, setRank] = useState(null);

  const handleChange = (index, field, value) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = { ...updatedInputs[index], [field]: value };
    setInputs(updatedInputs);
  };

  const addExercise = () => {
    setInputs([...inputs, { name: '', weight: '', unit: 'kg' }]);
  };

  const calculateRank = () => {
    const totalWeight = inputs.reduce((sum, input) => {
      const weight = parseFloat(input.weight || 0);
      return sum + (input.unit === 'kg' ? weight : weight * 0.453592); // Convert pounds to kg
    }, 0);

    let rankMessage;
    if (totalWeight > 10000) {
      rankMessage = 'Platinum';
    } else if (totalWeight > 1000) {
      rankMessage = 'Gold';
    } else if (totalWeight > 500) {
      rankMessage = 'Silver';
    } else {
      rankMessage = 'Bronze';
    }
    setRank(rankMessage);
  };

  return (
    <div className="ranking-container">
      <h2>Rank Your Strength</h2>
      <form>
        {inputs.map((input, index) => (
          <div key={index} className="input-row">
            <select
              value={input.name}
              onChange={(e) => handleChange(index, 'name', e.target.value)}
            >
              <option value="">Select Exercise</option>
              {exerciseOptions.map((exercise) => (
                <option key={exercise} value={exercise}>
                  {exercise}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Max Weight"
              value={input.weight}
              onChange={(e) => handleChange(index, 'weight', e.target.value)}
            />
            <select
              value={input.unit}
              onChange={(e) => handleChange(index, 'unit', e.target.value)}
            >
              <option value="kg">kg</option>
              <option value="lb">lb</option>
            </select>
          </div>
        ))}
        <button type="button" onClick={addExercise}>
          Add More Exercises
        </button>
        <button type="button" onClick={calculateRank} style={{ marginLeft: '10px' }}>
          Submit
        </button>
      </form>
      {rank && <p>Your Rank: <strong>{rank}</strong></p>}
    </div>
  );
}
