import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2>Statistics</h2>
      {total ? (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
        </ul>
      ) : (
        <p>No feedback given yet</p>
      )}
    </>
  );
};

export default Statistics;
