/*import React, { Component } from "react";
import scss from "./state.module.css"

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  goodClick = () => {
    this.setState(prevState => ({
      good: prevState.good + 1
    }));
  };

  neutralClick = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1
    }));
  };

  badClick = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1
    }));
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  feedbackPercentage = () => {
    const { good } = this.state;
    const totalFeed = this.totalFeedback();
    return totalFeed > 0 ? Math.round((good / totalFeed) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeed = this.totalFeedback();
    const positivePercentage = this.feedbackPercentage();

    return (
      <div className={scss.block}>
        <div className={scss.blockTwo}>
          <h2 className={scss.title}>Please leave feedback</h2>
          <ul className={scss.list}>
            <li className={scss.item}>
              <button className={scss.btn} type="button" onClick={this.goodClick}>
                Good
              </button>
            </li>
            <li className={scss.item}>
              <button className={scss.btn} type="button" onClick={this.neutralClick}>
                Neutral
              </button>
            </li>
            <li className={scss.item}>
              <button  className={scss.btn}type="button" onClick={this.badClick}>
                Bad
              </button>
            </li>
          </ul>
            </div>   
         {totalFeed > 0 ? (
        <div className={scss.blockThree}>
            <h2 className={scss.titleTwo}>Statistic</h2>
            <ul className={scss.lists}>
              <li className={scss.itemsy}>Good: {good}</li>
              <li className={scss.items}>Neutral: {neutral}</li>
              <li className={scss.itemsy}>Bad: {bad}</li>
              <li className={scss.items}>Total feedback: {totalFeed}</li>
              <li className={scss.itemsy}>Positive feedback percentage: {positivePercentage}%</li>
            </ul>
          </div>
        ) : (
            <div>
            <h2 className={scss.titleTwo}>Statistic</h2>          
           <p className={scss.message}>There is no feedback</p>
           </div>
        )}
      </div>
    );
  }
}

export default Feedback;*/


import React, { Component } from "react";
import scss from "./state.module.css";
import Statistics from "../stats/stats";
import FeedbackOptions from "../options/options";
import Section from "../section/section";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1
    }));
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  feedbackPercentage = () => {
    const { good } = this.state;
    const totalFeed = this.totalFeedback();
    return totalFeed > 0 ? Math.round((good / totalFeed) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeed = this.totalFeedback();
    const positivePercentage = this.feedbackPercentage();

    return (
      <div className={scss.block}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.handleFeedback}
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
  }
}

export default Feedback;