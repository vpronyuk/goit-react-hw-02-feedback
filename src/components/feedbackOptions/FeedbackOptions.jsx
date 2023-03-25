import React from 'react';

const FeedbackOptions = ({ options, handleFeedbackClick }) => {
  return (
    <>
      <button type="button" onClick={handleFeedbackClick} name={options}>
        Good
      </button>
      <button type="button" onClick={handleFeedbackClick} name={options}>
        Neutral
      </button>
      <button type="button" onClick={handleFeedbackClick} name={options}>
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;
