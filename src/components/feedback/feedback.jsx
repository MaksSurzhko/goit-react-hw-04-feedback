import React, { useState } from "react";
import scss from "./state.module.css";
import Statistics from "../stats/stats";
import FeedbackOptions from "../options/options";
import Section from "../section/section";

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (type) => {
    if (type === "good") {
      setGood((prevGood) => prevGood + 1);
    } else if (type === "neutral") {
      setNeutral((prevNeutral) => prevNeutral + 1);
    } else if (type === "bad") {
      setBad((prevBad) => prevBad + 1);
    }
  };

  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const feedbackPercentage = () => {
    const totalFeed = totalFeedback();
    return totalFeed > 0 ? Math.round((good / totalFeed) * 100) : 0;
  };

  const totalFeed = totalFeedback();
  const positivePercentage = feedbackPercentage();

  return (
    <div className={scss.block}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistic">
        {totalFeed > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeed}
            positivePercentage={positivePercentage}
          />
        ) : (
          <p className={scss.message}>There is no feedback</p>
        )}
      </Section>
    </div>
  );
};

export default Feedback;