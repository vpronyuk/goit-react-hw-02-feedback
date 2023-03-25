import FeedbackOptions from 'components/feedbackOptions/FeedbackOptions';
import Statistics from 'components/statistics/Statistics';
import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  handleFeedbackClick = event => {
    const name = event.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedback = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedback();
    console.log(positivePercentage);
    return (
      <div>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          onLeaveFeedback={this.handleFeedbackClick}
          name={this.options}
        />
        {/* <button type="button" onClick={this.handleFeedbackClick} name="good">
          Good
        </button>
        <button type="button" onClick={this.handleFeedbackClick} name="neutral">
          Neutral
        </button>
        <button type="button" onClick={this.handleFeedbackClick} name="bad">
          Bad
        </button> */}
        {/* <h2>Statistics</h2>
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
        )} */}
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </div>
    );
  }
}

export default Feedback;
