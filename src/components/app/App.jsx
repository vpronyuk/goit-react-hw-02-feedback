import React, { Component } from 'react';

import Statistics from '../statistics/Statistics';
import FeedbackOptions from '../feedbackOptions/FeedbackOptions';
import Section from '../section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    hasFeedback: false,
  };

  handleFeedbackClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
      hasFeedback: true,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    console.log(positivePercentage);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedbackClick}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
            hasFeedback={this.state.hasFeedback}
          />
        </Section>
      </div>
    );
  }
}

export default App;